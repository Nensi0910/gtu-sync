import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Materials from './pages/Materials';
import Subjects from './pages/Subjects';
import Resources from './pages/Resources';
import About from './pages/About';
import Disclaimer from './pages/Disclaimer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/semester/:sem" element={<Subjects />} />
        <Route path="/semester/:sem/subject/:subject" element={<Resources />} />
        {/* Catch-all → Home */}
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimer />}/>
      </Routes>
    </HashRouter>
  );
}
