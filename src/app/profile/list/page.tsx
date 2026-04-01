import Link from 'next/link';
import {
  Download,
  Plus,
  Search,
  ChevronDown,
  Eye,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styles from './page.module.css';

export default function ProfileList() {
  return (
    <div className={styles.container}>
      
      {/* 1. Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className="display-lg" style={{ fontSize: '2rem', color: 'var(--on-surface)', marginBottom: '0.25rem' }}>Leader Profiles</h1>
          <div className={styles.breadcrumbs}>DASHBOARD <span className={styles.breadcrumbArrow}>/</span> PROFILE LIST</div>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnOutline} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Download size={16} strokeWidth={2.5} /> EXPORT LIST
          </button>
          <button className={styles.btnSolidSaffron} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Plus size={18} strokeWidth={3} /> ONBOARD NEW LEADER
          </button>
        </div>
      </div>

      {/* 2. Filter Ribbon */}
      <div className={styles.filterRibbon}>
        <div className={styles.filterGroup} style={{ flex: 1.5 }}>
          <label className={styles.filterLabel}>SEARCH IDENTITY</label>
          <div className={styles.filterInputWrapper}>
            <Search size={16} className={styles.filterIcon} />
            <input type="text" className={styles.filterInput} placeholder="Name, ID or Seat..." />
          </div>
        </div>

        <div className={styles.filterGroup} style={{ flex: 1 }}>
          <label className={styles.filterLabel}>DESIGNATION</label>
          <div className={styles.filterSelectWrapper}>
            <select className={styles.filterSelect} defaultValue="">
              <option value="" disabled hidden>All Designations</option>
              <option value="all">All Designations</option>
              <option value="mp">MP</option>
              <option value="mla">MLA</option>
              <option value="head">Constituency Head</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>

        <div className={styles.filterGroup} style={{ flex: 1 }}>
          <label className={styles.filterLabel}>GEOGRAPHICAL LEVEL</label>
          <div className={styles.filterSelectWrapper}>
            <select className={styles.filterSelect} defaultValue="">
              <option value="" disabled hidden>All Levels</option>
              <option value="all">All Levels</option>
              <option value="state">State</option>
              <option value="district">District</option>
              <option value="constituency">Constituency</option>
              <option value="national">National</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>

        <div className={styles.filterGroup} style={{ flex: 1 }}>
          <label className={styles.filterLabel}>ACTIVE STATUS</label>
          <div className={styles.toggleCompoundBtn}>
            <button className={styles.toggleActive}>Active</button>
            <button className={styles.toggleInactive}>Draft</button>
          </div>
        </div>
      </div>

      {/* 3. Data Table */}
      <div className={styles.tableWidget}>
        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th className="label-md">LEADER NAME</th>
                <th className="label-md">DESIGNATION</th>
                <th className="label-md">REGION</th>
                <th className="label-md">LEVEL</th>
                <th className="label-md">STATUS</th>
                <th className="label-md" style={{ textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              
              {/* Row 1 */}
              <tr>
                <td>
                  <div className={styles.leaderProfileBlock}>
                    <div className={styles.leaderAvatar}>
                      👨🏽‍💼
                      <span className={styles.avatarStatusGreen}></span>
                    </div>
                    <div className={styles.leaderInfo}>
                      <span className={styles.leaderName}>Rajesh Kumar Patra</span>
                      <span className={styles.leaderId}>ID: BJP-UP-2910</span>
                    </div>
                  </div>
                </td>
                <td><span className={styles.pillOrange}>MP</span></td>
                <td>
                  <div className={styles.regionBlock}>
                    <span className={styles.regionCity}>Varanasi</span>
                    <span className={styles.regionState}>Uttar Pradesh</span>
                  </div>
                </td>
                <td className={styles.levelText}>State</td>
                <td><span className={styles.statusActive}>• ACTIVE</span></td>
                <td style={{ textAlign: 'right' }}>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionIcon}><Eye size={16} /></button>
                    <Link href="/profile/edit" className={styles.actionIcon}><Edit2 size={16} /></Link>
                    <button className={styles.actionIcon}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td>
                  <div className={styles.leaderProfileBlock}>
                    <div className={styles.leaderAvatar}>
                      👩🏽‍💼
                      <span className={styles.avatarStatusGrey}></span>
                    </div>
                    <div className={styles.leaderInfo}>
                      <span className={styles.leaderName}>Sunita S. Deshmukh</span>
                      <span className={styles.leaderId}>ID: BJP-MH-1102</span>
                    </div>
                  </div>
                </td>
                <td><span className={styles.pillGreen}>MLA</span></td>
                <td>
                  <div className={styles.regionBlock}>
                    <span className={styles.regionCity}>Pune Central</span>
                    <span className={styles.regionState}>Maharashtra</span>
                  </div>
                </td>
                <td className={styles.levelText}>District</td>
                <td><span className={styles.statusDraft}>• DRAFT</span></td>
                <td style={{ textAlign: 'right' }}>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionIcon}><Eye size={16} /></button>
                    <Link href="/profile/edit" className={styles.actionIcon}><Edit2 size={16} /></Link>
                    <button className={styles.actionIcon}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td>
                  <div className={styles.leaderProfileBlock}>
                    <div className={styles.leaderAvatar}>
                      👨🏼‍💼
                      <span className={styles.avatarStatusGreen}></span>
                    </div>
                    <div className={styles.leaderInfo}>
                      <span className={styles.leaderName}>Vikram Rathore</span>
                      <span className={styles.leaderId}>ID: BJP-RJ-4452</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.pillStackedGrey}>
                    <span>Constituency</span>
                    <span>Head</span>
                  </div>
                </td>
                <td>
                  <div className={styles.regionBlock}>
                    <span className={styles.regionCity}>Jaipur West</span>
                    <span className={styles.regionState}>Rajasthan</span>
                  </div>
                </td>
                <td className={styles.levelText}>Constituency</td>
                <td><span className={styles.statusActive}>• ACTIVE</span></td>
                <td style={{ textAlign: 'right' }}>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionIcon}><Eye size={16} /></button>
                    <Link href="/profile/edit" className={styles.actionIcon}><Edit2 size={16} /></Link>
                    <button className={styles.actionIcon}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td>
                  <div className={styles.leaderProfileBlock}>
                    <div className={styles.leaderAvatar}>
                      👩🏻‍💼
                      <span className={styles.avatarStatusGreen}></span>
                    </div>
                    <div className={styles.leaderInfo}>
                      <span className={styles.leaderName}>Meenakshi Lekhi</span>
                      <span className={styles.leaderId}>ID: BJP-DL-0012</span>
                    </div>
                  </div>
                </td>
                <td><span className={styles.pillOrange}>MP</span></td>
                <td>
                  <div className={styles.regionBlock}>
                    <span className={styles.regionCity}>New Delhi</span>
                    <span className={styles.regionState}>Delhi NCR</span>
                  </div>
                </td>
                <td className={styles.levelText}>National</td>
                <td><span className={styles.statusActive}>• ACTIVE</span></td>
                <td style={{ textAlign: 'right' }}>
                  <div className={styles.actionButtons}>
                    <button className={styles.actionIcon}><Eye size={16} /></button>
                    <Link href="/profile/edit" className={styles.actionIcon}><Edit2 size={16} /></Link>
                    <button className={styles.actionIcon}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className={styles.paginationFooter}>
          <span className="label-md" style={{ color: '#57636e', textTransform: 'none' }}>
            Showing 1 to 4 of 24 profiles
          </span>
          <div className={styles.pageControls}>
            <button className={styles.pageBtnArrow}><ChevronLeft size={16} /></button>
            <button className={styles.pageBtnActive}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtnArrow}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* 4. Bottom Metrics Cards */}
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <h4 className="label-md" style={{ color: '#8c8c8c', marginBottom: '0.5rem' }}>ONBOARDED THIS MONTH</h4>
          <h2 className="display-lg" style={{ fontSize: '1.75rem', color: '#191c1d' }}>+12 Leaders</h2>
        </div>
        <div className={styles.metricCard} style={{ background: '#f9fafa' }}>
          <h4 className="label-md" style={{ color: '#8c8c8c', marginBottom: '0.5rem' }}>MOST ACTIVE LEVEL</h4>
          <h2 className="display-lg" style={{ fontSize: '1.75rem', color: '#191c1d' }}>District (45%)</h2>
        </div>
        <div className={styles.metricCard} style={{ background: '#f9fafa' }}>
          <h4 className="label-md" style={{ color: '#8c8c8c', marginBottom: '0.5rem' }}>DRAFT PROFILES</h4>
          <h2 className="display-lg" style={{ fontSize: '1.75rem', color: '#191c1d' }}>08 Pending</h2>
        </div>
      </div>

    </div>
  );
}
