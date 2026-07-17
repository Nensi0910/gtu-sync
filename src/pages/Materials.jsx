import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Materials() {
  const navigate = useNavigate();

  return (
    <div className="container page-fade">
      <header className="page-header">
        <img
          className="header-main-img"
          src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=500&q=40"
          alt="Library"
        />
        <h1>Materials</h1>
        <p>Select your semester to access study resources</p>
      </header>

      <div className="grid-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
          <div
            key={sem}
            className="sem-card"
            onClick={() => navigate(`/semester/${sem}`)}
          >
            <div className="sem-num">{sem}</div>
            <h3>Semester {sem}</h3>
            <p>GTU Curriculum</p>
          </div>
        ))}
      </div>
    </div>
  );
}
