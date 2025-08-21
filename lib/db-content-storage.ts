import { getContent, updateContent, resetContent, createTables } from './db';
import { HomepageContent, ContactContent, ServicesContent, defaultHomepageContent, defaultContactContent, defaultServicesContent } from './content';

// Initialize database tables on first import
let isInitialized = false;

async function ensureInitialized() {
  if (!isInitialized) {
    try {
      await createTables();
      isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize database:', error);
      // Continue with fallback to defaults
    }
  }
}

export const dbContentStorage = {
  async getHomepageContent(): Promise<HomepageContent> {
    try {
      await ensureInitialized();
      const content = await getContent('homepage');
      return content || defaultHomepageContent;
    } catch (error) {
      console.error('Error getting homepage content from DB:', error);
      return defaultHomepageContent;
    }
  },

  async setHomepageContent(content: HomepageContent): Promise<boolean> {
    try {
      await ensureInitialized();
      await updateContent('homepage', content);
      return true;
    } catch (error) {
      console.error('Error setting homepage content in DB:', error);
      return false;
    }
  },

  async getContactContent(): Promise<ContactContent> {
    try {
      await ensureInitialized();
      const content = await getContent('contact');
      return content || defaultContactContent;
    } catch (error) {
      console.error('Error getting contact content from DB:', error);
      return defaultContactContent;
    }
  },

  async setContactContent(content: ContactContent): Promise<boolean> {
    try {
      await ensureInitialized();
      await updateContent('contact', content);
      return true;
    } catch (error) {
      console.error('Error setting contact content in DB:', error);
      return false;
    }
  },

  async getServicesContent(): Promise<ServicesContent> {
    try {
      await ensureInitialized();
      const content = await getContent('services');
      return content || defaultServicesContent;
    } catch (error) {
      console.error('Error getting services content from DB:', error);
      return defaultServicesContent;
    }
  },

  async setServicesContent(content: ServicesContent): Promise<boolean> {
    try {
      await ensureInitialized();
      await updateContent('services', content);
      return true;
    } catch (error) {
      console.error('Error setting services content in DB:', error);
      return false;
    }
  },

  async resetToDefaults(): Promise<boolean> {
    try {
      await ensureInitialized();
      await resetContent();
      return true;
    } catch (error) {
      console.error('Error resetting content in DB:', error);
      return false;
    }
  }
};
