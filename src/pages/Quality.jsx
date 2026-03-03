import React from 'react';

const Quality = () => {
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
    qualityGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 50,
      alignItems: 'center'
    },
    qualityImage: {
      width: '100%',
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    qualityTitle: {
      fontSize: 32,
      color: '#1a3e6f',
      marginBottom: 20
    },
    qualityText: {
      color: '#666',
      lineHeight: 1.8,
      marginBottom: 20
    },
    certificationsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30,
      marginTop: 40
    },
    certificationCard: {
      textAlign: 'center',
      padding: 30,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      border: '1px solid #e0e0e0'
    },
    certIcon: {
      fontSize: 48,
      color: '#ff6b35',
      marginBottom: 15
    },
    certTitle: {
      fontSize: 20,
      color: '#1a3e6f',
      marginBottom: 10
    },
    certDesc: {
      color: '#666'
    },
    processSteps: {
      marginTop: 50
    },
    stepItem: {
      display: 'flex',
      gap: 20,
      marginBottom: 30,
      alignItems: 'flex-start'
    },
    stepNumber: {
      width: 40,
      height: 40,
      backgroundColor: '#ff6b35',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      flexShrink: 0
    },
    stepContent: {
      flex: 1
    },
    stepTitle: {
      fontSize: 20,
      color: '#1a3e6f',
      marginBottom: 8
    },
    stepDesc: {
      color: '#666'
    },
    equipmentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20,
      marginTop: 30
    },
    equipmentItem: {
      textAlign: 'center',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    },
    equipmentIcon: {
      fontSize: 32,
      color: '#ff6b35',
      marginBottom: 10
    },
    equipmentName: {
      color: '#1a3e6f',
      fontSize: 16
    }
  };

  const certifications = [
    {
      icon: '📋',
      title: 'ISO 9001:2015',
      desc: 'Quality management systems certification'
    },
    {
      icon: '🔬',
      title: 'ISO 13485',
      desc: 'Medical devices quality management'
    },
    {
      icon: '⚙️',
      title: 'AS9100D',
      desc: 'Aerospace quality management'
    }
  ];

  const qualitySteps = [
    {
      step: '1',
      title: 'Incoming Inspection',
      desc: 'All raw materials are thoroughly inspected upon arrival to ensure they meet our strict quality standards.'
    },
    {
      step: '2',
      title: 'In-Process Quality Control',
      desc: 'Continuous monitoring and inspection during manufacturing to maintain quality at every stage.'
    },
    {
      step: '3',
      title: 'Final Inspection',
      desc: 'Comprehensive testing and measurement of finished products against specifications.'
    },
    {
      step: '4',
      title: 'Documentation & Certification',
      desc: 'Detailed quality reports and certifications provided with every shipment.'
    }
  ];

  const equipment = [
    { icon: '📏', name: 'CMM Machines' },
    { icon: '🔬', name: 'Optical Comparators' },
    { icon: '📊', name: 'Surface Roughness Testers' },
    { icon: '⚖️', name: 'Precision Scales' },
    { icon: '🔍', name: 'Microscopes' },
    { icon: '📐', name: 'Height Gauges' },
    { icon: '🌀', name: 'Hardness Testers' },
    { icon: '📡', name: 'Laser Scanners' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Quality Assurance</h1>
          <p style={styles.pageSubtitle}>Committed to excellence through rigorous quality control</p>
        </div>
      </section>

      {/* Quality Overview */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.qualityGrid}>
            <div>
              <h2 style={styles.qualityTitle}>Our Commitment to Quality</h2>
              <p style={styles.qualityText}>At ManuCorp Industries, quality is not just a department – it's our culture. We maintain the highest standards of quality throughout our manufacturing process, from raw material selection to final product delivery.</p>
              <p style={styles.qualityText}>Our quality management system is certified to international standards, and we continuously invest in advanced inspection equipment and training for our quality assurance team.</p>
            </div>
            <div>
              <img 
                src="/images/quality-control.jpg" 
                alt="Quality Control" 
                style={styles.qualityImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.qualityTitle, textAlign: 'center', marginBottom: 50 }}>Our Certifications</h2>
          <div style={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} style={styles.certificationCard}>
                <div style={styles.certIcon}>{cert.icon}</div>
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <p style={styles.certDesc}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={{ ...styles.qualityTitle, textAlign: 'center', marginBottom: 50 }}>Our Quality Control Process</h2>
          <div style={styles.processSteps}>
            {qualitySteps.map((step, index) => (
              <div key={index} style={styles.stepItem}>
                <div style={styles.stepNumber}>{step.step}</div>
                <div style={styles.stepContent}>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Equipment */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.qualityTitle, textAlign: 'center', marginBottom: 50 }}>Our Inspection Equipment</h2>
          <div style={styles.equipmentGrid}>
            {equipment.map((item, index) => (
              <div key={index} style={styles.equipmentItem}>
                <div style={styles.equipmentIcon}>{item.icon}</div>
                <div style={styles.equipmentName}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;