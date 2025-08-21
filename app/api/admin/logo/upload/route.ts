import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { writeFile, copyFile } from 'fs/promises';
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

    const formData = await request.formData();
    const file = formData.get('logo') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No logo file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, message: 'File must be an image' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'File size must be under 5MB' },
        { status: 400 }
      );
    }

    const logoPath = join(process.cwd(), 'public', 'yeti-logo.png');
    const backupPath = join(process.cwd(), 'public', 'yeti-logo-backup.png');

    // Create backup of current logo if it exists
    if (existsSync(logoPath)) {
      await copyFile(logoPath, backupPath);
    }

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(logoPath, buffer);

    return NextResponse.json({
      success: true,
      message: 'Logo uploaded successfully',
      filename: 'yeti-logo.png'
    });

  } catch (error) {
    console.error('Logo upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed' },
      { status: 500 }
    );
  }
}
