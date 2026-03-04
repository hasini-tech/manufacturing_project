import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

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

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form Validation
  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Email is invalid';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setFormStatus({ submitted: true, error: true, message: error });
      return;
    }

    console.log('Form submitted:', formData);
    
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you within 24 hours.'
    });

    setFormData({ name: '', email: '', phone: '', company: '', message: '' });

    setTimeout(() => {
      setFormStatus({ submitted: false, error: false, message: '' });
    }, 5000);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fdfdfd' }}>
      
      {/* Clean CSS for responsive grid and form states */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 60px;
          }
        }
        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
          background-color: #fafafa;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: #ff6b35;
          background-color: #fff;
          box-shadow: 0 0 0 4px rgba(255,107,53,0.1);
        }
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 36px;
          background-color: #ff6b35;
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255,107,53,0.3);
          width: 100%;
        }
        @media (min-width: 768px) {
          .submit-btn { width: auto; align-self: flex-start; }
        }
        .submit-btn:hover {
          background-color: #e55a2b;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,107,53,0.4);
        }
      `}</style>

      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #1a3e6f 0%, #0d213f 100%)',
        color: '#fff',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: 'bold' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with our team for inquiries, quotes, or support. We are here to help.
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div className="contact-grid">
            
            {/* Left Side - Contact Information */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              style={{
                backgroundColor: '#f4f7fb',
                padding: '40px',
                borderRadius: '16px',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <motion.h2 variants={fadeInUp} style={{ fontSize: '2rem', color: '#1a3e6f', marginBottom: '15px', fontWeight: 'bold' }}>
                Get in Touch
              </motion.h2>
              <motion.p variants={fadeInUp} style={{ color: '#555', marginBottom: '40px', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Have questions about our products or services? Reach out to us through any of the following methods and our team will respond within 24 hours.
              </motion.p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Method 1: Phone */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ color: '#ff6b35', backgroundColor: 'rgba(255,107,53,0.1)', padding: '15px', borderRadius: '50%' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ color: '#1a3e6f', margin: '0 0 8px 0', fontSize: '1.2rem' }}>Phone</h3>
                    <p style={{ color: '#444', margin: '0 0 4px 0', fontWeight: 'bold' }}>+1 (555) 123-4567</p>
                    <p style={{ color: '#777', margin: 0, fontSize: '0.9rem' }}>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
                
                {/* Method 2: Email */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ color: '#ff6b35', backgroundColor: 'rgba(255,107,53,0.1)', padding: '15px', borderRadius: '50%' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ color: '#1a3e6f', margin: '0 0 8px 0', fontSize: '1.2rem' }}>Email</h3>
                    <p style={{ color: '#444', margin: '0 0 4px 0', fontWeight: 'bold' }}>info@manucorp.com</p>
                    <p style={{ color: '#777', margin: 0, fontSize: '0.9rem' }}>Support team replies in 24 hrs</p>
                  </div>
                </motion.div>
                
                {/* Method 3: Location */}
                <motion.div variants={fadeInUp} whileHover={{ x: 10 }} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <div style={{ color: '#ff6b35', backgroundColor: 'rgba(255,107,53,0.1)', padding: '15px', borderRadius: '50%' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ color: '#1a3e6f', margin: '0 0 8px 0', fontSize: '1.2rem' }}>Visit Us</h3>
                    <p style={{ color: '#444', margin: '0 0 4px 0', fontWeight: 'bold' }}>123 Industrial Avenue</p>
                    <p style={{ color: '#777', margin: 0, fontSize: '0.9rem' }}>Manufacturing District, NY 12345</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{
                backgroundColor: '#fff',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                border: '1px solid #f0f0f0',
                boxSizing: 'border-box'
              }}
            >
              <h2 style={{ fontSize: '2rem', color: '#1a3e6f', marginBottom: '25px', fontWeight: 'bold' }}>Send us a Message</h2>
              
              {/* Alert Message */}
              {formStatus.submitted && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    padding: '16px',
                    borderRadius: '8px',
                    marginBottom: '25px',
                    fontWeight: '500',
                    backgroundColor: formStatus.error ? '#fef2f2' : '#f0fdf4',
                    color: formStatus.error ? '#991b1b' : '#166534',
                    border: `1px solid ${formStatus.error ? '#fecaca' : '#bbf7d0'}`
                  }}
                >
                  {formStatus.message}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Grid for Name and Phone to sit side by side on desktop */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600', fontSize: '14px' }}>
                      Your Name <span style={{ color: '#ff6b35' }}>*</span>
                    </label>
                    <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="form-input" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600', fontSize: '14px' }}>
                      Phone Number
                    </label>
                    <input type="tel" name="phone" placeholder="(555) 000-0000" value={formData.phone} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                
                {/* Grid for Email and Company */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600', fontSize: '14px' }}>
                      Email Address <span style={{ color: '#ff6b35' }}>*</span>
                    </label>
                    <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="form-input" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600', fontSize: '14px' }}>
                      Company Name
                    </label>
                    <input type="text" name="company" placeholder="Acme Corp" value={formData.company} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#333', fontWeight: '600', fontSize: '14px' }}>
                    Your Message <span style={{ color: '#ff6b35' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="How can we help you today?"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input"
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  ></textarea>
                </div>
                
                <div style={{ marginTop: '10px' }}>
                  <button type="submit" className="submit-btn">
                    <Send size={18} /> Send Message
                  </button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '0 0 80px 0' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}
        >
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            height: '450px',
            border: '8px solid #fff'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458414!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1644262073400!5m2!1sen!2sus"
              style={{ width: '100%', height: '100%', border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;