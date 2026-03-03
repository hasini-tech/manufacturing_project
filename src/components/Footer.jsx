import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#1a3e6f',
      color: '#fff',
      paddingTop: 60,
      marginTop: 'auto'
    },
    footerContainer: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 40,
      marginBottom: 40
    },
    footerSection: {
      marginBottom: 20
    },
    footerTitle: {
      fontSize: 18,
      marginBottom: 20,
      position: 'relative',
      paddingBottom: 10,
      borderBottom: '2px solid #ff6b35',
      display: 'inline-block',
      color: '#fff'
    },
    footerText: {
      lineHeight: 1.6,
      opacity: 0.9,
      marginBottom: 20,
      color: '#fff'
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      opacity: 0.9,
      cursor: 'pointer'
    },
    footerBottom: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      padding: '20px 0',
      textAlign: 'center',
      fontSize: 14,
      opacity: 0.8
    },
    socialLinks: {
      display: 'flex',
      gap: 15
    },
    socialIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      color: '#fff',
      fontSize: 18,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      marginBottom: 12
    },
    contactItem: {
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: '#fff'
    },
    bottomText: {
      color: '#fff',
      margin: 0
    }
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#ff6b35';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
  };

  const handleLinkHover = (e, isEnter) => {
    e.target.style.color = isEnter ? '#ff6b35' : '#fff';
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Company Info */}
        <div style={styles.footerSection}>
          <h3 style={{ ...styles.footerTitle, fontSize: 24 }}>ManuCorp Industries</h3>
          <p style={styles.footerText}>Leading manufacturer of industrial equipment and solutions since 1995. Committed to quality and innovation.</p>
          <div style={styles.socialLinks}>
            {['f', 't', 'in', 'ig'].map((social, index) => (
              <a 
                key={index}
                href="#" 
                style={styles.socialIcon}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Quick Links</h4>
          <ul style={styles.list}>
            {['Home', 'About', 'Products', 'Services', 'Contact'].map((item, index) => (
              <li key={index} style={styles.listItem}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={styles.footerLink}
                  onMouseEnter={(e) => handleLinkHover(e, true)}
                  onMouseLeave={(e) => handleLinkHover(e, false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Our Products</h4>
          <ul style={styles.list}>
            {['Industrial Machinery', 'Precision Components', 'Automation Systems', 'Tools & Equipment', 'Custom Solutions'].map((item, index) => (
              <li key={index} style={styles.listItem}>
                <Link 
                  to="/products"
                  style={styles.footerLink}
                  onMouseEnter={(e) => handleLinkHover(e, true)}
                  onMouseLeave={(e) => handleLinkHover(e, false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Contact Info</h4>
          <ul style={styles.list}>
            <li style={styles.contactItem}>
              <span>📍</span> 123 Industrial Ave, City, State 12345
            </li>
            <li style={styles.contactItem}>
              <span>📞</span> +1 (555) 123-4567
            </li>
            <li style={styles.contactItem}>
              <span>✉️</span> info@manucorp.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.footerBottom}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <p style={styles.bottomText}>&copy; {new Date().getFullYear()} ManuCorp Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;