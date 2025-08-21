import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { copyFile, unlink } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

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

    const logoPath = join(process.cwd(), 'public', 'yeti-logo.png');
    const backupPath = join(process.cwd(), 'public', 'yeti-logo-backup.png');

    // If backup exists, restore it
    if (existsSync(backupPath)) {
      await copyFile(backupPath, logoPath);
      await unlink(backupPath); // Remove backup after restoration
      
      return NextResponse.json({
        success: true,
        message: 'Logo reset to default successfully'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'No backup logo found to restore' },
        { status: 404 }
      );
    }

  } catch (error) {
    console.error('Logo reset error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to reset logo' },
      { status: 500 }
    );
  }
}
