import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleExplore = () => {
    setMenuOpen(false);
    navigate('/materials');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <i className="fa-solid fa-graduation-cap" style={{ marginRight: '8px', color: '#5A4FCF' }}></i>
        GTU Sync
      </Link>

      {/* Desktop nav links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/materials">Materials</Link>
        <Link to="/about">About</Link>
      </div>

      <button className="btn-explore desktop-only" onClick={handleExplore}>
        Explore Resources
      </button>

      {/* Hamburger button - mobile only */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/materials" onClick={() => setMenuOpen(false)}>Materials</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <button className="btn-explore" onClick={handleExplore}>Explore Resources</button>
        </div>
      )}
    </nav>
  );
}
