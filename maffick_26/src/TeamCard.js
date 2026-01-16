import React from "react";

const CompetitionCard = ({
  title,
  image,
  organizer,
  time,
  place,
  googleLink,
}) => {
  return (
    <div className="group relative w-80 perspective-1000 transition-transform duration-300 hover:-translate-y-2">
      {/* Card container with gradient border */}
      <div className="relative h-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg p-[2px] transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/50">
        {/* Inner card */}
        <div className="relative h-full bg-slate-900/90 backdrop-blur-sm rounded-lg overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center p-6">
            {/* Title and Organizer */}
            <div className="text-center mt-2 z-10 mb-4">
              <h2
                className="text-3xl font-bold text-white tracking-wider mb-2 uppercase"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {title}
              </h2>
              <p className="text-cyan-400 text-sm tracking-widest uppercase">
                {organizer}
              </p>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center my-4">
              <div className="w-48 h-48 overflow-hidden border-4 border-cyan-500/30 transition-all duration-300 group-hover:border-cyan-500/60 group-hover:scale-105">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Time & Place */}
            <div className="text-center space-y-2">
              <p className="text-cyan-300 text-base font-mono">{time}</p>
              <p className="text-white text-lg font-mono">{place}</p>
              <a
                href={googleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl mt-2"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg"></div>
        </div>
      </div>
    </div>
  );
};

// Demo component with props
const CompetitionCardsDemo = ({ head, competitions }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h1
          className="text-5xl font-bold text-white mb-4 tracking-wider"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {head}
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {competitions.map((comp, index) => (
          <CompetitionCard
            key={index}
            title={comp[0]}
            image={comp[1]}
            organizer={comp[2]}
            time={comp[3]}
            place={comp[4]}
            googleLink={comp[5]}
          />
        ))}
      </div>
    </div>
  );
};

// Demo with sample data

export default CompetitionCardsDemo;
