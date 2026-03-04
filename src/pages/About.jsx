import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // Core Values Data
  const values = [
    { icon: <ShieldCheck size={40} color="#ff6b35" />, title: 'Quality First', desc: 'We never compromise on quality. Every product undergoes rigorous testing.' },
    { icon: <Lightbulb size={40} color="#ff6b35" />, title: 'Innovation', desc: 'We continuously invest in R&D to bring innovative solutions.' },
    { icon: <Users size={40} color="#ff6b35" />, title: 'Customer Focus', desc: 'Our clients are our partners. We deliver tailored solutions.' },
    { icon: <Target size={40} color="#ff6b35" />, title: 'Integrity', desc: 'We conduct business with the highest ethical standards.' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* CSS for Responsive Layouts (Since inline styles can't do Media Queries) */}
      <style>{`
        .responsive-grid-about { display: grid; grid-template-columns: 1fr; gap: 50px; align-items: center; }
        .responsive-grid-stats { display: grid; grid-template-columns: 1fr; gap: 30px; margin-top: 40px; }
        .responsive-grid-values { display: grid; grid-template-columns: 1fr; gap: 30px; }
        
        @media (min-width: 768px) {
          .responsive-grid-stats { grid-template-columns: repeat(3, 1fr); }
          .responsive-grid-values { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (min-width: 1024px) {
          .responsive-grid-about { grid-template-columns: 1fr 1fr; }
          .responsive-grid-values { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>

      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #1a3e6f 0%, #0d213f 100%)',
        color: '#fff',
        padding: '80px 0',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '3rem', marginBottom: 15, fontWeight: 'bold' }}
          >
            About Us
          </motion.h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
            Learn more about our company, mission, and the values that drive us forward every day.
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div className="responsive-grid-about">
            {/* Interactive Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
            >
              <motion.img 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="About Us" 
                style={{
                  width: '100%',
                  borderRadius: 15,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  cursor: 'pointer'
                }}
              />
            </motion.div>

            {/* About Text & Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: '#1a3e6f', marginBottom: 20 }}>
                Over 25 Years of Excellence
              </motion.h2>
              <motion.p variants={fadeInUp} style={{ color: '#555', marginBottom: 15, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Founded in 1995, ManuCorp Industries has grown from a small machine shop to a leading manufacturer of industrial equipment and solutions. Our journey has been marked by continuous innovation, commitment to quality, and dedication to customer satisfaction.
              </motion.p>
              <motion.p variants={fadeInUp} style={{ color: '#555', marginBottom: 25, lineHeight: 1.8, fontSize: '1.1rem' }}>
                We take pride in our team of skilled engineers and technicians who bring decades of combined experience to every project.
              </motion.p>
              
              {/* Stats */}
              <div className="responsive-grid-stats">
                {[
                  { number: '500+', label: 'Projects Completed' },
                  { number: '50+', label: 'Expert Team Members' },
                  { number: '25+', label: 'Years of Experience' }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    style={{ textAlign: 'center', padding: '20px', background: '#f8fafd', borderRadius: '10px' }}
                  >
                    <h3 style={{ fontSize: '2.5rem', color: '#ff6b35', margin: '0 0 5px 0', fontWeight: 'bold' }}>{stat.number}</h3>
                    <p style={{ color: '#666', margin: 0, fontWeight: '500' }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f4f7fb' }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}
        >
          <motion.h2 
            variants={fadeInUp}
            style={{ fontSize: '2.5rem', textAlign: 'center', color: '#1a3e6f', marginBottom: 50 }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="responsive-grid-values">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  backgroundColor: '#ffffff'
                }}
                style={{
                  textAlign: 'center',
                  padding: '40px 30px',
                  backgroundColor: '#fff',
                  borderRadius: 15,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                  {value.icon}
                </div>
                <h3 style={{ color: '#1a3e6f', fontSize: '1.3rem', marginBottom: 15 }}>{value.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;