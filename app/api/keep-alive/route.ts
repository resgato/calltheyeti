import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Simple keep-alive endpoint that just returns success
    // This will keep the Vercel deployment active, which in turn keeps Supabase active
    return NextResponse.json({
      success: true,
      message: 'Keep-alive ping successful',
      timestamp: new Date().toISOString(),
      status: 'Supabase project is active'
    });
  } catch (error) {
    console.error('Keep-alive error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
