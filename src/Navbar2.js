import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import "./Navbar2.css";
import maffick from './img/maffick.png';
import techno from './img/techno-logo.png';

function Navbar2({ onContentChange }) {
  const contentRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <div>
        <nav className="navbar" id="navbar"> {/* Fixed: nav-maffick class */}
          <div className="nav-container">
            <Link className="navbar-brand logo" to="/"><img src={maffick} width="70" height="70" margin="0" /></Link>
            <Link className="navbar-brand logo" to="/"><img src={techno} width="70" height="70" margin="0" /></Link>
            
            {/* Desktop Links - Hide on mobile */}
            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <li><Link to="/Events" onClick={closeMobileMenu}>EVENTS</Link></li>
              <li><Link to="/Competitions" onClick={closeMobileMenu}>COMPETITIONS</Link></li>
              <li><Link to="/Timeline" onClick={closeMobileMenu}>TIMELINE</Link></li>
              <li><Link to="/Merch" onClick={closeMobileMenu}>MERCHANDISE</Link></li>
              <li><Link to="/Sponsor" onClick={closeMobileMenu}>SPONSORSHIP</Link></li>
              <li><Link to="/Maffick" onClick={closeMobileMenu}>OUR TEAM</Link></li>
            </ul>
            
            {/* Hamburger - Clickable! */}
            <div 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
              onClick={toggleMobileMenu}
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
              onKeyDown={(e) => e.key === 'Enter' && toggleMobileMenu()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Mobile Overlay Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <div className="mobile-nav-links">
                <Link to="/Events" onClick={closeMobileMenu}>EVENTS</Link>
                <Link to="/Competitions" onClick={closeMobileMenu}>COMPETITIONS</Link>
                <Link to="/Timeline" onClick={closeMobileMenu}>TIMELINE</Link>
                <Link to="/Merch" onClick={closeMobileMenu}>MERCHANDISE</Link>
                <Link to="/Sponsor" onClick={closeMobileMenu}>SPONSORSHIP</Link>
                <Link to="/Maffick" onClick={closeMobileMenu}>OUR TEAM</Link>
              </div>
            </div>
          )}
        </nav>

        {/* Spacer for fixed navbar */}
        <div className="h-16" ref={contentRef} id="content-to-change">
          {onContentChange ? onContentChange() : <div></div>}
        </div>
      </div>
    </>
  );
}

export default Navbar2;
