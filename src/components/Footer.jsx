// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Accordion state for mobile — each section can expand/collapse
  const [openSection, setOpenSection] = useState(null);

  const toggle = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const quickLinks = ['Home', 'About', 'Products', 'Services', 'Contact'];
  const productLinks = ['Industrial Machinery', 'Precision Components', 'Automation Systems', 'Tools & Equipment', 'Custom Solutions'];
  const socials = [
    { label: 'f',  href: '#' },
    { label: 't',  href: '#' },
    { label: 'in', href: '#' },
    { label: 'ig', href: '#' },
  ];

  return (
    <footer>
      <style>{`
        /* ─── Base ─── */
        .footer-root {
          background-color: #1a3e6f;
          color: #fff;
          font-family: system-ui, -apple-system, sans-serif;
          margin-top: auto;
        }

        /* ─── Main grid ─── */
        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 24px;
          display: grid;
          grid-template-columns: 1fr;   /* mobile: single column */
          gap: 0;
        }

        /* ─── Each column ─── */
        .footer-col {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-col:last-child {
          border-bottom: none;
        }

        /* ─── Accordion toggle button (mobile only) ─── */
        .footer-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 18px 0;
          font-size: 1rem;
          font-weight: 700;
          font-family: inherit;
          -webkit-tap-highlight-color: transparent;
        }
        .footer-toggle-arrow {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
          opacity: 0.7;
        }
        .footer-toggle-arrow.open {
          transform: rotate(180deg);
        }

        /* Brand column header is always visible (no toggle) */
        .footer-brand-header {
          padding: 18px 0 8px;
        }

        /* ─── Collapsible body ─── */
        .footer-body {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.3s ease;
          padding-bottom: 0;
        }
        .footer-body.open {
          max-height: 400px;
          padding-bottom: 20px;
        }
        /* Brand col body is always open on mobile */
        .footer-body.always-open {
          max-height: none;
          padding-bottom: 20px;
        }

        /* ─── Section heading underline ─── */
        .footer-heading {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 2px solid #ff6b35;
          display: inline-block;
        }
        /* Larger for brand */
        .footer-heading-brand {
          font-size: 1.3rem;
        }

        /* ─── Text & links ─── */
        .footer-text {
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          font-size: 0.9rem;
          margin-bottom: 16px;
        }
        .footer-link {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 0.9rem;
          display: block;
          padding: 5px 0;
          transition: color 0.25s, padding-left 0.25s;
        }
        .footer-link:hover {
          color: #ff6b35;
          padding-left: 6px;
        }
        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-list li {
          margin-bottom: 2px;
        }

        /* ─── Contact items ─── */
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: rgba(255,255,255,0.85);
          font-size: 0.9rem;
          margin-bottom: 10px;
          line-height: 1.5;
        }
        .contact-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ─── Social icons ─── */
        .social-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.25s, transform 0.25s;
          /* 44px touch target via padding */
          padding: 2px;
        }
        .social-icon:hover {
          background: #ff6b35;
          transform: translateY(-3px);
        }

        /* ─── Bottom bar ─── */
        .footer-bottom {
          background: rgba(0,0,0,0.18);
          padding: 14px 20px;
          text-align: center;
        }
        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .footer-copy {
          color: rgba(255,255,255,0.75);
          font-size: 0.82rem;
          margin: 0;
        }
        .footer-bottom-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-bottom-link {
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: #ff6b35; }

        /* ─── Tablet (640px+): 2-column grid ─── */
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            padding: 48px 24px 32px;
          }
          /* Disable accordion on tablet+ */
          .footer-col {
            border-bottom: none;
          }
          .footer-toggle {
            pointer-events: none;
            padding: 0 0 14px;
          }
          .footer-toggle-arrow { display: none; }
          .footer-body {
            max-height: none !important;
            overflow: visible;
            padding-bottom: 0 !important;
          }
          .footer-brand-header { padding: 0 0 8px; }
          .footer-bottom-inner { flex-direction: row; justify-content: space-between; }
        }

        /* ─── Desktop (1024px+): 4-column grid ─── */
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.4fr 1fr 1.2fr 1.1fr;
            gap: 40px;
            padding: 56px 24px 36px;
          }
          .footer-heading { font-size: 1.05rem; }
          .footer-heading-brand { font-size: 1.45rem; }
          .footer-text { font-size: 0.95rem; }
          .footer-link { font-size: 0.95rem; }
          .contact-item { font-size: 0.95rem; }
        }

        /* ─── Small phones (≤360px) ─── */
        @media (max-width: 360px) {
          .footer-grid { padding: 32px 14px 20px; }
          .footer-heading-brand { font-size: 1.1rem; }
          .social-icon { width: 36px; height: 36px; }
        }
      `}</style>

      <div className="footer-root">
        <div className="footer-grid">

          {/* ── Col 1: Brand ── */}
          <div className="footer-col">
            <div className="footer-brand-header">
              <span className={`footer-heading footer-heading-brand`}>ManuCorp Industries</span>
            </div>
            {/* Always visible — no accordion on brand */}
            <div className="footer-body always-open">
              <p className="footer-text">
                Leading manufacturer of industrial equipment and solutions since 1995.
                Committed to quality and innovation.
              </p>
              <div className="social-row">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="social-icon" aria-label={`Social ${s.label}`}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="footer-col">
            <button className="footer-toggle" onClick={() => toggle('links')} aria-expanded={openSection === 'links'}>
              <span className="footer-heading" style={{ marginBottom: 0, paddingBottom: 0, border: 'none' }}>
                Quick Links
              </span>
              <span className={`footer-toggle-arrow ${openSection === 'links' ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`footer-body ${openSection === 'links' ? 'open' : ''}`}>
              <ul className="footer-list">
                {quickLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="footer-link"
                    >
                      › {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 3: Products ── */}
          <div className="footer-col">
            <button className="footer-toggle" onClick={() => toggle('products')} aria-expanded={openSection === 'products'}>
              <span className="footer-heading" style={{ marginBottom: 0, paddingBottom: 0, border: 'none' }}>
                Our Products
              </span>
              <span className={`footer-toggle-arrow ${openSection === 'products' ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`footer-body ${openSection === 'products' ? 'open' : ''}`}>
              <ul className="footer-list">
                {productLinks.map((item, i) => (
                  <li key={i}>
                    <Link to="/products" className="footer-link">
                      › {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 4: Contact ── */}
          <div className="footer-col">
            <button className="footer-toggle" onClick={() => toggle('contact')} aria-expanded={openSection === 'contact'}>
              <span className="footer-heading" style={{ marginBottom: 0, paddingBottom: 0, border: 'none' }}>
                Contact Info
              </span>
              <span className={`footer-toggle-arrow ${openSection === 'contact' ? 'open' : ''}`}>▼</span>
            </button>
            <div className={`footer-body ${openSection === 'contact' ? 'open' : ''}`}>
              <ul className="footer-list">
                <li>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>123 Industrial Ave, City, State 12345</span>
                  </div>
                </li>
                <li>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <a href="tel:+15551234567" className="footer-link" style={{ padding: 0 }}>
                      +1 (555) 123-4567
                    </a>
                  </div>
                </li>
                <li>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <a href="mailto:info@manucorp.com" className="footer-link" style={{ padding: 0 }}>
                      info@manucorp.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} ManuCorp Industries. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Use</a>
              <a href="#" className="footer-bottom-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;