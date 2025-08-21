import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { unlink } from 'fs/promises';
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const user = verifyToken(request);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const resolvedParams = await params;
    const filename = decodeURIComponent(resolvedParams.filename);
    const filepath = join(process.cwd(), 'public', 'uploads', filename);

    if (!existsSync(filepath)) {
      return NextResponse.json(
        { success: false, message: 'File not found' },
        { status: 404 }
      );
    }

    await unlink(filepath);

    return NextResponse.json({
      success: true,
      message: 'File deleted successfully'
    });

  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete file' },
      { status: 500 }
    );
  }
}
