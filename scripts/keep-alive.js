#!/usr/bin/env node

/**
 * Supabase Keep-Alive Script
 * 
 * This script pings your Supabase project to prevent it from pausing due to inactivity.
 * Run this script every 6 days to ensure your project stays active.
 * 
 * Usage:
 * 1. Make sure your site is deployed to Vercel
 * 2. Run: node scripts/keep-alive.js
 * 3. Set up a cron job to run this every 6 days
 */

const https = require('https');
const http = require('http');

// Configuration
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://calltheyeti.com';
const KEEP_ALIVE_ENDPOINT = `${SITE_URL}/api/keep-alive`;

console.log('🔄 Supabase Keep-Alive Script');
console.log(`📍 Pinging: ${KEEP_ALIVE_ENDPOINT}`);
console.log(`⏰ Time: ${new Date().toISOString()}`);

function pingEndpoint() {
  return new Promise((resolve, reject) => {
    const url = new URL(KEEP_ALIVE_ENDPOINT);
    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname,
      method: 'GET',
      timeout: 10000, // 10 second timeout
    };

    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (res.statusCode === 200 && response.success) {
            console.log('✅ Success! Supabase project is active');
            console.log(`📊 Response: ${JSON.stringify(response, null, 2)}`);
            resolve(response);
          } else {
            console.log('❌ Failed! Response indicates error');
            console.log(`📊 Response: ${JSON.stringify(response, null, 2)}`);
            reject(new Error(`HTTP ${res.statusCode}: ${response.error || 'Unknown error'}`));
          }
        } catch (parseError) {
          console.log('❌ Failed! Invalid JSON response');
          console.log(`📊 Raw response: ${data}`);
          reject(new Error(`Invalid JSON response: ${parseError.message}`));
        }
      });
    });

    req.on('error', (error) => {
      console.log('❌ Failed! Network error');
      console.log(`📊 Error: ${error.message}`);
      reject(error);
    });

    req.on('timeout', () => {
      console.log('❌ Failed! Request timeout');
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Run the keep-alive ping
pingEndpoint()
  .then(() => {
    console.log('🎉 Keep-alive ping completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.log('💥 Keep-alive ping failed!');
    console.log(`📊 Error: ${error.message}`);
    process.exit(1);
  });
