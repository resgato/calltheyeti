import { NextResponse } from 'next/server';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET() {
  try {
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
