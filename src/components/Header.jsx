// scr/component/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/imagelogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  let location = { pathname: '/' };
  try {
    location = useLocation();
  } catch (error) {
    console.warn("Header should be wrapped in a Router.");
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navItems = ['Home', 'About', 'Products', 'Services', 'Industries', 'Quality'];

  return (
    <>
      <style>{`
        :root {
          --primary-navy: #1a3e6f;
          --primary-orange: #ff6b35;
          --text-dark: #334155;
          --bg-light: #ffffff;
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ─── Header Shell ─── */
        .header-wrapper {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 1000;
          transition: var(--transition);
          border-bottom: 1px solid transparent;
          box-sizing: border-box;
        }
        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        /* ─── Inner Container ─── */
        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
          transition: var(--transition);
        }
        .header-scrolled .header-container {
          height: 52px;
        }

        /* ─── Logo ─── */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          z-index: 1001;
          flex-shrink: 0;
          max-width: calc(100% - 56px); /* leave room for hamburger */
        }
        .logo-image {
          height: 28px;
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
          flex-shrink: 0;
        }
        .header-scrolled .logo-image {
          height: 22px;
        }
        .logo-text {
          color: var(--primary-navy);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          font-family: system-ui, -apple-system, sans-serif;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ─── Desktop Nav (hidden on mobile) ─── */
        .desktop-nav {
          display: none;
        }

        /* ─── Hamburger Button ─── */
        .hamburger-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          padding: 8px;
          margin-right: -8px;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          align-items: center;
          gap: 5px;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .hamburger-btn:hover {
          background: rgba(26,62,111,0.06);
        }
        .hamburger-line {
          width: 22px;
          height: 2px;
          background-color: var(--primary-navy);
          transition: var(--transition);
          border-radius: 2px;
        }
        .hamburger-btn.open .line-1 {
          transform: rotate(-45deg) translate(-4px, 5px);
        }
        .hamburger-btn.open .line-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-btn.open .line-3 {
          transform: rotate(45deg) translate(-4px, -5px);
        }

        /* ─── Overlay ─── */
        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100vh;
          background-color: rgba(10, 20, 40, 0.45);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          z-index: 999;
        }
        .overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* ─── Mobile Drawer ─── */
        .mobile-drawer {
          position: fixed;
          top: 0; right: -100%;
          width: 100%;
          max-width: 320px;
          height: 100vh;
          background-color: var(--bg-light);
          box-shadow: -8px 0 24px rgba(0,0,0,0.08);
          z-index: 1000;
          transition: right 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        .mobile-drawer.open {
          right: 0;
        }

        /* Drawer header strip */
        .drawer-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px 20px;
          border-bottom: 1px solid #f0f4f8;
          flex-shrink: 0;
        }
        .drawer-logo-img {
          height: 26px;
          width: auto;
          object-fit: contain;
        }
        .drawer-logo-text {
          color: var(--primary-navy);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: -0.2px;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Nav links in drawer */
        .mobile-nav-list {
          list-style: none;
          padding: 16px 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .mobile-nav-item {
          border-bottom: 1px solid #f4f7fb;
        }
        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          transition: var(--transition);
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--primary-orange);
          background: rgba(255,107,53,0.04);
          padding-left: 26px;
        }
        .mobile-nav-link.active {
          border-left: 3px solid var(--primary-orange);
          padding-left: 23px;
        }
        .nav-arrow {
          font-size: 0.75rem;
          opacity: 0.4;
        }

        /* CTA inside drawer */
        .drawer-cta-wrap {
          padding: 20px;
          flex-shrink: 0;
        }
        .drawer-cta-btn {
          display: block;
          width: 100%;
          padding: 14px 24px;
          background: var(--primary-navy);
          color: #fff !important;
          text-decoration: none;
          text-align: center;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          font-family: system-ui, -apple-system, sans-serif;
          transition: var(--transition);
          box-shadow: 0 4px 14px rgba(26,62,111,0.25);
          box-sizing: border-box;
        }
        .drawer-cta-btn:hover {
          background: var(--primary-orange);
          box-shadow: 0 4px 14px rgba(255,107,53,0.35);
        }

        /* ─── Desktop styles (992px+) ─── */
        @media (min-width: 992px) {
          .hamburger-btn { display: none; }

          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 36px;
          }
          .header-container {
            padding: 0 24px;
            height: 70px;
          }
          .header-scrolled .header-container {
            height: 56px;
          }
          .logo-image { height: 34px; }
          .header-scrolled .logo-image { height: 26px; }
          .logo-text { font-size: 1.25rem; }
          .logo-link { gap: 12px; }

          .nav-list {
            display: flex;
            list-style: none;
            gap: 28px;
            margin: 0; padding: 0;
          }
          .nav-link {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 0.95rem;
            position: relative;
            padding: 8px 0;
            transition: var(--transition);
          }
          .nav-link:hover, .nav-link.active {
            color: var(--primary-navy);
          }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0;
            width: 0; height: 2px;
            background: var(--primary-orange);
            transition: var(--transition);
            border-radius: 2px;
          }
          .nav-link:hover::after, .nav-link.active::after {
            width: 100%;
          }
          .cta-button {
            background: var(--primary-navy);
            color: #fff !important;
            padding: 10px 22px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: var(--transition);
            border: 2px solid var(--primary-navy);
            white-space: nowrap;
          }
          .cta-button:hover {
            background: transparent;
            color: var(--primary-navy) !important;
          }
        }

        /* ─── Small phones (≤360px) ─── */
        @media (max-width: 360px) {
          .header-container { padding: 0 12px; }
          .logo-text { font-size: 0.75rem; }
          .mobile-drawer { max-width: 290px; }
        }
      `}</style>

      {/* ── Header Bar ── */}
      <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">

          <Link to="/" className="logo-link">
            <img
              src={logo}
              alt="Stanpul Logo"
              className="logo-image"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="logo-text">STANPUL TECHNOLOGIES</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link to={path} className={`nav-link ${location.pathname === path ? 'active' : ''}`}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/contact" className="cta-button">Get in Touch</Link>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <div className="hamburger-line line-1" />
            <div className="hamburger-line line-2" />
            <div className="hamburger-line line-3" />
          </button>
        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={`overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ── */}
      <nav className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>

        {/* Drawer top branding */}
        <div className="drawer-header">
          <img
            src={logo}
            alt="Logo"
            className="drawer-logo-img"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="drawer-logo-text">STANPUL TECHNOLOGIES</span>
        </div>

        {/* Nav links */}
        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <li key={item} className="mobile-nav-item">
                <Link
                  to={path}
                  className={`mobile-nav-link ${location.pathname === path ? 'active' : ''}`}
                >
                  {item}
                  <span className="nav-arrow">›</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="drawer-cta-wrap">
          <Link to="/contact" className="drawer-cta-btn">
            Get in Touch
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;