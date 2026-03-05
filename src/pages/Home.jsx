// scr/component/Home.jsx 
import React from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../assets/images/manufacturing.png';
import productImg1 from '../assets/images/imagemanufacture.png';
import productImg2 from '../assets/images/manufacture10.png';
import productImg3 from '../assets/images/manufacture2.png';

const Home = () => {
  const features = [
    { icon: '⚙️', title: 'Advanced Technology', desc: 'State-of-the-art machinery for precision manufacturing' },
    { icon: '🏆', title: 'Quality Assurance', desc: 'ISO 9001:2015 certified with rigorous quality control' },
    { icon: '👥', title: 'Expert Team', desc: 'Skilled engineers with decades of experience' },
    { icon: '🚀', title: 'Innovation', desc: 'Continuous R&D for innovative solutions' }
  ];

  const products = [
    { name: 'Industrial Machinery', desc: 'Heavy-duty machinery for industrial applications', img: productImg1 },
    { name: 'Precision Components', desc: 'High-precision components for various industries', img: productImg2 },
    { name: 'Automation Systems', desc: 'Complete automation solutions for manufacturing', img: productImg3 }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        .home-hero {
          min-height: 500px;
          background: linear-gradient(135deg, rgba(26,62,111,0.9) 0%, rgba(0,0,0,0.7) 100%), url(${heroBg}) center/cover;
          display: flex;
          align-items: center;
          color: #fff;
          padding: 60px 20px;
        }
        .hero-title { font-size: 2rem; margin-bottom: 16px; line-height: 1.2; }
        .hero-text { font-size: 1rem; margin-bottom: 24px; line-height: 1.6; opacity: 0.9; }
        .hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-primary {
          display: inline-block; padding: 12px 24px;
          background: #ff6b35; color: #fff;
          text-decoration: none; border-radius: 5px;
          font-size: 15px; font-weight: 600;
          border: 2px solid #ff6b35; transition: all 0.3s;
        }
        .btn-primary:hover { background: #e55a2b; border-color: #e55a2b; }
        .btn-outline {
          display: inline-block; padding: 12px 24px;
          background: transparent; color: #ff6b35;
          text-decoration: none; border-radius: 5px;
          font-size: 15px; font-weight: 600;
          border: 2px solid #ff6b35; transition: all 0.3s;
        }
        .btn-outline:hover { background: #ff6b35; color: #fff; }
        .section { padding: 60px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-title { text-align: center; font-size: 1.8rem; margin-bottom: 40px; color: #1a3e6f; }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .feature-card {
          text-align: center; padding: 30px 20px;
          background: #fff; border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }
        .feature-card:hover { transform: translateY(-8px); }
        .feature-icon {
          width: 70px; height: 70px; margin: 0 auto 16px;
          background: #1a3e6f; color: #fff;
          border-radius: 50%; display: flex;
          align-items: center; justify-content: center;
          font-size: 30px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .product-card {
          background: #fff; border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }
        .product-card:hover { transform: translateY(-5px); }
        .product-img { width: 100%; height: 220px; object-fit: cover; }
        .product-body { padding: 20px; }
        .cta-section {
          background: linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%);
          color: #fff; text-align: center; padding: 60px 20px;
        }
        .cta-title { font-size: 1.8rem; margin-bottom: 16px; }
        .cta-text { font-size: 1rem; margin-bottom: 28px; opacity: 0.9; }

        @media (min-width: 480px) {
          .hero-title { font-size: 2.5rem; }
        }
        @media (min-width: 640px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .hero-title { font-size: 3rem; }
          .hero-text { font-size: 1.1rem; }
          .features-grid { grid-template-columns: repeat(4, 1fr); }
          .products-grid { grid-template-columns: repeat(3, 1fr); }
          .section-title { font-size: 2.2rem; }
          .cta-title { font-size: 2.2rem; }
        }
      `}</style>

      {/* Hero */}
      <section className="home-hero">
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <h1 className="hero-title">Precision Manufacturing Solutions</h1>
          <p className="hero-text" style={{ maxWidth: 600 }}>
            Delivering excellence in industrial manufacturing with cutting-edge technology and unmatched quality since 1995
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <Link to="/products" className="btn-outline">View Products</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 style={{ marginBottom: 10, color: '#1a3e6f', fontSize: '1.1rem' }}>{f.title}</h3>
                <p style={{ color: '#666', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            {products.map((p, i) => (
              <div key={i} className="product-card">
                <img src={p.img} alt={p.name} className="product-img" />
                <div className="product-body">
                  <h3 style={{ color: '#1a3e6f', marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ color: '#666', marginBottom: 16, lineHeight: 1.6 }}>{p.desc}</p>
                  <Link to="/products" className="btn-outline" style={{ display: 'inline-block' }}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">Contact us today for a free consultation and quote</p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;