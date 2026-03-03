import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    header: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '15px 0',
      width: '100%'
    },
    headerContainer: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 24,
      fontWeight: 700,
      color: '#1a3e6f',
      textDecoration: 'none',
      zIndex: 1001
    },
    logoIcon: {
      color: '#ff6b35',
      fontSize: 30
    },
    logoText: {
      color: '#1a3e6f',
      fontSize: 24,
      fontWeight: 700
    },
    menuToggle: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      fontSize: 28,
      cursor: 'pointer',
      color: '#1a3e6f',
      zIndex: 1001,
      padding: '5px 10px'
    },
    navMenu: {
      display: 'flex',
      alignItems: 'center'
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
      gap: 30,
      margin: 0,
      padding: 0
    },
    navItem: {
      margin: 0,
      padding: 0
    },
    navLink: {
      textDecoration: 'none',
      color: '#333333',
      fontWeight: 500,
      transition: 'color 0.3s ease',
      fontSize: 16,
      cursor: 'pointer',
      padding: '5px 0'
    },
    mobileNavMenu: {
      position: 'fixed',
      top: 0,
      left: isMenuOpen ? 0 : '-100%',
      width: '100%',
      height: '100vh',
      backgroundColor: '#ffffff',
      transition: 'left 0.3s ease',
      padding: '80px 20px 20px',
      zIndex: 1000
    },
    mobileNavList: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      gap: 25,
      margin: 0,
      padding: 0,
      alignItems: 'center'
    },
    mobileNavLink: {
      textDecoration: 'none',
      color: '#1a3e6f',
      fontWeight: 500,
      fontSize: 20,
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      padding: '10px 0',
      display: 'block'
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 999,
      display: isMenuOpen ? 'block' : 'none'
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = '#ff6b35';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = isMobile ? '#1a3e6f' : '#333333';
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <Link to="/" style={styles.logo} onClick={closeMenu}>
            <span style={styles.logoIcon}>⚙️</span>
            <span style={styles.logoText}>ManuCorp Industries</span>
          </Link>

          <button style={styles.menuToggle} onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {!isMobile && (
            <nav style={styles.navMenu}>
              <ul style={styles.navList}>
                {['Home', 'About', 'Products', 'Services', 'Industries', 'Quality', 'Contact'].map((item) => (
                  <li key={item} style={styles.navItem}>
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      style={styles.navLink}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>

      {isMobile && (
        <>
          <div style={styles.overlay} onClick={closeMenu} />
          <nav style={styles.mobileNavMenu}>
            <ul style={styles.mobileNavList}>
              {['Home', 'About', 'Products', 'Services', 'Industries', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    style={styles.mobileNavLink}
                    onClick={closeMenu}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;