import { 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  Mic, 
  MapPin, 
  Clock, 
  Users, 
  Send, 
  Edit2, 
  Check, 
  MoreHorizontal 
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function EventCalendar() {

  // A simplified placeholder grid matching the design
  // Row 1
  const row1 = [
    { num: 29, out: true }, { num: 30, out: true }, { num: 1 }, 
    { num: 2, event: { title: "Annadanam Program", type: "lightOrange" } }, 
    { num: 3 }, { num: 4 }, { num: 5 }
  ];
  // Row 2 (highlighted 9th)
  const row2 = [
    { num: 6 }, { num: 7 }, { num: 8 }, 
    { num: 9, highlight: true, events: [
      { title: "Public Meeting", type: "brown" },
      { title: "Booth Outreach", type: "green" }
    ]}, 
    { num: 10 }, { num: 11 }, { num: 12 }
  ];
  // Row 3
  const row3 = [
    { num: 13 }, { num: 14 }, { num: 15 }, { num: 16 }, 
    { num: 17 }, { num: 18 }, 
    { num: 19, highlight: true, event: { title: "Constituency Rally", type: "orangeFill" } }
  ];
  // Row 4
  const row4 = [
    { num: 20 }, { num: 21 }, { num: 22 }, { num: 23 }, 
    { num: 24 }, { num: 25 }, { num: 26 }
  ];
  // Row 5 (omitted from complex layout, just empty ones to fill grid if needed, image shows 5 rows)
  const row5 = [
    { num: 27 }, { num: 28 }, { num: 29 }, { num: 30 }, 
    { num: 31 }, { num: 1, out: true }, { num: 2, out: true }
  ];

  const grid = [...row1, ...row2, ...row3, ...row4, ...row5];
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className={styles.container}>
      
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.breadcrumb}>
            <span className={styles.crumbActive}>DASHBOARD</span> / EVENT CALENDAR
          </div>
          <h1 className={styles.pageTitle}>Public Engagements & Rallies</h1>
        </div>
        <button className={styles.addBtn}>
          <Plus size={20} strokeWidth={2.5} />
          Add Event
        </button>
      </div>

      <div className={styles.mainSplit}>
        
        {/* Left Panel: Calendar Grid */}
        <div className={styles.calendarCard}>
          
          <div className={styles.calHeader}>
            <div className={styles.calHeaderLeft}>
              <div className={styles.calMonthTitle}>October 2024</div>
              <div className={styles.calArrows}>
                <ChevronLeft className={styles.calArrow} size={20} strokeWidth={3} />
                <ChevronRight className={styles.calArrow} size={20} strokeWidth={3} />
              </div>
            </div>
            
            <div className={styles.calViewToggle}>
              <button className={`${styles.viewBtn} ${styles.active}`}>Month</button>
              <button className={styles.viewBtn}>Week</button>
              <button className={styles.viewBtn}>Day</button>
            </div>
          </div>

          <div className={styles.calendarGridContainer}>
            <div className={styles.daysRow}>
              {days.map(d => <div key={d} className={styles.dayCell}>{d}</div>)}
            </div>

            <div className={styles.datesGrid}>
              {grid.map((cell, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.dateBox} ${cell.out ? styles.outOfMonth : ''} ${cell.highlight ? styles.highlight : ''}`}
                >
                  <div className={styles.dateNum}>{cell.num}</div>
                  
                  {/* Single event standard */}
                  {cell.event && (
                    <div className={`${styles.eventPill} ${styles[cell.event.type]}`}>
                      {cell.event.title}
                    </div>
                  )}

                  {/* Multiple events grouped */}
                  {cell.events && cell.events.map((ev, eIdx) => (
                    <div key={eIdx} className={`${styles.eventPill} ${styles[ev.type]}`}>
                      {ev.title}
                    </div>
                  ))}

                </div>
              ))}
            </div>
          </div>

        </div>


        {/* Right Panel: Event Details and Readiness */}
        <div className={styles.rightPanel}>
          
          {/* Top Card: Event Card */}
          <div className={styles.eventCard}>
            
            <div className={styles.eventImgWrap}>
              <Image 
                src="/public-gathering.png" 
                alt="Public Rally Event" 
                fill 
                className={styles.eventImg}
              />
              <div className={styles.priorityChip}>HIGH PRIORITY</div>
            </div>

            <div className={styles.eventBody}>
              
              <div className={styles.eventTitleBlock}>
                <h2 className={styles.eventMainTitle}>Public Meeting & Sabha:<br/>South Zone</h2>
                <div className={styles.micIconWrap}>
                  <Mic size={22} strokeWidth={2.5} />
                </div>
              </div>

              <div className={styles.eventInfoList}>
                
                <div className={styles.infoLine}>
                  <MapPin size={20} className={styles.infoIcon} strokeWidth={2.5} />
                  <div className={styles.infoText}>
                    <span className={styles.infoValHigh}>Shivaji Park Grounds</span>
                    <span className={styles.infoValLow}>Dadar, Mumbai, MH</span>
                  </div>
                </div>

                <div className={styles.infoLine}>
                  <Clock size={20} className={styles.infoIcon} strokeWidth={2.5} />
                  <div className={styles.infoText}>
                    <span className={styles.infoValHigh}>09 October, 2024</span>
                    <span className={styles.infoValLow}>04:00 PM - 07:30 PM</span>
                  </div>
                </div>

                <div className={styles.infoLine}>
                  <Users size={20} className={styles.infoIcon} strokeWidth={2.5} />
                  <div className={styles.infoText}>
                    <span className={styles.infoValHigh}>Assigned Leaders</span>
                    <div className={styles.avatarGroup}>
                      <div className={styles.avatarImg}>👨🏽‍💼</div>
                      <div className={styles.avatarImg}>👩🏽‍💼</div>
                      <div className={styles.avatarImg}>👨🏽‍⚖️</div>
                      <div className={styles.avatarCount}>+12</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className={styles.statsBlock}>
                <div className={styles.statItem}>
                  <span className={styles.statItemLabel}>RSVP COUNT</span>
                  <span className={styles.statItemVal}>12,450</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statItemLabel}>VOLUNTEERS</span>
                  <span className={`${styles.statItemVal} ${styles.green}`}>380</span>
                </div>
              </div>

              <div className={styles.actionBtns}>
                <button className={`${styles.actionBtn} ${styles.primary}`}>
                  <Send size={18} strokeWidth={2.5} />
                  Send WhatsApp Reminder
                </button>
                <button className={`${styles.actionBtn} ${styles.secondary}`}>
                  <Edit2 size={18} strokeWidth={2.5} />
                  Edit Event Details
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Card: Event Readiness */}
          <div className={styles.readinessCard}>
            <div className={styles.readinessTitle}>EVENT READINESS</div>
            
            <div className={styles.readinessList}>
              <div className={styles.readinessItem}>
                <span className={styles.readinessItemText}>Police Permission</span>
                <div className={`${styles.statusIcon} ${styles.done}`}>
                  <Check size={14} strokeWidth={4} />
                </div>
              </div>
              <div className={styles.readinessItem}>
                <span className={styles.readinessItemText}>Sound Logistics</span>
                <div className={`${styles.statusIcon} ${styles.done}`}>
                  <Check size={14} strokeWidth={4} />
                </div>
              </div>
              <div className={styles.readinessItem}>
                <span className={styles.readinessItemText}>Media Kits Dispatch</span>
                <div className={`${styles.statusIcon} ${styles.pending}`}>
                  ...
                </div>
              </div>
            </div>

            <div className={styles.readinessProgressWrap}>
              <div className={styles.readinessProgressFill}></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
