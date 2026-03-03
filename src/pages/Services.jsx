import React from 'react';

const Services = () => {
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
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30
    },
    serviceCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 40,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    },
    serviceIcon: {
      fontSize: 48,
      color: '#ff6b35',
      marginBottom: 20
    },
    serviceTitle: {
      fontSize: 24,
      color: '#1a3e6f',
      marginBottom: 15
    },
    serviceDesc: {
      color: '#666',
      lineHeight: 1.6,
      marginBottom: 20
    },
    serviceFeatures: {
      listStyle: 'none',
      padding: 0,
      textAlign: 'left',
      marginTop: 20
    },
    featureItem: {
      color: '#666',
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    },
    processSection: {
      backgroundColor: '#f9f9f9',
      padding: '80px 0'
    },
    processGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 30,
      marginTop: 50
    },
    processStep: {
      textAlign: 'center',
      position: 'relative'
    },
    stepNumber: {
      width: 50,
      height: 50,
      backgroundColor: '#ff6b35',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      margin: '0 auto 20px'
    },
    stepTitle: {
      color: '#1a3e6f',
      marginBottom: 10
    },
    stepDesc: {
      color: '#666'
    }
  };

  const services = [
    {
      icon: '🔧',
      title: 'Custom Manufacturing',
      description: 'Tailored manufacturing solutions designed to meet your specific requirements with precision and quality.',
      features: ['Custom design & engineering', 'Prototype development', 'Small to large batch production', 'Quality assurance']
    },
    {
      icon: '⚙️',
      title: 'CNC Machining',
      description: 'State-of-the-art CNC machining services for complex parts and components with tight tolerances.',
      features: ['Multi-axis machining', 'Turning & milling', 'Precision grinding', 'EDM services']
    },
    {
      icon: '🤖',
      title: 'Automation Integration',
      description: 'Complete automation solutions to optimize your manufacturing processes and increase efficiency.',
      features: ['Robotic systems', 'PLC programming', 'Process automation', 'SCADA systems']
    },
    {
      icon: '🔬',
      title: 'Quality Testing',
      description: 'Comprehensive quality testing and inspection services to ensure product reliability and compliance.',
      features: ['Dimensional inspection', 'Material testing', 'Non-destructive testing', 'Certification services']
    },
    {
      icon: '📦',
      title: 'Assembly Services',
      description: 'Professional assembly services for complex products and systems with strict quality control.',
      features: ['Sub-assembly', 'Final assembly', 'Testing & validation', 'Packaging']
    },
    {
      icon: '📋',
      title: 'Engineering Support',
      description: 'Expert engineering support from concept to production, ensuring optimal design and manufacturability.',
      features: ['Design for manufacturing', 'Value engineering', 'Technical documentation', 'Project management']
    }
  ];

  const process = [
    { step: '1', title: 'Consultation', desc: 'Discuss your requirements and project goals' },
    { step: '2', title: 'Design & Planning', desc: 'Create detailed designs and production plans' },
    { step: '3', title: 'Manufacturing', desc: 'Execute production with precision and quality' },
    { step: '4', title: 'Quality Control', desc: 'Rigorous testing and inspection' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Our Services</h1>
          <p style={styles.pageSubtitle}>Comprehensive manufacturing solutions for your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div 
                key={index} 
                style={styles.serviceCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.description}</p>
                <ul style={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={styles.featureItem}>
                      <span style={{ color: '#ff6b35' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={styles.processSection}>
        <div style={styles.container}>
          <h2 style={{ ...styles.pageTitle, fontSize: 36, textAlign: 'center', color: '#1a3e6f', marginBottom: 20 }}>
            Our Process
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: 50 }}>
            We follow a systematic approach to ensure quality and efficiency
          </p>
          <div style={styles.processGrid}>
            {process.map((item, index) => (
              <div key={index} style={styles.processStep}>
                <div style={styles.stepNumber}>{item.step}</div>
                <h3 style={styles.stepTitle}>{item.title}</h3>
                <p style={styles.stepDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;