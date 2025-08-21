import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { dbContentStorage } from '@/lib/db-content-storage';
import { HomepageContent } from '@/lib/content';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader.substring(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return decoded.role === 'admin' ? decoded : null;
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const content = await dbContentStorage.getHomepageContent();
    return NextResponse.json({ success: true, content });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const content: HomepageContent = await request.json();
    const success = await dbContentStorage.setHomepageContent(content);
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Content updated successfully' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to save content' },
        { status: 500 }
      );
    }
      } catch (error) {
      console.error('Homepage content update error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to update content. Please try again.' },
        { status: 500 }
      );
    }
}
