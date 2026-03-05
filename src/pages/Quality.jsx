// scr/component/Quality.jsx 
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, PlaneTakeoff, Ruler, Search, Activity, Scale, Microscope, MoveVertical, Hammer, Scan, CheckCircle2 } from 'lucide-react';

const Quality = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

  const certifications = [
    { icon: <ShieldCheck size={44} color="#ff6b35" strokeWidth={1.5} />, title: 'ISO 9001:2015', desc: 'Quality management systems certification' },
    { icon: <HeartPulse size={44} color="#ff6b35" strokeWidth={1.5} />, title: 'ISO 13485', desc: 'Medical devices quality management' },
    { icon: <PlaneTakeoff size={44} color="#ff6b35" strokeWidth={1.5} />, title: 'AS9100D', desc: 'Aerospace quality management' }
  ];

  const qualitySteps = [
    { step: '1', title: 'Incoming Inspection', desc: 'All raw materials are thoroughly inspected upon arrival to ensure they meet our strict quality standards.' },
    { step: '2', title: 'In-Process Quality Control', desc: 'Continuous monitoring and inspection during manufacturing to maintain quality at every stage.' },
    { step: '3', title: 'Final Inspection', desc: 'Comprehensive testing and measurement of finished products against precise client specifications.' },
    { step: '4', title: 'Documentation & Certification', desc: 'Detailed quality reports, material traces, and certifications provided with every shipment.' }
  ];

  const equipment = [
    { icon: <Ruler size={28} color="#1a3e6f" />, name: 'CMM Machines' },
    { icon: <Search size={28} color="#1a3e6f" />, name: 'Optical Comparators' },
    { icon: <Activity size={28} color="#1a3e6f" />, name: 'Roughness Testers' },
    { icon: <Scale size={28} color="#1a3e6f" />, name: 'Precision Scales' },
    { icon: <Microscope size={28} color="#1a3e6f" />, name: 'Microscopes' },
    { icon: <MoveVertical size={28} color="#1a3e6f" />, name: 'Height Gauges' },
    { icon: <Hammer size={28} color="#1a3e6f" />, name: 'Hardness Testers' },
    { icon: <Scan size={28} color="#1a3e6f" />, name: 'Laser Scanners' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#fff' }}>
      <style>{`
        .quality-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #0d213f 100%);
          color: #fff; padding: 60px 20px; text-align: center;
        }
        .quality-hero h1 { font-size: 2.2rem; margin-bottom: 12px; font-weight: bold; }
        .quality-hero p { font-size: 1rem; opacity: 0.9; max-width: 560px; margin: 0 auto; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 60px 0; }
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }
        .overview-img { width: 100%; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .overview-title { font-size: 1.8rem; color: #1a3e6f; margin-bottom: 16px; font-weight: bold; }
        .overview-text { color: #555; line-height: 1.8; font-size: 1rem; margin-bottom: 16px; }
        .check-row { display: flex; gap: 12px; align-items: center; color: #1a3e6f; font-weight: 600; margin-top: 8px; }
        .certs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .cert-card {
          text-align: center; padding: 32px 24px;
          background: #fff; border-radius: 16px;
          border: 1px solid #eef2f6;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .cert-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); }
        .cert-title { font-size: 1.2rem; color: #1a3e6f; margin-bottom: 12px; font-weight: 700; }
        .cert-desc { color: #666; line-height: 1.6; margin: 0; }
        .section-title { font-size: 1.8rem; color: #1a3e6f; text-align: center; margin-bottom: 40px; font-weight: bold; }
        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .process-step {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 24px; border-radius: 12px;
          border: 1px solid #eee; transition: all 0.3s;
        }
        .process-step:hover { background: #f8fafd; }
        .step-badge {
          width: 46px; height: 46px; background: #ff6b35; color: #fff;
          border-radius: 12px; display: flex; align-items: center;
          justify-content: center; font-size: 1.2rem; font-weight: bold;
          flex-shrink: 0; box-shadow: 0 4px 10px rgba(255,107,53,0.3);
        }
        .step-title { font-size: 1.1rem; color: #1a3e6f; margin-bottom: 8px; font-weight: 600; }
        .step-desc { color: #666; line-height: 1.6; margin: 0; font-size: 0.95rem; }
        .equip-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .equip-card {
          text-align: center; padding: 24px 16px;
          background: #fff; border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 2px solid transparent;
          transition: all 0.3s;
        }
        .equip-card:hover { transform: translateY(-5px); border-color: #ff6b35; }
        .equip-icon {
          display: flex; justify-content: center;
          background: rgba(26,62,111,0.05); padding: 12px;
          border-radius: 50%; width: fit-content;
          margin: 0 auto 12px;
        }
        .equip-name { color: #1a3e6f; font-size: 0.95rem; font-weight: 600; }

        @media (min-width: 480px) {
          .quality-hero h1 { font-size: 2.8rem; }
        }
        @media (min-width: 640px) {
          .certs-grid { grid-template-columns: repeat(3, 1fr); }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .equip-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 1024px) {
          .overview-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
          .overview-title { font-size: 2.5rem; }
          .section-title { font-size: 2.5rem; }
        }
      `}</style>

      <section className="quality-hero">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1>Quality Assurance</h1>
          <p>Committed to absolute precision and excellence through rigorous, industry-leading quality control.</p>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="overview-title">Our Commitment to Quality</motion.h2>
              <motion.p variants={fadeInUp} className="overview-text">
                At ManuCorp Industries, quality is not just a department – it's our culture. We maintain the highest standards of quality throughout our manufacturing process, from raw material selection to final product delivery.
              </motion.p>
              <motion.p variants={fadeInUp} className="overview-text">
                Our quality management system is certified to international standards, and we continuously invest in advanced inspection equipment and rigorous training for our quality assurance team.
              </motion.p>
              <motion.div variants={fadeInUp} className="check-row">
                <CheckCircle2 color="#ff6b35" size={20} /> <span>Zero Defect Manufacturing Goal</span>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}>
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quality Control"
                className="overview-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ backgroundColor: '#f4f7fb' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="container">
          <motion.h2 variants={fadeInUp} className="section-title">Our Certifications</motion.h2>
          <div className="certs-grid">
            {certifications.map((c, i) => (
              <motion.div key={i} variants={fadeInUp} className="cert-card">
                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>{c.icon}</div>
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-desc">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="section">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="container">
          <motion.h2 variants={fadeInUp} className="section-title">Our Quality Control Process</motion.h2>
          <div className="process-grid">
            {qualitySteps.map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className="process-step">
                <div className="step-badge">{s.step}</div>
                <div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Equipment */}
      <section className="section" style={{ backgroundColor: '#f4f7fb' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="container">
          <motion.h2 variants={fadeInUp} className="section-title">State-of-the-Art Inspection Equipment</motion.h2>
          <div className="equip-grid">
            {equipment.map((e, i) => (
              <motion.div key={i} variants={fadeInUp} className="equip-card">
                <div className="equip-icon">{e.icon}</div>
                <div className="equip-name">{e.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Quality;