import { useEffect, useRef } from "react";
import "./App.css";
import "./webdoc.css";

function App() {
  const navbarRef = useRef(null);
  const carouselRef = useRef(null);
  const scrollPercentRef = useRef(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const navbar = navbarRef.current;
    const carousel = carouselRef.current;
    const scrollPercentEl = scrollPercentRef.current;
    if (!navbar || !carousel || !scrollPercentEl) return;

    const slides = carousel.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const viewportHeight = window.innerHeight;
    const scrollPerSlide = (viewportHeight * 4) / totalSlides;
    const scrollThresholds = [];
    for (let i = 0; i < totalSlides; i++) {
      scrollThresholds[i] = scrollPerSlide * i;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar hide/show
      if (scrollY > lastScrollYRef.current && scrollY > 100) {
        navbar.classList.add("hidden");
      } else if (scrollY < lastScrollYRef.current) {
        navbar.classList.remove("hidden");
      }
      lastScrollYRef.current = scrollY;

      // Carousel
      const scrollPercent = Math.min(
        (scrollY / (document.body.scrollHeight - viewportHeight)) * 100,
        100
      );
      scrollPercentEl.textContent = Math.round(scrollPercent);

      let activeSlideIndex = 0;
      for (let i = 0; i < totalSlides; i++) {
        if (scrollY >= scrollThresholds[i]) activeSlideIndex = i;
      }

      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === activeSlideIndex);
      });
    };

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleScroll(); // initialize once

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const caraHide = () => {
    const cc = document.getElementById("carousel-container");
    if (cc) cc.classList.add("outside");
  };

  return (
    <>
      <div>
        <nav className="navbar" id="navbar" ref={navbarRef}>
          <div className="nav-container">
            <div className="logo">Logo</div>
            <ul className="nav-links">
              <li>
                <a href="#home">EVENTS</a>
              </li>
              <li>
                <a href="./competition.html">COMPETITIONS</a>
              </li>
              <li>
                <a href="#contact">MERCHANDISE</a>
              </li>
              <li>
                <a href="#services">STUDENT COUNCIL</a>
              </li>
              <li>
                <a href="#contact">MAFFICKxTECHNOSEARCH</a>
              </li>
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

        <div className="carousel-container" id="carousel-container">
          <div className="carousel" id="carousel" ref={carouselRef}>
            <div className="carousel-slide" data-slide="0">
              <div className="slide-icon">🚀</div>
              <div className="slide-title">Launch</div>
              <p>Scroll to discover features</p>
            </div>
            <div className="carousel-slide" data-slide="1">
              <div className="slide-icon">⚡</div>
              <div className="slide-title">Lightning Fast</div>
              <p>Optimized for performance</p>
            </div>
            <div className="carousel-slide" data-slide="2">
              <div className="slide-icon">🎨</div>
              <div className="slide-title">Beautiful UI</div>
              <p>Modern glassmorphism design</p>
            </div>
            <div className="carousel-slide" data-slide="3">
              <div className="slide-icon">📱</div>
              <div className="slide-title">Fully Responsive</div>
              <p>Works on all devices</p>
            </div>
            <div className="carousel-slide" data-slide="4">
              <div className="slide-icon">🔮</div>
              <div className="slide-title">Scroll Magic</div>
              <p>Controlled by your scroll</p>
            </div>
          </div>
        </div>

        <div className="content" onDoubleClick={caraHide}>
          <h1>🌟 Scroll Down!</h1>
          <p>Navbar slides up ↗️ | Carousel changes content 🎠</p>
        </div>

        <section
          style={{
            margin: "200vh 0",
            padding: "4rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2>Keep Scrolling...</h2>
        </section>
        <section
          style={{
            margin: "200vh 0",
            padding: "4rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2>Both features working! ✨</h2>
        </section>
      </div>
    </>
  );
}

export default App;
