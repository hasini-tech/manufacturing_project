import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    hero: {
      height: 600,
      background: 'linear-gradient(135deg, rgba(26,62,111,0.9) 0%, rgba(0,0,0,0.7) 100%), url("https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80") center/cover',
      display: 'flex',
      alignItems: 'center',
      color: '#fff'
    },
    heroContent: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px',
      width: '100%'
    },
    heroTitle: {
      fontSize: 48,
      marginBottom: 20,
      maxWidth: 800
    },
    heroText: {
      fontSize: 18,
      marginBottom: 30,
      maxWidth: 600
    },
    heroButtons: {
      display: 'flex',
      gap: 20
    },
    btn: {
      display: 'inline-block',
      padding: '12px 30px',
      backgroundColor: '#ff6b35',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: 5,
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      fontWeight: 500
    },
    btnOutline: {
      backgroundColor: 'transparent',
      border: '2px solid #ff6b35',
      color: '#ff6b35'
    },
    section: {
      padding: '80px 0'
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: 36,
      marginBottom: 50,
      color: '#1a3e6f',
      position: 'relative'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 30
    },
    featureCard: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#fff',
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    featureIcon: {
      width: 80,
      height: 80,
      margin: '0 auto 20px',
      backgroundColor: '#1a3e6f',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 35
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    },
    productCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    productImage: {
      width: '100%',
      height: 250,
      objectFit: 'cover'
    },
    productTitle: {
      padding: '20px 20px 10px',
      color: '#1a3e6f'
    },
    productText: {
      padding: '0 20px 20px',
      color: '#666'
    },
    cta: {
      background: 'linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%)',
      color: '#fff',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: 36,
      marginBottom: 20
    },
    ctaText: {
      fontSize: 18,
      marginBottom: 30
    }
  };

  const features = [
    { icon: '⚙️', title: 'Advanced Technology', desc: 'State-of-the-art machinery for precision manufacturing' },
    { icon: '🏆', title: 'Quality Assurance', desc: 'ISO 9001:2015 certified with rigorous quality control' },
    { icon: '👥', title: 'Expert Team', desc: 'Skilled engineers with decades of experience' },
    { icon: '🚀', title: 'Innovation', desc: 'Continuous R&D for innovative solutions' }
  ];

  const products = [
    { name: 'Industrial Machinery', desc: 'Heavy-duty machinery for industrial applications', img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Precision Components', desc: 'High-precision components for various industries', img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Automation Systems', desc: 'Complete automation solutions for manufacturing', img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Precision Manufacturing Solutions</h1>
          <p style={styles.heroText}>Delivering excellence in industrial manufacturing with cutting-edge technology and unmatched quality since 1995</p>
          <div style={styles.heroButtons}>
            <Link to="/contact" style={styles.btn}>Get a Quote</Link>
            <Link to="/products" style={{ ...styles.btn, ...styles.btnOutline }}>View Products</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={{ marginBottom: 15, color: '#1a3e6f' }}>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <div style={styles.productsGrid}>
            {products.map((product, index) => (
              <div key={index} style={styles.productCard}>
                <img src={product.img} alt={product.name} style={styles.productImage} />
                <h3 style={styles.productTitle}>{product.name}</h3>
                <p style={styles.productText}>{product.desc}</p>
                <Link to="/products" style={{ ...styles.btn, ...styles.btnOutline, margin: '0 20px 20px' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...styles.section, ...styles.cta }}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p style={styles.ctaText}>Contact us today for a free consultation and quote</p>
          <Link to="/contact" style={styles.btn}>Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;