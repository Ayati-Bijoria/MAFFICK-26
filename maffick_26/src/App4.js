import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Carousel from "./Carousel.js";
import Routing from './Router.js';
// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN
  


function App3() {
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
    <>
      <Routing />
      {carouselVisible && <Carousel scrollY={scrollData.y} />}
      </>
  );
}

export default App3;
