// Simplified MCP Client for Call The Yeti
export class CallTheYetiMCPClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api/mcp') {
    this.baseUrl = baseUrl;
  }

  async getProjectInfo() {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/call',
          params: {
            name: 'get_project_info',
            arguments: {},
          },
        }),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error getting project info:', error);
      throw error;
    }
  }

  async getContentData(contentType: string) {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/call',
          params: {
            name: 'get_content_data',
            arguments: { contentType },
          },
        }),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error getting content data:', error);
      throw error;
    }
  }

  async updateContent(contentType: string, content: any) {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'tools/call',
          params: {
            name: 'update_content',
            arguments: { contentType, content },
          },
        }),
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error updating content:', error);
      throw error;
    }
  }

  async getServerStatus() {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'GET',
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error getting server status:', error);
      throw error;
    }
  }
}

// Export a singleton instance
export const mcpClient = new CallTheYetiMCPClient();
