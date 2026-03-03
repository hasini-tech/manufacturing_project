import React from 'react';

const About = () => {
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
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 50,
      alignItems: 'center'
    },
    aboutImage: {
      width: '100%',
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    aboutTitle: {
      fontSize: 32,
      color: '#1a3e6f',
      marginBottom: 20
    },
    aboutText: {
      color: '#666',
      marginBottom: 20,
      lineHeight: 1.8
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 30,
      marginTop: 40
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: 36,
      color: '#ff6b35',
      marginBottom: 10
    },
    statLabel: {
      color: '#666',
      margin: 0
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 30
    },
    valueCard: {
      textAlign: 'center',
      padding: 30,
      backgroundColor: '#fff',
      borderRadius: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    },
    valueTitle: {
      color: '#1a3e6f',
      marginBottom: 15
    },
    valueText: {
      color: '#666'
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>About Us</h1>
          <p style={styles.pageSubtitle}>Learn more about our company, mission, and values</p>
        </div>
      </section>

      {/* About Content */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.aboutGrid}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Us" 
                style={styles.aboutImage}
              />
            </div>
            <div>
              <h2 style={styles.aboutTitle}>Over 25 Years of Excellence</h2>
              <p style={styles.aboutText}>Founded in 1995, ManuCorp Industries has grown from a small machine shop to a leading manufacturer of industrial equipment and solutions. Our journey has been marked by continuous innovation, commitment to quality, and dedication to customer satisfaction.</p>
              <p style={styles.aboutText}>Today, we serve clients across multiple industries, providing custom manufacturing solutions that meet the highest standards of precision and reliability. Our state-of-the-art facility spans over 50,000 square feet and is equipped with the latest CNC machinery and automation technology.</p>
              <p style={styles.aboutText}>We take pride in our team of skilled engineers and technicians who bring decades of combined experience to every project.</p>
              
              <div style={styles.statsGrid}>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>500+</h3>
                  <p style={styles.statLabel}>Projects Completed</p>
                </div>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>50+</h3>
                  <p style={styles.statLabel}>Expert Team Members</p>
                </div>
                <div style={styles.statItem}>
                  <h3 style={styles.statNumber}>25+</h3>
                  <p style={styles.statLabel}>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ ...styles.section, backgroundColor: '#f9f9f9' }}>
        <div style={styles.container}>
          <h2 style={{ ...styles.pageTitle, fontSize: 36, textAlign: 'center', color: '#1a3e6f', marginBottom: 50 }}>Our Core Values</h2>
          <div style={styles.valuesGrid}>
            {[
              { title: 'Quality First', desc: 'We never compromise on quality. Every product undergoes rigorous testing.' },
              { title: 'Innovation', desc: 'We continuously invest in R&D to bring innovative solutions.' },
              { title: 'Customer Focus', desc: 'Our clients are our partners. We deliver tailored solutions.' },
              { title: 'Integrity', desc: 'We conduct business with the highest ethical standards.' }
            ].map((value, index) => (
              <div key={index} style={styles.valueCard}>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueText}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;