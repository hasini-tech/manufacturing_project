// scr/component/Services.jsx 
import React from 'react';

const Services = () => {
  const services = [
    { icon: '🔧', title: 'Custom Manufacturing', description: 'Tailored manufacturing solutions designed to meet your specific requirements with precision and quality.', features: ['Custom design & engineering', 'Prototype development', 'Small to large batch production', 'Quality assurance'] },
    { icon: '⚙️', title: 'CNC Machining', description: 'State-of-the-art CNC machining services for complex parts and components with tight tolerances.', features: ['Multi-axis machining', 'Turning & milling', 'Precision grinding', 'EDM services'] },
    { icon: '🤖', title: 'Automation Integration', description: 'Complete automation solutions to optimize your manufacturing processes and increase efficiency.', features: ['Robotic systems', 'PLC programming', 'Process automation', 'SCADA systems'] },
    { icon: '🔬', title: 'Quality Testing', description: 'Comprehensive quality testing and inspection services to ensure product reliability and compliance.', features: ['Dimensional inspection', 'Material testing', 'Non-destructive testing', 'Certification services'] },
    { icon: '📦', title: 'Assembly Services', description: 'Professional assembly services for complex products and systems with strict quality control.', features: ['Sub-assembly', 'Final assembly', 'Testing & validation', 'Packaging'] },
    { icon: '📋', title: 'Engineering Support', description: 'Expert engineering support from concept to production, ensuring optimal design and manufacturability.', features: ['Design for manufacturing', 'Value engineering', 'Technical documentation', 'Project management'] }
  ];

  const process = [
    { step: '1', title: 'Consultation', desc: 'Discuss your requirements and project goals' },
    { step: '2', title: 'Design & Planning', desc: 'Create detailed designs and production plans' },
    { step: '3', title: 'Manufacturing', desc: 'Execute production with precision and quality' },
    { step: '4', title: 'Quality Control', desc: 'Rigorous testing and inspection' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        .services-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%);
          color: #fff; padding: 60px 20px; text-align: center;
        }
        .services-hero h1 { font-size: 2.2rem; margin-bottom: 12px; }
        .services-hero p { font-size: 1rem; opacity: 0.9; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 60px 0; }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .service-card {
          background: #fff; border-radius: 10px;
          padding: 28px 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }
        .service-card:hover { transform: translateY(-8px); }
        .service-icon { font-size: 40px; margin-bottom: 16px; }
        .service-title { font-size: 1.2rem; color: #1a3e6f; margin-bottom: 10px; }
        .service-desc { color: #666; line-height: 1.6; margin-bottom: 16px; font-size: 0.95rem; }
        .service-features { list-style: none; padding: 0; margin: 0; }
        .feature-item { color: #666; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; }
        .process-section { background: #f9f9f9; padding: 60px 0; }
        .process-title { font-size: 1.8rem; text-align: center; color: #1a3e6f; margin-bottom: 12px; }
        .process-subtitle { text-align: center; color: #666; margin-bottom: 40px; }
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .process-step { text-align: center; }
        .step-number {
          width: 48px; height: 48px; background: #ff6b35; color: #fff;
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 1.3rem; font-weight: bold;
          margin: 0 auto 16px;
        }
        .step-title { color: #1a3e6f; margin-bottom: 8px; font-size: 1rem; font-weight: 600; }
        .step-desc { color: #666; font-size: 0.9rem; line-height: 1.5; }

        @media (min-width: 480px) {
          .services-hero h1 { font-size: 2.8rem; }
        }
        @media (min-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(3, 1fr); }
          .process-grid { grid-template-columns: repeat(4, 1fr); }
          .process-title { font-size: 2.2rem; }
          .service-title { font-size: 1.4rem; }
        }
      `}</style>

      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive manufacturing solutions for your business needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j} className="feature-item">
                      <span style={{ color: '#ff6b35' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="process-title">Our Process</h2>
          <p className="process-subtitle">We follow a systematic approach to ensure quality and efficiency</p>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <div className="step-number">{p.step}</div>
                <h3 className="step-title">{p.title}</h3>
                <p className="step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;