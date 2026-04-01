"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Sidebar.module.css';

import { 
  LayoutGrid, 
  Map, 
  Settings, 
  FileEdit, 
  ClipboardList, 
  Users, 
  Calendar, 
  Share2, 
  BarChart3, 
  FolderSearch,
  LogOut,
  HelpCircle,
  BookOpen,
  ChevronDown,
  UserPlus,
  List,
  FilePlus
} from 'lucide-react';

const mainNavItems = [
  { name: 'Dashboard Home', path: '/', icon: LayoutGrid },
  { name: 'Geography Manager', path: '/geography', icon: Map },
  { 
    name: 'Profile Manager', 
    path: '/profile', 
    icon: Settings,
    subItems: [
      { name: 'Create New Profile', path: '/profile/create', icon: UserPlus },
      { name: 'Profile List', path: '/profile/list', icon: List }
    ]
  },
  { 
    name: 'Article Editor', 
    path: '/articles', 
    icon: FileEdit,
    subItems: [
      { name: 'Create New Article', path: '/articles', icon: FilePlus },
      { name: 'Articles List', path: '/articles/list', icon: List }
    ]
  },
  { name: 'Grievance Center', path: '/grievances', icon: ClipboardList },
  { name: 'Volunteer Hub', path: '/volunteer', icon: Users },
  { name: 'Event Calendar', path: '/events', icon: Calendar },
  { name: 'Social Media Hub', path: '/social', icon: Share2 },
  { name: 'Voter Analytics', path: '/analytics', icon: BarChart3 },
  { name: 'Resource Repository', path: '/resources', icon: FolderSearch },
];

export default function Sidebar() {
  const pathname = usePathname();
  // Automatically expand Profile Manager & Article Editor
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    'Profile Manager': pathname.startsWith('/profile'),
    'Article Editor': pathname.startsWith('/articles')
  });

  useEffect(() => {
    if (pathname.startsWith('/profile')) {
      setExpandedMenus(prev => ({ ...prev, 'Profile Manager': true }));
    }
    if (pathname.startsWith('/articles')) {
      setExpandedMenus(prev => ({ ...prev, 'Article Editor': true }));
    }
  }, [pathname]);

  const toggleMenu = (name: string) => {
    setExpandedMenus(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Image 
          src="/bjp-logo.png" 
          alt="BJP Leaders Dashboard" 
          width={240} 
          height={60} 
          className={styles.logoImage} 
        />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {mainNavItems.map((item) => {
            const isExactActive = pathname === item.path || (pathname === '/dashboard' && item.path === '/');
            const hasSubItems = !!item.subItems;
            const isExpanded = expandedMenus[item.name];

            return (
              <li key={item.name}>
                {hasSubItems ? (
                  <div className={styles.navGroup}>
                    <button 
                      className={`${styles.navItem} ${pathname.startsWith(item.path) && !isExpanded ? styles.navItemActive : ''}`}
                      onClick={() => toggleMenu(item.name)}
                    >
                      <div className={styles.navItemContext}>
                        <item.icon className={styles.navIcon} size={20} strokeWidth={hasSubItems && isExpanded ? 3 : 2.5} color={hasSubItems && isExpanded ? '#b76e00' : undefined} />
                        <span style={hasSubItems && isExpanded ? { color: '#b76e00', fontWeight: 800 } : {}}>{item.name}</span>
                      </div>
                      <ChevronDown 
                        size={16} 
                        className={styles.chevronIcon} 
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                    {isExpanded && (
                      <ul className={styles.subItemsList}>
                        {item.subItems?.map(sub => {
                          const isSubActive = pathname === sub.path;
                          return (
                            <li key={sub.path}>
                              <Link 
                                href={sub.path}
                                className={`${styles.subItem} ${isSubActive ? styles.subItemActive : ''}`}
                              >
                                <sub.icon size={16} strokeWidth={2.5} className={styles.subIcon} />
                                <span>{sub.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.path} 
                    className={`${styles.navItem} ${isExactActive ? styles.navItemActive : ''}`}
                  >
                    <div className={styles.navItemContext}>
                      <item.icon className={styles.navIcon} size={20} strokeWidth={2.5} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        
        <div className={styles.bottomNavGroup}>
          <Link href="/settings" className={styles.navItem}>
            <div className={styles.navItemContext}>
              <Settings className={styles.navIcon} size={20} strokeWidth={2.5} />
              <span>Settings</span>
            </div>
          </Link>
          <Link href="/support" className={styles.navItem}>
            <div className={styles.navItemContext}>
              <HelpCircle className={styles.navIcon} size={20} strokeWidth={2.5} />
              <span>Support</span>
            </div>
          </Link>
          <button className={`${styles.navItem} ${styles.logoutBtn}`}>
            <div className={styles.navItemContext}>
              <LogOut className={styles.logoutIcon} size={20} strokeWidth={2.5} />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </nav>
      
      <div className={styles.sidebarFooter}>
        <div className={styles.userProfile}>
          <div className={styles.avatarImage}>
             <span role="img" aria-label="user">👨🏽‍💼</span>
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Aditya Sharma</p>
            <p className={styles.userRole}>Sovereign Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
