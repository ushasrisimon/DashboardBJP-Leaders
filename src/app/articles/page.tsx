import {
  Eye,
  Calendar,
  Clock,
  Image as ImageIcon,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  Heading1,
  Heading2,
  Quote,
  Undo2,
  Redo2,
  ChevronDown,
  UserPlus,
  X,
  Info,
  Send
} from 'lucide-react';
import styles from './page.module.css';

export default function ArticleEditor() {
  return (
    <div className={styles.container}>
      
      {/* 1. Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.breadcrumbs}>Editor <span className={styles.breadcrumbArrow}>&gt;</span> <span className={styles.breadcrumbDark}>New Entry</span></div>
          <h1 className="display-lg" style={{ fontSize: '2.5rem', color: 'var(--on-surface)', marginBottom: '0.25rem' }}>Article Editor</h1>
          <p className={styles.subtitle}>
            Compose and curate official communications and work reports.
          </p>
        </div>
        <div className={styles.headerActions}>
          <button className={styles.btnOutline}>
            Save Draft
          </button>
          <button className={styles.btnSolidGrey}>
            <Eye size={16} strokeWidth={2.5} /> Preview
          </button>
        </div>
      </div>

      {/* 2. Main Editing Grid */}
      <div className={styles.mainGrid}>
        
        {/* Left: Article Core Configuration */}
        <div className={styles.leftColumn}>
          <div className={styles.cardWhite}>
            
            {/* Title Input */}
            <div className={styles.formGroup}>
              <label className={styles.miniLabel}>ARTICLE TITLE</label>
              <input 
                type="text" 
                className={styles.titleInputHuge} 
                placeholder="Enter a compelling headline for the article..." 
              />
            </div>

            {/* Date & Read Time Grid */}
            <div className={styles.metaRowGrid}>
              <div className={styles.formGroup}>
                <label className={styles.miniLabel}>EVENT DATE</label>
                <div className={styles.inputWithIconWrapper}>
                  <Calendar size={18} className={styles.inputIconRight} />
                  <input type="text" className={styles.metaInputBox} placeholder="mm/dd/yyyy" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.miniLabel}>ESTIMATED READ TIME</label>
                <div className={styles.inputWithIconWrapperReadonly}>
                  <Clock size={18} className={styles.inputIconReadonly} />
                  <input type="text" className={styles.metaInputBoxReadonly} value="Calculated automatically" readOnly />
                </div>
              </div>
            </div>

            {/* Featured Image Zone */}
            <div className={styles.formGroup}>
              <label className={styles.miniLabel}>FEATURED IMAGE</label>
              <div className={styles.featuredImageZone}>
                <div className={styles.mediaPlaceholderShapes}>
                  <div className={styles.mediaSquareTop}></div>
                  <div className={styles.mediaSquareMid}></div>
                  <div className={styles.mediaSquareBottom}></div>
                </div>
                <div className={styles.mediaUploadContent}>
                  <div className={styles.mediaIconBlock}>
                    <ImageIcon size={32} color="#57636e" />
                  </div>
                  <span className={styles.mediaTitle}>Click to upload featured media</span>
                  <span className={styles.mediaSubtext}>Recommended size: 1600x900px</span>
                </div>
              </div>
            </div>

            {/* Article Body Rich Text Row */}
            <div className={styles.formGroup} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <label className={styles.miniLabel}>ARTICLE BODY</label>
              <div className={styles.richTextEditor}>
                <div className={styles.richTextToolbar}>
                  <div className={styles.toolbarGroupLeft}>
                    <button className={styles.toolbarBtn}><Bold size={16} strokeWidth={3} /></button>
                    <button className={styles.toolbarBtn}><Italic size={16} /></button>
                    <button className={styles.toolbarBtn}><List size={16} /></button>
                    <button className={styles.toolbarBtn}><LinkIcon size={16} /></button>
                    <button className={styles.toolbarBtn}><Heading1 size={16} /></button>
                    <button className={styles.toolbarBtn}><Heading2 size={16} /></button>
                    <button className={styles.toolbarBtn}><Quote size={16} /></button>
                  </div>
                  <div className={styles.toolbarGroupRight}>
                    <button className={styles.toolbarBtn}><Undo2 size={16} /></button>
                    <button className={styles.toolbarBtn}><Redo2 size={16} /></button>
                  </div>
                </div>
                <textarea 
                  className={styles.richTextArea} 
                  placeholder="Start writing the narrative here..."
                ></textarea>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Tagging & Regulations */}
        <div className={styles.rightColumn}>
          
          {/* Main Tagging Card mapping Saffron highlight pattern */}
          <div className={styles.taggingCard}>
            <div className={styles.cardHeader}>
              <h2 className="headline-sm" style={{ fontSize: '1.25rem', color: '#191c1d', marginBottom: '0.25rem' }}>Tagging &amp; Relations</h2>
              <p className={styles.taggingSubtitle}>Associate this content with regional structures and leadership roles.</p>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.miniLabel}>CONSTITUENCY</label>
              <div className={styles.selectWrapper}>
                <select className={styles.greySelect} defaultValue="">
                  <option value="" disabled hidden>Select Legislative Constituency</option>
                  <option value="1">Varanasi</option>
                  <option value="2">Pune Central</option>
                </select>
                <ChevronDown size={16} className={styles.selectChevron} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.miniLabel}>DIVISION / MANDAL</label>
              <div className={styles.selectWrapper}>
                <select className={styles.greySelect} defaultValue="">
                  <option value="" disabled hidden>Select Local Division</option>
                  <option value="1">Kashi Division</option>
                  <option value="2">Pune Division</option>
                </select>
                <ChevronDown size={16} className={styles.selectChevron} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.miniLabel}>LEADERS INVOLVED</label>
              <div className={styles.inputWithIconWrapper}>
                <UserPlus size={16} className={styles.inputIconLeft} />
                <input type="text" className={styles.searchInputGrey} placeholder="Search for leaders..." />
              </div>
              
              <div className={styles.tagsContainer}>
                <div className={styles.tagPill}>
                  <div className={styles.tagAvatar}>
                    👨🏽‍💼
                  </div>
                  <span className={styles.tagText}>Shri Narendra Modi</span>
                  <button className={styles.tagCloseBtn}><X size={12} strokeWidth={3} /></button>
                </div>
                <div className={styles.tagPill}>
                  <div className={styles.tagAvatar}>
                    👨🏻‍💼
                  </div>
                  <span className={styles.tagText}>Amit Shah</span>
                  <button className={styles.tagCloseBtn}><X size={12} strokeWidth={3} /></button>
                </div>
                <div className={styles.tagPill}>
                  <div className={styles.tagAvatar}>
                    👨🏼‍💼
                  </div>
                  <span className={styles.tagText}>J.P. Nadda</span>
                  <button className={styles.tagCloseBtn}><X size={12} strokeWidth={3} /></button>
                </div>
              </div>
            </div>

            <div className={styles.visibilityCard}>
              <div className={styles.visibilityIconBox}>
                <Eye size={20} color="#b76e00" strokeWidth={2.5} />
              </div>
              <div className={styles.visibilityContent}>
                <h4 className={styles.visibilityTitle}>Internal Visibility</h4>
                <p className={styles.visibilityDesc}>Only administrators and tagged leaders can see this draft.</p>
              </div>
              <div className={styles.visibilityToggle}>
                <div className={styles.toggleTrack}>
                  <div className={styles.toggleNob}></div>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary Editorial Card */}
          <div className={styles.guidelinesCard}>
            <div className={styles.guidelinesTitleRow}>
              <Info size={16} strokeWidth={3} className={styles.guidelinesIcon} />
              <h4 className={styles.guidelinesTitle}>EDITORIAL GUIDELINES</h4>
            </div>
            <ul className={styles.guidelinesList}>
              <li>Ensure the tone is professional and objective.</li>
              <li>High-quality featured images increase engagement by 45%.</li>
              <li>Verify all leader tags before publishing.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Global Submit Bottom Action Button */}
      <div className={styles.bottomPublishBlock}>
        <button className={styles.publishBtnMassive}>
          <Send size={20} strokeWidth={2.5} /> PUBLISH ARTICLE
        </button>
        <p className={styles.publishHelperText}>
          IMMEDIATELY VISIBLE ACROSS THE PUBLIC PLATFORM UPON CONFIRMATION
        </p>
      </div>

    </div>
  );
}
