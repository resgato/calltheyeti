import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    // Ping the Supabase database with a real query to prevent auto-pause
    const { error } = await supabase.from('content').select('id').limit(1);

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = table not found, which is fine — the query still woke the DB
      console.error('Keep-alive query error:', error);
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase keep-alive ping successful',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Keep-alive error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
