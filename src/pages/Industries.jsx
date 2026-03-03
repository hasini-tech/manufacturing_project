import React from 'react';

const Industries = () => {
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
    industriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    },
    industryCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    industryImage: {
      width: '100%',
      height: 200,
      objectFit: 'cover'
    },
    industryContent: {
      padding: 30
    },
    industryTitle: {
      fontSize: 24,
      color: '#1a3e6f',
      marginBottom: 15
    },
    industryDesc: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: 20
    },
    applicationsList: {
      listStyle: 'none',
      padding: 0
    },
    applicationItem: {
      color: '#666',
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    },
    statsSection: {
      backgroundColor: '#f9f9f9'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 30
    },
    statCard: {
      textAlign: 'center',
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    statNumber: {
      fontSize: 42,
      color: '#ff6b35',
      marginBottom: 10
    },
    statLabel: {
      color: '#1a3e6f',
      fontSize: 18
    }
  };

  const industries = [
    {
      name: 'Automotive',
      description: 'Precision components and systems for the automotive industry, from engine parts to transmission components.',
      image: '/images/industry-automotive.jpg',
      applications: ['Engine Components', 'Transmission Parts', 'Brake Systems', 'Suspension Parts']
    },
    {
      name: 'Aerospace',
      description: 'High-precision components for aerospace applications, meeting stringent quality and safety standards.',
      image: '/images/industry-aerospace.jpg',
      applications: ['Structural Components', 'Engine Parts', 'Landing Gear', 'Interior Fittings']
    },
    {
      name: 'Medical',
      description: 'Precision manufacturing for medical devices and equipment, ensuring reliability and accuracy.',
      image: '/images/industry-medical.jpg',
      applications: ['Surgical Instruments', 'Diagnostic Equipment', 'Implants', 'Medical Devices']
    },
    {
      name: 'Energy',
      description: 'Components and systems for the energy sector, including renewable energy and traditional power generation.',
      image: '/images/industry-energy.jpg',
      applications: ['Turbine Parts', 'Solar Components', 'Wind Energy', 'Oil & Gas Equipment']
    },
    {
      name: 'Electronics',
      description: 'Precision enclosures and components for electronic devices and systems.',
      image: '/images/industry-electronics.jpg',
      applications: ['Enclosures', 'Heat Sinks', 'Connectors', 'Circuit Board Components']
    },
    {
      name: 'Construction',
      description: 'Heavy-duty components and equipment for the construction industry.',
      image: '/images/industry-construction.jpg',
      applications: ['Structural Parts', 'Heavy Equipment', 'Tools', 'Fasteners']
    }
  ];

  const stats = [
    { number: '500+', label: 'Industrial Clients' },
    { number: '15+', label: 'Industries Served' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Industries We Serve</h1>
          <p style={styles.pageSubtitle}>Delivering quality solutions across diverse industrial sectors</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <div 
                key={index} 
                style={styles.industryCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img src={industry.image} alt={industry.name} style={styles.industryImage} />
                <div style={styles.industryContent}>
                  <h3 style={styles.industryTitle}>{industry.name}</h3>
                  <p style={styles.industryDesc}>{industry.description}</p>
                  <h4 style={{ color: '#1a3e6f', marginBottom: 10 }}>Applications:</h4>
                  <ul style={styles.applicationsList}>
                    {industry.applications.map((app, idx) => (
                      <li key={idx} style={styles.applicationItem}>
                        <span style={{ color: '#ff6b35' }}>•</span> {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ ...styles.section, ...styles.statsSection }}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} style={styles.statCard}>
                <div style={styles.statNumber}>{stat.number}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;