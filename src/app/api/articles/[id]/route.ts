import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

type RouteParams = { params: { id: string } };

// GET /api/articles/[id]
export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const [rows]: any = await pool.query(
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
       WHERE a.id = ?`,
      [params.id]
    );
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    // Fetch tagged leaders
    const [leaders] = await pool.query(
      `SELECT p.id, p.full_name, p.avatar_url FROM article_leaders al
       JOIN profiles p ON p.id = al.profile_id
       WHERE al.article_id = ?`,
      [params.id]
    );

    return NextResponse.json({ data: { ...rows[0], leaders } });
  } catch (error) {
    console.error('[GET /api/articles/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT /api/articles/[id]
export async function PUT(req: NextRequest, { params }: RouteParams) {
  try {
    const body = await req.json();
    const { headline, body: articleBody, media_url, status, state_id, district_id, constituency_id, author_id, leader_ids } = body;

    const published_at = status === 'PUBLISHED' ? new Date() : null;

    await pool.query(
      `UPDATE articles SET
        headline = COALESCE(?, headline),
        body = COALESCE(?, body),
        media_url = COALESCE(?, media_url),
        status = COALESCE(?, status),
        state_id = COALESCE(?, state_id),
        district_id = COALESCE(?, district_id),
        constituency_id = COALESCE(?, constituency_id),
        author_id = COALESCE(?, author_id),
        published_at = CASE WHEN ? = 'PUBLISHED' THEN NOW() ELSE published_at END
       WHERE id = ?`,
      [headline, articleBody, media_url, status, state_id, district_id, constituency_id, author_id, status, params.id]
    );

    // Re-sync tagged leaders
    if (leader_ids !== undefined) {
      await pool.query('DELETE FROM article_leaders WHERE article_id = ?', [params.id]);
      if (leader_ids.length) {
        const leaderRows = leader_ids.map((pid: number) => [params.id, pid]);
        await pool.query('INSERT INTO article_leaders (article_id, profile_id) VALUES ?', [leaderRows]);
      }
    }

    return NextResponse.json({ message: 'Article updated' });
  } catch (error) {
    console.error('[PUT /api/articles/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE /api/articles/[id]
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  try {
    await pool.query('DELETE FROM articles WHERE id = ?', [params.id]);
    return NextResponse.json({ message: 'Article deleted' });
  } catch (error) {
    console.error('[DELETE /api/articles/[id]]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
