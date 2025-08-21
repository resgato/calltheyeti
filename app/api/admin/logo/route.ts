import { NextResponse } from 'next/server';
import { stat } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET() {
  try {
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
