"use client";

import { useState } from 'react';
import { 
  PlaySquare, 
  ArrowRight, 
  BookText, 
  Headphones, 
  ShieldCheck, 
  Send, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Image from 'next/image';
import styles from './page.module.css';

export default function SupportPage() {
  
  // Basic accordion state management
  const [openFaq, setOpenFaq] = useState<number | null>(0); // 0 is first item, matching mockup

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I correctly tag leaders in regional articles?",
      a: "Navigate to the 'Articles' module. While drafting, use the '@' symbol followed by the leader's unique ID or name. Ensure the tag turns saffron to confirm the link to their official profile is active."
    },
    {
      q: "What are the recommended image sizes for profile banners?",
      a: "For high-definition rendering across the portal, we recommend a resolution of 1920x600 pixels. Files should be in JPG or PNG format and must not exceed 2MB to maintain site speed."
    },
    {
      q: "How can I export volunteer data for external reports?",
      a: "From the 'Volunteers' dashboard, apply your desired filters. Click the 'Export' button in the top right corner and select 'CSV for Excel'. Your download will begin automatically once the data is sanitized."
    }
  ];

  return (
    <div className={styles.container}>
      
      {/* Header Array */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Support & Help Center</h1>
        <div className={styles.statusBadge}>
          <div className={styles.statusDot}></div>
          SYSTEM STATUS: ALL SYSTEMS OPERATIONAL
        </div>
      </div>

      {/* Top 3 Service Tiles */}
      <div className={styles.servicesGrid}>
        
        <div className={`${styles.serviceCard} ${styles.orange}`}>
          <div className={styles.bgIconOverlay}>
            <PlaySquare strokeWidth={1} viewBox="0 0 24 24" />
          </div>
          <div className={styles.serviceIconBox}>
            <PlaySquare size={24} strokeWidth={2.5} />
          </div>
          <h2 className={styles.serviceTitle}>Video Tutorials</h2>
          <p className={styles.serviceText}>Step-by-step visual guides for managing constituencies and leader profiles.</p>
          <a href="#" className={styles.serviceLink}>
            BROWSE VIDEOS <ArrowRight size={14} strokeWidth={3} />
          </a>
        </div>

        <div className={`${styles.serviceCard} ${styles.green}`}>
          <div className={styles.bgIconOverlay}>
            <BookText strokeWidth={1} viewBox="0 0 24 24" />
          </div>
          <div className={styles.serviceIconBox}>
            <BookText size={24} strokeWidth={2.5} />
          </div>
          <h2 className={styles.serviceTitle}>Documentation</h2>
          <p className={styles.serviceText}>Detailed technical manuals and policy guidelines for data entry and moderation.</p>
          <a href="#" className={styles.serviceLink}>
            VIEW DOCS <ArrowRight size={14} strokeWidth={3} />
          </a>
        </div>

        <div className={`${styles.serviceCard} ${styles.blue}`}>
          <div className={styles.bgIconOverlay}>
            <Headphones strokeWidth={1} viewBox="0 0 24 24" />
          </div>
          <div className={styles.serviceIconBox}>
            <Headphones size={24} strokeWidth={2.5} />
          </div>
          <h2 className={styles.serviceTitle}>Technical Team</h2>
          <p className={styles.serviceText}>Direct line to the technical operations center for high-priority system issues.</p>
          <a href="#" className={styles.serviceLink}>
            CONTACT SUPPORT <ArrowRight size={14} strokeWidth={3} />
          </a>
        </div>

      </div>

      {/* Main Split */}
      <div className={styles.mainSplit}>
        
        {/* Left Col (FAQ & Banner) */}
        <div className={styles.faqCol}>
          
          <div className={styles.faqHeader}>
            <div className={styles.faqTitleBlock}>
              <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
              <span className={styles.faqSub}>Updated 2 hours ago by Central IT</span>
            </div>
            <a href="#" className={styles.faqLink}>GENERAL QUERIES</a>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`${styles.faqItem} ${openFaq === idx ? styles.open : ''}`}
              >
                <div 
                  className={styles.faqQuestion} 
                  onClick={() => toggleFaq(idx)}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <div className={styles.faqIcon}>
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <div className={styles.faqAnswerBox}>
                  <p className={styles.answerText}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className={styles.academyBanner}>
            <Image 
              src="/academy_banner.png" 
              alt="Knowledge Base Academy" 
              fill 
              className={styles.bannerImg}
            />
            <div className={styles.bannerOverlay}></div>
            
            <span className={styles.bannerTag}>DID YOU KNOW?</span>
            <h3 className={styles.bannerTitle}>Our Knowledge Base has over 500+ articles.</h3>
            <button className={styles.bannerBtn}>VISIT THE FULL ACADEMY</button>

          </div>

        </div>

        {/* Right Col (Ticket Form) */}
        <div className={styles.supportCol}>
          
          <div className={styles.formHeader}>
            <div className={styles.priorityTag}>
              <ShieldCheck size={16} strokeWidth={2.5} /> PRIORITY SUPPORT
            </div>
            <h2 className={styles.formTitle}>Need Help?</h2>
            <p className={styles.formSub}>Report an issue or suggest a feature to our technical support desk.</p>
          </div>

          <div className={styles.ticketForm}>
            
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>ISSUE CATEGORY</label>
              <div className={styles.formSelectWrap}>
                <select className={styles.formSelect} defaultValue="Technical Glitch">
                  <option value="Technical Glitch">Technical Glitch</option>
                  <option value="Data Export Error">Data Export Error</option>
                  <option value="Account Access">Account Access</option>
                  <option value="Feature Request">Feature Request</option>
                </select>
                <ChevronDown size={18} strokeWidth={2.5} className={styles.selectIcon} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>SUBJECT</label>
              <input 
                type="text" 
                className={styles.formInput} 
                placeholder="Briefly describe the issue" 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>DESCRIPTION</label>
              <textarea 
                className={styles.formTextarea} 
                placeholder="Provide details, steps to reproduce, or the leader's name involved..."
              ></textarea>
            </div>

            <button className={styles.submitBtn}>
              <Send size={18} strokeWidth={2.5} />
              SUBMIT REPORT
            </button>

            <span className={styles.disclaimer}>
              By submitting, you agree to our Internal Data Handling Policy. A support ticket will be created and tracked in your dashboard.
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}
