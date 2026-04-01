import {
  Eye,
  Save,
  Undo2,
  Redo2,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Quote,
  CheckCircle2,
  Target,
  UploadCloud,
  ShieldCheck,
  Wand2,
  Clock,
  RotateCcw,
  Link2
} from 'lucide-react';
import styles from './page.module.css';

export default function EditProfile() {
  return (
    <div className={styles.container}>
      
      {/* 1. Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.breadcrumbs}>Dashboard <span className={styles.breadcrumbArrow}>&gt;</span> Profiles <span className={styles.breadcrumbArrow}>&gt;</span> <span className={styles.breadcrumbDark}>Edit Leader</span></div>
          <h1 className="display-lg" style={{ fontSize: '2.5rem', color: 'var(--on-surface)', marginBottom: '0.25rem' }}>Madhusudhan</h1>
          <p className={styles.subtitle}>
            <span className={styles.activeDot}></span> Currently active in Geography: Karnataka
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnOutlineGreen}>
            <Eye size={18} strokeWidth={2.5} /> View Public Profile
          </button>
          <button className={styles.btnSolidSaffron}>
            <Save size={18} strokeWidth={2.5} /> Save All Changes
          </button>
        </div>
      </div>

      {/* 2. Tabs Ribbon */}
      <div className={styles.tabsContainer}>
        <button className={styles.tabItem}>Core Info</button>
        <button className={`${styles.tabItem} ${styles.tabActive}`}>Biography & Timeline</button>
        <button className={styles.tabItem}>Multimedia Hub</button>
        <button className={styles.tabItem}>News & Press Clips</button>
      </div>

      {/* 3. Main Split Layout */}
      <div className={styles.mainGrid}>
        
        {/* Left: Biography Editor */}
        <div className={styles.leftColumn}>
          <div className={styles.sectionHeader}>
            <h2 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d' }}>Biography Editor</h2>
            <div className={styles.headerIcons}>
              <button className={styles.iconBtn}><Undo2 size={20} strokeWidth={2} /></button>
              <button className={styles.iconBtn}><Redo2 size={20} strokeWidth={2} /></button>
            </div>
          </div>
          
          <div className={styles.richTextContainer}>
            <div className={styles.richTextToolbar}>
              <button className={styles.toolbarBtn}><Bold size={16} strokeWidth={3} /></button>
              <button className={styles.toolbarBtn}><Italic size={16} /></button>
              <button className={styles.toolbarBtn}><List size={16} /></button>
              <button className={styles.toolbarBtn}><LinkIcon size={16} /></button>
              <button className={styles.toolbarBtn}><Quote size={16} /></button>
            </div>
            <textarea 
              className={styles.richTextArea} 
              defaultValue="Madhusudhan began his political career as a student leader in Bangalore. Over the last two decades, he has championed numerous urban development initiatives and spearheaded the 'Digital Village' campaign in rural Karnataka.&#10;&#10;His leadership is defined by a commitment to infrastructure transparency and grassroots community engagement..."
            ></textarea>
          </div>
        </div>

        {/* Right: Timeline & Multimedia */}
        <div className={styles.rightColumn}>
          
          {/* Top: Timeline */}
          <div className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <h2 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d' }}>Historical Career Timeline</h2>
              <button className={styles.reorderBtn}>
                <RotateCcw size={16} strokeWidth={2.5} /> REORDER
              </button>
            </div>

            <div className={styles.timelinePathContainer}>
              {/* Vertical line passing through nodes */}
              <div className={styles.verticalAxis}></div>

              {/* Node 1: Completed */}
              <div className={styles.timelineNodeBlock}>
                <div className={styles.nodeIconSaffronWrapper}>
                  <CheckCircle2 size={24} className={styles.iconFilledSaffron} />
                </div>
                <div className={styles.nodeContentFilled}>
                  <span className={styles.nodeYearSaffron}>2018</span>
                  <h4 className={styles.nodeTitle}>Corporator</h4>
                  <p className={styles.nodeDesc}>Park Renovation Initiative - JP Nagar</p>
                </div>
              </div>

              {/* Node 2: Add New */}
              <div className={styles.timelineNodeBlock}>
                <div className={styles.nodeIconDashedWrapper}>
                  <Target size={24} className={styles.iconOutlineSaffron} />
                </div>
                <div className={styles.nodeContentDashed}>
                  <div className={styles.timelineInputRow}>
                    <input type="text" className={styles.timelineMiniInput} placeholder="Year" style={{ flex: 1 }} />
                    <input type="text" className={styles.timelineMiniInput} placeholder="Position" style={{ flex: 2.5 }} />
                  </div>
                  <input type="text" className={styles.timelineMiniInput} placeholder="Achievement/Event Title" style={{ width: '100%', marginBottom: '1rem' }} />
                  <button className={styles.addTimelineBtn}>Add Timeline Event</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sectionDivider}></div>

          {/* Bottom: Multimedia */}
          <div className={styles.multimediaSection}>
            <h2 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d', marginBottom: '1.5rem' }}>Multimedia Hub Preview</h2>
            
            <label className={styles.miniLabel}>PHOTO GALLERY</label>
            <div className={styles.dropZone}>
              <div className={styles.uploadCloudCircle}>
                <UploadCloud size={24} color="#fff" />
              </div>
              <p className={styles.dropZoneText}>Click to upload or drag gallery photos</p>
            </div>

            <label className={styles.miniLabel} style={{ marginTop: '1.5rem' }}>VIDEO LINKS</label>
            <div className={styles.videoInputGroup}>
              <div className={styles.videoInputWrapper}>
                <Link2 size={16} className={styles.linkIconInside} />
                <input type="text" className={styles.videoInputBox} placeholder="Paste YouTube or Vimeo URL" />
              </div>
              <button className={styles.btnAddGreenSolid}>Add</button>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Footer Utility Cards */}
      <div className={styles.footerGrid}>
        <div className={styles.footerCard}>
          <div className={styles.footerIconLightBrown}>
            <ShieldCheck size={20} />
          </div>
          <h4 className={styles.footerCardTitle}>Verification Status</h4>
          <p className={styles.footerCardDesc}>Profile changes require secondary admin approval before going live on the public portal.</p>
        </div>
        
        <div className={styles.footerCard}>
          <div className={styles.footerIconLightBrown}>
            <Wand2 size={20} />
          </div>
          <h4 className={styles.footerCardTitle}>AI Bio Assistant</h4>
          <p className={styles.footerCardDesc}>Need help? Click the magic wand icon in the editor to generate a draft from the timeline.</p>
        </div>
        
        <div className={styles.footerCard}>
          <div className={styles.footerIconLightBrown}>
            <Clock size={20} />
          </div>
          <h4 className={styles.footerCardTitle}>Last Edited</h4>
          <p className={styles.footerCardDesc}>Today at 11:42 AM by Senior Editor Raghavan M.</p>
        </div>
      </div>

    </div>
  );
}
