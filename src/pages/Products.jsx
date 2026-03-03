import React, { useState } from 'react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const styles = {
    pageHeader: {
      background: 'linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%)',
      color: '#fff',
      padding: '60px 0',
      textAlign: 'center'
    },
    pageTitle: {
      fontSize: 48,
      marginBottom: 20
    },
    pageSubtitle: {
      fontSize: 18,
      opacity: 0.9
    },
    container: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 20px'
    },
    section: {
      padding: '80px 0'
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
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    productImage: {
      width: '100%',
      height: 250,
      objectFit: 'cover'
    },
    productContent: {
      padding: 20
    },
    productTitle: {
      color: '#1a3e6f',
      marginBottom: 10,
      fontSize: 24
    },
    productDesc: {
      color: '#666',
      marginBottom: 15,
      lineHeight: 1.6
    },
    productFeatures: {
      listStyle: 'none',
      padding: 0,
      marginBottom: 20
    },
    featureItem: {
      color: '#666',
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    },
    btn: {
      display: 'inline-block',
      padding: '10px 25px',
      backgroundColor: '#ff6b35',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: 5,
      transition: 'background-color 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    categoryFilter: {
      display: 'flex',
      justifyContent: 'center',
      gap: 15,
      marginBottom: 40,
      flexWrap: 'wrap'
    },
    filterBtn: {
      padding: '10px 20px',
      backgroundColor: '#f0f0f0',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 16,
      transition: 'all 0.3s ease'
    }
  };

  const products = [
    {
      id: 1,
      category: 'machinery',
      name: 'Industrial Machinery',
      description: 'Heavy-duty machinery for industrial applications with advanced automation capabilities.',
      image: '/images/product-machinery.jpg',
      features: ['High precision', 'Automated controls', 'Energy efficient', 'Durable construction']
    },
    {
      id: 2,
      category: 'components',
      name: 'Precision Components',
      description: 'High-precision components manufactured to exact specifications for various industries.',
      image: '/images/product-components.jpg',
      features: ['Tight tolerances', 'Various materials', 'Quality certified', 'Custom designs']
    },
    {
      id: 3,
      category: 'automation',
      name: 'Automation Systems',
      description: 'Complete automation solutions for manufacturing processes and production lines.',
      image: '/images/product-automation.jpg',
      features: ['PLC integration', 'Robotic systems', 'SCADA software', 'Remote monitoring']
    },
    {
      id: 4,
      category: 'tools',
      name: 'Tools & Equipment',
      description: 'Professional-grade tools and equipment for industrial and commercial use.',
      image: '/images/product-tools.jpg',
      features: ['Ergonomic design', 'Long-lasting', 'Safety features', 'Warranty included']
    },
    {
      id: 5,
      category: 'custom',
      name: 'Custom Solutions',
      description: 'Tailored manufacturing solutions designed to meet specific client requirements.',
      image: '/images/product-custom.jpg',
      features: ['Personalized design', 'Prototype development', 'Full support', 'Flexible production']
    },
    {
      id: 6,
      category: 'machinery',
      name: 'CNC Machines',
      description: 'Computer-controlled machining centers for high-precision manufacturing.',
      image: '/images/product-cnc.jpg',
      features: ['Multi-axis control', 'High speed', 'Precision tools', 'Easy programming']
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'machinery', name: 'Machinery' },
    { id: 'components', name: 'Components' },
    { id: 'automation', name: 'Automation' },
    { id: 'tools', name: 'Tools' },
    { id: 'custom', name: 'Custom' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Our Products</h1>
          <p style={styles.pageSubtitle}>Discover our range of high-quality industrial products</p>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Category Filter */}
          <div style={styles.categoryFilter}>
            {categories.map(category => (
              <button
                key={category.id}
                style={{
                  ...styles.filterBtn,
                  backgroundColor: activeCategory === category.id ? '#1a3e6f' : '#f0f0f0',
                  color: activeCategory === category.id ? '#fff' : '#333'
                }}
                onClick={() => setActiveCategory(category.id)}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = '#e0e0e0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = '#f0f0f0';
                  }
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div style={styles.productsGrid}>
            {filteredProducts.map(product => (
              <div 
                key={product.id} 
                style={styles.productCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <div style={styles.productContent}>
                  <h3 style={styles.productTitle}>{product.name}</h3>
                  <p style={styles.productDesc}>{product.description}</p>
                  <ul style={styles.productFeatures}>
                    {product.features.map((feature, idx) => (
                      <li key={idx} style={styles.featureItem}>
                        <span style={{ color: '#ff6b35' }}>✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    style={styles.btn}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e55a2b'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff6b35'}
                  >
                    Request Quote
                  </button>
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