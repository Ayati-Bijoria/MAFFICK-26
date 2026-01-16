import React from 'react';
import { Heart, Bookmark, Share2 } from 'lucide-react';

const ImageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer transform transition-transform hover:scale-105" style={{width:"100%"}}>
      <div className="aspect-[3/4] w-full relative max-w-[10rem]"> {/* Added aspect-[3/4] back */}
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="relative inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="relative bottom-0 left-0 right-0 p-1.5 text-white">
          <h3 className="text-sm font-bold mb-0.5">
            {title}
          </h3>
          <p className="text-xs text-gray-200 mb-1.5 line-clamp-2">
            {description}
          </p>
          
          <div className="flex gap-1">
            <button className="w-2.5 h-2.5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
              <Heart className="w-1 h-1" />
            </button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
              <Bookmark className="w-2 h-2" />
            </button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
              <Share2 className="w-1 h-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=250&h=375&fit=crop",
      title: "Mountain Peak",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=250&h=375&fit=crop",
      title: "Ocean Waves",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=250&h=375&fit=crop",
      title: "Forest Path",
      description: "Nostrud exercitation ullamco laboris nisi ut aliquip."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=250&h=375&fit=crop",
      title: "Ocean Waves",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=250&h=375&fit=crop",
      title: "Forest Path",
      description: "Nostrud exercitation ullamco laboris nisi ut aliquip."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=250&h=375&fit=crop",
      title: "Ocean Waves",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=250&h=375&fit=crop",
      title: "Forest Path",
      description: "Nostrud exercitation ullamco laboris nisi ut aliquip."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=250&h=375&fit=crop",
      title: "Sunset Vista",
      description: "Reprehenderit in voluptate velit esse cillum dolore."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=250&h=375&fit=crop",
      title: "Starry Night",
      description: "Cupidatat non proident sunt in culpa qui officia."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=250&h=375&fit=crop",
      title: "Desert Dunes",
      description: "Unde omnis iste natus error sit voluptatem."
    }
  ];

  return (
    <div className="relative inset-0 bg-gradient-to-br from-#0f0f23-900 via-#1a1a2e-900/80 via-#16213e-900 to-#0f3460-900/90 overflow-auto p-4"> {/* Full viewport cover */}
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-center"> {/* Centered content */}
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Image Gallery
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 flex-1"> {/* 4 cols on lg+ */}
          {cards.map((card, index) => (
            <ImageCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
