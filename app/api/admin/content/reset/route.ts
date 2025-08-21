import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { contentStorage } from '@/lib/content-storage';

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

export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const success = await contentStorage.resetToDefaults();
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Content reset to defaults successfully' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to reset content' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to reset content' },
      { status: 500 }
    );
  }
}
