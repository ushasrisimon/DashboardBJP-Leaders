import {
  Camera,
  MapPin,
  Bold,
  Italic,
  List,
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Plus,
  Trash2,
  Info,
  BarChart2,
  CheckCircle2,
  Share2
} from 'lucide-react';
import styles from './page.module.css';

export default function CreateProfile() {
  return (
    <div className={styles.container}>
      {/* 1. Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerTitleArea}>
          <div className={styles.breadcrumbs}>ADMIN DASHBOARD <span className={styles.breadcrumbArrow}>&gt;</span> <span className={styles.breadcrumbCurrent}>PROFILE MANAGER</span></div>
          <div className={styles.titleGroup}>
            <h1 className="display-lg" style={{ fontSize: '2rem', color: 'var(--on-surface)', marginTop: '0.25rem' }}>Leader Profile Configuration</h1>
            <span className={styles.roleChip}>MLA</span>
          </div>
          <p className="title-sm" style={{ color: '#57636e', fontWeight: 500, marginTop: '0.5rem' }}>
            Comprehensive management of leadership details, career milestones, <br />and geographical assignments.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnOutline}>Preview Public Page</button>
          <button className={styles.btnSolidSaffron}>Save Profile</button>
        </div>
      </div>

      {/* 2. Main Form Container */}
      <div className={styles.mainFormCard}>
        
        {/* Top Details Grid */}
        <div className={styles.detailsGrid}>
          {/* Left: Portrait */}
          <div className={styles.portraitSection}>
            <label className={styles.fieldLabel}>OFFICIAL PORTRAIT</label>
            <div className={styles.portraitUploadBox}>
              <div className={styles.portraitPlaceholder}>
                 {/* Decorative generic image replacement using text/emoji since no image provided */}
                 <div style={{ fontSize: '6rem', lineHeight: 1 }}>👔</div>
                 <div className={styles.uploadOverlay}>
                    <div className={styles.cameraCircle}>
                      <Camera size={20} color="#b76e00" />
                    </div>
                    <span>Change Image</span>
                 </div>
              </div>
            </div>
            <p className={styles.helperText}>Recommended: 1200x1600px, High-resolution portrait on a neutral background.</p>
          </div>

          {/* Right: Inputs */}
          <div className={styles.inputGrid}>
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>FULL NAME <span className={styles.requiredAsterisk}>*</span></label>
              <input type="text" className={styles.textInput} placeholder="e.g. Shri Rajesh Kumar" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>CURRENT DESIGNATION <span className={styles.requiredAsterisk}>*</span></label>
              <input type="text" className={styles.textInput} defaultValue="MLA (Member of Legislative Ass" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>GEOGRAPHICAL LEVEL</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <div className={styles.radioActive}></div> Constituency
                </label>
                <label className={styles.radioLabel}>
                  <div className={styles.radioInactive}></div> Division
                </label>
                <label className={styles.radioLabel}>
                  <div className={styles.radioInactive}></div> District
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.fieldLabel}>ASSIGN LOCATION <span className={styles.requiredAsterisk}>*</span></label>
              <div className={styles.inputWithIcon}>
                <MapPin size={18} className={styles.inputIcon} />
                <input type="text" className={styles.textInputWithIcon} placeholder="Search and select location..." />
              </div>
            </div>
          </div>
        </div>

        {/* Biography Block */}
        <div className={styles.biographySection}>
          <label className={styles.fieldLabel}>BIOGRAPHY & VISION</label>
          <div className={styles.richTextEditor}>
            <div className={styles.richTextToolbar}>
              <button className={styles.toolbarBtn}><Bold size={16} strokeWidth={3} /></button>
              <button className={styles.toolbarBtn}><Italic size={16} /></button>
              <button className={styles.toolbarBtn}><List size={16} /></button>
              <button className={styles.toolbarBtn}><Quote size={16} /></button>
              <div className={styles.toolbarDivider}></div>
              <button className={styles.toolbarBtn}><LinkIcon size={16} /></button>
              <button className={styles.toolbarBtn}><ImageIcon size={16} /></button>
            </div>
            <textarea 
              className={styles.richTextArea} 
              placeholder="Draft the professional biography and political mission statement..."
            ></textarea>
          </div>
        </div>

      </div>

      {/* 3. Career Timeline Section */}
      <div className={styles.timelineSection}>
        <div className={styles.timelineHeader}>
          <div>
            <h3 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d' }}>Career Timeline</h3>
            <p className="title-sm" style={{ color: '#57636e', fontSize: '0.85rem' }}>Key political milestones and leadership history.</p>
          </div>
          <button className={styles.btnAddGreen}>
            <Plus size={16} strokeWidth={3} /> Add Timeline Event
          </button>
        </div>

        <div className={styles.timelineList}>
          {/* Card 1 */}
          <div className={styles.timelineCard}>
            <div className={styles.timelineField} style={{ flex: 1 }}>
              <label className={styles.miniLabel}>YEAR</label>
              <input type="text" className={styles.timelineInput} defaultValue="2019" />
            </div>
            <div className={styles.timelineField} style={{ flex: '2.5' }}>
              <label className={styles.miniLabel}>ROLE/ACHIEVEMENT</label>
              <input type="text" className={styles.timelineInput} defaultValue="Elected as Member of Legislati..." />
            </div>
            <div className={styles.timelineField} style={{ flex: '4' }}>
              <label className={styles.miniLabel}>BRIEF DESCRIPTION</label>
              <input type="text" className={styles.timelineInput} defaultValue="Description of duties and key impact..." />
            </div>
            <button className={styles.btnTrash}>
              <Trash2 size={20} />
            </button>
          </div>

          {/* Card 2 */}
          <div className={styles.timelineCard}>
            <div className={styles.timelineField} style={{ flex: 1 }}>
              <label className={styles.miniLabel}>YEAR</label>
              <input type="text" className={styles.timelineInput} defaultValue="2014" />
            </div>
            <div className={styles.timelineField} style={{ flex: '2.5' }}>
              <label className={styles.miniLabel}>ROLE/ACHIEVEMENT</label>
              <input type="text" className={styles.timelineInput} defaultValue="Zila Parishad Member" />
            </div>
            <div className={styles.timelineField} style={{ flex: '4' }}>
              <label className={styles.miniLabel}>BRIEF DESCRIPTION</label>
              <input type="text" className={styles.timelineInput} defaultValue="Focused on rural infrastructure and drinking..." />
            </div>
            <button className={styles.btnTrash}>
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Form Actions Footer */}
      <div className={styles.formFooter}>
        <div className={styles.footerInfo}>
          <Info size={16} /> 
          <span>Last updated by Admin on Oct 24, 2023</span>
        </div>
        <div className={styles.footerActions}>
          <button className={styles.btnTextBlack}>Discard Changes</button>
          <button className={styles.btnSolidSaffron}>Save Profile</button>
        </div>
      </div>

      {/* 5. Summary Cards Grid */}
      <div className={styles.summaryGrid}>
        <div className={styles.summaryCard}>
          <div className={styles.summaryIconBox} style={{ background: '#fbedd7', color: '#c06500' }}>
            <BarChart2 size={20} />
          </div>
          <h4 className={styles.summaryTitle}>Reach Impact</h4>
          <p className={styles.summaryDesc}>Profile view statistics and voter engagement metrics for this leader.</p>
        </div>
        
        <div className={styles.summaryCard} style={{ background: '#eaf4eb' }}>
          <div className={styles.summaryIconBox} style={{ background: '#d4ecd5', color: '#056e00' }}>
            <CheckCircle2 size={20} />
          </div>
          <h4 className={styles.summaryTitle}>Verification</h4>
          <p className={styles.summaryDesc}>Ensure all data aligns with official EC documents and party records.</p>
        </div>
        
        <div className={styles.summaryCard}>
          <div className={styles.summaryIconBox} style={{ background: '#e1e3e4', color: '#3b4e60' }}>
            <Share2 size={20} />
          </div>
          <h4 className={styles.summaryTitle}>Social Hub</h4>
          <p className={styles.summaryDesc}>Manage integrated social feeds and public contact channels.</p>
        </div>
      </div>

    </div>
  );
}
