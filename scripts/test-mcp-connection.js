#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🧪 Testing MCP Connection for Call The Yeti...\n');

// Test 1: Check if MCP server script exists and is executable
console.log('1. Checking MCP server script...');
const fs = require('fs');
const serverPath = path.join(__dirname, 'mcp-server.js');

if (fs.existsSync(serverPath)) {
  console.log('✅ MCP server script found');
} else {
  console.log('❌ MCP server script not found');
  process.exit(1);
}

// Test 2: Test HTTP endpoint
console.log('\n2. Testing HTTP endpoint...');
const http = require('http');

const testHttpEndpoint = () => {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3001/api/mcp', (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.message && response.tools && Array.isArray(response.tools)) {
            console.log('✅ HTTP endpoint responding correctly');
            console.log(`   Available tools: ${response.tools.join(', ')}`);
            resolve(true);
          } else {
            console.log('❌ HTTP endpoint response format incorrect');
            console.log(`   Response: ${data}`);
            resolve(false);
          }
        } catch (e) {
          console.log('❌ HTTP endpoint returned invalid JSON');
          console.log(`   Raw response: ${data}`);
          resolve(false);
        }
      });
    });
    
    req.on('error', () => {
      console.log('❌ HTTP endpoint not accessible (make sure dev server is running)');
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log('❌ HTTP endpoint timeout');
      resolve(false);
    });
  });
};

// Test 3: Test MCP tool call
console.log('\n3. Testing MCP tool call...');
const testMcpToolCall = () => {
  return new Promise((resolve) => {
    const postData = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'tools/call',
      params: {
        name: 'get_project_info',
        arguments: {}
      }
    });

    const options = {
      hostname: 'localhost',
      port: 3001,
      path: '/api/mcp',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.jsonrpc === '2.0' && response.result) {
            console.log('✅ MCP tool call successful');
            console.log(`   Response: ${JSON.stringify(response.result, null, 2)}`);
            resolve(true);
          } else {
            console.log('❌ MCP tool call failed');
            resolve(false);
          }
        } catch (e) {
          console.log('❌ MCP tool call returned invalid JSON');
          resolve(false);
        }
      });
    });

    req.on('error', () => {
      console.log('❌ MCP tool call failed (make sure dev server is running)');
      resolve(false);
    });

    req.write(postData);
    req.end();
  });
};

// Run all tests
async function runTests() {
  const httpTest = await testHttpEndpoint();
  const mcpTest = await testMcpToolCall();
  
  console.log('\n📊 Test Results:');
  console.log(`HTTP Endpoint: ${httpTest ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`MCP Tool Call: ${mcpTest ? '✅ PASS' : '❌ FAIL'}`);
  
  if (httpTest && mcpTest) {
    console.log('\n🎉 All tests passed! Your MCP server is ready for AI assistants.');
    console.log('\n📋 Next steps:');
    console.log('1. Copy claude_desktop_config.json to your Claude Desktop config');
    console.log('2. Copy cursor_mcp_config.json to your Cursor IDE config');
    console.log('3. Restart your AI assistant to load the MCP server');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the issues above.');
  }
}

runTests().catch(console.error);
