'use client';

import { useState, useEffect, useCallback } from 'react';
import { Plus, CheckCircle2, ChevronRight, Filter, Download, Building2, Layers, ChevronDown, ChevronLeft, Map, MapPin, Trash2, RefreshCw, AlertCircle } from 'lucide-react';
import styles from './page.module.css';

interface GeoEntry {
  id: number;
  name: string;
  type: 'STATE' | 'DISTRICT' | 'CONSTITUENCY' | 'DIVISION';
  parent_name: string | null;
  parent_id: number | null;
}

interface SelectOption { id: number; name: string; }

const PAGE_SIZE = 10;

export default function GeographyManager() {
  // ─── Table State ─────────────────────────────────────────────────────────────
  const [entries, setEntries] = useState<GeoEntry[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [tableError, setTableError] = useState('');

  // ─── Dropdown Options ─────────────────────────────────────────────────────────
  const [states, setStates] = useState<SelectOption[]>([]);
  const [districts, setDistricts] = useState<SelectOption[]>([]);
  const [constituencies, setConstituencies] = useState<SelectOption[]>([]);

  // ─── Form State ──────────────────────────────────────────────────────────────
  const [stateName, setStateName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [districtStateId, setDistrictStateId] = useState('');
  const [constituencyName, setConstituencyName] = useState('');
  const [constituencyDistrictId, setConstituencyDistrictId] = useState('');
  const [divisionName, setDivisionName] = useState('');
  const [divisionConstituencyId, setDivisionConstituencyId] = useState('');

  // ─── Submission State ────────────────────────────────────────────────────────
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  // ─── Fetch Table Data ────────────────────────────────────────────────────────
  const fetchEntries = useCallback(async (p = 1) => {
    setLoading(true);
    setTableError('');
    try {
      const res = await fetch(`/api/geography?type=all&page=${p}&limit=${PAGE_SIZE}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to fetch');
      setEntries(json.data);
      setTotal(json.total);
      setPage(p);
    } catch (e: any) {
      setTableError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // ─── Fetch Dropdown Options ───────────────────────────────────────────────────
  const fetchStates = useCallback(async () => {
    const res = await fetch('/api/geography?type=state');
    const json = await res.json();
    if (res.ok) setStates(json.data || []);
  }, []);

  const fetchDistricts = useCallback(async () => {
    const res = await fetch('/api/geography?type=district');
    const json = await res.json();
    if (res.ok) setDistricts(json.data || []);
  }, []);

  const fetchConstituencies = useCallback(async () => {
    const res = await fetch('/api/geography?type=constituency');
    const json = await res.json();
    if (res.ok) setConstituencies(json.data || []);
  }, []);

  useEffect(() => {
    fetchEntries(1);
    fetchStates();
    fetchDistricts();
    fetchConstituencies();
  }, [fetchEntries, fetchStates, fetchDistricts, fetchConstituencies]);

  // ─── Submit Helper ────────────────────────────────────────────────────────────
  const showFeedback = (type: 'success' | 'error', msg: string) => {
    setFeedback({ type, msg });
    setTimeout(() => setFeedback(null), 3500);
  };

  const submit = async (type: string, name: string, parent_id?: string) => {
    if (!name.trim()) { showFeedback('error', 'Name cannot be empty'); return; }
    if ((type !== 'state') && !parent_id) { showFeedback('error', 'Please select a parent'); return; }

    setSubmitting(type);
    try {
      const res = await fetch('/api/geography', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, name: name.trim(), parent_id: parent_id ? Number(parent_id) : undefined }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed');
      showFeedback('success', `${type.charAt(0).toUpperCase() + type.slice(1)} "${name}" created!`);
      // Reset forms & refresh
      if (type === 'state') { setStateName(''); fetchStates(); }
      if (type === 'district') { setDistrictName(''); setDistrictStateId(''); fetchDistricts(); }
      if (type === 'constituency') { setConstituencyName(''); setConstituencyDistrictId(''); fetchConstituencies(); }
      if (type === 'division') { setDivisionName(''); setDivisionConstituencyId(''); }
      fetchEntries(1);
    } catch (e: any) {
      showFeedback('error', e.message);
    } finally {
      setSubmitting(null);
    }
  };

  // ─── Delete Entry ─────────────────────────────────────────────────────────────
  const deleteEntry = async (id: number, type: string, name: string) => {
    if (!window.confirm(`Delete "${name}" (${type})? This may also remove child entries.`)) return;
    try {
      const res = await fetch(`/api/geography?type=${type.toLowerCase()}&id=${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Delete failed');
      showFeedback('success', `"${name}" deleted`);
      fetchEntries(page);
      fetchStates(); fetchDistricts(); fetchConstituencies();
    } catch (e: any) {
      showFeedback('error', e.message);
    }
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const typeBadge = (type: string) => {
    const map: Record<string, { bg: string; color: string }> = {
      STATE: { bg: '#e0f2fe', color: '#0284c7' },
      DISTRICT: { bg: '#f3e8ff', color: '#7c3aed' },
      CONSTITUENCY: { bg: '#fbedd7', color: '#c9710f' },
      DIVISION: { bg: '#e5f5e5', color: '#056e00' },
    };
    const style = map[type] || { bg: '#f4f5f6', color: '#57636e' };
    return (
      <span className={styles.typeConstituency} style={{ background: style.bg, color: style.color }}>
        {type}
      </span>
    );
  };

  return (
    <div className={styles.container}>

      {/* Feedback Toast */}
      {feedback && (
        <div style={{
          position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999,
          background: feedback.type === 'success' ? '#056e00' : '#c0392b',
          color: 'white', padding: '0.85rem 1.5rem', borderRadius: '8px',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)', fontSize: '0.9rem', fontWeight: 600,
        }}>
          {feedback.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {feedback.msg}
        </div>
      )}

      {/* 1. Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className="display-lg" style={{ fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>Geography Manager</h1>
          <p className="title-sm" style={{ color: '#57636e', fontWeight: 600 }}>
            Define and manage administrative states, districts, constituencies, and divisions.
          </p>
        </div>
        <button
          className="btn btn-primary"
          style={{ display: 'flex', gap: '0.5rem', fontWeight: 700, padding: '0.75rem 1.5rem', borderRadius: '6px', background: '#d88100', border: 'none' }}
          onClick={() => fetchEntries(1)}
        >
          <RefreshCw size={18} strokeWidth={2.5} /> Refresh
        </button>
      </div>

      {/* 2. Form Cards (2x2 Grid) */}
      <div className={styles.formSplit}>

        {/* Tier 1: State */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron} style={{ backgroundColor: '#056e00' }}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>State Form</h3>
            </div>
            <div className={styles.watermarkIcon}><Map size={48} strokeWidth={1} color="#f0fdf4" /></div>
          </div>
          <div className={styles.inputGroup} style={{ marginBottom: 'auto' }}>
            <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>STATE NAME</label>
            <input
              type="text" className={styles.textInput} placeholder="e.g. Maharashtra"
              value={stateName} onChange={e => setStateName(e.target.value)}
            />
          </div>
          <button
            className={styles.submitBtnGreen} style={{ marginTop: '2rem' }}
            onClick={() => submit('state', stateName)}
            disabled={submitting === 'state'}
          >
            <CheckCircle2 size={18} strokeWidth={2.5} />
            {submitting === 'state' ? 'Saving...' : 'Submit State'}
          </button>
        </div>

        {/* Tier 2: District */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron} style={{ backgroundColor: '#7c3aed' }}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>District Form</h3>
            </div>
            <div className={styles.watermarkIcon}><Layers size={48} strokeWidth={1} color="#f4f5f6" /></div>
          </div>
          <div className={styles.inputRow} style={{ marginBottom: 'auto' }}>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>DISTRICT NAME</label>
              <input type="text" className={styles.textInput} placeholder="e.g. Mumbai Suburban"
                value={districtName} onChange={e => setDistrictName(e.target.value)} />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>PARENT STATE</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} value={districtStateId} onChange={e => setDistrictStateId(e.target.value)}>
                  <option value="">Select State</option>
                  {states.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
                <ChevronDown className={styles.selectArrow} size={16} />
              </div>
            </div>
          </div>
          <button
            className={styles.submitBtnGreen} style={{ background: '#7c3aed', marginTop: '2rem' }}
            onClick={() => submit('district', districtName, districtStateId)}
            disabled={submitting === 'district'}
          >
            <Plus size={18} strokeWidth={2.5} />
            {submitting === 'district' ? 'Saving...' : 'Submit District'}
          </button>
        </div>

        {/* Tier 3: Constituency */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>Constituency Form</h3>
            </div>
            <div className={styles.watermarkIcon}><Building2 size={48} strokeWidth={1} color="#fdf3e8" /></div>
          </div>
          <div className={styles.inputRow} style={{ marginBottom: 'auto' }}>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>CONSTITUENCY NAME</label>
              <input type="text" className={styles.textInput} placeholder="e.g. North Mumbai"
                value={constituencyName} onChange={e => setConstituencyName(e.target.value)} />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>PARENT DISTRICT</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} value={constituencyDistrictId} onChange={e => setConstituencyDistrictId(e.target.value)}>
                  <option value="">Select District</option>
                  {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
                <ChevronDown className={styles.selectArrow} size={16} />
              </div>
            </div>
          </div>
          <button
            className={styles.submitBtnSaffron} style={{ marginTop: '2rem' }}
            onClick={() => submit('constituency', constituencyName, constituencyDistrictId)}
            disabled={submitting === 'constituency'}
          >
            <CheckCircle2 size={18} strokeWidth={2.5} />
            {submitting === 'constituency' ? 'Saving...' : 'Submit Constituency'}
          </button>
        </div>

        {/* Tier 4: Division */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron} style={{ backgroundColor: '#d88100' }}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>Division Form</h3>
            </div>
            <div className={styles.watermarkIcon}><MapPin size={48} strokeWidth={1} color="#fdf3e8" /></div>
          </div>
          <div className={styles.inputRow} style={{ marginBottom: 'auto' }}>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>DIVISION NAME</label>
              <input type="text" className={styles.textInput} placeholder="e.g. Borivali West"
                value={divisionName} onChange={e => setDivisionName(e.target.value)} />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>PARENT CONSTITUENCY</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} value={divisionConstituencyId} onChange={e => setDivisionConstituencyId(e.target.value)}>
                  <option value="">Select Constituency</option>
                  {constituencies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <ChevronDown className={styles.selectArrow} size={16} />
              </div>
            </div>
          </div>
          <button
            className={styles.submitBtnSaffron} style={{ background: '#ca7618', color: 'white', marginTop: '2rem' }}
            onClick={() => submit('division', divisionName, divisionConstituencyId)}
            disabled={submitting === 'division'}
          >
            <ChevronRight size={18} strokeWidth={2.5} />
            {submitting === 'division' ? 'Saving...' : 'Submit Division'}
          </button>
        </div>

      </div>

      {/* 3. Live Data Table */}
      <section className={styles.tableWidget}>
        <div className={styles.tableHeaderSection}>
          <h3 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d' }}>
            Regional Hierarchy Data
            {!loading && <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#8c8c8c', marginLeft: '0.75rem' }}>({total} entries)</span>}
          </h3>
          <div className={styles.tableActions}>
            <button className={styles.iconActionBtn} onClick={() => fetchEntries(page)} title="Refresh">
              <RefreshCw size={18} strokeWidth={2} />
            </button>
            <button className={styles.iconActionBtn}><Filter size={20} strokeWidth={2} /></button>
            <button className={styles.iconActionBtn}><Download size={20} strokeWidth={2} /></button>
          </div>
        </div>

        {/* Error State */}
        {tableError && (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#c0392b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <AlertCircle size={18} /> {tableError} — <button onClick={() => fetchEntries(1)} style={{ background: 'none', border: 'none', color: '#c0392b', textDecoration: 'underline', cursor: 'pointer' }}>Retry</button>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#8c8c8c' }}>
            <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '3px solid #e1e3e4', borderTopColor: '#d88100', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Fetching geography data...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !tableError && entries.length === 0 && (
          <div style={{ padding: '3rem', textAlign: 'center', color: '#8c8c8c' }}>
            <Map size={40} strokeWidth={1} style={{ marginBottom: '1rem', opacity: 0.4 }} />
            <p style={{ fontSize: '0.95rem' }}>No geography entries yet. Use the forms above to add your first entry!</p>
          </div>
        )}

        {/* Table */}
        {!loading && entries.length > 0 && (
          <div className={styles.tableWrapper}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th className="label-md">ID</th>
                  <th className="label-md">NAME</th>
                  <th className="label-md">TYPE</th>
                  <th className="label-md">PARENT</th>
                  <th className="label-md" style={{ textAlign: 'right' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((row) => (
                  <tr key={`${row.type}-${row.id}`}>
                    <td style={{ color: '#8c8c8c', fontWeight: 500, fontSize: '0.8rem' }}>#{String(row.id).padStart(3, '0')}</td>
                    <td style={{ color: '#191c1d', fontWeight: 700 }}>{row.name}</td>
                    <td>{typeBadge(row.type)}</td>
                    <td style={{ fontStyle: row.parent_name ? 'italic' : 'normal', color: '#57636e' }}>
                      {row.parent_name || '—'}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => deleteEntry(row.id, row.type, row.name)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#c0392b', display: 'inline-flex', alignItems: 'center', padding: '0.25rem' }}
                        title={`Delete ${row.name}`}
                      >
                        <Trash2 size={16} strokeWidth={2} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className={styles.paginationFooter}>
            <span className="label-md" style={{ color: '#57636e', textTransform: 'none' }}>
              Showing {((page - 1) * PAGE_SIZE) + 1}–{Math.min(page * PAGE_SIZE, total)} of {total} entries
            </span>
            <div className={styles.pageControls}>
              <button className={styles.pageBtnArrow} onClick={() => fetchEntries(page - 1)} disabled={page === 1}>
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  className={p === page ? styles.pageBtnActive : styles.pageBtn}
                  onClick={() => fetchEntries(p)}
                >
                  {p}
                </button>
              ))}
              {totalPages > 5 && <span style={{ color: '#8c8c8c' }}>...</span>}
              <button className={styles.pageBtnArrow} onClick={() => fetchEntries(page + 1)} disabled={page === totalPages}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Spinner keyframe */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
