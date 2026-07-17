import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import subjectsData from '../data/subjects';

export default function Resources() {
  const { sem, subject } = useParams();
  const navigate = useNavigate();
  const subjectName = decodeURIComponent(subject);
  const semNum = parseInt(sem, 10);

  // State to track if we should show the "Coming Soon" notice page and for which resource
  const [noticeResource, setNoticeResource] = useState(null);

  // Find this specific subject's links
  const subjectData = (subjectsData[semNum] || []).find(s => s.name === subjectName);
  const links = subjectData?.links || {};

  // Define all possible resource structures explicitly
  const allResourceTypes = [
    { label: 'Notes',            icon: 'fa-solid fa-file-pdf',        colorClass: 'bg-blue',   href: links.notes },
    { label: 'YouTube Lectures', icon: 'fa-brands fa-youtube',        colorClass: 'bg-red',    href: links.youtube },
    { label: 'PYQ Papers',       icon: 'fa-solid fa-question',        colorClass: 'bg-purple', href: links.pyq },
    { label: 'Syllabus',         icon: 'fa-solid fa-list-check',      colorClass: 'bg-green',  href: links.syllabus },
    { label: 'Books',            icon: 'fa-solid fa-book',            colorClass: 'bg-navy',   href: links.books },
    { label: 'PPTs',             icon: 'fa-solid fa-file-powerpoint', colorClass: 'bg-orange', href: links.ppts }
  ];

  // FILTER: Keep cards that have a link OR are explicitly marked as "coming-soon"
  const availableResources = allResourceTypes.filter(res => {
    if (res.href && typeof res.href === 'string') {
      const path = res.href.trim().toLowerCase();
      return path !== '' || path === 'coming-soon';
    }
    return false;
  });

  // Check if the only visible layout card left is the Syllabus
  const isSyllabusOnly = availableResources.length === 1 && availableResources[0].label === 'Syllabus';

  // Global Click Handler for resource cards
  const handleResourceClick = (e, res) => {
    if (res.href && res.href.trim().toLowerCase() === 'coming-soon') {
      e.preventDefault(); // Stop normal redirection
      setNoticeResource(res); // Pass the entire resource object to our notice state
    }
  };

  // If a resource was clicked that is coming soon, render the dynamic notice page state
  if (noticeResource) {
    return (
      <div className="container page-fade" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <button className="back-btn" onClick={() => setNoticeResource(null)} >
          <i className="fa-solid fa-arrow-left"></i> Back to Resources
        </button>
        <div className="notice-content" style={{ margin: '0 auto' }}>
        {/* <div style={{ margin: '40px auto', maxWidth: '500px' }}> */}
          {/* Dynamically uses the specific card's color profile and icon styling */}
          <div className={`res-icon ${noticeResource.colorClass} notice-icon`}>
            <i className={noticeResource.icon}></i>
          </div>
          <h1 className="notice-title">
            {noticeResource.label} Unavailable
          </h1>
          <h3 className="notice-subtitle">Comming soon...</h3>
          <p className="notice-text">
            Sorry, right now the {noticeResource.label.toLowerCase()} are not available. Please check again later.
          </p>
        </div>
      </div>
    );
  }

  // Regular resources view layout
  return (
    <div className="container page-fade">
      <button className="back-btn" onClick={() => navigate(`/semester/${sem}`)}>
        <i className="fa-solid fa-arrow-left"></i> Back to Subjects
      </button>

      <div className="page-subheader">
        <h1>{subjectName}</h1>
        <p>Semester {sem} • GTU Curriculum</p>
      </div>

      <div className={`grid-3 ${isSyllabusOnly ? 'syllabus-only' : ''}`}>
        {availableResources.map((res) => (
          <a
            key={res.label}
            href={res.href === 'coming-soon' ? '#' : res.href}
            className="res-card"
            target={res.href && res.href !== 'coming-soon' ? '_blank' : undefined}
            rel="noreferrer"
            onClick={(e) => handleResourceClick(e, res)}
          >
            <div className={`res-icon ${res.colorClass}`}>
              <i className={res.icon}></i>
            </div>
            <h3>{res.label}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}