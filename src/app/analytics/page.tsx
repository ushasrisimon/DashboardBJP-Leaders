import { 
  Filter, 
  Download,
  Plus,
  Minus,
  Crosshair,
  UserPlus,
  Tractor,
  Users
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function VoterAnalytics() {
  return (
    <div className={styles.container}>
      
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <h1 className={styles.pageTitle}>Voter Strategic Insights</h1>
          <span className={styles.pageSub}>Real-time demographic intelligence and historical performance mapping.</span>
        </div>
        
        <div className={styles.headerActions}>
          <button className={styles.actionBtn}>
            <Filter size={16} strokeWidth={2.5} color="#ca7618" />
            Filter Data
          </button>
          <button className={styles.actionBtn}>
            <Download size={16} strokeWidth={2.5} color="#ca7618" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Top Grid Area */}
      <div className={styles.topGrid}>
        
        {/* Constituency Map */}
        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <h2 className={styles.cardTitle}>Constituency Strategic Map</h2>
            <div className={styles.mapLegend}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles.stronghold}`}></div>
                Stronghold
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles.growth}`}></div>
                Growth Area
              </div>
            </div>
          </div>
          
          <div className={styles.mapContainer}>
            <Image 
              src="/topo-map.png" 
              alt="Topographical Heat Map" 
              fill 
              className={styles.mapImg}
            />
            
            {/* Overlay Info Card */}
            <div className={styles.regionFocusCard}>
              <span className={styles.regionLabel}>REGION FOCUS</span>
              <span className={styles.regionName}>Lucknow Central</span>
              <span className={styles.regionProb}>74% Support Probability</span>
            </div>

            {/* Overlay Map Controls */}
            <div className={styles.mapControls}>
              <div className={styles.mapBtnGroup}>
                <button className={styles.mapControlBtn}>
                  <Plus size={20} />
                </button>
                <button className={styles.mapControlBtn}>
                  <Minus size={20} />
                </button>
              </div>
              <button className={styles.mapControlBtnSingle}>
                <Crosshair size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Demographics & Strategy */}
        <div className={styles.rightCol}>
          
          {/* Demographic Breakdown Donut */}
          <div className={styles.demoCard}>
            <h2 className={styles.cardTitle}>Demographic Breakdown</h2>
            
            <div className={styles.donutContainer}>
              <div className={styles.donutWrapper}>
                <div className={styles.donutInner}>
                  <span className={styles.donutTotal}>1.2M</span>
                  <span className={styles.donutSub}>TOTAL VOTERS</span>
                </div>
              </div>
            </div>

            <div className={styles.demoLegend}>
              
              <div className={styles.demoLegendItem}>
                <div className={styles.demoItemLeft}>
                  <div className={`${styles.demoDot} ${styles.orange}`}></div>
                  <span>Age 18-35 (Youth)</span>
                </div>
                <div className={`${styles.demoItemRight} ${styles.demoText} ${styles.orange}`}>68%</div>
              </div>

              <div className={styles.demoLegendItem}>
                <div className={styles.demoItemLeft}>
                  <div className={`${styles.demoDot} ${styles.green}`}></div>
                  <span>Age 36-55 (Mid-Age)</span>
                </div>
                <div className={`${styles.demoItemRight} ${styles.demoText} ${styles.green}`}>22%</div>
              </div>

              <div className={styles.demoLegendItem}>
                <div className={styles.demoItemLeft}>
                  <div className={`${styles.demoDot} ${styles.blue}`}></div>
                  <span>Age 55+ (Senior)</span>
                </div>
                <div className={`${styles.demoItemRight} ${styles.demoText} ${styles.blue}`}>10%</div>
              </div>

            </div>
          </div>

          {/* Strategic Focus Insights */}
          <div className={styles.strategyCard}>
            <h3 className={styles.strategyTitle}>Strategic Focus</h3>
            <p className={styles.strategyBody}>
              Based on recent shifts, youth engagement in urban clusters has increased by 14.2%. We recommend intensifying digital outreach in these zones before the Q4 window.
            </p>
            <button className={styles.draftBtn}>DRAFT STRATEGY</button>
          </div>

        </div>

      </div>

      {/* Historical Election Performance */}
      <div className={styles.historyCard}>
        
        <div className={styles.historyHeader}>
          <div className={styles.historyTitleBlock}>
            <h2 className={styles.cardTitle}>Historical Election Performance</h2>
            <span className={styles.historySub}>Vote share comparison across last three major election cycles.</span>
          </div>
          <div className={styles.historyLegend}>
            <div className={styles.hLegendItem}>
              <div className={`${styles.hLegendBox} ${styles.bjp}`}></div>
              BJP Share
            </div>
            <div className={styles.hLegendItem}>
              <div className={`${styles.hLegendBox} ${styles.opp}`}></div>
              Opposition Combined
            </div>
          </div>
        </div>

        {/* Custom Hand-Coded Bar Chart Component */}
        <div className={styles.chartContainer}>
          
          <div className={styles.chartGroup}>
            <div className={`${styles.barCol} ${styles.bjp2014}`} title="BJP 2014"></div>
            <div className={`${styles.barCol} ${styles.opp2014}`} title="Opp 2014"></div>
            <div className={styles.xAxisLabel}>
              <span className={styles.xYear}>2014</span>
              <span className={styles.xLabelNode}>FOUNDATION</span>
            </div>
          </div>

          <div className={styles.chartGroup}>
            <div className={`${styles.barCol} ${styles.bjp2018}`} title="BJP 2018"></div>
            <div className={`${styles.barCol} ${styles.opp2018}`} title="Opp 2018"></div>
            <div className={styles.xAxisLabel}>
               <span className={styles.xYear}>2018</span>
               <span className={styles.xLabelNode}>GROWTH</span>
            </div>
          </div>

          <div className={styles.chartGroup}>
            <div className={`${styles.barCol} ${styles.bjp2023}`} title="BJP 2023"></div>
            <div className={`${styles.barCol} ${styles.opp2023}`} title="Opp 2023"></div>
            <div className={styles.xAxisLabel}>
               <span className={`${styles.xYear} ${styles.xYearOrange}`}>2023</span>
               <span className={`${styles.xLabelNode} ${styles.xLabelOrange}`}>SOVEREIGNTY</span>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Action Rows */}
      <div className={styles.bottomActionCards}>
        
        <div className={styles.actionBlock}>
          <div className={`${styles.blockIconWrapper} ${styles.orange}`}>
            <UserPlus size={24} strokeWidth={2.5} />
          </div>
          <h3 className={styles.blockTitle}>Youth Mobilization</h3>
          <p className={styles.blockDesc}>
            Focus on digital entrepreneurship and local job creation narratives to secure the 18-24 voter block.
          </p>
        </div>

        <div className={styles.actionBlock}>
          <div className={`${styles.blockIconWrapper} ${styles.green}`}>
            <Tractor size={24} strokeWidth={2.5} />
          </div>
          <h3 className={styles.blockTitle}>Rural Consolidation</h3>
          <p className={styles.blockDesc}>
            Infrastructure highlight tours in the 'Growth Areas' identified on the western corridor maps.
          </p>
        </div>

        <div className={styles.actionBlock}>
          <div className={`${styles.blockIconWrapper} ${styles.blue}`}>
            <Users size={24} strokeWidth={2.5} />
          </div>
          <h3 className={styles.blockTitle}>Community Outreach</h3>
          <p className={styles.blockDesc}>
            Tailored grievance resolution camps in highly dense urban demographic clusters.
          </p>
        </div>

      </div>

    </div>
  );
}
