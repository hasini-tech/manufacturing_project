// scr/component/Contact.jsx 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    if (error) { setFormStatus({ submitted: true, error: true, message: error }); return; }
    setFormStatus({ submitted: true, error: false, message: 'Thank you for your message! We will get back to you within 24 hours.' });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, error: false, message: '' }), 5000);
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fdfdfd' }}>
      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #0d213f 100%);
          color: #fff; padding: 60px 20px; text-align: center;
        }
        .contact-hero h1 { font-size: 2.2rem; margin-bottom: 12px; font-weight: bold; }
        .contact-hero p { font-size: 1rem; opacity: 0.85; max-width: 560px; margin: 0 auto; }
        .contact-section { padding: 60px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          align-items: start;
        }
        .info-box {
          background: #f4f7fb; padding: 32px 24px;
          border-radius: 16px;
        }
        .info-box h2 { font-size: 1.6rem; color: #1a3e6f; margin-bottom: 12px; font-weight: bold; }
        .info-box p { color: #555; margin-bottom: 28px; line-height: 1.8; }
        .contact-method {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 16px; background: #fff;
          border-radius: 12px; margin-bottom: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transition: transform 0.2s;
        }
        .contact-method:hover { transform: translateX(6px); }
        .method-icon {
          color: #ff6b35;
          background: rgba(255,107,53,0.1);
          padding: 12px; border-radius: 50%;
          flex-shrink: 0;
        }
        .method-title { color: #1a3e6f; margin: 0 0 6px 0; font-size: 1.1rem; }
        .method-main { color: #444; margin: 0 0 3px 0; font-weight: bold; font-size: 0.95rem; }
        .method-sub { color: #777; margin: 0; font-size: 0.85rem; }
        .form-box {
          background: #fff; padding: 32px 24px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid #f0f0f0;
        }
        .form-box h2 { font-size: 1.6rem; color: #1a3e6f; margin-bottom: 22px; font-weight: bold; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .form-group { display: flex; flex-direction: column; }
        .form-label { margin-bottom: 6px; color: #333; font-weight: 600; font-size: 13px; }
        .form-input {
          width: 100%; padding: 12px 14px;
          border: 2px solid #e0e0e0; border-radius: 8px;
          font-size: 14px; font-family: inherit;
          outline: none; background: #fafafa;
          transition: all 0.3s; box-sizing: border-box;
        }
        .form-input:focus { border-color: #ff6b35; background: #fff; box-shadow: 0 0 0 4px rgba(255,107,53,0.1); }
        .submit-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 32px; background: #ff6b35; color: #fff;
          border: none; border-radius: 50px; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(255,107,53,0.3);
          width: 100%; margin-top: 8px;
        }
        .submit-btn:hover { background: #e55a2b; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,107,53,0.4); }
        .alert { padding: 14px; border-radius: 8px; margin-bottom: 20px; font-weight: 500; font-size: 14px; }
        .alert-error { background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; }
        .alert-success { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
        .map-section { padding: 0 0 60px 0; }
        .map-wrapper {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          height: 300px; border: 6px solid #fff;
        }

        @media (min-width: 480px) {
          .contact-hero h1 { font-size: 2.8rem; }
          .map-wrapper { height: 380px; }
        }
        @media (min-width: 640px) {
          .form-row { grid-template-columns: repeat(2, 1fr); }
          .submit-btn { width: auto; }
        }
        @media (min-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr 1.2fr; gap: 50px; }
          .map-wrapper { height: 450px; }
          .info-box { padding: 40px; }
          .form-box { padding: 40px; }
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries, quotes, or support. We are here to help.</p>
        </motion.div>
      </section>

      {/* Main */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="info-box">
              <motion.h2 variants={fadeInUp}>Get in Touch</motion.h2>
              <motion.p variants={fadeInUp}>
                Have questions about our products or services? Reach out through any of the methods below and our team will respond within 24 hours.
              </motion.p>
              {[
                { icon: <Phone size={22} />, title: 'Phone', main: '+1 (555) 123-4567', sub: 'Mon-Fri: 8:00 AM - 6:00 PM' },
                { icon: <Mail size={22} />, title: 'Email', main: 'info@manucorp.com', sub: 'Support team replies in 24 hrs' },
                { icon: <MapPin size={22} />, title: 'Visit Us', main: '123 Industrial Avenue', sub: 'Manufacturing District, NY 12345' }
              ].map((m, i) => (
                <motion.div key={i} variants={fadeInUp} className="contact-method">
                  <div className="method-icon">{m.icon}</div>
                  <div>
                    <h3 className="method-title">{m.title}</h3>
                    <p className="method-main">{m.main}</p>
                    <p className="method-sub">{m.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-50px" }} className="form-box">
              <h2>Send us a Message</h2>
              {formStatus.submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  className={`alert ${formStatus.error ? 'alert-error' : 'alert-success'}`}>
                  {formStatus.message}
                </motion.div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name <span style={{ color: '#ff6b35' }}>*</span></label>
                    <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" placeholder="(555) 000-0000" value={formData.phone} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address <span style={{ color: '#ff6b35' }}>*</span></label>
                    <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input type="text" name="company" placeholder="Acme Corp" value={formData.company} onChange={handleChange} className="form-input" />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Your Message <span style={{ color: '#ff6b35' }}>*</span></label>
                  <textarea name="message" placeholder="How can we help you today?" rows="5" value={formData.message} onChange={handleChange} required className="form-input" style={{ resize: 'vertical', minHeight: '120px' }}></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <Send size={17} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.98510768458414!3d40.75889697932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1644262073400!5m2!1sen!2sus"
              style={{ width: '100%', height: '100%', border: 0 }}
              allowFullScreen loading="lazy" title="Google Map"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;