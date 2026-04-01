import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/grievances?status=&priority=&state_id=&page=&limit=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const priority = searchParams.get('priority');
    const state_id = searchParams.get('state_id');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const conditions: string[] = [];
    const params: unknown[] = [];

    if (status) { conditions.push('g.status = ?'); params.push(status); }
    if (priority) { conditions.push('g.priority = ?'); params.push(priority); }
    if (state_id) { conditions.push('g.state_id = ?'); params.push(state_id); }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    const [rows] = await pool.query(
      `SELECT g.*,
        s.name AS state_name,
        d.name AS district_name,
        c.name AS constituency_name,
        p.full_name AS assigned_name
       FROM grievances g
       LEFT JOIN states s ON s.id = g.state_id
       LEFT JOIN districts d ON d.id = g.district_id
       LEFT JOIN constituencies c ON c.id = g.constituency_id
       LEFT JOIN profiles p ON p.id = g.assigned_to
       ${where}
       ORDER BY g.created_at DESC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    const [[{ total }]]: any = await pool.query(
      `SELECT COUNT(*) AS total FROM grievances g ${where}`,
      params
    );

    return NextResponse.json({ data: rows, total, page, limit });
  } catch (error) {
    console.error('[GET /api/grievances]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/grievances
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { citizen_name, phone, category, description, priority, state_id, district_id, constituency_id, assigned_to } = body;

    if (!citizen_name) {
      return NextResponse.json({ error: 'citizen_name is required' }, { status: 400 });
    }

    // Auto-generate ticket ID
    const ticket_id = `GRV-${Date.now().toString().slice(-8)}`;

    const [result]: any = await pool.query(
      `INSERT INTO grievances (ticket_id, citizen_name, phone, category, description, priority, state_id, district_id, constituency_id, assigned_to)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [ticket_id, citizen_name, phone || null, category || null, description || null,
       priority || 'MEDIUM', state_id || null, district_id || null, constituency_id || null, assigned_to || null]
    );

    return NextResponse.json({ message: 'Grievance submitted', ticket_id, insertId: result.insertId }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/grievances]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
