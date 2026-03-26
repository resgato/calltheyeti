import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { readdir, stat } from 'fs/promises';
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

    const uploadDir = join(process.cwd(), 'public', 'uploads');

    if (!existsSync(uploadDir)) {
      return NextResponse.json({ success: true, images: [] });
    }

    const files = await readdir(uploadDir);
    const images = [];

    for (const file of files) {
      const filepath = join(uploadDir, file);
      const stats = await stat(filepath);

      if (stats.isFile()) {
        images.push({
          name: file,
          url: `/uploads/${file}`,
          size: stats.size,
          uploadedAt: stats.mtime.toISOString()
        });
      }
    }

    // Sort by upload date (newest first)
    images.sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime());

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error('Error reading images:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to read images' },
      { status: 500 }
    );
  }
}
