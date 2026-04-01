import { 
  Megaphone, 
  Clock, 
  Smile, 
  MessageSquare, 
  CheckCircle2, 
  Send,
  ArrowRight,
  Check,
  ChevronDown,
  Paperclip
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function SocialMediaHub() {
  return (
    <div className={styles.container}>
      
      {/* Top Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.breadcrumb}>SOCIAL MEDIA & BROADCAST</div>
          <h1 className={styles.pageTitle}>Multi-Platform Broadcast Center</h1>
        </div>

        {/* Floating Reach Stats */}
        <div className={styles.headerStatsWrap}>
          <div className={styles.platformIcons}>
            <div className={`${styles.pIcon} ${styles.x}`}>X</div>
            <div className={`${styles.pIcon} ${styles.fb}`}>f</div>
            <div className={`${styles.pIcon} ${styles.ig}`}>i</div>
            <div className={`${styles.pIcon} ${styles.wa}`}>
              <MessageSquare size={12} strokeWidth={3} />
            </div>
          </div>
          <div className={styles.headerStatText}>
            <span className={styles.headerStatVal}>8.4M Reach</span>
            <span className={styles.headerStatSub}>Aggregated Last 24h</span>
          </div>
        </div>
      </div>


      {/* Main Split Content */}
      <div className={styles.mainSplit}>
        
        {/* Left: Omnichannel Post Creator */}
        <div className={styles.omniCard}>
          <div className={styles.omniHeader}>
            <div className={styles.omniIconBox}>
              <Megaphone size={22} strokeWidth={2.5} />
            </div>
            <h2 className={styles.omniTitle}>Omnichannel Post Creator</h2>
          </div>

          <div className={styles.editorBox}>
            <div className={styles.editorPlaceholder}>
              Write your update for the people...
            </div>
            <button className={styles.attachBtn}>
              <Paperclip size={16} strokeWidth={2.5} />
              Attach Media
            </button>
          </div>

          <div className={styles.platformSelectors}>
            
            <label className={styles.pSelectBox}>
              <input type="checkbox" className={styles.pCheckbox} defaultChecked />
              <div className={styles.pSelectText}>
                <span className={styles.pSelectName}>X (Twitter)</span>
                <span className={styles.pSelectDesc}>280 Characters</span>
              </div>
            </label>

            <label className={styles.pSelectBox}>
              <input type="checkbox" className={styles.pCheckbox} defaultChecked />
              <div className={styles.pSelectText}>
                <span className={styles.pSelectName}>Facebook</span>
                <span className={styles.pSelectDesc}>Post to Page</span>
              </div>
            </label>

            <label className={styles.pSelectBox}>
              <input type="checkbox" className={styles.pCheckbox} defaultChecked />
              <div className={styles.pSelectText}>
                <span className={styles.pSelectName}>Instagram</span>
                <span className={styles.pSelectDesc}>Feed & Stories</span>
              </div>
            </label>

          </div>

          <div className={styles.omniFooter}>
            <div className={styles.footerLeftIcons}>
              <Clock size={20} className={styles.iconBtn} strokeWidth={2.5} />
              <Smile size={20} className={styles.iconBtn} strokeWidth={2.5} />
            </div>
            <div className={styles.footerRightActions}>
              <span className={styles.saveDraftText}>Save Draft</span>
              <button className={styles.broadcastNowBtn}>Broadcast Now</button>
            </div>
          </div>

        </div>


        {/* Right: WhatsApp Campaign Card */}
        <div className={styles.waCard}>
          
          <div className={styles.waHeader}>
            <div className={styles.waHeaderLeft}>
              <div className={styles.waIconBox}>
                <MessageSquare size={20} strokeWidth={2.5} />
              </div>
              <div className={styles.waTitleGroup}>
                <h2 className={styles.waTitle}>WhatsApp Campaign</h2>
                <span className={styles.waSub}>Direct citizen outreach via API</span>
              </div>
            </div>
            <div className={styles.waStatusChip}>ACTIVE<br/>STATUS</div>
          </div>

          <div className={styles.waSectionLabel}>SELECT TARGET GROUP</div>
          <button className={styles.waDropdown}>
            All Volunteers (14,202) <ChevronDown size={18} strokeWidth={2.5} />
          </button>

          <div className={styles.waSegmentBox}>
            <div className={styles.segmentLeft}>
              <span className={styles.segmentLabel}>SELECTED SEGMENT</span>
              <span className={styles.segmentVal}>By Mandal: Moosarambagh</span>
            </div>
            <CheckCircle2 color="#0d9488" size={20} strokeWidth={3} />
          </div>

          <div className={styles.waSectionLabel}>MESSAGE PREVIEW</div>
          
          <div className={styles.waPreviewArea}>
            
            <div className={styles.previewBubble}>
              <div className={styles.bubbleImgWrap}>
                <Image 
                  src="/bridge-sunset.png" 
                  alt="New Development Setup" 
                  fill 
                  className={styles.bubbleImg} 
                />
              </div>
              <div className={styles.bubbleTextGroup}>
                <div className={styles.bubbleHeadline}>New Development Update!</div>
                <div className={styles.bubbleBody}>
                  We are proud to announce the completion of the new community center in Moosarambagh. Empowering our local youth with better resources.
                </div>
                <a href="#" className={styles.bubbleLink}>Read more: bit.ly/mandal-update</a>
              </div>
              
              <div className={styles.bubbleFooter}>
                <span className={styles.bubbleTime}>12:45 PM</span>
                <div style={{ display: 'flex', color: '#60a5fa' }}>
                  <Check size={12} strokeWidth={4} />
                  <Check size={12} strokeWidth={4} style={{ marginLeft: '-6px' }} />
                </div>
              </div>
            </div>

          </div>

          <button className={styles.waSendBtn}>
            <Send size={18} strokeWidth={2.5} />
            Send Broadcast Now
          </button>

        </div>

      </div>


      {/* Bottom Area: Analytics Table */}
      <div className={styles.analyticsSection}>
        
        <div className={styles.analyticsHeader}>
          <h2 className={styles.analyticsTitle}>Recent Broadcast Performance</h2>
          <a href="#" className={styles.viewAllLink}>
            View Detailed Analytics <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        <table className={styles.analyticsTable}>
          <thead>
            <tr>
              <th>CAMPAIGN NAME</th>
              <th>PLATFORMS</th>
              <th>REACH</th>
              <th>ENGAGEMENT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td className={styles.campNameBlock}>
                <span className={styles.campName}>Ayushman Bharat Registration Drive</span>
                <span className={styles.campStatusFlow}>Scheduled: Oct 24, 09:00 AM</span>
              </td>
              <td className={styles.platformsCell}>
                <div className={`${styles.smallIcon} ${styles.blue}`}>X</div>
                <div className={`${styles.smallIcon} ${styles.green}`}>
                  <MessageSquare size={10} strokeWidth={3} />
                </div>
              </td>
              <td><span className={styles.metricVal}>1.2M</span></td>
              <td><span className={styles.metricVal}>45.2K</span></td>
              <td><span className={`${styles.pill} ${styles.scheduled}`}>SCHEDULED</span></td>
            </tr>

            <tr>
              <td className={styles.campNameBlock}>
                <span className={styles.campName}>Infrastructure Milestone: Metro Phase 3</span>
                <span className={styles.campStatusFlow}>Sent: Oct 22, 06:15 PM</span>
              </td>
              <td className={styles.platformsCell}>
                <div className={`${styles.smallIcon} ${styles.blue}`}>X</div>
                <div className={`${styles.smallIcon} ${styles.pink}`}>i</div>
              </td>
              <td><span className={styles.metricVal}>4.8M</span></td>
              <td><span className={styles.metricVal}>122.9K</span></td>
              <td><span className={`${styles.pill} ${styles.delivered}`}>DELIVERED</span></td>
            </tr>

          </tbody>
        </table>

      </div>

    </div>
  );
}
