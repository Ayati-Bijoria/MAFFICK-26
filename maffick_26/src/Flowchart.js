import React, { useEffect, useRef, useState } from 'react';
import './Flowchart.css';

function more()
  {
    console.log("ayati");
  }

const TimelineItem = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  // Simple icon component to avoid lucide-react dependency
  const Icon = ({ type }) => {
    const icons = {
      rocket: '🚀',
      target: '🎯',
      zap: '⚡',
      trophy: '🏆',
      star: '⭐',
      calendar: '📅'
    };
    return <span className="timeline-icon-emoji">{icons[type] || '📅'}</span>;
  };

  return (
    <div ref={itemRef} className="timeline-item">
      <div className="timeline-line" />
      
      <div className={`timeline-content ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
        <div className={`timeline-card ${isVisible ? 'timeline-visible' : ''} ${isLeft ? 'slide-from-left' : 'slide-from-right'}`}>
          <div className="timeline-card-inner">
            <div className="timeline-header">
              <div className="timeline-icon-wrapper">
                <Icon type={item.icon} />
              </div>
              <span className="timeline-date">{item.date}</span>
            </div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>

        <div className="timeline-dot-wrapper">
          <div className={`timeline-dot ${isVisible ? 'timeline-dot-visible' : ''}`} />
        </div>

        <div className="timeline-spacer" />
      </div>
    </div>
  );
};

export default function Timeline() {
  const timelineData = [
    {
      date: '22 January 2026',
      title: 'CULTURAL & TECHNICAL',
      description: "Illuminati, Ascent, Tower of Wealth, P&L Target, Rate Race, Asset Classes, Fintech Hackathon, Cyber Hunter 2.0, Project Exhibition, Vizathon, Manthan 1.0\n\nEscape Room, Mini Games, Photobooth, Kodachrome, Iris, The Guestimation Games, Innofest",
      icon: 'trophy'
    },
    {
      date: '22 January 2026',
      title: 'INAUGRATION',
      description: "5pm - 6pm AT LRC",
      icon: 'trophy'
    },
    {
      date: '22 January 2026',
      title: 'GIG-A-NIGHT',
      description: "6pm - 9pm MAIN STAGE ROBAROO",
      icon: 'trophy'
    },
    {
      date: '23 January 2026',
      title: 'CULTURAL & TECHNICAL',
      description: "Echoes, Step Solo, Tarang, Games and Activities, Casecraft, Ascent, Illuminati, Project Showcasing & Exhibition, Car Soccer, VR Show, Cyber Hunter 2.0, Escape Room, Mini Games, Photobooth, INNOVATE X, Student Project Contest, Rhythm Riot\n\nTower of Wealth, P&L Target, Rate Race, Asset Classes, Fintech Hackathon, Aavishkar, Heritage & Cultural Exhibition, Hackathon, VR Bharat Darshan, Smash Karts Tournament, Workshop on EV chargers, IDDC, Eyecandy Workshop",
      icon: 'zap'
    },
    {
      date: '23 January 2026',
      title: 'DJ NIGHT',
      description: "6pm - 9pm",
      icon: 'zap'
    },
    {
      date: '24 January 2026',
      title: 'CULTURAL & TECHNICAL',
      description: "Clash of Ideas, Drone Design Challenge, Guest Lecture, Prodconclave, Games Heritage & Cultural Exhibition and Activities, Project Showcasing & Exhibition, Tower of Wealth, P&L Target, Rate Race, Asset Classes, Fintech Hackathon, Aavishkar, Smash Karts Tournament, Paper clay workshop, Deshaj, Art Gallery, SKYCRAFT, Robosoccer, Arena Run, Battism,  Micromouse, Escape Room, Mini Games, Photobooth, Megatreopuz, Once upon a mic,  Auto Expo",
      icon: 'rocket'
    },
    {
      date: '24 January 2026',
      title: 'ARTIST NIGHT',
      description: "7.30pm - 9pm",
      icon: 'rocket'
    },
    
    {
      date: '25 January 2026',
      title: 'CULTURAL AND TECHNICAL',
      description: "Robowars, Cinema Town Blender, Photon Race, Tower of Wealth, P&L Target, Rate Race,Asset Classes, Fintech Hackathon, Finitech Hackathon, Heritage & Cultural Exhibition, Treasure Hunt, Smash Karts Tournament, Art Gallery, Water Roborace, Project Exhibition, Robosoccer, Save the Ocean, Curtain Call & Prize Distribution",
      icon: 'star'
    },
        {
      date: '25 January 2026',
      title: 'ARTIST NIGHT',
      description: "7pm - 9pm",
      icon: 'star'
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline-header-section">
          <h1 className="timeline-main-title">EVENT TIMELINE</h1>
          <p className="timeline-subtitle">Scroll down to see our story unfold</p>
        </div>

        <div className="timeline-items">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>

        <div className="timeline-footer">
          <button onClick={more()} className="timeline-footer-badge">More to come...</button>
        </div>
      </div>
    </div>
  );
}