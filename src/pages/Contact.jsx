import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const styles = {
    pageHeader: {
      background: 'linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%)',
      color: '#fff',
      padding: '80px 0',
      textAlign: 'center',
      marginTop: 0
    },
    pageTitle: {
      fontSize: '48px',
      marginBottom: '20px',
      fontWeight: '700'
    },
    pageSubtitle: {
      fontSize: '20px',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    section: {
      padding: '80px 0',
      backgroundColor: '#fff'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'start'
    },
    infoWrapper: {
      backgroundColor: '#f8f9fa',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
    },
    infoTitle: {
      fontSize: '32px',
      color: '#1a3e6f',
      marginBottom: '20px',
      fontWeight: '600'
    },
    infoText: {
      color: '#666',
      marginBottom: '40px',
      lineHeight: 1.8,
      fontSize: '16px'
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px'
    },
    contactMethod: {
      display: 'flex',
      gap: '20px',
      alignItems: 'flex-start',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
      transition: 'transform 0.3s ease, boxShadow 0.3s ease'
    },
    contactIcon: {
      fontSize: '28px',
      color: '#ff6b35',
      flexShrink: 0,
      width: '50px',
      height: '50px',
      backgroundColor: 'rgba(255,107,53,0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    methodContent: {
      flex: 1
    },
    methodTitle: {
      color: '#1a3e6f',
      marginBottom: '8px',
      fontSize: '20px',
      fontWeight: '600'
    },
    methodText: {
      color: '#666',
      margin: '5px 0',
      fontSize: '16px',
      lineHeight: 1.6
    },
    formWrapper: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 5px 30px rgba(0,0,0,0.1)',
      border: '1px solid #eee'
    },
    formTitle: {
      fontSize: '32px',
      color: '#1a3e6f',
      marginBottom: '30px',
      fontWeight: '600'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      width: '100%',
      marginBottom: '5px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#333',
      fontWeight: '500',
      fontSize: '14px'
    },
    required: {
      color: '#ff6b35',
      marginLeft: '4px'
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '15px',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: '#fff'
    },
    textarea: {
      width: '100%',
      padding: '14px 16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '15px',
      fontFamily: 'inherit',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: '#fff'
    },
    btn: {
      padding: '16px 36px',
      backgroundColor: '#ff6b35',
      color: '#fff',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      alignSelf: 'flex-start',
      marginTop: '10px',
      boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
    },
    mapSection: {
      padding: '0 0 80px 0',
      backgroundColor: '#fff'
    },
    mapContainer: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      height: '450px'
    },
    map: {
      width: '100%',
      height: '100%',
      border: 0
    },
    alert: {
      padding: '15px 20px',
      borderRadius: '8px',
      marginBottom: '20px',
      fontSize: '15px',
      fontWeight: '500'
    },
    alertSuccess: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb'
    },
    alertError: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb'
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Email is invalid';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: error
      });
      return;
    }

    console.log('Form submitted:', formData);
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: ''
      });
    }, 5000);
  };

  const handleMethodMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
  };

  const handleMethodMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#ff6b35';
    e.target.style.boxShadow = '0 0 0 3px rgba(255,107,53,0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e0e0e0';
    e.target.style.boxShadow = 'none';
  };

  const handleButtonMouseEnter = (e) => {
    e.target.style.backgroundColor = '#e55a2b';
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 20px rgba(255,107,53,0.4)';
  };

  const handleButtonMouseLeave = (e) => {
    e.target.style.backgroundColor = '#ff6b35';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 15px rgba(255,107,53,0.3)';
  };

  return (
    <div>
      {/* Page Header */}
      <section style={styles.pageHeader}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>Contact Us</h1>
          <p style={styles.pageSubtitle}>Get in touch with our team for inquiries, quotes, or support</p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.contactGrid}>
            {/* Left Side - Contact Information */}
            <div style={styles.infoWrapper}>
              <h2 style={styles.infoTitle}>Get in Touch</h2>
              <p style={styles.infoText}>
                Have questions about our products or services? We're here to help. 
                Reach out to us through any of the following methods and our team will 
                respond within 24 hours.
              </p>
              
              <div style={styles.contactMethods}>
                {/* Phone */}
                <div 
                  style={styles.contactMethod}
                  onMouseEnter={handleMethodMouseEnter}
                  onMouseLeave={handleMethodMouseLeave}
                >
                  <div style={styles.contactIcon}>📞</div>
                  <div style={styles.methodContent}>
                    <h3 style={styles.methodTitle}>Phone</h3>
                    <p style={styles.methodText}><strong>+1 (555) 123-4567</strong></p>
                    <p style={styles.methodText}>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p style={styles.methodText}>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                
                {/* Email */}
                <div 
                  style={styles.contactMethod}
                  onMouseEnter={handleMethodMouseEnter}
                  onMouseLeave={handleMethodMouseLeave}
                >
                  <div style={styles.contactIcon}>✉️</div>
                  <div style={styles.methodContent}>
                    <h3 style={styles.methodTitle}>Email</h3>
                    <p style={styles.methodText}><strong>info@manucorp.com</strong></p>
                    <p style={styles.methodText}><strong>sales@manucorp.com</strong></p>
                    <p style={styles.methodText}>support@manucorp.com</p>
                  </div>
                </div>
                
                {/* Visit Us */}
                <div 
                  style={styles.contactMethod}
                  onMouseEnter={handleMethodMouseEnter}
                  onMouseLeave={handleMethodMouseLeave}
                >
                  <div style={styles.contactIcon}>📍</div>
                  <div style={styles.methodContent}>
                    <h3 style={styles.methodTitle}>Visit Us</h3>
                    <p style={styles.methodText}>123 Industrial Avenue</p>
                    <p style={styles.methodText}>Manufacturing District</p>
                    <p style={styles.methodText}>City, State 12345</p>
                    <p style={styles.methodText}><strong>Office Hours:</strong> Mon-Fri, 8am-6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div style={styles.formWrapper}>
              <h2 style={styles.formTitle}>Send us a Message</h2>
              
              {/* Status Messages */}
              {formStatus.submitted && (
                <div style={{
                  ...styles.alert,
                  ...(formStatus.error ? styles.alertError : styles.alertSuccess)
                }}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Your Name <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Your Email <span style={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    style={styles.input}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    Your Message <span style={styles.required}>*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={styles.textarea}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  style={styles.btn}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.mapSection}>
        <div style={styles.container}>
          <div style={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458414!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1644262073400!5m2!1sen!2sus"
              style={styles.map}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;