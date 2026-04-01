import { 
  AlertCircle, 
  Hourglass, 
  CheckCircle2, 
  Expand, 
  UserPlus, 
  RefreshCw 
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function GrievanceCenter() {
  return (
    <div className={styles.container}>
      
      {/* Top Banner & Stats */}
      <div className={styles.topRow}>
        
        {/* Hero Card */}
        <div className={styles.heroCard}>
          <div className={styles.heroIconBg}>
            <span>!</span>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroLabel}>Grievance Redressal Center</div>
            <h1 className={styles.heroTitle}>
              Active Resolution <span className={styles.heroTitleHighlight}>Protocol</span>
            </h1>
            <p className={styles.heroDesc}>
              System-wide monitoring of public concerns. Prioritizing critical infrastructure and local welfare initiatives across all sovereign regions.
            </p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.urgent}`}>
              {/* Fake ! inside a circle, or just an icon */}
              <span style={{ fontWeight: 800, fontSize: '0.8rem' }}>!</span>
            </div>
            <div className={`${styles.statBadge} ${styles.orange}`}>URGENT</div>
          </div>
          <div className={styles.statValue}>142</div>
          <div className={styles.statLabel}>OPEN CASES</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.progress}`}>
              <Hourglass size={14} strokeWidth={3} />
            </div>
            <div className={`${styles.statBadge} ${styles.blue}`}>+12%</div>
          </div>
          <div className={styles.statValue}>89</div>
          <div className={styles.statLabel}>IN PROGRESS</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={`${styles.statIcon} ${styles.resolved}`}>
              <CheckCircle2 size={16} strokeWidth={3} />
            </div>
            <div className={`${styles.statBadge} ${styles.green}`}>94%</div>
          </div>
          <div className={styles.statValue}>1.2k</div>
          <div className={styles.statLabel}>RESOLVED</div>
        </div>

      </div>

      {/* Main Content Row */}
      <div className={styles.bottomRow}>
        
        {/* Left Panel: Table */}
        <div className={styles.leftPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <div className={styles.panelTitleDot}></div> Live Issues Feed
            </div>
            <div className={styles.filterActions}>
              <button className={styles.filterBtn}>Filter Region</button>
              <button className={styles.filterBtn}>Category</button>
            </div>
          </div>

          <table className={styles.feedTable}>
            <thead>
              <tr>
                <th>TICKET ID</th>
                <th>CITIZEN NAME</th>
                <th>REGION</th>
                <th>CATEGORY</th>
                <th>REPORTED</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.ticketId}>#GR-8842</td>
                <td className={styles.citizenName}>Rajesh<br/>Kumar</td>
                <td className={styles.regionCell}>Indore<br/>Mandal 4</td>
                <td><span className={styles.categoryPill}>Water Supply</span></td>
                <td className={styles.reportedTime}>2h ago</td>
                <td><span className={`${styles.statusChip} ${styles.open}`}>OPEN</span></td>
              </tr>
              <tr>
                <td className={styles.ticketId}>#GR-8839</td>
                <td className={styles.citizenName}>Sunita<br/>Devi</td>
                <td className={styles.regionCell}>Bhopal<br/>Division A</td>
                <td><span className={styles.categoryPill}>Infrastructure</span></td>
                <td className={styles.reportedTime}>5h ago</td>
                <td><span className={`${styles.statusChip} ${styles.progress}`}>IN PROGRESS</span></td>
              </tr>
              <tr>
                <td className={styles.ticketId}>#GR-8835</td>
                <td className={styles.citizenName}>Amit<br/>Singh</td>
                <td className={styles.regionCell}>Ujjain /<br/>Sector 2</td>
                <td><span className={styles.categoryPill}>Safety</span></td>
                <td className={styles.reportedTime}>Yesterday</td>
                <td><span className={`${styles.statusChip} ${styles.resolved}`}>RESOLVED</span></td>
              </tr>
              <tr>
                <td className={styles.ticketId}>#GR-8831</td>
                <td className={styles.citizenName}>Preeti<br/>Sharma</td>
                <td className={styles.regionCell}>Indore<br/>Mandal 2</td>
                <td><span className={styles.categoryPill}>Sanitation</span></td>
                <td className={styles.reportedTime}>2 days ago</td>
                <td><span className={`${styles.statusChip} ${styles.resolved}`}>RESOLVED</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Panel: Detail Card */}
        <div className={styles.rightPanel}>
          
          <div className={styles.detailHeader}>
            <Image 
              src="/leaking-pipe.png" 
              alt="Water Pipe Leak" 
              fill 
              className={styles.detailImage}
            />
            <div className={styles.detailHeaderOverlay}>
              <div className={styles.expandIcon}>
                <Expand size={18} strokeWidth={2.5} />
              </div>
              <div className={styles.detailHeaderContent}>
                <div className={styles.issueBadge}>ISSUE DETAIL</div>
                <div className={styles.issueTitle}>Main Water<br/>Pipe Leak</div>
              </div>
            </div>
          </div>

          <div className={styles.detailBody}>
            
            <div className={styles.profileInfo}>
              <div className={styles.profileLeft}>
                {/* Simulated Avatar using emoji matching screenshot aesthetic */}
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#ffead0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', overflow: 'hidden' }}>
                  👩🏽
                </div>
                <div className={styles.profileText}>
                  <div className={styles.profileName}>Sunita Devi</div>
                  <div className={styles.profileSub}>Bhopal, Division A</div>
                </div>
              </div>
              <div className={styles.profileRight}>
                <div>ID: <span className={styles.profileId}>#GR-8839</span></div>
                <div>Status: <span className={styles.profileStatus}>In Progress</span></div>
              </div>
            </div>

            <div className={styles.descriptionSection}>
              <div className={styles.sectionLabel}>DESCRIPTION</div>
              <div className={styles.descriptionText}>
                "The main water line on Market Street has been leaking since yesterday. It is causing significant water wastage and flooding the nearby shop entrances. We have reported this twice to local maintenance but no action yet."
              </div>
            </div>

            <div className={styles.timelineSection}>
              <div className={styles.sectionLabel}>TIMELINE</div>
              
              <div className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.green}`}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTitle}>ASSIGNED TO LOCAL LEADER</div>
                  <div className={styles.timelineSub}>Today, 10:45 AM • MLA Rajesh V.</div>
                </div>
              </div>

              <div className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${styles.grey}`}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTitle}>REPORTED BY CITIZEN</div>
                  <div className={styles.timelineSub}>Today, 05:22 AM</div>
                </div>
              </div>
            </div>
            
            <div className={styles.actionButtons}>
              <button className={`${styles.actionBtn} ${styles.grey}`}>
                <UserPlus size={20} strokeWidth={2.5} />
                ASSIGN LEADER
              </button>
              <button className={`${styles.actionBtn} ${styles.orange}`}>
                <RefreshCw size={20} strokeWidth={2.5} />
                UPDATE STATUS
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
