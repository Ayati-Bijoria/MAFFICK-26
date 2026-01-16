import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DtAos() {  // ✅ Capitalized component name
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,        // ✅ Distance from trigger point
      easing: 'ease-out-cubic', // ✅ Smooth easing
    });
    
    // ✅ Refresh on mount
    if (typeof window !== 'undefined') {
      AOS.refresh();
    }

    return () => {
      // ✅ Proper cleanup
      AOS.refreshHard();
    };
  }, []);

  return (
    <div className="dt-aos-container">
      <h1 data-aos="fade-up" data-aos-duration="1200">
        Hello React AOS!
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
        This element will zoom in after a delay.
      </div>
      <p data-aos="slide-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
        This text slides from the left over 2 seconds.
      </p>
      <div 
        data-aos="fade-up" 
        data-aos-delay="600" 
        data-aos-duration="800"
        style={{marginTop: '4rem'}}
      >
        <span>More scrollable content →</span>
      </div>
    </div>
  );
}

export default DtAos;  // ✅ Proper export
