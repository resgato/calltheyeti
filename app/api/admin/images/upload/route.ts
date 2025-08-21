import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir } from 'fs/promises';
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
    const files = formData.getAll('images') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No files uploaded' },
        { status: 400 }
      );
    }

    const uploadDir = join(process.cwd(), 'public', 'uploads');
    
    // Create uploads directory if it doesn't exist
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    const uploadedFiles = [];

    for (const file of files) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        continue;
      }

      // Validate file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        continue;
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const extension = file.name.split('.').pop();
      const filename = `${timestamp}-${randomString}.${extension}`;
      const filepath = join(uploadDir, filename);

      // Convert file to buffer and save
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filepath, buffer);

      uploadedFiles.push({
        name: filename,
        url: `/uploads/${filename}`,
        size: file.size,
        uploadedAt: new Date().toISOString()
      });
    }

    return NextResponse.json({
      success: true,
      message: `${uploadedFiles.length} files uploaded successfully`,
      files: uploadedFiles
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed' },
      { status: 500 }
    );
  }
}
