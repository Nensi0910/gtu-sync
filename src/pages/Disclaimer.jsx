import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Disclaimer() {
    const navigate = useNavigate();
  // Automatically scroll to the top of the page when it mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="disclaimer-page container page-fade">
       <div className="back-home-wrapper">
        <button className="btn-back-home" onClick={() => navigate('/')}>
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </button>
      </div>
      <div className="disclaimer-header">
        <h1>Disclaimer</h1>
        <p>Last updated: July 2026</p>
      </div>

      <div className="disclaimer-content">
        <section className="disclaimer-intro">
          <p>
            The information provided on GTU Sync is for educational and informational purposes only. 
            While we strive to provide accurate, up-to-date, and helpful study materials, we make no guarantees 
            regarding the completeness, reliability, or accuracy of the content.
          </p>
        </section>

        {/* --- ADD THIS INSIDE YOUR DISCLAIMER-CONTENT CONTAINER --- */}
        <section className="copyright-fairuse-note">
        <i className="fa-solid fa-scale-balanced"></i>
        <p>
            <strong>Content Ownership & Fair Use Notice:</strong> GTU Sync acts strictly as an open-source, crowd-sourced digital repository. 
            The study materials, syllabus sheets, and previous year question papers hosted here are public resources collected from open public domains 
            and student contributions. 
        </p>
        <p>
            GTU Sync does not claim ownership, copyright, or exclusive rights over any of these academic assets. All trademarks, copyrights, and intellectual property belong strictly to their respective owners (including Gujarat Technological University and original authors). If you are a copyright holder and wish to have any specific content removed, please contact us at <a href="mailto:gtusync.study@gmail.com" className="disclaimer-link">gtusync.study@gmail.com</a>.
        </p>
        </section>
        
        <section>
          <h2>1. Educational Purpose Only</h2>
          <p>
            All content, materials, and resources shared on this website are intended solely to assist students 
            in their academic studies. They should not be considered as official study material from Gujarat 
            Technological University (GTU).
          </p>
        </section>

        <section>
          <h2>2. No Legal or Professional Advice</h2>
          <p>
            The content on this website does not constitute professional advice. Users are encouraged to verify 
            the information from official sources before making any decisions based on the content provided here.
          </p>
        </section>

        <section>
          <h2>3. External Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, 
            accuracy, or practices of any external sites linked here.
          </p>
        </section>

        <section>
          <h2>4. Limitation of Liability</h2>
          <p>
            GTU Sync shall not be held liable for any direct, indirect, incidental, or consequential 
            damages arising out of the use or inability to use the materials provided on this site.
          </p>
        </section>

        <section>
          <h2>5. Contact</h2>
          <p>
            If you have any concerns or believe something has been shared inappropriately, please visit our 
            Contact Us page or email us at{' '}
            <a href="mailto:gtusync.study@gmail.com" className="disclaimer-link">contact</a> to get in touch.
          </p>
        </section>
      </div>
    </div>
  );
}