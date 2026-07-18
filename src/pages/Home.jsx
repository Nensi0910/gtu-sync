import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
    <div className="container page-fade">
      <div className="hero-section">
        <div className="hero-text">
          <span className="update-tag">● New Update: Summer 2026 Papers Added</span>
          <h1>Study Smarter,<br /><span>Not Harder</span></h1>
          <p>
            Access 10,000+ curated study materials, question papers, and notes
            for GTU students. Your complete academic companion.
          </p>
          <button
            className="btn-explore"
            // style={{ padding: '10px 30px', fontSize: '1rem' }}
            onClick={() => navigate('/materials')}
          >
            Get Started →
          </button>
        </div>
        
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Students Studying"
          />
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <img className="stat-img" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=60" alt="Notes" />
          <i className="fa-solid fa-file-lines"></i>
          <h2>1,000+</h2>
          <p>Study Notes</p>
        </div>
        <div className="stat-item">
          <img className="stat-img" src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=60" alt="Papers" />
          <i className="fa-solid fa-file-signature"></i>
          <h2>5,000+</h2>
          <p>Question Papers</p>
        </div>
        <div className="stat-item">
          <img className="stat-img" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=60" alt="Subjects" />
          <i className="fa-solid fa-book-open"></i>
          <h2>50+</h2>
          <p>Subjects</p>
        </div>
        <div className="stat-item">
          <img className="stat-img" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop" alt="Active Students" />
          <i className="fa-solid fa-user-graduate"></i>
          <h2>100+</h2>
          <p>Active Students</p>
        </div>
      </div>
    </div>

    <section className="features-section container">
        <span className="update-tag section-tag">FEATURES</span>
        <h2 className="section-title">Everything You Need to Excel</h2>
        <p className="section-desc">Comprehensive resources designed for GTU students</p>

        <div className="grid-3">
          {/* Card 1 */}
          <div className="feature-card">
            <div className="res-icon bg-blue">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <h3>Question Papers</h3>
            <p>Access previous year papers. Practice with real exam patterns and boost your preparation.</p>
            <ul className="feature-list">
              <li><i className="fa-solid fa-circle-check"></i> Last 5 years papers</li>
              <li><i className="fa-solid fa-circle-check"></i> Detailed solutions</li>
              <li><i className="fa-solid fa-circle-check"></i> Pattern analysis</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="res-icon bg-blue">
              <i className="fa-solid fa-list-check"></i>
            </div>
            <h3>Syllabus</h3>
            <p>Complete syllabus breakdown for all semesters. Stay organized and track your progress effectively.</p>
            <ul className="feature-list">
              <li><i className="fa-solid fa-circle-check"></i> Unit-wise breakdown</li>
              <li><i className="fa-solid fa-circle-check"></i> Topic weightage</li>
              <li><i className="fa-solid fa-circle-check"></i> Learning objectives</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="res-icon bg-purple">
              <i className="fa-solid fa-book-open"></i>
            </div>
            <h3>Study Notes</h3>
            <p>Handwritten and typed notes from various sources. Learn from the best and save preparation time.</p>
            <ul className="feature-list">
              <li><i className="fa-solid fa-circle-check"></i> Curated by experts</li>
              <li><i className="fa-solid fa-circle-check"></i> Easy to understand</li>
              <li><i className="fa-solid fa-circle-check"></i> Quick revision ready</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- 2. TESTIMONIALS SECTION --- */}
      <section className="testimonials-section container">
        <span className="update-tag section-tag yellow-tag">TESTIMONIALS</span>
        <h2 className="section-title">Loved by Students</h2>
        <p className="section-desc">See what our community has to say</p>

        <div className="grid-3">
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
            <p>GTU Sync made my exam preparation so much easier! All question papers are at one place which helps me stay organized. Highly recommend to all GTU students!</p>
            <div className="author-info">
              <h4>Janvi Dave</h4>
              <small>Computer Engineering, 4th Year</small>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
            <p>The notes are well-organized and easy to understand. Saved me countless hours of searching for good study material. This is exactly what GTU students need!</p><br></br>
            <div className="author-info">
              <h4>Nidhi Patel</h4>
              <small>Computer Engineering, 3rd Year</small>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
            <p>Best platform for GTU resources! The syllabus breakdown helped me plan my studies better. The community is super helpful too. A must-have for every student!</p><br></br>
            <div className="author-info">
              <h4>Harsh Panchal</h4>
              <small>Computer Engineering, 3rd Year</small>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CTA BANNER SECTION --- */}
      <section className="cta-section container">
        <div className="cta-banner">
          <h2>Ready to Ace Your Exams?</h2>
          <p>Join thousands of students who are already using GTU Sync to excel in their academics. Get instant access to all resources.</p>
          
          <button className="btn-cta" onClick={() => navigate('/materials')}>
            Start Learning Now <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="cta-stats">
            <div className="stat-block">
              <h3>100%</h3>
              <p>Free Access</p>
            </div>
            <div className="stat-block">
              <h3>24/7</h3>
              <p>Available</p>
            </div>
            <div className="stat-block">
              <h3>100+</h3>
              <p>Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PUBLIC DOMAIN & FAIR USE NOTICE --- */}
      <section className="homepage-notice-section container" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <div className="public-domain-card">
          <div className="notice-card-header">
            <i className="fa-solid fa-scale-balanced"></i>
            <h3>Content Ownership & Fair Use Notice</h3>
          </div>
          <p>
            <strong>GTU Sync</strong> is an independent, community-driven digital repository built strictly for free educational purposes. 
            The study notes, syllabus sheets, and previous year question papers shared on this platform are public resources 
            collected from open public domains and crowd-sourced student contributions.
          </p>
          <p>
            We do not claim ownership, copyright, or exclusive rights over any of these academic assets. All intellectual 
            properties belong entirely to their respective owners. If you are a copyright holder and wish to request 
            content removal, please contact us directly at <a href="mailto:gtusync.study@gmail.com" className="disclaimer-link">gtusync.study@gmail.com</a>.
          </p>
        </div>
      </section>

      {/* --- 4. FOOTER SECTION --- */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h3>GTU Sync</h3>
            </div>
            <p>Your complete study companion for GTU academics. Making education accessible to everyone.</p>
            {/* Replaced social links with a clean email contact layout */}
            <div className="footer-email-contact">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:gtusync.study@gmail.com">gtusync.study@gmail.com</a> {/* Change to your real email id */}
            </div>
          </div>
          <div className="footer-links-col">
            <h4>Resources</h4>
            <ul>
              {/* Directing active resource tags straight to your core materials page */}
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/materials'); }}>Papers</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/materials'); }}>Study Notes</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/materials'); }}>Syllabus</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/materials'); }}>Video</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/materials'); }}>PPTs</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Company</h4>
            <ul>
              {/* If you have a separate /about route, map it here, otherwise keep as placeholder */}
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About Us</a></li>
              <li><a href="mailto:gtusync.study@gmail.com">Contact us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Documentation</a></li>
              <li><a href="mailto:gtusync.study@gmail.com">Support</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/disclaimer'); }}>Disclaimer</a></li>
            </ul>
          </div>

          {/* <div className="footer-links-col">
            <h4>Legal</h4>
            <ul>
              
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Cookie Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Disclaimer</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Licensing</a></li>
            </ul>
          </div> */}
        </div>

        <div className="container footer-bottom">
          <p>© 2026 GTU Sync. All rights reserved.</p>
          {/* <div className="footer-bottom-links">
            <a href="mailto:gtusync.study@gmail.com">Support</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>Documentation</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/materials'); }}>Status</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/disclaimer'); }}>Disclaimer</a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
