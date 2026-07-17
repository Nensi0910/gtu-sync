import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page container page-fade" style={{ padding: '60px 20px' }}>
      
      {/* Navigation Layer */}
      <button className="back-btn" onClick={() => navigate('/')}>
        <i className="fa-solid fa-arrow-left"></i> Back to Home
      </button>

      {/* Header Module */}
      <div className="page-subheader" style={{ textAlign: 'center', marginTop: '20px' }}>
        <span className="update-tag section-tag">OUR PROFILE</span>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '12px' }}>About GTU Sync</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Democratizing university academics through structure, clarity, and instant resource access.
        </p>
      </div>

      {/* Core Content Layout Split Grid */}
      <div style={{ margin: '60px auto', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
        
        {/* 1. Our Mission Statement */}
        <div className="feature-card" style={{ borderLeft: '5px solid var(--primary)' }}>
          <h2 style={{ color: 'var(--text-dark)', fontWeight: '700', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fa-solid fa-bullseye" style={{ color: 'var(--primary)' }}></i> Our Mission
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            To empower engineering students across the GTU network by providing 100% free, organized, and instant access to top-tier study materials. We aim to convert stressful exam preparation into a structured, high-efficiency learning process.
          </p>
        </div>

        {/* 2. The Practical Problem & Solution Layout */}
        <div className="grid-2-desktop">
          <div className="feature-card">
            <h3 style={{ color: '#ef4444', fontWeight: '700', marginBottom: '10px' }}>
              <i className="fa-solid fa-circle-xmark"></i> The Problem
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Syllabus revisions, previous year questions (PYQs), and handwritten notes are often scattered across chaotic WhatsApp groups, outdated drives, and external platforms, wasting critical study windows.
            </p>
          </div>

          <div className="feature-card">
            <h3 style={{ color: '#22c55e', fontWeight: '700', marginBottom: '10px' }}>
              <i className="fa-solid fa-circle-check"></i> Our Solution
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              GTU Sync acts as a centralized repository. We cross-verify every resource against current university course codes, delivering an ad-free, click-and-study framework optimized for laptops and mobile viewports.
            </p>
          </div>
        </div>

        {/* 3. Operational Pillars (What We Offer) */}
        <div>
          <h2 style={{ color: 'var(--text-dark)', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>
            What We Offer
          </h2>
          
          <div className="grid-3">
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="res-icon bg-blue" style={{ margin: '0 auto' }}>
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <h4 style={{ margin: '15px 0 8px', fontWeight: '700', fontSize: '1.15rem' }}>Curated Notes</h4>
              <p style={{ fontSize: '0.9rem' }}>Handwritten highlights and structured reference docs filtered by topic weightage.</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="res-icon bg-purple" style={{ margin: '0 auto' }}>
                <i className="fa-solid fa-question"></i>
              </div>
              <h4 style={{ margin: '15px 0 8px', fontWeight: '700', fontSize: '1.15rem' }}>Solved Papers</h4>
              <p style={{ fontSize: '0.9rem' }}>Access to previous year question sets to decode recurring paper patterns.</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="res-icon bg-orange" style={{ margin: '0 auto' }}>
                <i className="fa-solid fa-list-check"></i>
              </div>
              <h4 style={{ margin: '15px 0 8px', fontWeight: '700', fontSize: '1.15rem' }}>Official Blueprints</h4>
              <p style={{ fontSize: '0.9rem' }}>Direct synchronization with the official university course credit mappings.</p>
            </div>
          </div>
        </div>

        {/* 4. Core Strengths (Why Choose Us / Pillars) */}
        <div>
          <h2 style={{ color: 'var(--text-dark)', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>
            Why Choose Us
          </h2>

          <div className="grid-3">
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="res-icon bg-blue" style={{ margin: '0 auto' }}>
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 style={{ margin: '20px 0 10px', fontWeight: '700', fontSize: '1.15rem' }}>100% Focused</h3>
              <p style={{ fontSize: '0.9rem' }}>Every piece of content—from syllabus maps to lecture links—is custom-tailored precisely to official GTU course codes.</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="res-icon bg-purple" style={{ margin: '0 auto' }}>
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 style={{ margin: '20px 0 10px', fontWeight: '700', fontSize: '1.15rem' }}>Zero Friction</h3>
              <p style={{ fontSize: '0.9rem' }}>No mandatory sign-ups, no hidden paywalls, and no annoying pop-ups. Just click your semester, select your subject, and start learning.</p>
            </div>

            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="res-icon bg-orange" style={{ margin: '0 auto' }}>
                <i className="fa-solid fa-heart"></i>
              </div>
              <h3 style={{ margin: '20px 0 10px', fontWeight: '700', fontSize: '1.15rem' }}>Student First</h3>
              <p style={{ fontSize: '0.9rem' }}>Optimized directly for fast loading on smartphones during tight schedules, ensuring you can pull up reference files anywhere.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}