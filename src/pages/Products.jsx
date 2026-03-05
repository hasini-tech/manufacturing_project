// scr/component/Product.jsx 
import React, { useState } from 'react';

import machineryImg from '../assets/images/imagemanufacture.png';
import componentsImg from '../assets/images/manufacture10.png';
import automationImg from '../assets/images/manufacture2.png';
import toolsImg from '../assets/images/manufacture3.png';
import customImg from '../assets/images/manufacture4.png';
import cncImg from '../assets/images/manufacture5.png';
import newProductImg1 from '../assets/images/manufacture7.png';
import newProductImg2 from '../assets/images/manufacture8.png';
import newProductImg3 from '../assets/images/manufacture10.png';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    { id: 1, category: 'machinery', name: 'Industrial Machinery', description: 'Heavy-duty machinery for industrial applications with advanced automation capabilities.', image: machineryImg, features: ['High precision', 'Automated controls', 'Energy efficient', 'Durable construction'] },
    { id: 2, category: 'components', name: 'Precision Components', description: 'High-precision components manufactured to exact specifications for various industries.', image: componentsImg, features: ['Tight tolerances', 'Various materials', 'Quality certified', 'Custom designs'] },
    { id: 3, category: 'automation', name: 'Automation Systems', description: 'Complete automation solutions for manufacturing processes and production lines.', image: automationImg, features: ['PLC integration', 'Robotic systems', 'SCADA software', 'Remote monitoring'] },
    { id: 4, category: 'tools', name: 'Tools & Equipment', description: 'Professional-grade tools and equipment for industrial and commercial use.', image: toolsImg, features: ['Ergonomic design', 'Long-lasting', 'Safety features', 'Warranty included'] },
    { id: 5, category: 'custom', name: 'Custom Solutions', description: 'Tailored manufacturing solutions designed to meet specific client requirements.', image: customImg, features: ['Personalized design', 'Prototype development', 'Full support', 'Flexible production'] },
    { id: 6, category: 'machinery', name: 'CNC Machines', description: 'Computer-controlled machining centers for high-precision manufacturing.', image: cncImg, features: ['Multi-axis control', 'High speed', 'Precision tools', 'Easy programming'] },
    { id: 7, category: 'automation', name: 'Smart Sensors', description: 'IoT-enabled industrial sensors for real-time monitoring and predictive maintenance.', image: newProductImg1, features: ['Real-time tracking', 'IoT Cloud integration', 'High accuracy', 'Easy installation'] },
    { id: 8, category: 'components', name: 'Hydraulic Valves', description: 'Heavy-duty hydraulic directional control valves for extreme pressure environments.', image: newProductImg2, features: ['High pressure rated', 'Corrosion resistant', 'Leak-proof seals', 'Fast response time'] },
    { id: 9, category: 'tools', name: 'Welding Stations', description: 'Advanced TIG/MIG welding stations with digital displays and precise heat control.', image: newProductImg3, features: ['Digital display', 'Multi-process capable', 'Overheat protection', 'Inverter technology'] }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'components', name: 'Components' },
    { id: 'automation', name: 'Automation' },
    { id: 'tools', name: 'Tools' },
    { id: 'custom', name: 'Custom' }
  ];

  const filtered = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        .products-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%);
          color: #fff; padding: 60px 20px; text-align: center;
        }
        .products-hero h1 { font-size: 2.2rem; margin-bottom: 12px; }
        .products-hero p { font-size: 1rem; opacity: 0.9; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 60px 0; }
        .filter-bar {
          display: flex; gap: 8px; flex-wrap: wrap;
          justify-content: center; margin-bottom: 36px;
        }
        .filter-btn {
          padding: 9px 16px; border: none; border-radius: 5px;
          cursor: pointer; font-size: 14px; font-weight: 500;
          transition: all 0.3s; white-space: nowrap;
        }
        .filter-btn.active { background: #1a3e6f; color: #fff; }
        .filter-btn:not(.active) { background: #f0f0f0; color: #333; }
        .filter-btn:not(.active):hover { background: #e0e0e0; }
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
        .product-card:hover { transform: translateY(-8px); }
        .product-img { width: 100%; height: 220px; object-fit: cover; }
        .product-body { padding: 20px; }
        .product-title { color: #1a3e6f; margin-bottom: 8px; font-size: 1.2rem; }
        .product-desc { color: #666; margin-bottom: 14px; line-height: 1.6; font-size: 0.95rem; }
        .product-features { list-style: none; padding: 0; margin: 0 0 18px 0; }
        .feat-item { color: #666; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; }
        .quote-btn {
          display: block; width: 100%; padding: 11px 20px;
          background: #ff6b35; color: #fff;
          border: none; border-radius: 5px;
          font-size: 14px; font-weight: bold;
          cursor: pointer; transition: background 0.3s;
          text-align: center;
        }
        .quote-btn:hover { background: #e55a2b; }

        @media (min-width: 480px) {
          .products-hero h1 { font-size: 2.8rem; }
        }
        @media (min-width: 640px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
          .filter-btn { font-size: 15px; padding: 10px 20px; }
        }
      `}</style>

      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our range of high-quality industrial products</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button key={c.id} className={`filter-btn ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
                {c.name}
              </button>
            ))}
          </div>
          <div className="products-grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card">
                <img src={p.image} alt={p.name} className="product-img" />
                <div className="product-body">
                  <h3 className="product-title">{p.name}</h3>
                  <p className="product-desc">{p.description}</p>
                  <ul className="product-features">
                    {p.features.map((f, i) => (
                      <li key={i} className="feat-item"><span style={{ color: '#ff6b35' }}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <button className="quote-btn">Request Quote</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;