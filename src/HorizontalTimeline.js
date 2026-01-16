import React from "react";
import { Bot, Cpu, Drone, Cog } from "lucide-react";

export default function HorizontalTimeline() {
  const timelineData = [
    {
      date: "22 JANUARY 2025",
      title: "PLANNING PHASE",
      icon: Bot,
      content:
        "Illuminati, Ascent, Tower of Wealth, P&L Target, Rate Race, Asset Classes, Fintech Hackathon, Cyber Hunter 2.0, Project Exhibition, Vizathon, Manthan 1.0\n\nEscape Room, Mini Games, Photobooth, Kodachrome, Iris, The Guestimation Games, Innofest",
    },
    {
      date: "23 JANUARY 2025",
      title: "DESIGN PHASE",
      icon: Cpu,
      content:
        "Echoes, Step Solo, Tarang, Games and Activities, Casecraft, Ascent, Illuminati, Project Showcasing & Exhibition, Car Soccer, VR Show, Cyber Hunter 2.0, Escape Room, Mini Games, Photobooth, INNOVATE X, Student Project Contest, Rhythm Riot\n\nTower of Wealth, P&L Target, Rate Race, Asset Classes, Fintech Hackathon, Aavishkar, Heritage & Cultural Exhibition, Hackathon, VR Bharat Darshan, Smash Karts Tournament, Workshop on EV chargers, IDDC, Eyecandy Workshop",
    },
    {
      date: "24 JANUARY 2025",
      title: "DEVELOPMENT",
      icon: Cog,
      content:
        "Clash of Ideas, Drone Design Challenge, Guest Lecture, Prodconclave, Games Heritage & Cultural Exhibition and Activities, Project Showcasing & Exhibition, Tower of Wealth, P&L Target, Rate Race, Asset Classes, Fintech Hackathon, Aavishkar, Smash Karts Tournament, Paper clay workshop, Deshaj, Art Gallery, SKYCRAFT, Robosoccer, Arena Run, Battism,  Micromouse, Escape Room, Mini Games, Photobooth, Megatreopuz, Once upon a mic,  Auto Expo",
    },
    {
      date: "25 JANUARY 2025",
      title: "DEPLOYMENT",
      icon: Drone,
      content:
        "Robowars, Cinema Town Blender, Photon Race, Tower of Wealth, P&L Target, Rate Race,Asset Classes, Fintech Hackathon, Finitech Hackathon, Heritage & Cultural Exhibition, Treasure Hunt, Smash Karts Tournament, Art Gallery, Water Roborace, Project Exhibition, Robosoccer, Save the Ocean, Curtain Call & Prize Distribution"
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-#0f0f23-900 via-#1a1a2e-900/80 via-#16213e-900 to-#0f3460-900/90">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-3 drop-shadow-2xl tracking-tight">
          Project Timeline
        </h2>
        <div className="w-96 h-1.5 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 mx-auto mb-20 shadow-xl rounded-full"></div>

        <div className="relative py-28 md:py-40 lg:py-48">
          {/* Main Timeline Bar */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex z-20">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex-1 h-24 md:h-28 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(22,33,62,0.9), rgba(30,58,138,0.9))",
                  border: "3px solid #60a5fa",
                  borderRadius: "16px",
                  marginLeft: index === 0 ? "0" : "-3px",
                  boxShadow:
                    "0 8px 25px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-slate-800/90 to-slate-900/90 rounded-2xl text-sm md:text-base lg:text-lg font-bold text-cyan-200 shadow-lg z-30 min-w-[140px] md:min-w-[160px] text-center leading-tight tracking-wide">
                  {item.date}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Items */}
          <div className="relative z-10">
            <div className="flex justify-around px-2 md:px-8 lg:px-16 gap-6 md:gap-8">
              {timelineData.map((item, index) => {
                const isTop = index % 2 === 0;
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center z-30 w-full max-w-xs md:max-w-sm"
                  >
                    {isTop ? (
                      <>
                        {/* Top: Content -> Line -> Title/Desc -> Icon */}
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1000"
                          data-aos-delay={index * 200}
                          className="p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl mb-10 border-2 border-blue-500/70 backdrop-blur-md w-full max-h-56 md:max-h-64 lg:max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500/90 scrollbar-track-slate-900/60 scrollbar-thumb-rounded-full hover:scrollbar-thumb-orange-400 transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(145deg, rgba(26,26,46,0.98), rgba(15,23,42,0.96))",
                            boxShadow:
                              "0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.3)",
                            minHeight: "200px",
                          }}
                        >
                          <p className="text-sm md:text-base lg:text-lg text-gray-50 text-center leading-[1.6] md:leading-relaxed font-medium tracking-wide whitespace-pre-wrap break-words px-2">
                            {item.content}
                          </p>
                        </div>
                        <div className="w-1.5 h-32 md:h-36 lg:h-40 bg-gradient-to-b from-orange-400 via-amber-400 to-orange-600 shadow-2xl rounded-full"></div>
                        <div className="text-center my-10 px-4 md:px-6">
                          <div className="text-xl md:text-2xl lg:text-3xl font-black text-orange-400 mb-4 tracking-wide drop-shadow-2xl bg-gradient-to-r from-orange-400/20 to-amber-400/20 px-4 py-2 rounded-2xl">
                            {item.title}
                          </div>
                        </div>
                        <div
                          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-blue-500/90 ring-4 ring-blue-500/40 ring-offset-4 ring-offset-slate-900/50"
                          style={{
                            background:
                              "linear-gradient(145deg, rgba(22,33,62,0.98), rgba(30,58,138,0.95))",
                            boxShadow:
                              "0 20px 60px rgba(59,130,246,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
                          }}
                        >
                          <Icon
                            className="text-white drop-shadow-2xl"
                            size={40}
                            strokeWidth={2.5}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Bottom: Icon -> Title/Desc -> Line -> Content */}
                        <div
                          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-blue-500/90 ring-4 ring-blue-500/40 ring-offset-4 ring-offset-slate-900/50 mb-10"
                          style={{
                            background:
                              "linear-gradient(145deg, rgba(22,33,62,0.98), rgba(30,58,138,0.95))",
                            boxShadow:
                              "0 20px 60px rgba(59,130,246,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
                          }}
                        >
                          <Icon
                            className="text-white drop-shadow-2xl"
                            size={40}
                            strokeWidth={2.5}
                          />
                        </div>
                        <div className="text-center my-10 px-4 md:px-6">
                          <div className="text-xl md:text-2xl lg:text-3xl font-black text-orange-400 mb-4 tracking-wide drop-shadow-2xl bg-gradient-to-r from-orange-400/20 to-amber-400/20 px-4 py-2 rounded-2xl">
                            {item.title}
                          </div>
                        </div>
                        <div className="w-1.5 h-32 md:h-36 lg:h-40 bg-gradient-to-t from-orange-400 via-amber-400 to-orange-600 shadow-2xl rounded-full mb-8"></div>
                        <div
                          data-aos="fade-down"
                          data-aos-duration="1000"
                          data-aos-delay={index * 200}
                          className="p-8 md:p-10 lg:p-12 rounded-3xl shadow-2xl border-2 border-blue-500/70 backdrop-blur-md w-full max-h-56 md:max-h-64 lg:max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500/90 scrollbar-track-slate-900/60 scrollbar-thumb-rounded-full hover:scrollbar-thumb-orange-400 transition-all duration-300"
                          style={{
                            background:
                              "linear-gradient(145deg, rgba(26,26,46,0.98), rgba(15,23,42,0.96))",
                            boxShadow:
                              "0 25px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.3)",
                            minHeight: "200px",
                          }}
                        >
                          <p className="text-sm md:text-base lg:text-lg text-gray-50 text-center leading-[1.6] md:leading-relaxed font-medium tracking-wide whitespace-pre-wrap break-words px-2">
                            {item.content}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
