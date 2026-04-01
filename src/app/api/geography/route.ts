import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/geography?type=state|district|constituency|division&parent_id=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'state';
    const parent_id = searchParams.get('parent_id');

    let query = '';
    let params: unknown[] = [];

    switch (type) {
      case 'state':
        query = 'SELECT id, name, created_at FROM states ORDER BY name ASC';
        break;
      case 'district':
        query = parent_id
          ? 'SELECT d.id, d.name, d.state_id, s.name AS state_name FROM districts d JOIN states s ON s.id = d.state_id WHERE d.state_id = ? ORDER BY d.name ASC'
          : 'SELECT d.id, d.name, d.state_id, s.name AS state_name FROM districts d JOIN states s ON s.id = d.state_id ORDER BY d.name ASC';
        if (parent_id) params = [parent_id];
        break;
      case 'constituency':
        query = parent_id
          ? 'SELECT c.id, c.name, c.district_id, d.name AS district_name FROM constituencies c JOIN districts d ON d.id = c.district_id WHERE c.district_id = ? ORDER BY c.name ASC'
          : 'SELECT c.id, c.name, c.district_id, d.name AS district_name FROM constituencies c JOIN districts d ON d.id = c.district_id ORDER BY c.name ASC';
        if (parent_id) params = [parent_id];
        break;
      case 'division':
        query = parent_id
          ? 'SELECT dv.id, dv.name, dv.constituency_id, c.name AS constituency_name FROM divisions dv JOIN constituencies c ON c.id = dv.constituency_id WHERE dv.constituency_id = ? ORDER BY dv.name ASC'
          : 'SELECT dv.id, dv.name, dv.constituency_id, c.name AS constituency_name FROM divisions dv JOIN constituencies c ON c.id = dv.constituency_id ORDER BY dv.name ASC';
        if (parent_id) params = [parent_id];
        break;
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const [rows] = await pool.query(query, params);
    return NextResponse.json({ data: rows });
  } catch (error) {
    console.error('[GET /api/geography]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/geography
// body: { type: 'state'|'district'|'constituency'|'division', name, parent_id? }
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, parent_id } = body;

    if (!type || !name) {
      return NextResponse.json({ error: 'type and name are required' }, { status: 400 });
    }

    let query = '';
    let params: unknown[] = [];

    switch (type) {
      case 'state':
        query = 'INSERT INTO states (name) VALUES (?)';
        params = [name];
        break;
      case 'district':
        if (!parent_id) return NextResponse.json({ error: 'parent_id (state_id) required' }, { status: 400 });
        query = 'INSERT INTO districts (name, state_id) VALUES (?, ?)';
        params = [name, parent_id];
        break;
      case 'constituency':
        if (!parent_id) return NextResponse.json({ error: 'parent_id (district_id) required' }, { status: 400 });
        query = 'INSERT INTO constituencies (name, district_id) VALUES (?, ?)';
        params = [name, parent_id];
        break;
      case 'division':
        if (!parent_id) return NextResponse.json({ error: 'parent_id (constituency_id) required' }, { status: 400 });
        query = 'INSERT INTO divisions (name, constituency_id) VALUES (?, ?)';
        params = [name, parent_id];
        break;
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const [result]: any = await pool.query(query, params);
    return NextResponse.json({ message: 'Created successfully', insertId: result.insertId }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/geography]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
