import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    // Check if admin user already exists
    const { data: existingUser } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', 'cami')
      .single();

    if (existingUser) {
      return NextResponse.json({ 
        success: true, 
        message: 'Admin user already exists' 
      });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash('siggy', 10);

    // Insert the admin user
    const { data: newUser, error } = await supabase
      .from('admin_users')
      .insert({
        username: 'cami',
        password_hash: passwordHash,
        role: 'admin'
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating admin user:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to create admin user' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Admin user created successfully',
      user: {
        username: newUser.username,
        role: newUser.role
      }
    });
  } catch (error) {
    console.error('Error in init-admin:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
