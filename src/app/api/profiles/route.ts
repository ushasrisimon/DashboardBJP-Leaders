import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/profiles?state_id=&district_id=&is_active=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const state_id = searchParams.get('state_id');
    const district_id = searchParams.get('district_id');
    const is_active = searchParams.get('is_active');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    let conditions = [];
    let params: unknown[] = [];

    if (state_id) { conditions.push('p.state_id = ?'); params.push(state_id); }
    if (district_id) { conditions.push('p.district_id = ?'); params.push(district_id); }
    if (is_active !== null && is_active !== '') { conditions.push('p.is_active = ?'); params.push(is_active); }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    const [rows] = await pool.query(
      `SELECT p.*, s.name AS state_name, d.name AS district_name, c.name AS constituency_name
       FROM profiles p
       LEFT JOIN states s ON s.id = p.state_id
       LEFT JOIN districts d ON d.id = p.district_id
       LEFT JOIN constituencies c ON c.id = p.constituency_id
       ${where}
       ORDER BY p.full_name ASC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    const [[{ total }]]: any = await pool.query(
      `SELECT COUNT(*) AS total FROM profiles p ${where}`,
      params
    );

    return NextResponse.json({ data: rows, total, page, limit });
  } catch (error) {
    console.error('[GET /api/profiles]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/profiles
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, role, party_position, phone, email, state_id, district_id, constituency_id, bio, avatar_url } = body;

    if (!full_name) {
      return NextResponse.json({ error: 'full_name is required' }, { status: 400 });
    }

    const [result]: any = await pool.query(
      `INSERT INTO profiles (full_name, role, party_position, phone, email, state_id, district_id, constituency_id, bio, avatar_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [full_name, role || null, party_position || null, phone || null, email || null,
       state_id || null, district_id || null, constituency_id || null, bio || null, avatar_url || null]
    );

    return NextResponse.json({ message: 'Profile created', insertId: result.insertId }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/profiles]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
