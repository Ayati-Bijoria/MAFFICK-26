import { useEffect, useRef } from "react";
import "./App.css";
import "./Navbar.css";

function Navbar({ onContentChange }) {
  const navbarRef = useRef(null);
  const scrollPercentRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const scrollPercentEl = scrollPercentRef.current;
    if (!navbar || !scrollPercentEl) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar hide/show
      if (scrollY > lastScrollYRef.current && scrollY > 100) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
      lastScrollYRef.current = scrollY;

      // Scroll percent
      const viewportHeight = window.innerHeight;
      const scrollPercent = Math.min(
        (scrollY / (document.body.scrollHeight - viewportHeight)) * 100,
        100
      );
      scrollPercentEl.textContent = Math.round(scrollPercent);
    };

    const handleResize = () => handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll(); // Initial

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <nav className="navbar" id="navbar" ref={navbarRef}>
          <div className="nav-container">
            <div className="logo">Logo</div>
            <ul className="nav-links">
              <li><a href="#home">EVENTS</a></li>
              <li><a href="./competition.html">COMPETITIONS</a></li>
              <li><a href="#contact">MERCHANDISE</a></li>
              <li><a href="#services">STUDENT COUNCIL</a></li>
              <li><a href="#contact">MAFFICKxTECHNOSEARCH</a></li>
            </ul>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        <div className="indicator" id="scrollIndicator" hidden>
          Scroll: <span id="scrollPercent" ref={scrollPercentRef}>0</span>%
        </div>

        {/* Spacer for fixed navbar */}
        <div className="h-16" ref={contentRef} id="content-to-change">
          {onContentChange ? onContentChange() : <div>Default spacer</div>}</div>
      </div>
    </>
  );
}

export default Navbar;
