import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET /api/articles?status=&state_id=&district_id=&page=&limit=
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const state_id = searchParams.get('state_id');
    const district_id = searchParams.get('district_id');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const conditions: string[] = [];
    const params: unknown[] = [];

    if (status) { conditions.push('a.status = ?'); params.push(status); }
    if (state_id) { conditions.push('a.state_id = ?'); params.push(state_id); }
    if (district_id) { conditions.push('a.district_id = ?'); params.push(district_id); }

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

    const [rows] = await pool.query(
      `SELECT a.*, 
        s.name AS state_name, 
        d.name AS district_name,
        c.name AS constituency_name,
        p.full_name AS author_name
       FROM articles a
       LEFT JOIN states s ON s.id = a.state_id
       LEFT JOIN districts d ON d.id = a.district_id
       LEFT JOIN constituencies c ON c.id = a.constituency_id
       LEFT JOIN profiles p ON p.id = a.author_id
       ${where}
       ORDER BY a.created_at DESC
       LIMIT ? OFFSET ?`,
      [...params, limit, offset]
    );

    const [[{ total }]]: any = await pool.query(
      `SELECT COUNT(*) AS total FROM articles a ${where}`,
      params
    );

    return NextResponse.json({ data: rows, total, page, limit });
  } catch (error) {
    console.error('[GET /api/articles]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// POST /api/articles
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { headline, body: articleBody, media_url, status, state_id, district_id, constituency_id, author_id, leader_ids } = body;

    if (!headline) {
      return NextResponse.json({ error: 'headline is required' }, { status: 400 });
    }

    const published_at = status === 'PUBLISHED' ? new Date() : null;

    const [result]: any = await pool.query(
      `INSERT INTO articles (headline, body, media_url, status, state_id, district_id, constituency_id, author_id, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [headline, articleBody || null, media_url || null, status || 'DRAFT',
       state_id || null, district_id || null, constituency_id || null, author_id || null, published_at]
    );

    const insertId = result.insertId;

    // Link tagged leaders
    if (leader_ids?.length) {
      const leaderRows = leader_ids.map((pid: number) => [insertId, pid]);
      await pool.query('INSERT INTO article_leaders (article_id, profile_id) VALUES ?', [leaderRows]);
    }

    return NextResponse.json({ message: 'Article created', insertId }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/articles]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
