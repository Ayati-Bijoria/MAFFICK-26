import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Carousel from "./Carousel.js";
import LightPillar from "./LightPillar";
import CircularGallery from "./CircularGallery";
import Stack from "./StackCard";
import DecryptedText from "./DecryptedText";
import Flowchart from "./Flowchart.js";
import fest from "./img/fest.png";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.webp";

const images = [fest, img2, img3, img4];

function App() {
  const [carouselVisible, setCarouselVisible] = useState(true);
  const [scrollData, setScrollData] = useState({ y: 0, percent: 0 });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollPercent = Math.min(
      (scrollY / (document.body.scrollHeight - viewportHeight)) * 100,
      100
    );
    setScrollData({ y: scrollY, percent: Math.round(scrollPercent) });
  }, []);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", throttledScroll, { passive: true });
    throttledScroll();
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", throttledScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleDoubleClick = (e) => {
      if (!e.target.closest(".carousel-container")) {
        setCarouselVisible(false);
      }
    };
    document.addEventListener("dblclick", handleDoubleClick);
    return () => document.removeEventListener("dblclick", handleDoubleClick);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && !carouselVisible) {
        setCarouselVisible(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [carouselVisible]);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar scrollPercent={scrollData.percent} />

      {/* Full screen LightPillar */}
      <div className="lightpillar-background">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.2}
          rotationSpeed={0.15}
          glowAmount={0.008}
          pillarWidth={4.0}
          pillarHeight={0.6}
          noiseIntensity={0.4}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>

      {/* ✅ FIXED: Proper structure */}
      <div className="main-content">
        {/* DecryptedText */}
        <div className="decrypted-section">
          <DecryptedText
            text="Maffick X Technosearch"
            speed={100}
            maxIterations={10}
            characters="ABCD1234!?"
            className="revealed maffick-text"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        {/* Stack */}
        <div className="stack-section">
          <div style={{ width: "380px", height: "240px" }}> {/* ✅ Fixed height */}
            <Stack
              randomRotation={true}
              sensitivity={120}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`card-${i + 1}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "24px",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  }}
                />
              ))}
            />
          </div>
        </div>

        {/* ✅ Flowchart - Proper container */}
        <div className="flowchart-section">
          <Flowchart />
        </div>
      </div> {/* ✅ Properly closed */}

      {carouselVisible && <Carousel scrollY={scrollData.y} />}
    </div>
  );
}

export default App;
