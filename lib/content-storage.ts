import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { HomepageContent, ContactContent, ServicesContent, defaultHomepageContent, defaultContactContent, defaultServicesContent } from './content';

const STORAGE_FILE = join(process.cwd(), 'data', 'content.json');

// In-memory cache for Vercel serverless environment
let memoryCache = {
  homepage: defaultHomepageContent,
  contact: defaultContactContent,
  services: defaultServicesContent
};

// Ensure data directory exists
async function ensureDataDirectory() {
  try {
    const dataDir = join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      const { mkdir } = await import('fs/promises');
      await mkdir(dataDir, { recursive: true });
    }
  } catch (error) {
    console.log('Could not create data directory, using memory cache');
  }
}

// Read content from file
async function readContentFromFile() {
  try {
    await ensureDataDirectory();
    const data = await readFile(STORAGE_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    // Update memory cache with file data
    memoryCache = {
      homepage: parsed.homepage || defaultHomepageContent,
      contact: parsed.contact || defaultContactContent,
      services: parsed.services || defaultServicesContent
    };
    return memoryCache;
  } catch (error) {
    console.log('Could not read from file, using memory cache');
    return memoryCache;
  }
}

// Write content to file
async function writeContentToFile(content: any) {
  try {
    await ensureDataDirectory();
    await writeFile(STORAGE_FILE, JSON.stringify(content, null, 2));
    // Update memory cache
    memoryCache = content;
    return true;
  } catch (error) {
    console.log('Could not write to file, using memory cache');
    // Update memory cache even if file write fails
    memoryCache = content;
    return true; // Return true to indicate "success" even with memory-only storage
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
