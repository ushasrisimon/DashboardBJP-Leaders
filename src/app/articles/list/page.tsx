import { 
  Plus, 
  Search, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Edit2, 
  Trash2, 
  User 
} from 'lucide-react';
import styles from './page.module.css';

export default function ArticlesList() {

  const articlesData = [
    {
      id: 1,
      mediaType: 'rally',
      headline: 'Historic Infrastructure Push: New Highway Project Inaugurated',
      date: 'Oct 24, 2023 • 10:45 AM',
      tags: ['Uttar Pradesh', 'Lucknow'],
      leaders: ['user1', 'user2', '+2'],
      status: 'PUBLISHED'
    },
    {
      id: 2,
      mediaType: 'profile',
      headline: 'Draft Strategy for Upcoming District Council Elections',
      date: 'Oct 23, 2023 • 02:15 PM',
      tags: ['Gujarat', 'Surat'],
      leaders: ['user1'],
      status: 'DRAFT'
    },
    {
      id: 3,
      mediaType: 'seminar',
      headline: 'Women Empowerment Seminar: Key Takeaways',
      date: 'Oct 21, 2023 • 09:30 AM',
      tags: ['Maharashtra', 'Mumbai'],
      leaders: ['user1', '+1'],
      status: 'PUBLISHED'
    }
  ];

  return (
    <div className={styles.container}>
      
      {/* 1. Page Header */}
      <div className={styles.headerBlock}>
        <div className={styles.headerText}>
          <span className={styles.headerSub}>Content Management System</span>
          <h1 className={styles.headerTitle}>Editorial Hub</h1>
        </div>
        <button className={styles.createBtn}>
          <Plus size={18} strokeWidth={2.5} /> Create New Article
        </button>
      </div>

      {/* 2. Filters Card */}
      <div className={styles.filtersCard}>
        
        <div className={styles.filtersGrid}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>STATE</label>
            <div className={styles.formSelectWrap}>
              <select className={styles.formSelect} defaultValue="All States">
                <option value="All States">All States</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
              </select>
              <ChevronDown size={18} strokeWidth={2.5} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>DISTRICT</label>
            <div className={styles.formSelectWrap}>
              <select className={styles.formSelect} defaultValue="Select District">
                <option value="Select District" disabled>Select District</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Surat">Surat</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <ChevronDown size={18} strokeWidth={2.5} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>CONSTITUENCY</label>
            <div className={styles.formSelectWrap}>
              <select className={styles.formSelect} defaultValue="All Constituencies">
                <option value="All Constituencies">All Constituencies</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
              <ChevronDown size={18} strokeWidth={2.5} className={styles.selectIcon} />
            </div>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>FILTER BY LEADER</label>
            <div className={styles.formSelectWrap}>
              <select className={styles.formSelect} defaultValue="Search Leader">
                <option value="Search Leader" disabled>Search Leader</option>
                <option value="L1">Leader 1</option>
                <option value="L2">Leader 2</option>
              </select>
              <ChevronDown size={18} strokeWidth={2.5} className={styles.selectIcon} />
            </div>
          </div>
        </div>

        <div className={styles.searchRow}>
          <div className={styles.filterGroup} style={{ flex: 1 }}>
            <label className={styles.filterLabel}>SEARCH TITLES</label>
            <div className={styles.searchWrap}>
              <Search className={styles.searchIconWrapper} size={16} strokeWidth={2.5} />
              <input 
                type="text" 
                className={styles.searchInput} 
                placeholder="Article headline..." 
              />
            </div>
          </div>
          <button className={styles.clearFiltersBtn}>Clear Filters</button>
        </div>

      </div>

      {/* 3. Data Table */}
      <div className={styles.tableCard}>
        <div className={styles.tableWrapper}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>MEDIA</th>
                <th>HEADLINE & DATE</th>
                <th>REGIONAL TAGS</th>
                <th>TAGGED LEADERS</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {articlesData.map((row) => (
                <tr key={row.id}>
                  
                  {/* Media Placeholder generated dynamically via CSS since image server is overloaded */}
                  <td>
                    <div className={styles.mediaThumb}>
                      {row.mediaType === 'rally' ? (
                        <span className={styles.cursiveRally}>Rally</span>
                      ) : row.mediaType === 'profile' ? (
                        <div className={styles.gradientDummyBlue}>
                           <User size={24} color="#334155" />
                        </div>
                      ) : (
                        <div className={styles.gradientDummyGrey}>
                           <span style={{ fontSize: '0.65rem', color: '#cbd5e1', fontWeight: 700 }}>SEMINAR</span>
                        </div>
                      )}
                    </div>
                  </td>

                  <td>
                    <div className={styles.cellHeadline}>
                      <span className={styles.rowTitle}>{row.headline}</span>
                      <span className={styles.rowDate}>{row.date}</span>
                    </div>
                  </td>

                  <td>
                    <div className={styles.tagsContainer}>
                      <div className={styles.tagsInline}>
                        {row.tags.map((tag, i) => (
                          <span key={i} className={styles.tagPill}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={styles.avatarStack}>
                      {row.leaders.map((leader, i) => (
                        <div 
                          key={i} 
                          className={`${styles.avatarItem} ${leader.startsWith('+') ? styles.avatarMore : ''}`}
                          style={leader.startsWith('+') ? {} : { background: i % 2 === 0 ? '#ca7618' : '#191c1d' }}
                        >
                          {leader.startsWith('+') ? leader : <User size={16} color="white" />}
                        </div>
                      ))}
                    </div>
                  </td>

                  <td>
                    {row.status === 'PUBLISHED' ? (
                      <div className={`${styles.statusPill} ${styles.statusPublished}`}>
                        <div className={styles.statusDot}></div>
                        {row.status}
                      </div>
                    ) : (
                       <div className={`${styles.statusPill} ${styles.statusDraft}`}>
                        <div className={styles.statusDot}></div>
                        {row.status}
                      </div>
                    )}
                  </td>

                  <td>
                    <div className={styles.actionsCell}>
                      <Edit2 size={18} strokeWidth={2} className={styles.actionIcon} />
                      <Trash2 size={18} strokeWidth={2} className={styles.actionIcon} />
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className={styles.paginationFooter}>
          <span className={styles.paginationText}>Showing <strong>1-10</strong> of <strong>284</strong> articles</span>
          <div className={styles.pageControls}>
            <button className={styles.pageBtnArrow}><ChevronLeft size={16} /></button>
            <button className={styles.pageBtnActive}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span style={{ color: '#a1a1aa', padding: '0 0.25rem' }}>...</span>
            <button className={styles.pageBtn}>28</button>
            <button className={styles.pageBtnArrow}><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Global Status Footer Block */}
      <div className={styles.stickyStatusBlock}>
        <div className={styles.stickyPill}>
          <div className={styles.stickyDot}></div>
          LIVE SYSTEM STATUS: STABLE
        </div>
        <div className={styles.stickyDivider}></div>
        <div className={styles.stickyPill} style={{ color: '#a1a1aa' }}>
          LAST SYNC: 2M AGO
        </div>
      </div>
      
      {/* Macro Floating Action Button */}
      <button className={styles.macroFloatBtn}>
        <Plus size={24} strokeWidth={3} />
      </button>

    </div>
  );
}
