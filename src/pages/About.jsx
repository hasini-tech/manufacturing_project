// scr/component/About.jsx 
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const values = [
    { icon: <ShieldCheck size={40} color="#ff6b35" />, title: 'Quality First', desc: 'We never compromise on quality. Every product undergoes rigorous testing.' },
    { icon: <Lightbulb size={40} color="#ff6b35" />, title: 'Innovation', desc: 'We continuously invest in R&D to bring innovative solutions.' },
    { icon: <Users size={40} color="#ff6b35" />, title: 'Customer Focus', desc: 'Our clients are our partners. We deliver tailored solutions.' },
    { icon: <Target size={40} color="#ff6b35" />, title: 'Integrity', desc: 'We conduct business with the highest ethical standards.' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #0d213f 100%);
          color: #fff; padding: 60px 20px; text-align: center;
        }
        .about-hero h1 { font-size: 2.2rem; margin-bottom: 12px; font-weight: bold; }
        .about-hero p { font-size: 1rem; opacity: 0.85; max-width: 560px; margin: 0 auto; line-height: 1.7; }
        .about-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .about-img {
          width: 100%; border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .about-title { font-size: 1.8rem; color: #1a3e6f; margin-bottom: 16px; font-weight: bold; }
        .about-text { color: #555; margin-bottom: 14px; line-height: 1.8; font-size: 1rem; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 30px;
        }
        .stat-card {
          text-align: center; padding: 16px 8px;
          background: #f8fafd; border-radius: 10px;
        }
        .stat-number { font-size: 1.8rem; color: #ff6b35; font-weight: bold; margin: 0 0 4px 0; }
        .stat-label { color: #666; margin: 0; font-weight: 500; font-size: 0.85rem; }
        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .value-card {
          text-align: center; padding: 32px 24px;
          background: #fff; border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .value-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .section { padding: 60px 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-title { font-size: 1.8rem; text-align: center; color: #1a3e6f; margin-bottom: 40px; font-weight: bold; }

        @media (min-width: 480px) {
          .about-hero h1 { font-size: 2.8rem; }
        }
        @media (min-width: 640px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .about-content-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
          .values-grid { grid-template-columns: repeat(4, 1fr); }
          .about-title { font-size: 2.5rem; }
          .section-title { font-size: 2.5rem; }
          .stat-number { font-size: 2.2rem; }
          .stat-label { font-size: 1rem; }
        }
      `}</style>

      {/* Hero */}
      <section className="about-hero">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1>About Us</h1>
          <p>Learn more about our company, mission, and the values that drive us forward every day.</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="about-content-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={scaleIn}>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="about-img"
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="about-title">Over 25 Years of Excellence</motion.h2>
              <motion.p variants={fadeInUp} className="about-text">
                Founded in 1995, ManuCorp Industries has grown from a small machine shop to a leading manufacturer of industrial equipment and solutions. Our journey has been marked by continuous innovation, commitment to quality, and dedication to customer satisfaction.
              </motion.p>
              <motion.p variants={fadeInUp} className="about-text">
                We take pride in our team of skilled engineers and technicians who bring decades of combined experience to every project.
              </motion.p>
              <div className="stats-grid">
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '50+', label: 'Expert Team Members' },
                  { number: '25+', label: 'Years of Experience' }
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5 }} className="stat-card">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ backgroundColor: '#f4f7fb' }}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          className="container"
        >
          <motion.h2 variants={fadeInUp} className="section-title">Our Core Values</motion.h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="value-card">
                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>{v.icon}</div>
                <h3 style={{ color: '#1a3e6f', fontSize: '1.2rem', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;