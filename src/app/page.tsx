import { Plus, Download, Building, Map, Users, FileText, CheckCircle2, LayoutGrid } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.dashboardContainer}>
      
      {/* 1. Page Header & Actions */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className="display-lg" style={{ fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '0.5rem' }}>Executive Dashboard</h1>
          <p className="title-sm" style={{ color: '#57636e', fontWeight: 500 }}>Monitoring political presence and regional development metrics.</p>
        </div>
        <div className={styles.pageActions}>
          <button className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', fontWeight: 700, padding: '0.75rem 1.25rem', borderRadius: '4px' }}>
            <Plus size={18} strokeWidth={2.5} /> NEW ARTICLE
          </button>
          <button className="btn btn-secondary" style={{ display: 'flex', gap: '0.5rem', fontWeight: 700, padding: '0.75rem 1.25rem', borderRadius: '4px', background: '#fff', border: '1px solid #e1e3e4', color: '#191c1d' }}>
            <Download size={18} strokeWidth={2.5} /> EXPORT REPORT
          </button>
        </div>
      </div>

      {/* 2. Four-Column Metric Cards */}
      <section className={styles.metricGrid}>
        
        {/* Card 1 */}
        <div className={styles.metricCard}>
          <div className={styles.cardTop}>
            <div className={styles.iconCircle} style={{ background: '#f0e6dd', color: '#8f4e00' }}>
              <Building size={24} />
            </div>
            <div className={styles.badgeGreen}>↗ 12%</div>
          </div>
          <div className={styles.cardBottom}>
            <p className="label-md" style={{ letterSpacing: '0.1em' }}>TOTAL CONSTITUENCIES</p>
            <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>543</h2>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.metricCard}>
          <div className={styles.cardTop}>
            <div className={styles.iconCircle} style={{ background: '#e1f0e4', color: '#056e00' }}>
              <Map size={24} />
            </div>
            <div className={styles.badgeGrey}>STABLE</div>
          </div>
          <div className={styles.cardBottom}>
            <p className="label-md" style={{ letterSpacing: '0.1em' }}>TOTAL SUB-REGIONS</p>
            <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>4,120</h2>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.metricCard}>
          <div className={styles.cardTop}>
            <div className={styles.iconCircle} style={{ background: '#f5eadd', color: '#b76e00' }}>
              <Users size={24} />
            </div>
            <div className={styles.badgeGreen}>↗ 2.4k</div>
          </div>
          <div className={styles.cardBottom}>
            <p className="label-md" style={{ letterSpacing: '0.1em' }}>TOTAL PROFILES</p>
            <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>1.2M</h2>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.metricCard}>
          <div className={styles.cardTop}>
            <div className={styles.iconCircle} style={{ background: '#e6ede6', color: '#056e00' }}>
              <FileText size={24} />
            </div>
            <div className={styles.badgeOrange}>NEW 45</div>
          </div>
          <div className={styles.cardBottom}>
            <p className="label-md" style={{ letterSpacing: '0.1em' }}>TOTAL PUBLISHED WORKS</p>
            <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>8,924</h2>
          </div>
        </div>

      </section>

      {/* 3. Main Content Split Layout */}
      <div className={styles.contentSplit}>
        
        {/* Left: Data Table */}
        <section className={styles.dataTableSection}>
          <div className={styles.tableHeaderSection}>
            <h3 className="headline-sm" style={{ fontSize: '1.25rem' }}>Recent Development Works</h3>
            <button className={styles.viewAllBtn}>View All Activities</button>
          </div>

          <div className={styles.tableContainer}>
            <table className={styles.devTable}>
              <thead>
                <tr>
                  <th className="label-md">PROJECT NAME</th>
                  <th className="label-md">CONSTITUENCY</th>
                  <th className="label-md">STATUS</th>
                  <th className="label-md">DATE ADDED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className={styles.projectCell}>
                      <div className={styles.projectIcon} style={{ background: '#f5eadd', color: '#b76e00' }}><LayoutGrid size={20} /></div>
                      <span className="title-sm">Expressway Connectivity Phase IV</span>
                    </div>
                  </td>
                  <td>Varanasi</td>
                  <td><span className={styles.statusChipGreen}>PUBLISHED</span></td>
                  <td>Oct 24, 2023</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.projectCell}>
                      <div className={styles.projectIcon} style={{ background: '#e1f0e4', color: '#056e00' }}><Users size={20} /></div>
                      <span className="title-sm">Smart Village Education Initiative</span>
                    </div>
                  </td>
                  <td>Ahmedabad West</td>
                  <td><span className={styles.statusChipOrange}>REVIEWING</span></td>
                  <td>Oct 23, 2023</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.projectCell}>
                      <div className={styles.projectIcon} style={{ background: '#eee5da', color: '#8f4e00' }}><Building size={20} /></div>
                      <span className="title-sm">Rural Health Center Modernization</span>
                    </div>
                  </td>
                  <td>Lucknow</td>
                  <td><span className={styles.statusChipGreen}>PUBLISHED</span></td>
                  <td>Oct 22, 2023</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.projectCell}>
                      <div className={styles.projectIcon} style={{ background: '#e5eee5', color: '#056e00' }}><LayoutGrid size={20} /></div>
                      <span className="title-sm">Green Energy Corridor - Solar Plant</span>
                    </div>
                  </td>
                  <td>Indore</td>
                  <td><span className={styles.statusChipGrey}>DRAFT</span></td>
                  <td>Oct 20, 2023</td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.projectCell}>
                      <div className={styles.projectIcon} style={{ background: '#f5ead2', color: '#b76e00' }}><Map size={20} /></div>
                      <span className="title-sm">Jal Shakti: District Water Management</span>
                    </div>
                  </td>
                  <td>Bengaluru South</td>
                  <td><span className={styles.statusChipGreen}>PUBLISHED</span></td>
                  <td>Oct 19, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Right: Analytics & Notice */}
        <div className={styles.rightPanel}>
          
          {/* Chart Widget */}
          <div className={styles.chartWidget}>
            <h3 className="headline-sm" style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Constituency Growth</h3>
            
            <div className={styles.barChart}>
              <div className={styles.barItem}><div className={styles.bar} style={{ height: '35%', background: '#f5eee6' }}></div><span className={styles.month}>MAY</span></div>
              <div className={styles.barItem}><div className={styles.bar} style={{ height: '55%', background: '#f5eee6' }}></div><span className={styles.month}>JUN</span></div>
              <div className={styles.barItem}><div className={styles.bar} style={{ height: '40%', background: '#f5eee6' }}></div><span className={styles.month}>JUL</span></div>
              <div className={styles.barItem}><div className={styles.bar} style={{ height: '100%', background: '#8f4e00' }}></div><span className={styles.month}>AUG</span></div>
              <div className={styles.barItem}><div className={styles.bar} style={{ height: '60%', background: '#f5eee6' }}></div><span className={styles.month}>SEP</span></div>
              <div className={styles.barItem}><div className={styles.bar} style={{ height: '70%', background: '#f5eee6' }}></div><span className={styles.month}>OCT</span></div>
            </div>

            <div className={styles.chartFooter}>
              <span className="title-sm">Monthly Engagement</span>
              <span style={{ color: '#056e00', fontWeight: 700 }}>+14.2%</span>
            </div>
            
            {/* simple line indicator */}
            <div style={{ display: 'flex', width: '100%', height: '4px', borderRadius: '4px', background: '#f3f4f5', marginTop: '0.5rem' }}>
              <div style={{ width: '70%', height: '100%', background: '#056e00', borderRadius: '4px' }}></div>
            </div>
          </div>

          {/* Editorial Notice */}
          <div className={styles.noticeWidget}>
            <h3 className="headline-sm" style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>Editorial Notice</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
              New regional guidelines have been updated for article publishing. Please review the 'Governance Handbook' before submitting new works.
            </p>
            <button className="btn" style={{ background: 'white', color: '#8f4e00', fontWeight: 700, padding: '0.75rem 1.5rem' }}>
              REVIEW HANDBOOK
            </button>
          </div>

        </div>

      </div>
      
    </div>
  );
}
