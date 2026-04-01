import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

type RouteParams = { params: { id: string } };

// GET /api/profiles/[id]
export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const [rows]: any = await pool.query(
      `SELECT p.*, s.name AS state_name, d.name AS district_name, c.name AS constituency_name
       FROM profiles p
       LEFT JOIN states s ON s.id = p.state_id
       LEFT JOIN districts d ON d.id = p.district_id
       LEFT JOIN constituencies c ON c.id = p.constituency_id
       WHERE p.id = ?`,
      [params.id]
    );
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ data: rows[0] });
  } catch (error) {
    console.error('[GET /api/profiles/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/profiles/[id]
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const body = await req.json();
    const { full_name, role, party_position, phone, email, state_id, district_id, constituency_id, bio, avatar_url, is_active } = body;

    await pool.query(
      `UPDATE profiles SET
        full_name = COALESCE(?, full_name),
        role = COALESCE(?, role),
        party_position = COALESCE(?, party_position),
        phone = COALESCE(?, phone),
        email = COALESCE(?, email),
        state_id = COALESCE(?, state_id),
        district_id = COALESCE(?, district_id),
        constituency_id = COALESCE(?, constituency_id),
        bio = COALESCE(?, bio),
        avatar_url = COALESCE(?, avatar_url),
        is_active = COALESCE(?, is_active)
       WHERE id = ?`,
      [full_name, role, party_position, phone, email, state_id, district_id, constituency_id, bio, avatar_url, is_active, params.id]
    );

    return NextResponse.json({ message: 'Profile updated' });
  } catch (error) {
    console.error('[PUT /api/profiles/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/profiles/[id]
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  try {
    await pool.query('DELETE FROM profiles WHERE id = ?', [params.id]);
    return NextResponse.json({ message: 'Profile deleted' });
  } catch (error) {
    console.error('[DELETE /api/profiles/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
