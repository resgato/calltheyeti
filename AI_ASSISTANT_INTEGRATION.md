# AI Assistant Integration Guide

This guide shows how to connect your Call The Yeti MCP server to various AI assistants that support the Model Context Protocol (MCP).

## 🎯 Quick Start

Your MCP server is running and tested! Here's how to connect it to AI assistants:

### ✅ Test Results
- ✅ HTTP endpoint responding correctly
- ✅ MCP tool call successful
- ✅ All tools available: `get_project_info`, `get_content_data`, `update_content`

## 🤖 Claude Desktop Integration

### Step 1: Locate Claude Desktop Config
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### Step 2: Add MCP Server Configuration
Copy the contents of `claude_desktop_config.json` to your Claude Desktop config:

```json
{
  "mcpServers": {
    "calltheyeti": {
      "command": "node",
      "args": ["/Users/taylorbrody/calltheyeti/scripts/mcp-server.js"],
      "env": {
        "NODE_ENV": "development"
      }
    }
  }
}
```

### Step 3: Restart Claude Desktop
Close and reopen Claude Desktop to load the MCP server.

### Step 4: Test the Connection
Ask Claude: "Can you get information about the Call The Yeti project?"

## 🖥️ Cursor IDE Integration

### Step 1: Open Cursor Settings
- Go to Cursor → Preferences → Extensions
- Look for MCP or Model Context Protocol settings

### Step 2: Add MCP Configuration
Use the configuration from `cursor_mcp_config.json`:

```json
{
  "mcpServers": {
    "calltheyeti": {
      "command": "node",
      "args": ["/Users/taylorbrody/calltheyeti/scripts/mcp-server.js"],
      "cwd": "/Users/taylorbrody/calltheyeti",
      "env": {
        "NODE_ENV": "development"
      }
    }
  }
}
```

### Step 3: Restart Cursor
Restart Cursor IDE to load the MCP server.

## 🔧 Other AI Assistants

### OpenAI GPT with MCP Support
If you're using an AI assistant that supports MCP via HTTP:

```json
{
  "mcpServers": {
    "calltheyeti": {
      "url": "http://localhost:3001/api/mcp",
      "description": "Call The Yeti MCP Server"
    }
  }
}
```

### Custom AI Assistant Integration
For other AI assistants, use the HTTP endpoint:
- **URL**: `http://localhost:3001/api/mcp`
- **Method**: POST
- **Content-Type**: `application/json`

## 🧪 Testing Your Integration

### Run the Test Script
```bash
npm run test:mcp
# or
node scripts/test-mcp-connection.js
```

### Manual Testing
1. **Check server status**:
   ```bash
   curl http://localhost:3001/api/mcp
   ```

2. **Test tool call**:
   ```bash
   curl -X POST http://localhost:3001/api/mcp \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_project_info","arguments":{}}}'
   ```

## 🛠️ Available Tools

Your MCP server provides these tools to AI assistants:

### 1. `get_project_info`
- **Description**: Get information about the Call The Yeti project
- **Parameters**: None
- **Returns**: Project details, services, version info

### 2. `get_content_data`
- **Description**: Retrieve content data from the database
- **Parameters**: `contentType` (string)
- **Returns**: Content data for the specified type

### 3. `update_content`
- **Description**: Update content in the database
- **Parameters**: `contentType` (string), `content` (object)
- **Returns**: Confirmation of update

## 🚀 Production Deployment

### Vercel Deployment
Your MCP server is configured for Vercel deployment. After deploying:

1. Update the configuration files with your Vercel URL:
   ```json
   {
     "mcpServers": {
       "calltheyeti": {
         "url": "https://your-app.vercel.app/api/mcp",
         "description": "Call The Yeti MCP Server on Vercel"
       }
     }
   }
   ```

2. Update AI assistant configurations with the production URL.

### Environment Variables
Set these in your Vercel dashboard:
- `MCP_SERVER_URL`: Your MCP server URL
- `VERCEL_MCP_ENABLED`: `true`

## 🔍 Troubleshooting

### Common Issues

1. **"MCP server not found"**
   - Check that the script path is correct
   - Ensure Node.js is installed
   - Verify the script is executable

2. **"Connection refused"**
   - Make sure your dev server is running (`npm run dev`)
   - Check the port (3001, not 3000)

3. **"Tool not available"**
   - Restart your AI assistant
   - Check the MCP server logs

### Debug Mode
Enable debug logging:
```bash
DEBUG=mcp:* npm run dev
```

### Check Server Status
```bash
curl -s http://localhost:3001/api/mcp | jq .
```

## 📚 Example Conversations

### With Claude Desktop
**You**: "Can you help me manage content for my plumbing website?"
**Claude**: "I can help! I have access to your Call The Yeti MCP server. I can get project information, retrieve content data, and update content. What would you like to do?"

**You**: "Get information about the project"
**Claude**: *Uses get_project_info tool* "Here's your project information: Call The Yeti is a plumbing services website with services including bathtubs & showers, custom homes, faucets & fixtures, renovations, repairs, water heaters, and water softeners."

### With Cursor IDE
**You**: "Show me the current homepage content"
**Cursor**: *Uses get_content_data tool* "I'll retrieve the homepage content for you..."

## 🎉 Success!

Your Call The Yeti MCP server is now ready to be used by AI assistants! They can:

- ✅ Get project information
- ✅ Retrieve content data
- ✅ Update content
- ✅ Help manage your website

The AI assistants will have full access to your content management system through the MCP protocol.

