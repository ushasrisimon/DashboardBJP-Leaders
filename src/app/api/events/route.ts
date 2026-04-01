import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/events?month=&year=&state_id=&status=&page=&limit=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const month = searchParams.get('month');
    const year = searchParams.get('year');
    const state_id = searchParams.get('state_id');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '31');
    const offset = (page - 1) * limit;

    const conditions: string[] = [];
    const params: unknown[] = [];

    if (month && year) {
      conditions.push('MONTH(e.event_date) = ? AND YEAR(e.event_date) = ?');
      params.push(month, year);
    } else if (year) {
      conditions.push('YEAR(e.event_date) = ?');
      params.push(year);
    }
    if (state_id) { conditions.push('e.state_id = ?'); params.push(state_id); }
    if (status) { conditions.push('e.status = ?'); params.push(status); }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    const [rows] = await pool.query(
      `SELECT e.*,
        s.name AS state_name,
        d.name AS district_name,
        c.name AS constituency_name,
        p.full_name AS organizer_name
       FROM events e
       LEFT JOIN states s ON s.id = e.state_id
       LEFT JOIN districts d ON d.id = e.district_id
       LEFT JOIN constituencies c ON c.id = e.constituency_id
       LEFT JOIN profiles p ON p.id = e.organizer_id
       ${where}
       ORDER BY e.event_date ASC, e.start_time ASC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    const [[{ total }]]: any = await pool.query(
      `SELECT COUNT(*) AS total FROM events e ${where}`,
      params
    );

    return NextResponse.json({ data: rows, total, page, limit });
  } catch (error) {
    console.error('[GET /api/events]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/events
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description, event_type, venue, event_date, start_time, end_time, state_id, district_id, constituency_id, organizer_id } = body;

    if (!title || !event_date) {
      return NextResponse.json({ error: 'title and event_date are required' }, { status: 400 });
    }

    const [result]: any = await pool.query(
      `INSERT INTO events (title, description, event_type, venue, event_date, start_time, end_time, state_id, district_id, constituency_id, organizer_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, description || null, event_type || 'OTHER', venue || null,
       event_date, start_time || null, end_time || null,
       state_id || null, district_id || null, constituency_id || null, organizer_id || null]
    );

    return NextResponse.json({ message: 'Event created', insertId: result.insertId }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/events]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
