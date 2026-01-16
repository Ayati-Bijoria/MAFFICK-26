import { useEffect, useRef } from "react";
import "./Carousel.css";

function Carousel() {
  const carouselRef = useRef(null);

  // ✅ Move caraHide OUTSIDE useEffect
  const caraHide = () => {
    const cc = document.getElementById("carousel-container");
    if (cc) cc.classList.add("outside");
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = carousel.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPerSlide = (viewportHeight * 4) / totalSlides;

      // Active slide
      let activeSlideIndex = 0;
      for (let i = 0; i < totalSlides; i++) {
        if (scrollY >= scrollPerSlide * i) activeSlideIndex = i;
      }

      slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === activeSlideIndex);
      });

      // Scroll progress
      const progress = Math.min(
        (scrollY / (scrollPerSlide * totalSlides)) * 100,
        100
      );
      carousel.style.setProperty("--scroll-progress", `${progress}%`);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="carousel-container" id="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <div className="carousel-slide">
            <div className="slide-icon">🚀</div>
            <div className="slide-title">Launch</div>
            <p>Scroll to discover features</p>
          </div>
          <div className="carousel-slide">
            <div className="slide-icon">⚡</div>
            <div className="slide-title">Lightning Fast</div>
            <p>Optimized performance</p>
          </div>
          <div className="carousel-slide">
            <div className="slide-icon">🎨</div>
            <div className="slide-title">Beautiful UI</div>
            <p>Glassmorphism design</p>
          </div>
          <div className="carousel-slide">
            <div className="slide-icon">📱</div>
            <div className="slide-title">Fully Responsive</div>
            <p>Works on all devices</p>
          </div>
          <div className="carousel-slide">
            <div className="slide-icon">🔮</div>
            <div className="slide-title">Scroll Magic</div>
            <p>Controlled by scroll</p>
          </div>

          <div className="scroll-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>

      {/* ✅ Add onDoubleClick HERE */}
      

      <section style={{ margin: "400vh 0", padding: "4rem", textAlign: "center" }}>
        <h2>Scroll complete! ✨</h2>
      </section>
    </>
  );
}

export default Carousel;
