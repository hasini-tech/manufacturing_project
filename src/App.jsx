// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* ── Global Mobile-First Reset & Utilities ── */}
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          font-size: 16px;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
          background-color: #ffffff;
          overflow-x: hidden;
          min-height: 100vh;
        }

        img, video, iframe {
          max-width: 100%;
          height: auto;
          display: block;
        }

        a, button {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }

        /* ── App Shell ── */
        #app-shell {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
        }

        /* ── Main: offset for fixed header ── */
        #main-content {
          flex: 1;
          width: 100%;
          padding-top: 60px;
        }
        @media (min-width: 992px) {
          #main-content { padding-top: 70px; }
        }

        /* ── Container ── */
        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
        }
        @media (min-width: 640px) {
          .container { padding-left: 24px; padding-right: 24px; }
        }
        @media (min-width: 1024px) {
          .container { padding-left: 32px; padding-right: 32px; }
        }

        /* ── Responsive Grids ── */
        .grid-2, .grid-3, .grid-4 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        .grid-4 { grid-template-columns: repeat(2, 1fr); gap: 16px; }

        @media (min-width: 640px) {
          .grid-2 { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .grid-3 { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 1024px) {
          .grid-2 { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .grid-3 { grid-template-columns: repeat(3, 1fr); gap: 30px; }
          .grid-4 { grid-template-columns: repeat(4, 1fr); gap: 24px; }
        }

        /* ── Section spacing ── */
        .section { padding: 48px 0; }
        @media (min-width: 768px)  { .section { padding: 64px 0; } }
        @media (min-width: 1024px) { .section { padding: 80px 0; } }

        /* ── Fluid Typography ── */
        .heading-xl { font-size: clamp(1.8rem, 5vw,  3rem);   font-weight: 700; line-height: 1.2; }
        .heading-lg { font-size: clamp(1.5rem, 4vw,  2.5rem); font-weight: 700; line-height: 1.3; }
        .heading-md { font-size: clamp(1.2rem, 3vw,  1.8rem); font-weight: 600; line-height: 1.4; }
        .text-body  { font-size: clamp(0.9rem, 2.5vw,1.05rem); line-height: 1.7; }

        /* ── Buttons ── */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-family: inherit;
          min-height: 44px; /* accessible tap target */
        }
        .btn-primary  { background:#ff6b35; color:#fff; border-color:#ff6b35; }
        .btn-primary:hover  { background:#e55a2b; border-color:#e55a2b; transform:translateY(-2px); box-shadow:0 6px 20px rgba(255,107,53,0.35); }
        .btn-outline  { background:transparent; color:#ff6b35; border-color:#ff6b35; }
        .btn-outline:hover  { background:#ff6b35; color:#fff; transform:translateY(-2px); }
        .btn-navy     { background:#1a3e6f; color:#fff; border-color:#1a3e6f; }
        .btn-navy:hover     { background:transparent; color:#1a3e6f; }

        /* Full-width on tiny screens */
        .btn-block { width:100%; }
        @media (min-width: 480px) { .btn-block { width:auto; } }

        /* ── Cards ── */
        .card {
          background:#fff; border-radius:12px;
          box-shadow:0 4px 16px rgba(0,0,0,0.07);
          overflow:hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover { transform:translateY(-6px); box-shadow:0 12px 28px rgba(0,0,0,0.12); }

        /* ── Page Hero (shared) ── */
        .page-hero {
          background: linear-gradient(135deg, #1a3e6f 0%, #0d213f 100%);
          color:#fff; text-align:center;
          padding: 48px 20px;
        }
        @media (min-width: 768px) { .page-hero { padding: 72px 24px; } }

        .page-hero h1 {
          font-size: clamp(1.8rem, 5vw, 3rem);
          font-weight:700; margin-bottom:12px;
        }
        .page-hero p {
          font-size: clamp(0.95rem, 2.5vw, 1.2rem);
          opacity:0.85; max-width:600px;
          margin:0 auto; line-height:1.7;
        }

        /* ── Forms: prevent iOS zoom on focus ── */
        input, textarea, select { font-size: 16px !important; font-family: inherit; }

        /* ── Stat cards ── */
        .stat-number { font-size: clamp(1.8rem, 4vw, 2.8rem); color:#ff6b35; font-weight:800; }

        /* ── Feature icon circle ── */
        .icon-circle {
          width:64px; height:64px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          background:#1a3e6f; color:#fff; font-size:28px;
          margin:0 auto 16px; flex-shrink:0;
        }

        /* ── Step badge ── */
        .step-badge {
          width:46px; height:46px; border-radius:12px;
          display:flex; align-items:center; justify-content:center;
          background:#ff6b35; color:#fff;
          font-size:1.2rem; font-weight:700;
          flex-shrink:0;
          box-shadow:0 4px 10px rgba(255,107,53,0.3);
        }

        /* ── Responsive table alternative: stacked on mobile ── */
        @media (max-width: 639px) {
          .hide-mobile { display:none !important; }
        }
        @media (min-width: 640px) {
          .hide-desktop { display:none !important; }
        }
      `}</style>

      <div id="app-shell">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/about"      element={<About />} />
            <Route path="/products"   element={<Products />} />
            <Route path="/services"   element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/quality"    element={<Quality />} />
            <Route path="/contact"    element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;