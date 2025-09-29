# MCP (Model Context Protocol) Setup for Call The Yeti

This document describes the MCP setup for the Call The Yeti plumbing services website.

## Overview

MCP (Model Context Protocol) has been integrated into the Call The Yeti project to enable AI assistants to interact with the application's content management system and project data.

## Files Created/Modified

### New Files
- `mcp.config.json` - MCP server configuration
- `app/api/mcp/route.ts` - MCP API endpoint
- `lib/mcp-client.ts` - MCP client for internal use
- `scripts/mcp-server.js` - Standalone MCP server script
- `mcp.env.example` - Environment variables template

### Modified Files
- `package.json` - Added MCP dependencies and scripts
- `vercel.json` - Added MCP configuration for Vercel deployment

## Dependencies Added

```json
{
  "@modelcontextprotocol/sdk": "^1.18.2",
  "mcp-handler": "^13.0.0"
}
```

## Available Tools

The MCP server provides the following tools:

1. **get_project_info** - Returns information about the Call The Yeti project
2. **get_content_data** - Retrieves content data from the database
3. **update_content** - Updates content in the database

## Usage

### Local Development

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test the MCP server:
   ```bash
   npm run mcp:test
   ```

3. Run the standalone MCP server:
   ```bash
   npm run mcp:server
   ```

### API Endpoints

- `GET /api/mcp` - Get server status and available tools
- `POST /api/mcp` - Execute MCP tool calls

### Example MCP Request

```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "get_project_info",
      "arguments": {}
    }
  }'
```

### Example Response

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "message": "MCP request processed",
    "method": "tools/call",
    "params": {
      "name": "get_project_info",
      "arguments": {}
    }
  }
}
```

## Vercel Integration

The MCP server is configured for Vercel deployment with:

- Extended timeout for MCP operations (60 seconds)
- MCP server configuration in `vercel.json`
- Environment variables for MCP settings

## Environment Variables

Copy `mcp.env.example` to `.env.local` and configure:

```bash
# MCP Configuration
MCP_SERVER_URL=http://localhost:3000/api/mcp
MCP_CLIENT_ID=your-client-id
MCP_CLIENT_SECRET=your-client-secret

# Vercel MCP Integration
VERCEL_MCP_ENABLED=true
VERCEL_MCP_SERVER_NAME=calltheyeti
```

## Integration with Existing Content Management

The MCP server is designed to integrate with your existing content management system:

- Uses your existing Supabase database
- Integrates with your admin content management routes
- Maintains compatibility with your current content structure

## Security Considerations

- MCP requests should be authenticated in production
- Consider implementing rate limiting
- Validate all input parameters
- Use HTTPS in production

## Next Steps

1. **Authentication**: Implement proper authentication for MCP requests
2. **Database Integration**: Connect MCP tools to your actual Supabase database
3. **Error Handling**: Add comprehensive error handling
4. **Logging**: Implement proper logging for MCP operations
5. **Testing**: Add unit tests for MCP functionality

## Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all TypeScript types are properly defined
2. **Connection Issues**: Check that the development server is running
3. **Tool Execution**: Verify that tool names match exactly

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=mcp:*
```

## Support

For issues related to MCP integration, check:
- MCP server logs in the console
- Network requests in browser dev tools
- Vercel function logs (if deployed)

