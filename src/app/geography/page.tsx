import { Plus, CheckCircle2, ChevronRight, Filter, Download, Building2, Layers, ChevronDown, ChevronLeft, Map, MapPin } from 'lucide-react';
import styles from './page.module.css';

export default function GeographyManager() {
  return (
    <div className={styles.container}>
      
      {/* 1. Header & Actions */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className="display-lg" style={{ fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>Geography Manager</h1>
          <p className="title-sm" style={{ color: '#57636e', fontWeight: 600 }}>Define and manage administrative states, districts, constituencies, and divisions.</p>
        </div>
        <div>
          <button className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', fontWeight: 700, padding: '0.75rem 1.5rem', borderRadius: '6px', background: '#d88100', border: 'none' }}>
            <Plus size={18} strokeWidth={2.5} /> Add New
          </button>
        </div>
      </div>

      {/* 2. Form Cards Split (2x2 Grid) */}
      <div className={styles.formSplit}>
        
        {/* Tier 1: State Form */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron} style={{ backgroundColor: '#056e00' }}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>State Form</h3>
            </div>
            <div className={styles.watermarkIcon}>
              <Map size={48} strokeWidth={1} color="#f0fdf4" />
            </div>
          </div>
          
          <div className={styles.inputGroup} style={{ marginBottom: 'auto' }}>
            <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>STATE NAME</label>
            <input type="text" className={styles.textInput} placeholder="e.g. Maharashtra" />
          </div>
          
          <button className={styles.submitBtnGreen} style={{ marginTop: '2rem' }}>
            <CheckCircle2 size={18} strokeWidth={2.5} /> Submit State
          </button>
        </div>

        {/* Tier 2: District Form */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron} style={{ backgroundColor: '#f2ece4' }}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>District Form</h3>
            </div>
            <div className={styles.watermarkIcon}>
              <Layers size={48} strokeWidth={1} color="#f4f5f6" />
            </div>
          </div>
          
          <div className={styles.inputRow} style={{ marginBottom: 'auto' }}>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>DISTRICT NAME</label>
              <input type="text" className={styles.textInput} placeholder="e.g. Mumbai Suburban" />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>PARENT STATE</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} defaultValue="">
                  <option value="" disabled>Select State</option>
                  <option value="1">Maharashtra</option>
                  <option value="2">Delhi NCR</option>
                </select>
                <ChevronDown className={styles.selectArrow} size={16} />
              </div>
            </div>
          </div>
          
          <button className={styles.submitBtnGreen} style={{ background: '#57636e', marginTop: '2rem' }}>
            <Plus size={18} strokeWidth={2.5} /> Submit District
          </button>
        </div>

        {/* Tier 3: Constituency Form */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>Constituency Form</h3>
            </div>
            <div className={styles.watermarkIcon}>
              <Building2 size={48} strokeWidth={1} color="#fdf3e8" />
            </div>
          </div>
          
          <div className={styles.inputRow} style={{ marginBottom: 'auto' }}>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>CONSTITUENCY NAME</label>
              <input type="text" className={styles.textInput} placeholder="e.g. North Mumbai" />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>PARENT DISTRICT</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} defaultValue="">
                  <option value="" disabled>Select District</option>
                  <option value="1">Mumbai Suburban</option>
                  <option value="2">South Delhi</option>
                </select>
                <ChevronDown className={styles.selectArrow} size={16} />
              </div>
            </div>
          </div>
          
          <button className={styles.submitBtnSaffron} style={{ marginTop: '2rem' }}>
            <CheckCircle2 size={18} strokeWidth={2.5} /> Submit Constituency
          </button>
        </div>

        {/* Tier 4: Division Form */}
        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div className={styles.formTitleGroup}>
              <div className={styles.verticalMarkSaffron} style={{ backgroundColor: '#d88100' }}></div>
              <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>Division Form</h3>
            </div>
            <div className={styles.watermarkIcon}>
              <MapPin size={48} strokeWidth={1} color="#fdf3e8" />
            </div>
          </div>
          
          <div className={styles.inputRow} style={{ marginBottom: 'auto' }}>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>DIVISION NAME</label>
              <input type="text" className={styles.textInput} placeholder="e.g. Borivali West" />
            </div>
            <div className={styles.inputGroup} style={{ flex: 1, marginBottom: 0 }}>
              <label className="label-md" style={{ color: '#57636e', marginBottom: '0.5rem', display: 'block' }}>PARENT CONSTITUENCY</label>
              <div className={styles.selectWrapper}>
                <select className={styles.selectInput} defaultValue="">
                  <option value="" disabled>Select Constituency</option>
                  <option value="1">North Mumbai</option>
                  <option value="2">Saket Block</option>
                </select>
                <ChevronDown className={styles.selectArrow} size={16} />
              </div>
            </div>
          </div>
          
          <button className={styles.submitBtnSaffron} style={{ background: '#ca7618', color: 'white', marginTop: '2rem' }}>
            <ChevronRight size={18} strokeWidth={2.5} /> Submit Division
          </button>
        </div>

      </div>

      {/* 3. Hierarchy Data Table */}
      <section className={styles.tableWidget}>
        <div className={styles.tableHeaderSection}>
          <h3 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d' }}>Regional Hierarchy Data</h3>
          <div className={styles.tableActions}>
            <button className={styles.iconActionBtn}><Filter size={20} strokeWidth={2} /></button>
            <button className={styles.iconActionBtn}><Download size={20} strokeWidth={2} /></button>
          </div>
        </div>

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
              {[
                { id: '#GEO-001', name: 'Maharashtra', type: 'STATE', parent: '—' },
                { id: '#GEO-002', name: 'Mumbai Suburban', type: 'DISTRICT', parent: 'Maharashtra', italicParent: true },
                { id: '#GEO-003', name: 'North Mumbai', type: 'CONSTITUENCY', parent: 'Mumbai Suburban', italicParent: true },
                { id: '#GEO-004', name: 'Borivali West', type: 'DIVISION', parent: 'North Mumbai', italicParent: true },
                { id: '#GEO-005', name: 'Delhi NCR', type: 'STATE', parent: '—' },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ color: '#191c1d', fontWeight: 500 }}>{row.id}</td>
                  <td style={{ color: '#191c1d', fontWeight: 700 }}>{row.name}</td>
                  <td>
                    {row.type === 'CONSTITUENCY' ? (
                      <span className={styles.typeConstituency}>{row.type}</span>
                    ) : row.type === 'DIVISION' ? (
                      <span className={styles.typeSubRegion}>{row.type}</span>
                    ) : (
                      <span className={styles.typeConstituency} style={{ background: '#e0f2fe', color: '#0284c7' }}>{row.type}</span>
                    )}
                  </td>
                  <td style={{ fontStyle: row.italicParent ? 'italic' : 'normal', color: '#57636e' }}>
                    {row.parent}
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={styles.paginationFooter}>
          <span className="label-md" style={{ color: '#57636e', textTransform: 'none' }}>
            Showing 5 of 124 geography entries
          </span>
          <div className={styles.pageControls}>
            <button className={styles.pageBtnArrow}><ChevronLeft size={16} /></button>
            <button className={styles.pageBtnActive}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtnArrow}><ChevronRight size={16} /></button>
          </div>
        </div>
      </section>

    </div>
  );
}
