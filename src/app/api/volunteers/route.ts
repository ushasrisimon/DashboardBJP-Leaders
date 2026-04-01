import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/volunteers?status=&state_id=&page=&limit=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const state_id = searchParams.get('state_id');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    const conditions: string[] = [];
    const params: unknown[] = [];

    if (status) { conditions.push('v.status = ?'); params.push(status); }
    if (state_id) { conditions.push('v.state_id = ?'); params.push(state_id); }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    const [rows] = await pool.query(
      `SELECT v.*,
        s.name AS state_name,
        d.name AS district_name,
        c.name AS constituency_name
       FROM volunteers v
       LEFT JOIN states s ON s.id = v.state_id
       LEFT JOIN districts d ON d.id = v.district_id
       LEFT JOIN constituencies c ON c.id = v.constituency_id
       ${where}
       ORDER BY v.created_at DESC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    const [[{ total }]]: any = await pool.query(
      `SELECT COUNT(*) AS total FROM volunteers v ${where}`,
      params
    );

    return NextResponse.json({ data: rows, total, page, limit });
  } catch (error) {
    console.error('[GET /api/volunteers]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/volunteers
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, phone, email, skills, availability, state_id, district_id, constituency_id } = body;

    if (!full_name) {
      return NextResponse.json({ error: 'full_name is required' }, { status: 400 });
    }

    const [result]: any = await pool.query(
      `INSERT INTO volunteers (full_name, phone, email, skills, availability, state_id, district_id, constituency_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [full_name, phone || null, email || null, skills || null, availability || null,
       state_id || null, district_id || null, constituency_id || null]
    );

    return NextResponse.json({ message: 'Volunteer registered', insertId: result.insertId }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/volunteers]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
