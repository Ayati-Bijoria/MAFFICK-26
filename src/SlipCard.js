import React from "react";

const RobotCard = ({ title, model, description, image, hoverImage }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative w-80 h-[32rem] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer card with gradient border */}
      <div className="relative w-full h-full p-[3px] rounded-3xl bg-gradient-to-br from-pink-500 via-purple-600 to-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
        {/* Inner card */}
        <div className="relative w-full h-full bg-slate-950 rounded-3xl overflow-hidden">
          {/* Scanline effect overlay */}
          <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" 
               style={{
                 backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
               }}>
          </div>

          {/* Image container */}
          <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-950">
            {/* Grid floor effect */}
            <div className="absolute bottom-0 left-0 right-0 h-20 opacity-30"
                 style={{
                   backgroundImage: 'linear-gradient(to right, transparent 49%, cyan 49%, cyan 51%, transparent 51%), linear-gradient(to bottom, transparent 49%, cyan 49%, cyan 51%, transparent 51%)',
                   backgroundSize: '40px 40px',
                   transform: 'perspective(200px) rotateX(60deg)',
                   transformOrigin: 'bottom'
                 }}>
            </div>
            
            {/* Purple/cyan gradient glow at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/50 via-cyan-400/30 to-transparent"></div>

            {/* Robot images with crossfade */}
            <div className="relative w-full h-full flex items-center justify-center pt-8">
              <img
                src={image}
                alt={title}
                className={`absolute w-48 h-48 object-contain transition-opacity duration-500 ${
                  isHovered ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={hoverImage}
                alt={`${title} hover`}
                className={`absolute w-48 h-48 object-contain transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>

          {/* Text content */}
          <div className={`relative px-6 transition-all duration-300 ${
            isHovered ? 'py-6' : 'py-8'
          }`}>
            {/* Title and Model */}
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-white tracking-wider uppercase mb-1">
                {title}
              </h2>
              <p className="text-2xl font-bold text-white tracking-widest uppercase">
                {model}
              </p>
            </div>

            {/* Description - appears on hover */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <p className="text-cyan-300 text-center text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-12 h-12">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent rounded-full"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-transparent rounded-full"></div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
          </div>
          <div className="absolute bottom-4 left-4 w-12 h-12">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-purple-600 to-transparent rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyan-400 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-cyan-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo component
const RobotCardsDemo = () => {
  const robots = [
    {
      title: "UNITREE",
      model: "G1",
      description: "Advanced humanoid robot for dynamic tasks and human interaction",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop"
    },
    {
      title: "UNITREE",
      model: "H1",
      description: "Next-generation robot with enhanced mobility and intelligence capabilities",
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop"
    },
    {
      title: "UNITREE",
      model: "GO2",
      description: "Agile quadruped robot designed for exploration and versatile applications",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
      hoverImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 p-16">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-wider uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Robotics Collection
        </h1>
        <div className="h-1 w-48 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 mx-auto"></div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
        {robots.map((robot, index) => (
          <RobotCard key={index} {...robot} />
        ))}
      </div>

      {/* Info text */}
      <div className="text-center mt-16 text-gray-400 relative z-10">
        <p className="text-lg">Hover over the cards to reveal detailed descriptions</p>
      </div>
    </div>
  );
};

export default RobotCardsDemo;