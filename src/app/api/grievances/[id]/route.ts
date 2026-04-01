import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

type RouteParams = { params: { id: string } };

// GET /api/grievances/[id]
export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const [rows]: any = await pool.query(
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
       WHERE g.id = ?`,
      [params.id]
    );
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ data: rows[0] });
  } catch (error) {
    console.error('[GET /api/grievances/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PATCH /api/grievances/[id] — update status or assignment
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const body = await req.json();
    const { status, priority, assigned_to } = body;

    await pool.query(
      `UPDATE grievances SET
        status = COALESCE(?, status),
        priority = COALESCE(?, priority),
        assigned_to = COALESCE(?, assigned_to)
       WHERE id = ?`,
      [status || null, priority || null, assigned_to || null, params.id]
    );

    return NextResponse.json({ message: 'Grievance updated' });
  } catch (error) {
    console.error('[PATCH /api/grievances/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

}

// DELETE /api/grievances/[id]
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  try {
    await pool.query('DELETE FROM grievances WHERE id = ?', [params.id]);
    return NextResponse.json({ message: 'Grievance deleted' });
  } catch (error) {
    console.error('[DELETE /api/grievances/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
