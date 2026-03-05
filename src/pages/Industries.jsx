// src/pages/Industries.jsx
import React from 'react';

const Industries = () => {
  const industries = [
    {
      name: 'Automotive',
      icon: '🚗',
      description: 'Precision components and systems for the automotive industry, from engine parts to transmission components.',
      applications: ['Engine Components', 'Transmission Parts', 'Brake Systems', 'Suspension Parts']
    },
    {
      name: 'Aerospace',
      icon: '✈️',
      description: 'High-precision components for aerospace applications, meeting stringent quality and safety standards.',
      applications: ['Structural Components', 'Engine Parts', 'Landing Gear', 'Interior Fittings']
    },
    {
      name: 'Medical',
      icon: '🏥',
      description: 'Precision manufacturing for medical devices and equipment, ensuring reliability and accuracy.',
      applications: ['Surgical Instruments', 'Diagnostic Equipment', 'Implants', 'Medical Devices']
    },
    {
      name: 'Energy',
      icon: '⚡',
      description: 'Components and systems for the energy sector, including renewable energy and traditional power generation.',
      applications: ['Turbine Parts', 'Solar Components', 'Wind Energy', 'Oil & Gas Equipment']
    },
    {
      name: 'Electronics',
      icon: '💻',
      description: 'Precision enclosures and components for electronic devices and systems.',
      applications: ['Enclosures', 'Heat Sinks', 'Connectors', 'Circuit Board Components']
    },
    {
      name: 'Construction',
      icon: '🏗️',
      description: 'Heavy-duty components and equipment for the construction industry.',
      applications: ['Structural Parts', 'Heavy Equipment', 'Tools', 'Fasteners']
    }
  ];

  const stats = [
    { number: '500+', label: 'Industrial Clients' },
    { number: '15+',  label: 'Industries Served' },
    { number: '1000+',label: 'Projects Completed' },
    { number: '98%',  label: 'Client Satisfaction' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <style>{`
        /* ── Hero ── */
        .ind-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #2a4f8a 100%);
          color: #fff;
          padding: 48px 20px;
          text-align: center;
        }
        .ind-hero h1 {
          font-size: clamp(1.8rem, 5vw, 3rem);
          font-weight: 700;
          margin-bottom: 12px;
        }
        .ind-hero p {
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ── Shared ── */
        .ind-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }
        .ind-section {
          padding: 48px 0;
        }

        /* ── Industry cards grid ── */
        .ind-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        /* ── Single industry card ── */
        .ind-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .ind-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.13);
        }

        /* Icon banner (replaces image) */
        .ind-icon-banner {
          background: linear-gradient(135deg, #1a3e6f 0%, #2a5fa8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 130px;
          font-size: 56px;
          flex-shrink: 0;
        }

        .ind-card-body {
          padding: 22px 20px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .ind-card-title {
          font-size: 1.2rem;
          color: #1a3e6f;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .ind-card-desc {
          color: #666;
          line-height: 1.65;
          margin-bottom: 16px;
          font-size: 0.92rem;
          flex: 1;
        }
        .ind-apps-heading {
          color: #1a3e6f;
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
        }
        .ind-apps-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        .ind-app-item {
          color: #555;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 6px;
          line-height: 1.4;
        }
        .ind-dot {
          color: #ff6b35;
          font-size: 1rem;
          flex-shrink: 0;
        }

        /* ── Stats section ── */
        .ind-stats-section {
          background: #f4f7fb;
          padding: 48px 0;
        }
        .ind-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .ind-stat-card {
          text-align: center;
          padding: 24px 16px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.07);
          transition: transform 0.3s;
        }
        .ind-stat-card:hover { transform: translateY(-5px); }
        .ind-stat-number {
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: #ff6b35;
          font-weight: 800;
          margin-bottom: 6px;
          line-height: 1;
        }
        .ind-stat-label {
          color: #1a3e6f;
          font-size: clamp(0.85rem, 2vw, 1rem);
          font-weight: 600;
        }

        /* ── Tablet (640px+) ── */
        @media (min-width: 640px) {
          .ind-hero          { padding: 64px 24px; }
          .ind-container     { padding: 0 24px; }
          .ind-section       { padding: 64px 0; }
          .ind-grid          { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .ind-stats-section { padding: 64px 0; }
          .ind-stats-grid    { grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .ind-icon-banner   { height: 160px; font-size: 64px; }
        }

        /* ── Desktop (1024px+) ── */
        @media (min-width: 1024px) {
          .ind-hero          { padding: 80px 24px; }
          .ind-section       { padding: 80px 0; }
          .ind-grid          { grid-template-columns: repeat(3, 1fr); gap: 28px; }
          .ind-stats-section { padding: 80px 0; }
          .ind-card-title    { font-size: 1.35rem; }
          .ind-card-desc     { font-size: 0.97rem; }
          .ind-app-item      { font-size: 0.93rem; }
          .ind-icon-banner   { height: 180px; font-size: 72px; }
        }

        /* ── Small phones (≤360px) ── */
        @media (max-width: 360px) {
          .ind-container   { padding: 0 12px; }
          .ind-apps-list   { grid-template-columns: 1fr; }
          .ind-icon-banner { height: 110px; font-size: 48px; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="ind-hero">
        <h1>Industries We Serve</h1>
        <p>Delivering quality solutions across diverse industrial sectors</p>
      </section>

      {/* ── Industry Cards ── */}
      <section className="ind-section">
        <div className="ind-container">
          <div className="ind-grid">
            {industries.map((industry, index) => (
              <div key={index} className="ind-card">
                {/* Emoji icon banner — no broken image path */}
                <div className="ind-icon-banner">
                  {industry.icon}
                </div>

                <div className="ind-card-body">
                  <h3 className="ind-card-title">{industry.name}</h3>
                  <p className="ind-card-desc">{industry.description}</p>
                  <p className="ind-apps-heading">Applications</p>
                  <ul className="ind-apps-list">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="ind-app-item">
                        <span className="ind-dot">•</span> {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ind-stats-section">
        <div className="ind-container">
          <div className="ind-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="ind-stat-card">
                <div className="ind-stat-number">{stat.number}</div>
                <div className="ind-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;