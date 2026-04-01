import { 
  User, 
  Bell, 
  Users, 
  Puzzle, 
  Upload, 
  ChevronDown 
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function SettingsPage() {
  return (
    <div className={styles.container}>
      
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Platform Settings</h1>
        <p className={styles.pageSub}>Manage your account, team, and system preferences.</p>
      </div>

      <div className={styles.mainSplit}>
        
        {/* Left Navigation */}
        <nav className={styles.settingsNav}>
          <div className={`${styles.navItem} ${styles.active}`}>
            <User size={20} strokeWidth={2.5} />
            My Profile
          </div>
          <div className={styles.navItem}>
            <Bell size={20} strokeWidth={2.5} />
            Notifications
          </div>
          <div className={styles.navItem}>
            <Users size={20} strokeWidth={2.5} />
            User Management
          </div>
          <div className={styles.navItem}>
            <Puzzle size={20} strokeWidth={2.5} />
            Integrations
          </div>
        </nav>

        {/* Right Content Area */}
        <div className={styles.contentArea}>
          
          {/* Subtle Background SVG Graphic */}
          <div className={styles.bgGraphic}></div>

          {/* Card 1: Personal Information */}
          <section className={styles.settingsCard} style={{ borderLeft: '1px solid rgba(202, 118, 24, 0.1)' }}>
            
            <div className={styles.cardHeader}>
              <div className={styles.cardTitleBlock}>
                <div className={`${styles.titleAccent} ${styles.orange}`}></div>
                <h2 className={styles.cardTitle}>Personal Information</h2>
              </div>
              
              {/* Top right generic avatar icon as per design */}
              <div className={styles.genericAvatarIcon}>
                <User size={32} strokeWidth={2} />
              </div>
            </div>

            <div className={styles.avatarRow}>
              <div className={styles.avatarBox}>
                <Image 
                  src="/avatar_amitav.png" 
                  alt="Amitav Varma Profile" 
                  fill 
                  className={styles.avatarImg} 
                />
              </div>
              <div className={styles.uploadActions}>
                <button className={styles.uploadBtn}>
                  <Upload size={16} strokeWidth={2.5} />
                  Upload New Avatar
                </button>
                <div className={styles.uploadMeta}>JPG, GIF or PNG. Max size of 800K</div>
              </div>
            </div>

            <div className={styles.formGrid2Col}>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>FULL NAME</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  defaultValue="Amitav Varma" 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  className={styles.formInput} 
                  defaultValue="amitav.varma@bjp.org.in" 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>PHONE NUMBER</label>
                <input 
                  type="text" 
                  className={styles.formInput} 
                  defaultValue="+91 98765 43210" 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>PREFERRED LANGUAGE</label>
                <div className={styles.formSelectWrap}>
                  <select className={styles.formSelect} defaultValue="English">
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Marathi">Marathi</option>
                  </select>
                  <ChevronDown size={18} strokeWidth={2.5} className={styles.selectIcon} />
                </div>
              </div>

            </div>

          </section>

          {/* Card 2: Security & Password */}
          <section className={styles.settingsCard} style={{ borderLeft: '1px solid rgba(21, 128, 61, 0.1)' }}>
            
            <div className={styles.cardHeader} style={{ marginBottom: '1.5rem' }}>
              <div className={styles.cardTitleBlock}>
                <div className={`${styles.titleAccent} ${styles.green}`}></div>
                <h2 className={styles.cardTitle}>Security & Password</h2>
              </div>
            </div>

            <div className={styles.formGrid3Col}>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>CURRENT PASSWORD</label>
                <input 
                  type="password" 
                  className={styles.formInput} 
                  defaultValue="password123" 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>NEW PASSWORD</label>
                <input 
                  type="password" 
                  className={styles.formInput} 
                  defaultValue="newpass456" 
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>CONFIRM NEW PASSWORD</label>
                <input 
                  type="password" 
                  className={styles.formInput} 
                  defaultValue="newpass456" 
                />
              </div>

            </div>

          </section>

          <div className={styles.contentFooter}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>

        </div>

      </div>

    </div>
  );
}
