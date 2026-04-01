import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/geography?type=state|district|constituency|division|all&parent_id=&page=&limit=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'all';
    const parent_id = searchParams.get('parent_id');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // Unified "all" view for the data table
    if (type === 'all') {
      const [rows] = await pool.query(`
        SELECT id, name, 'STATE' AS type, NULL AS parent_name, NULL AS parent_id, created_at FROM states
        UNION ALL
        SELECT d.id, d.name, 'DISTRICT', s.name, d.state_id, d.created_at FROM districts d JOIN states s ON s.id = d.state_id
        UNION ALL
        SELECT c.id, c.name, 'CONSTITUENCY', d.name, c.district_id, c.created_at FROM constituencies c JOIN districts d ON d.id = c.district_id
        UNION ALL
        SELECT dv.id, dv.name, 'DIVISION', c.name, dv.constituency_id, dv.created_at FROM divisions dv JOIN constituencies c ON c.id = dv.constituency_id
        ORDER BY type ASC, name ASC
        LIMIT ? OFFSET ?
      `, [limit, offset]);

      const [[{ total }]]: any = await pool.query(`
        SELECT (
          (SELECT COUNT(*) FROM states) +
          (SELECT COUNT(*) FROM districts) +
          (SELECT COUNT(*) FROM constituencies) +
          (SELECT COUNT(*) FROM divisions)
        ) AS total
      `);

      return NextResponse.json({ data: rows, total, page, limit });
    }

    // Filtered by type for dropdown population
    let query = '';
    let params: unknown[] = [];

    switch (type) {
      case 'state':
        query = 'SELECT id, name FROM states ORDER BY name ASC';
        break;
      case 'district':
        if (parent_id) {
          query = 'SELECT d.id, d.name, s.name AS state_name FROM districts d JOIN states s ON s.id = d.state_id WHERE d.state_id = ? ORDER BY d.name ASC';
          params = [parent_id];
        } else {
          query = 'SELECT d.id, d.name, s.name AS state_name FROM districts d JOIN states s ON s.id = d.state_id ORDER BY d.name ASC';
        }
        break;
      case 'constituency':
        if (parent_id) {
          query = 'SELECT c.id, c.name, d.name AS district_name FROM constituencies c JOIN districts d ON d.id = c.district_id WHERE c.district_id = ? ORDER BY c.name ASC';
          params = [parent_id];
        } else {
          query = 'SELECT c.id, c.name, d.name AS district_name FROM constituencies c JOIN districts d ON d.id = c.district_id ORDER BY c.name ASC';
        }
        break;
      case 'division':
        if (parent_id) {
          query = 'SELECT dv.id, dv.name, c.name AS constituency_name FROM divisions dv JOIN constituencies c ON c.id = dv.constituency_id WHERE dv.constituency_id = ? ORDER BY dv.name ASC';
          params = [parent_id];
        } else {
          query = 'SELECT dv.id, dv.name, c.name AS constituency_name FROM divisions dv JOIN constituencies c ON c.id = dv.constituency_id ORDER BY dv.name ASC';
        }
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

    if (!type || !name?.trim()) {
      return NextResponse.json({ error: 'type and name are required' }, { status: 400 });
    }

    let query = '';
    let params: unknown[] = [];

    switch (type) {
      case 'state':
        query = 'INSERT INTO states (name) VALUES (?)';
        params = [name.trim()];
        break;
      case 'district':
        if (!parent_id) return NextResponse.json({ error: 'parent_id (state_id) required' }, { status: 400 });
        query = 'INSERT INTO districts (name, state_id) VALUES (?, ?)';
        params = [name.trim(), parent_id];
        break;
      case 'constituency':
        if (!parent_id) return NextResponse.json({ error: 'parent_id (district_id) required' }, { status: 400 });
        query = 'INSERT INTO constituencies (name, district_id) VALUES (?, ?)';
        params = [name.trim(), parent_id];
        break;
      case 'division':
        if (!parent_id) return NextResponse.json({ error: 'parent_id (constituency_id) required' }, { status: 400 });
        query = 'INSERT INTO divisions (name, constituency_id) VALUES (?, ?)';
        params = [name.trim(), parent_id];
        break;
      default:
        return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    const [result]: any = await pool.query(query, params);
    return NextResponse.json({ message: 'Created successfully', insertId: result.insertId }, { status: 201 });
  } catch (error: any) {
    console.error('[POST /api/geography]', error);
    if (error?.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'Entry already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/geography?type=state|district|constituency|division&id=
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (!type || !id) {
      return NextResponse.json({ error: 'type and id are required' }, { status: 400 });
    }

    const tableMap: Record<string, string> = {
      state: 'states', district: 'districts', constituency: 'constituencies', division: 'divisions',
    };
    const table = tableMap[type];
    if (!table) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

    await pool.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('[DELETE /api/geography]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
