import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartPulse, 
  PlaneTakeoff, 
  Ruler, 
  Search, 
  Activity, 
  Scale, 
  Microscope, 
  MoveVertical, 
  Hammer, 
  Scan,
  CheckCircle2
} from 'lucide-react';

const Quality = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // Data Arrays with Lucide Icons
  const certifications = [
    { icon: <ShieldCheck size={48} color="#ff6b35" strokeWidth={1.5} />, title: 'ISO 9001:2015', desc: 'Quality management systems certification' },
    { icon: <HeartPulse size={48} color="#ff6b35" strokeWidth={1.5} />, title: 'ISO 13485', desc: 'Medical devices quality management' },
    { icon: <PlaneTakeoff size={48} color="#ff6b35" strokeWidth={1.5} />, title: 'AS9100D', desc: 'Aerospace quality management' }
  ];

  const qualitySteps = [
    { step: '1', title: 'Incoming Inspection', desc: 'All raw materials are thoroughly inspected upon arrival to ensure they meet our strict quality standards.' },
    { step: '2', title: 'In-Process Quality Control', desc: 'Continuous monitoring and inspection during manufacturing to maintain quality at every stage.' },
    { step: '3', title: 'Final Inspection', desc: 'Comprehensive testing and measurement of finished products against precise client specifications.' },
    { step: '4', title: 'Documentation & Certification', desc: 'Detailed quality reports, material traces, and certifications provided with every shipment.' }
  ];

  const equipment = [
    { icon: <Ruler size={32} color="#1a3e6f" />, name: 'CMM Machines' },
    { icon: <Search size={32} color="#1a3e6f" />, name: 'Optical Comparators' },
    { icon: <Activity size={32} color="#1a3e6f" />, name: 'Roughness Testers' },
    { icon: <Scale size={32} color="#1a3e6f" />, name: 'Precision Scales' },
    { icon: <Microscope size={32} color="#1a3e6f" />, name: 'Microscopes' },
    { icon: <MoveVertical size={32} color="#1a3e6f" />, name: 'Height Gauges' },
    { icon: <Hammer size={32} color="#1a3e6f" />, name: 'Hardness Testers' },
    { icon: <Scan size={32} color="#1a3e6f" />, name: 'Laser Scanners' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fff' }}>
      
      {/* Responsive Grid CSS */}
      <style>{`
        .grid-2-col { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        .grid-3-col { display: grid; grid-template-columns: 1fr; gap: 30px; }
        .grid-4-col { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .grid-process { display: grid; grid-template-columns: 1fr; gap: 30px; }
        
        @media (min-width: 768px) {
          .grid-3-col { grid-template-columns: repeat(3, 1fr); }
          .grid-4-col { grid-template-columns: repeat(4, 1fr); }
          .grid-process { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
        
        @media (min-width: 1024px) {
          .grid-2-col { grid-template-columns: 1fr 1fr; gap: 60px; }
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: 'bold' }}>Quality Assurance</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
            Committed to absolute precision and excellence through rigorous, industry-leading quality control.
          </p>
        </motion.div>
      </section>

      {/* Quality Overview */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
          <div className="grid-2-col">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: '#1a3e6f', marginBottom: '20px', fontWeight: 'bold' }}>
                Our Commitment to Quality
              </motion.h2>
              <motion.p variants={fadeInUp} style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '20px' }}>
                At ManuCorp Industries, quality is not just a department – it's our culture. We maintain the highest standards of quality throughout our manufacturing process, from raw material selection to final product delivery.
              </motion.p>
              <motion.p variants={fadeInUp} style={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '30px' }}>
                Our quality management system is certified to international standards, and we continuously invest in advanced inspection equipment and rigorous training for our quality assurance team.
              </motion.p>
              
              <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '15px', alignItems: 'center', color: '#1a3e6f', fontWeight: '600' }}>
                <CheckCircle2 color="#ff6b35" /> <span>Zero Defect Manufacturing Goal</span>
              </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Quality Control Expert" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '80px 0', backgroundColor: '#f4f7fb' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: '#1a3e6f', textAlign: 'center', marginBottom: '50px', fontWeight: 'bold' }}>
            Our Certifications
          </motion.h2>
          
          <div className="grid-3-col">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
                style={{
                  textAlign: 'center',
                  padding: '40px 30px',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  border: '1px solid #eef2f6',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>{cert.icon}</div>
                <h3 style={{ fontSize: '1.4rem', color: '#1a3e6f', marginBottom: '15px', fontWeight: '700' }}>{cert.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Quality Process */}
      <section style={{ padding: '80px 0' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: '#1a3e6f', textAlign: 'center', marginBottom: '50px', fontWeight: 'bold' }}>
            Our Quality Control Process
          </motion.h2>
          
          <div className="grid-process">
            {qualitySteps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ x: 5, backgroundColor: '#f8fafd' }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#ff6b35',
                  color: '#fff',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                  boxShadow: '0 4px 10px rgba(255,107,53,0.3)'
                }}>
                  {step.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#1a3e6f', marginBottom: '10px', fontWeight: '600' }}>{step.title}</h3>
                  <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Inspection Equipment */}
      <section style={{ padding: '80px 0', backgroundColor: '#f4f7fb' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
          style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}
        >
          <motion.h2 variants={fadeInUp} style={{ fontSize: '2.5rem', color: '#1a3e6f', textAlign: 'center', marginBottom: '50px', fontWeight: 'bold' }}>
            State-of-the-Art Inspection Equipment
          </motion.h2>
          
          <div className="grid-4-col">
            {equipment.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: '#ff6b35' }}
                style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(26,62,111,0.05)', padding: '15px', borderRadius: '50%', width: 'fit-content', margin: '0 auto 15px auto' }}>
                  {item.icon}
                </div>
                <div style={{ color: '#1a3e6f', fontSize: '1.1rem', fontWeight: '600' }}>{item.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Quality;