import { 
  Share, 
  Download, 
  BookOpen, 
  Aperture,
  LayoutGrid,
  List,
  Camera,
  Megaphone,
  Play,
  Share2,
  FolderOpen,
  Link2,
  ExternalLink,
  RefreshCw,
  FileText
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ResourceRepository() {
  return (
    <div className={styles.container}>
      
      {/* Header Container */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <span className={styles.breadcrumb}>ADMIN / ASSET MANAGEMENT</span>
          <h1 className={styles.pageTitle}>Document & Asset Repository</h1>
          <p className={styles.pageSub}>
            Centralized access to high-fidelity brand assets, legislative manifestos, and official campaign collateral for national leadership distribution.
          </p>
        </div>
        
        <div className={styles.headerActions}>
          <button className={styles.ghostBtn}>
            <Share size={16} strokeWidth={2.5} />
            SHARE LINK
          </button>
          <button className={styles.primaryBtn}>
            <Download size={16} strokeWidth={2.5} />
            DOWNLOAD ALL
          </button>
        </div>
      </div>

      {/* Main Split Row */}
      <div className={styles.mainSplit}>
        
        {/* Left Col: Manifestos */}
        <div className={styles.manifestosCol}>
          
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleBlock}>
              <BookOpen size={24} strokeWidth={2.5} className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>Manifestos</h2>
            </div>
            <span className={styles.pdfTag}>PDF ONLY</span>
          </div>

          <div className={styles.manifestoList}>
            
            <div className={styles.docCard}>
              <div className={styles.pdfIconBox}>PDF</div>
              <div className={styles.docInfo}>
                <h3 className={styles.docTitle}>Vision 2024 - Core Manifesto</h3>
                <span className={styles.docMeta}>Updated 2 days ago • 14.2 MB</span>
              </div>
            </div>

            <div className={styles.docCard}>
              <div className={styles.pdfIconBox}>PDF</div>
              <div className={styles.docInfo}>
                <h3 className={styles.docTitle}>Regional Policy Guidelines</h3>
                <span className={styles.docMeta}>Published June 2023 • 8.1 MB</span>
              </div>
            </div>

            <div className={styles.docCard}>
              <div className={styles.pdfIconBox}>PDF</div>
              <div className={styles.docInfo}>
                <h3 className={styles.docTitle}>Economic Reform Abstract</h3>
                <span className={styles.docMeta}>Draft Version • 4.5 MB</span>
              </div>
            </div>

            <button className={styles.addDocBtn}>+ ADD NEW DOCUMENT</button>

          </div>
        </div>

        {/* Right Col: Press Assets LayoutGrid */}
        <div className={styles.pressCol}>
          
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleBlock}>
              <Aperture size={24} strokeWidth={2.5} className={styles.sectionIcon} />
              <h2 className={styles.sectionTitle}>Press Assets</h2>
            </div>
            <div className={styles.viewToggles}>
              <div className={`${styles.viewIcon} ${styles.active}`}><LayoutGrid size={18} strokeWidth={2.5} /></div>
              <div className={`${styles.viewIcon} ${styles.inactive}`}><List size={18} strokeWidth={2.5} /></div>
            </div>
          </div>

          <div className={styles.assetGrid}>
            
            <div className={styles.assetCard}>
              <div className={styles.assetVisual}>
                <Image src="/delhi_parliament.png" alt="Delhi HQ Architecture" fill className={styles.assetImg} />
              </div>
              <div className={styles.assetDetails}>
                <span className={styles.assetName}>Delhi_Hq_Architecture.jpg</span>
                <span className={styles.assetMeta}>4000 X 2250 • RAW</span>
              </div>
            </div>

            <div className={styles.assetCard}>
              <div className={styles.assetVisual}>
                <Image src="/indian_flag_sky.png" alt="Indian Flag Official Sky" fill className={styles.assetImg} />
              </div>
              <div className={styles.assetDetails}>
                <span className={styles.assetName}>Tiranga_Official_Sky.jpg</span>
                <span className={styles.assetMeta}>5120 X 2880 • TIFF</span>
              </div>
            </div>

            <div className={styles.assetCard}>
              {/* Graphic Placeholder via Mockup for Zip abstract */}
              <div className={styles.assetVisual} style={{ background: '#fcecdf' }}>
                <div style={{ color: '#f3b88b' }}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className={styles.assetDetails}>
                <span className={styles.assetName}>Leadership_Portraits_A.zip</span>
                <span className={styles.assetMeta}>45 FILES • ARCHIVE</span>
              </div>
            </div>

            <div className={styles.assetCard}>
              <div className={styles.assetVisual}>
                <Image src="/conference_room.png" alt="Conference Room Interior" fill className={styles.assetImg} />
              </div>
              <div className={styles.assetDetails}>
                <span className={styles.assetName}>Conference_Room_HQ.png</span>
                <span className={styles.assetMeta}>3200 X 1800 • PNG</span>
              </div>
            </div>

            <div className={styles.uploadCard}>
              <Camera size={28} strokeWidth={2} />
              <span className={styles.uploadText}>UPLOAD ASSETS</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Campaign Area Header Block */}
      <div className={styles.campaignSection}>
        
        <div className={styles.sectionHeader} style={{ marginTop: '2rem' }}>
          <div className={styles.sectionTitleBlock}>
            <Megaphone size={24} strokeWidth={2.5} className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Campaign Material</h2>
          </div>
          <a href="#" className={styles.sectionLink}>VIEW ALL FOLDERS →</a>
        </div>

        {/* Campaign Horizontal Row */}
        <div className={styles.campaignRow}>
          
          <div className={styles.campCard}>
            <div className={styles.campInfo}>
              <div className={styles.campVisual}>
                <Image src="/rally_video_thumb.png" alt="Development Highlights" fill className={styles.assetImg} />
                <div className={styles.playOverlay}><Play size={18} fill="currentColor" /></div>
                <div className={styles.durationBadge}>02:45</div>
              </div>
              <h3 className={styles.campTitle}>Development Highlights 2024</h3>
              <span className={styles.campSub}>4K UHD • Video Ad Spot</span>
            </div>
            <div className={styles.campFooter}>
              <Share2 size={16} strokeWidth={2.5} className={styles.campActionIcon} />
              <button className={styles.updateBtn}>UPDATE RESOURCE</button>
            </div>
          </div>

          <div className={styles.campCard}>
            <div className={styles.campInfo}>
              <div className={styles.campVisual} style={{ background: '#fdf3e8' }}>
                <FolderOpen size={48} color="#e78820" strokeWidth={1.5} />
              </div>
              <h3 className={styles.campTitle}>Official Brand Identity Kit</h3>
              <span className={styles.campSub}>Logos, Colors, Fonts • v2.1</span>
            </div>
            <div className={styles.campFooter}>
              <Download size={16} strokeWidth={2.5} className={styles.campActionIcon} />
              <button className={styles.updateBtn}>UPDATE RESOURCE</button>
            </div>
          </div>

          <div className={styles.campCard}>
            <div className={styles.campInfo}>
              <div className={styles.campVisual}>
                <Image src="/orange_squares.png" alt="Abstract Pattern Elements" fill className={styles.assetImg} />
              </div>
              <h3 className={styles.campTitle}>Social Media Templates</h3>
              <span className={styles.campSub}>PSD & Canva Overlays</span>
            </div>
            <div className={styles.campFooter}>
              <Link2 size={16} strokeWidth={2.5} className={styles.campActionIcon} />
              <button className={styles.updateBtn}>UPDATE RESOURCE</button>
            </div>
          </div>

          <div className={styles.campCard}>
            <div className={styles.campInfo}>
              <div className={`${styles.campVisual} ${styles.quoteBlock}`} style={{ background: '#fffaf5' }}>
                <span className={styles.quoteText}>"Sovereignty is not just a status, it's a commitment to the last citizen..."</span>
              </div>
              <h3 className={styles.campTitle}>Press Quotes Archive</h3>
              <span className={styles.campSub}>Official Soundbites</span>
            </div>
            <div className={styles.campFooter}>
              <ExternalLink size={16} strokeWidth={2.5} className={styles.campActionIcon} />
              <button className={styles.updateBtn}>UPDATE RESOURCE</button>
            </div>
          </div>

          {/* Floating Widget absolute positioned over Row container */}
          <div className={styles.floatingWidget}>
            <div className={styles.widgetAvatars}>
              {/* Profile Avatar mapping approx using generic vector SVG/emojis for the mock wrapper array */}
              <div className={styles.wAvatar} style={{ background: '#e1e3e4' }}>👨🏽‍💼</div>
              <div className={styles.wAvatar} style={{ background: '#f1f2f3' }}>👩🏽‍💻</div>
              <div className={styles.wAvatarCount}>+14</div>
            </div>
            <div className={styles.widgetText}>
              <span className={styles.wTitle}>Recently Shared</span>
              <span className={styles.wSub}>42 Active Download Sessions</span>
            </div>
            <button className={styles.wSyncBtn}>
              <RefreshCw size={18} strokeWidth={2.5} />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
