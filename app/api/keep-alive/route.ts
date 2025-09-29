import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Simple query to keep the database active
    const { data, error } = await supabase
      .from('content')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Keep-alive query failed:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          timestamp: new Date().toISOString()
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase project is active',
      timestamp: new Date().toISOString(),
      data: data
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
