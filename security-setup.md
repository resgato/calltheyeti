# Security Setup - Environment Variables

## 🔒 **CRITICAL: Add these environment variables to Vercel**

You need to add the following environment variables to your Vercel project to fix the security issues:

### **Required Environment Variables:**

1. **JWT_SECRET** (for admin authentication)
   - Generate a secure random string
   - Example: `openssl rand -base64 32`

2. **ADMIN_USERNAME** (for admin login)
   - Set to: `cami`

3. **ADMIN_PASSWORD** (for admin login)
   - Set to: `siggy`

### **How to Add Environment Variables:**

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your `calltheyeti` project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name**: `JWT_SECRET`
   - **Value**: [generate a secure random string]
   - **Environment**: Production, Preview, Development

   - **Name**: `ADMIN_USERNAME`
   - **Value**: `cami`
   - **Environment**: Production, Preview, Development

   - **Name**: `ADMIN_PASSWORD`
   - **Value**: `siggy`
   - **Environment**: Production, Preview, Development

### **Generate JWT_SECRET:**

Run this command to generate a secure JWT secret:
```bash
openssl rand -base64 32
```

### **Security Notes:**

✅ **Removed hardcoded secrets** from the codebase  
✅ **Added environment variable validation**  
✅ **Proper error handling** for missing variables  
✅ **No more hardcoded credentials** in source code  

### **After Adding Variables:**

1. Redeploy the application
2. Test the admin login at: https://calltheyeti.com/admin/login
3. Verify all functionality works correctly
