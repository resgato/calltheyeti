import { NextResponse } from 'next/server';
import { contentStorage } from '@/lib/content-storage';

export async function GET() {
  try {
    const homepage = await contentStorage.getHomepageContent();
    const contact = await contentStorage.getContactContent();
    const services = await contentStorage.getServicesContent();
    
    return NextResponse.json({
      success: true,
      message: 'Storage system is working',
      data: {
        homepage: homepage.services.title,
        contact: contact.phone,
        services: services.title
      }
    });
  } catch (error) {
    console.error('Storage test error:', error);
    return NextResponse.json({
      success: false,
      message: 'Storage test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
