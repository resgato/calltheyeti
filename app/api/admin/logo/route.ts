import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const JWT_SECRET = process.env.JWT_SECRET || '';

function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET!) as any;
    return decoded.role === 'admin' ? decoded : null;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const logoPath = join(process.cwd(), 'public', 'yeti-logo.png');

    if (!existsSync(logoPath)) {
      return NextResponse.json({
        success: false,
        message: 'Logo file not found'
      }, { status: 404 });
    }

    const stats = await stat(logoPath);

    const logoInfo = {
      currentLogo: '/yeti-logo.png',
      filename: 'yeti-logo.png',
      size: stats.size,
      uploadedAt: stats.mtime.toISOString()
    };

    return NextResponse.json({ success: true, logoInfo });
  } catch (error) {
    console.error('Error reading logo info:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to read logo information' },
      { status: 500 }
    );
  }
}
