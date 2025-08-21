import { NextResponse } from 'next/server';
import { dbContentStorage } from '@/lib/db-content-storage';

export async function GET() {
  try {
    const homepage = await dbContentStorage.getHomepageContent();
    const contact = await dbContentStorage.getContactContent();
    const services = await dbContentStorage.getServicesContent();
    
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
