import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import subjectsData from '../data/subjects';

export default function Subjects() {
  const { sem } = useParams();
  const navigate = useNavigate();
  const semNum = parseInt(sem, 10);
  const subjects = subjectsData[semNum] || [];

  if (!subjects.length) {
    return (
      <div className="container page-fade">
        <button className="back-btn" onClick={() => navigate('/materials')}>
          <i className="fa-solid fa-arrow-left"></i> Back to Semester
        </button>
        <p style={{ marginTop: '2rem', color: 'var(--text-light)' }}>
          No subjects found for Semester {sem}.
        </p>
      </div>
    );
  }

  return (
    <div className="container page-fade">
      <button className="back-btn" onClick={() => navigate('/materials')}>
        <i className="fa-solid fa-arrow-left"></i> Back to Semester
      </button>

      <div className="page-subheader">
        <h1>Semester {sem} Subjects</h1>
        <p>Select a subject to view available materials • {subjects.length} subjects</p>
      </div>

      <div className="grid-2">
        {subjects.map((subject) => {
          const encodedSubject = encodeURIComponent(subject.name);
          return (
            <Link
              key={subject.code}
              className="sub-card"
              to={`/semester/${sem}/subject/${encodedSubject}`}
            >
              <div>
                <small>{subject.code}</small>
                <h3>{subject.name}</h3>
              </div>
              <i className="fa-solid fa-chevron-right" style={{ color: '#cbd5e1', flexShrink: 0 }}></i>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
