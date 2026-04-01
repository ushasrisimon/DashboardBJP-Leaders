import { Search, Bell, Settings } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        
        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <Search className={styles.searchIcon} size={18} strokeWidth={2.5} />
          <input 
            type="text" 
            placeholder="Search data, profiles or reports..." 
            className={styles.searchInput}
          />
        </div>
        
        {/* Right Actions */}
        <div className={styles.actionsGroup}>
          <button className={styles.iconBtn}>
            <Bell size={20} strokeWidth={2.5} />
            <span className={styles.notificationDot}></span>
          </button>
          
          <button className={styles.iconBtn}>
            <Settings size={20} strokeWidth={2.5} />
          </button>
          
          <div className={styles.divider}></div>
          
          <button className={styles.quickActionBtn}>
            QUICK ACTION
          </button>
        </div>

      </div>
    </header>
  );
}
