import { 
  Download, 
  UserPlus, 
  Megaphone, 
  Filter, 
  ChevronDown, 
  MoreVertical, 
  Plus, 
  Send, 
  ChevronRight,
  RefreshCw 
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function VolunteerHub() {
  return (
    <div className={styles.container}>
      
      {/* Header Area */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.subLabel}>Human Capital</div>
          <h1 className={styles.pageTitle}>Volunteer Hub</h1>
        </div>
        <button className={styles.exportBtn}>
          <Download size={18} strokeWidth={2.5} />
          Export Karyakarta List
        </button>
      </div>

      {/* Top Stats Section */}
      <div className={styles.statsRow}>
        
        {/* Main Stat Card */}
        <div className={styles.statCardMain}>
          <div className={styles.statLabel}>
            <div className={styles.statDot}></div>
            Total Registered Volunteers
          </div>
          <div className={styles.statValue}>1,28,492</div>
          <div className={styles.statGrowth}>
            <RefreshCw size={14} strokeWidth={3} />
            12.5% increase from last drive
          </div>
          
          {/* Subtle Background Pattern */}
          <div className={styles.statCardMainBg}>
            <svg viewBox="0 0 200 200" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 100C116.569 100 130 86.5685 130 70C130 53.4315 116.569 40 100 40C83.4315 40 70 53.4315 70 70C70 86.5685 83.4315 100 100 100Z" fill="currentcolor"/>
              <path d="M100 120C66.8629 120 40 146.863 40 180H160C160 146.863 133.137 120 100 120Z" fill="currentcolor"/>
            </svg>
          </div>
        </div>

        {/* Secondary Card 1 */}
        <div className={styles.statCardSecondary}>
          <div className={`${styles.statIconWrap} ${styles.orange}`}>
            <UserPlus size={20} strokeWidth={2.5} />
          </div>
          <div className={styles.statLabel}>New Registrations</div>
          <div className={styles.statSub}>(This Month)</div>
          <div className={styles.statValue}>4,812</div>
        </div>

        {/* Secondary Card 2 */}
        <div className={`${styles.statCardSecondary} ${styles.greenBorder}`}>
          <div className={`${styles.statIconWrap} ${styles.green}`}>
            <Megaphone size={20} strokeWidth={2.5} />
          </div>
          <div className={styles.statLabel}>Active Campaigners</div>
          <div className={styles.statSub}>(Last 7 Days)</div>
          <div className={styles.statValue}>32,109</div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterTitle}>
          <Filter size={20} strokeWidth={2.5} color="#ca7618" />
          Mobilization Filters
        </div>
        
        <div className={styles.filterDropdowns}>
          <button className={styles.dropdown}>
            Select Mandal / Division <ChevronDown size={18} color="#a1a1aa" />
          </button>
          <button className={styles.dropdown}>
            All Skills <ChevronDown size={18} color="#a1a1aa" />
          </button>
          <button className={styles.dropdown}>
            Registration Period <ChevronDown size={18} color="#a1a1aa" />
          </button>
        </div>

        <button className={styles.clearAllBtn}>Clear All</button>
      </div>

      {/* Directory Table Area */}
      <div className={styles.directorySection}>
        <div className={styles.directoryHeader}>
          <h2 className={styles.directoryTitle}>Karyakarta Directory</h2>
          <MoreVertical size={20} color="#57636e" cursor="pointer" />
        </div>

        <table className={styles.tableData}>
          <thead>
            <tr>
              <th>KARYAKARTA NAME</th>
              <th>MANDAL / DIVISION</th>
              <th>CONTACT INFO</th>
              <th>PRIMARY SKILLS</th>
              <th>REG. DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.karyaProfile}>
                  <div className={`${styles.karyaAvatar} ${styles.orange}`}>RK</div>
                  <div className={styles.karyaInfo}>
                    <span className={styles.karyaName}>Rajesh Kumar</span>
                    <span className={styles.karyaId}>ID: BJP-UP-2910</span>
                  </div>
                </div>
              </td>
              <td className={styles.mandalCell}>Lucknow Central</td>
              <td className={styles.contactCell}>
                <span className={styles.contactPhone}>+91 98765 43210</span>
                <span className={styles.contactEmail}>r.kumar@example.com</span>
              </td>
              <td>
                <div className={styles.skillsCell}>
                  <span className={`${styles.skillPill} ${styles.digital}`}>Digital</span>
                  <span className={`${styles.skillPill} ${styles.social}`}>Social Media</span>
                </div>
              </td>
              <td className={styles.dateCell}>12 Oct, 2023</td>
            </tr>
            
            <tr>
              <td>
                <div className={styles.karyaProfile}>
                  <div className={`${styles.karyaAvatar} ${styles.grey}`}>SS</div>
                  <div className={styles.karyaInfo}>
                    <span className={styles.karyaName}>Sunita Singh</span>
                    <span className={styles.karyaId}>ID: BJP-UP-3021</span>
                  </div>
                </div>
              </td>
              <td className={styles.mandalCell}>Varanasi South</td>
              <td className={styles.contactCell}>
                <span className={styles.contactPhone}>+91 98888 22211</span>
                <span className={styles.contactEmail}>s.singh@example.com</span>
              </td>
              <td>
                <div className={styles.skillsCell}>
                  <span className={`${styles.skillPill} ${styles.ground}`}>Ground</span>
                  <span className={`${styles.skillPill} ${styles.logistics}`}>Logistics</span>
                </div>
              </td>
              <td className={styles.dateCell}>05 Nov, 2023</td>
            </tr>

            <tr>
              <td>
                <div className={styles.karyaProfile}>
                  <div className={`${styles.karyaAvatar} ${styles.orange}`}>AM</div>
                  <div className={styles.karyaInfo}>
                    <span className={styles.karyaName}>Amit Mishra</span>
                    <span className={styles.karyaId}>ID: BJP-UP-4412</span>
                  </div>
                </div>
              </td>
              <td className={styles.mandalCell}>Gorakhpur Urban</td>
              <td className={styles.contactCell}>
                <span className={styles.contactPhone}>+91 91122 33445</span>
                <span className={styles.contactEmail}>a.mishra@example.com</span>
              </td>
              <td>
                <div className={styles.skillsCell}>
                  <span className={`${styles.skillPill} ${styles.digital}`}>Digital</span>
                  <span className={`${styles.skillPill} ${styles.ground}`}>Ground</span>
                </div>
              </td>
              <td className={styles.dateCell}>18 Nov, 2023</td>
            </tr>

            <tr>
              <td>
                <div className={styles.karyaProfile}>
                  <div className={`${styles.karyaAvatar} ${styles.grey}`}>PV</div>
                  <div className={styles.karyaInfo}>
                    <span className={styles.karyaName}>Priya Verma</span>
                    <span className={styles.karyaId}>ID: BJP-UP-5561</span>
                  </div>
                </div>
              </td>
              <td className={styles.mandalCell}>Prayagraj East</td>
              <td className={styles.contactCell}>
                <span className={styles.contactPhone}>+91 90000 88877</span>
                <span className={styles.contactEmail}>p.verma@example.com</span>
              </td>
              <td>
                <div className={styles.skillsCell}>
                  <span className={`${styles.skillPill} ${styles.social}`}>Social Media</span>
                </div>
              </td>
              <td className={styles.dateCell}>01 Dec, 2023</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.tableFooter}>
          <div className={styles.showingText}>SHOWING 1-10 OF 128,492 ENTRIES</div>
          <div className={styles.pagination}>
            <button className={styles.pageBtn}>&lt;</button>
            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>&gt;</button>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className={styles.fabAdd}>
          <Plus size={24} strokeWidth={3} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className={styles.bottomRow}>
        
        {/* Left Card: Deploy Forces */}
        <div className={styles.deployForcesCard}>
          <div className={styles.deployMapWrapper}>
            <Image 
              src="/orange-map.png"
              alt="Division Map"
              fill
              className={styles.deployMapImg}
            />
          </div>
          <div className={styles.deployContent}>
            <h3 className={styles.deployTitle}>Division Presidents:<br/>Deploy Forces</h3>
            <p className={styles.deployDesc}>
              Our mobilization engine allows you to instantly broadcast task assignments to all volunteers in your specific Mandal. Use the skill-based filtering to select the right Karyakartas for ground rallies vs. digital campaigns.
            </p>
            <div className={styles.deployActions}>
              <button className={styles.broadcastBtn}>
                <Send size={18} strokeWidth={2.5} />
                Broadcast Assignment
              </button>
              <button className={styles.viewStatsBtn}>
                View Division Stats
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Skill Dist & Upcoming Training) */}
        <div className={styles.rightCol}>
          
          <div className={styles.skillDistCard}>
            <div className={styles.distTitle}>SKILL DISTRIBUTION</div>
            
            <div className={styles.distBarWrap}>
              <div className={styles.distBarHeader}>
                <span>Digital / IT</span>
                <span>42%</span>
              </div>
              <div className={styles.distBarTrack}>
                <div className={`${styles.distBarFill} ${styles.orange}`} style={{ width: '42%' }}></div>
              </div>
            </div>

            <div className={styles.distBarWrap}>
              <div className={styles.distBarHeader}>
                <span>Ground Mobilization</span>
                <span>38%</span>
              </div>
              <div className={styles.distBarTrack}>
                <div className={`${styles.distBarFill} ${styles.green}`} style={{ width: '38%' }}></div>
              </div>
            </div>

            <div className={styles.distBarWrap}>
              <div className={styles.distBarHeader}>
                <span>Social Media Ops</span>
                <span>20%</span>
              </div>
              <div className={styles.distBarTrack}>
                <div className={`${styles.distBarFill} ${styles.blue}`} style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>

          <div className={styles.upcomingTrainingCard}>
            <div className={styles.trainingContent}>
              <span className={styles.trainingTitle}>Upcoming Training</span>
              <span className={styles.trainingSub}>IT Cell Workshop - Lucknow</span>
            </div>
            <ChevronRight className={styles.trainingIcon} size={24} strokeWidth={2.5} />
          </div>

        </div>

      </div>

    </div>
  );
}
