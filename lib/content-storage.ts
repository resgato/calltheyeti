import { writeFile, readFile, access } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { HomepageContent, ContactContent, ServicesContent, defaultHomepageContent, defaultContactContent, defaultServicesContent } from './content';

const STORAGE_FILE = join(process.cwd(), 'data', 'content.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    const { mkdir } = await import('fs/promises');
    await mkdir(dataDir, { recursive: true });
  }
}

// Read content from file
async function readContentFromFile() {
  try {
    await ensureDataDirectory();
    const data = await readFile(STORAGE_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is invalid, return defaults
    return {
      homepage: defaultHomepageContent,
      contact: defaultContactContent,
      services: defaultServicesContent
    };
  }
}

// Write content to file
async function writeContentToFile(content: any) {
  try {
    await ensureDataDirectory();
    await writeFile(STORAGE_FILE, JSON.stringify(content, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing content to file:', error);
    return false;
  }
}

export const contentStorage = {
  async getHomepageContent(): Promise<HomepageContent> {
    const content = await readContentFromFile();
    return content.homepage || defaultHomepageContent;
  },

  async setHomepageContent(content: HomepageContent): Promise<boolean> {
    const allContent = await readContentFromFile();
    allContent.homepage = content;
    return await writeContentToFile(allContent);
  },

  async getContactContent(): Promise<ContactContent> {
    const content = await readContentFromFile();
    return content.contact || defaultContactContent;
  },

  async setContactContent(content: ContactContent): Promise<boolean> {
    const allContent = await readContentFromFile();
    allContent.contact = content;
    return await writeContentToFile(allContent);
  },

  async getServicesContent(): Promise<ServicesContent> {
    const content = await readContentFromFile();
    return content.services || defaultServicesContent;
  },

  async setServicesContent(content: ServicesContent): Promise<boolean> {
    const allContent = await readContentFromFile();
    allContent.services = content;
    return await writeContentToFile(allContent);
  },

  async resetToDefaults(): Promise<boolean> {
    const defaultContent = {
      homepage: defaultHomepageContent,
      contact: defaultContactContent,
      services: defaultServicesContent
    };
    return await writeContentToFile(defaultContent);
  }
};
