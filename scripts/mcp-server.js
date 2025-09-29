#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { CallToolRequestSchema, ListToolsRequestSchema } = require('@modelcontextprotocol/sdk/types.js');

// Initialize MCP server
const server = new Server(
  {
    name: 'calltheyeti-mcp-server',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_project_info',
        description: 'Get information about the calltheyeti project',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_content_data',
        description: 'Get content data from the database',
        inputSchema: {
          type: 'object',
          properties: {
            contentType: {
              type: 'string',
              description: 'Type of content to retrieve (homepage, services, contact)',
            },
          },
        },
      },
      {
        name: 'update_content',
        description: 'Update content in the database',
        inputSchema: {
          type: 'object',
          properties: {
            contentType: {
              type: 'string',
              description: 'Type of content to update',
            },
            content: {
              type: 'object',
              description: 'Content data to update',
            },
          },
          required: ['contentType', 'content'],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case 'get_project_info':
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              name: 'Call The Yeti',
              description: 'Plumbing services website',
              version: '1.0.0',
              services: [
                'Bathtubs & Showers',
                'Custom Homes',
                'Faucets & Fixtures',
                'Renovations',
                'Repairs',
                'Water Heaters',
                'Water Softeners'
              ]
            }, null, 2),
          },
        ],
      };

    case 'get_content_data':
      return {
        content: [
          {
            type: 'text',
            text: `Content data for ${args.contentType} would be retrieved from your database here.`,
          },
        ],
      };

    case 'update_content':
      return {
        content: [
          {
            type: 'text',
            text: `Content updated for ${args.contentType}`,
          },
        ],
      };

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Call The Yeti MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in MCP server:', error);
  process.exit(1);
});

