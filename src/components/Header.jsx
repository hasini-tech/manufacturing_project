import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 👇 IMPORT YOUR LOGO HERE 👇
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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

        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: var(--transition);
          border-bottom: 1px solid transparent;
        }

        .header-scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px; /* DECREASED FROM 90px */
          transition: var(--transition);
        }

        .header-scrolled .header-container {
          height: 55px; /* DECREASED FROM 70px */
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          z-index: 1001;
        }

        .logo-image {
          height: 32px; /* DECREASED FROM 40px */
          width: auto;
          object-fit: contain;
          transition: height 0.3s ease;
        }

        .header-scrolled .logo-image {
          height: 24px; /* DECREASED FROM 32px */
        }

        .logo-text {
          color: var(--primary-navy);
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          font-family: system-ui, -apple-system, sans-serif;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 40px;
          }
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 32px;
          margin: 0;
          padding: 0;
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
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-orange);
          transition: var(--transition);
          border-radius: 2px;
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .cta-button {
          background-color: var(--primary-navy);
          color: white !important;
          padding: 10px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: var(--transition);
          border: 2px solid var(--primary-navy);
        }

        .cta-button:hover {
          background-color: transparent;
          color: var(--primary-navy) !important;
        }

        .hamburger-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
          padding: 10px;
        }

        @media (min-width: 992px) {
          .hamburger-btn {
            display: none;
          }
        }

        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: var(--primary-navy);
          margin: 5px 0;
          transition: var(--transition);
        }

        .hamburger-btn.open .line-1 {
          transform: rotate(-45deg) translate(-5px, 5px);
        }

        .hamburger-btn.open .line-2 {
          opacity: 0;
        }

        .hamburger-btn.open .line-3 {
          transform: rotate(45deg) translate(-5px, -5px);
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 400px;
          height: 100vh;
          background-color: var(--bg-light);
          box-shadow: -5px 0 15px rgba(0,0,0,0.05);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 80px 30px 40px; /* DECREASED TOP PADDING FROM 100px */
          display: flex;
          flex-direction: column;
        }

        .mobile-drawer.open {
          right: 0;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--primary-navy);
          font-size: 1.25rem;
          font-weight: 600;
          display: block;
          transition: var(--transition);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--primary-orange);
          transform: translateX(10px);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          z-index: 999;
        }

        .overlay.open {
          opacity: 1;
          visibility: visible;
        }
      `}</style>

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

          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link 
                      to={path}
                      className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </nav>

          <button 
            className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="hamburger-line line-1"></div>
            <div className="hamburger-line line-2"></div>
            <div className="hamburger-line line-3"></div>
          </button>
        </div>
      </header>

      <div 
        className={`overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      />

      <nav className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <li key={item}>
                <Link 
                  to={path}
                  className={`mobile-nav-link ${location.pathname === path ? 'active' : ''}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/contact" className="cta-button" style={{ textAlign: 'center' }}>
          Get in Touch
        </Link>
      </nav>
    </>
  );
};

export default Header;