import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Users, Trophy, Zap, Sparkles, Star, Flame } from 'lucide-react';

const CompetitionTimeline = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  const competitions = {
    day1: [
      {
        time: '09:00 AM',
        events: [
          {
            id: 1,
            title: 'Tech Quiz',
            category: 'Technical',
            venue: 'Auditorium A',
            participants: '50+',
            color: 'from-blue-500 to-cyan-400',
            icon: Zap
          },
          {
            id: 2,
            title: 'Painting Competition',
            category: 'Art',
            venue: 'Art Room',
            participants: '30+',
            color: 'from-amber-500 to-yellow-400',
            icon: Sparkles
          }
        ]
      },
      {
        time: '11:00 AM',
        events: [
          {
            id: 3,
            title: 'Dance Battle',
            category: 'Cultural',
            venue: 'Main Stage',
            participants: '20 teams',
            color: 'from-pink-500 to-rose-400',
            icon: Flame
          },
          {
            id: 4,
            title: 'Photography Walk',
            category: 'Art',
            venue: 'Campus',
            participants: '40+',
            color: 'from-green-500 to-emerald-400',
            icon: Star
          },
          {
            id: 5,
            title: 'Debate Competition',
            category: 'Literary',
            venue: 'Seminar Hall',
            participants: '16 teams',
            color: 'from-violet-500 to-purple-400',
            icon: Zap
          }
        ]
      },
      {
        time: '02:00 PM',
        events: [
          {
            id: 6,
            title: 'Hackathon Begins',
            category: 'Technical',
            venue: 'Computer Lab 1',
            participants: '100+',
            color: 'from-purple-500 to-indigo-400',
            icon: Zap
          }
        ]
      },
      {
        time: '04:00 PM',
        events: [
          {
            id: 7,
            title: 'Battle of Bands',
            category: 'Cultural',
            venue: 'Amphitheater',
            participants: '15 bands',
            color: 'from-orange-500 to-red-400',
            icon: Flame
          },
          {
            id: 8,
            title: 'Chess Tournament',
            category: 'Sports',
            venue: 'Activity Room',
            participants: '32 players',
            color: 'from-slate-400 to-gray-300',
            icon: Star
          }
        ]
      }
    ],
    day2: [
      {
        time: '10:00 AM',
        events: [
          {
            id: 9,
            title: 'Gaming Tournament',
            category: 'Gaming',
            venue: 'Gaming Arena',
            participants: '64 players',
            color: 'from-green-500 to-emerald-400',
            icon: Zap
          },
          {
            id: 10,
            title: 'Poetry Slam',
            category: 'Literary',
            venue: 'Café',
            participants: '20+',
            color: 'from-teal-500 to-cyan-400',
            icon: Sparkles
          }
        ]
      },
      {
        time: '12:00 PM',
        events: [
          {
            id: 11,
            title: 'Drama Competition',
            category: 'Cultural',
            venue: 'Theater Hall',
            participants: '12 teams',
            color: 'from-violet-500 to-purple-400',
            icon: Star
          }
        ]
      },
      {
        time: '03:00 PM',
        events: [
          {
            id: 12,
            title: 'Robo Wars',
            category: 'Technical',
            venue: 'Ground Floor',
            participants: '30 bots',
            color: 'from-amber-500 to-orange-400',
            icon: Flame
          },
          {
            id: 13,
            title: 'Singing Competition',
            category: 'Cultural',
            venue: 'Auditorium B',
            participants: '40+',
            color: 'from-pink-500 to-rose-400',
            icon: Sparkles
          },
          {
            id: 14,
            title: 'Web Design Sprint',
            category: 'Technical',
            venue: 'Lab 3',
            participants: '50+',
            color: 'from-blue-500 to-indigo-400',
            icon: Zap
          }
        ]
      },
      {
        time: '06:00 PM',
        events: [
          {
            id: 15,
            title: 'Fashion Show',
            category: 'Cultural',
            venue: 'Main Stage',
            participants: '25 models',
            color: 'from-fuchsia-500 to-pink-400',
            icon: Star
          }
        ]
      }
    ],
    day3: [
      {
        time: '09:00 AM',
        events: [
          {
            id: 16,
            title: 'Coding Sprint',
            category: 'Technical',
            venue: 'Lab Block',
            participants: '80+',
            color: 'from-teal-500 to-cyan-400',
            icon: Zap
          },
          {
            id: 17,
            title: 'Improv Theatre',
            category: 'Cultural',
            venue: 'Black Box',
            participants: '10 teams',
            color: 'from-purple-500 to-violet-400',
            icon: Sparkles
          }
        ]
      },
      {
        time: '11:30 AM',
        events: [
          {
            id: 18,
            title: 'Treasure Hunt',
            category: 'Adventure',
            venue: 'Campus Wide',
            participants: '40 teams',
            color: 'from-yellow-500 to-amber-400',
            icon: Star
          }
        ]
      },
      {
        time: '02:00 PM',
        events: [
          {
            id: 19,
            title: 'Stand-up Comedy',
            category: 'Cultural',
            venue: 'Auditorium B',
            participants: '15 performers',
            color: 'from-red-500 to-orange-400',
            icon: Flame
          },
          {
            id: 20,
            title: 'E-Sports Finals',
            category: 'Gaming',
            venue: 'Gaming Arena',
            participants: '8 finalists',
            color: 'from-green-500 to-emerald-400',
            icon: Zap
          }
        ]
      },
      {
        time: '07:00 PM',
        events: [
          {
            id: 21,
            title: 'Prize Distribution',
            category: 'Ceremony',
            venue: 'Main Auditorium',
            participants: 'All',
            color: 'from-indigo-500 to-blue-400',
            icon: Trophy
          }
        ]
      }
    ]
  };

  const days = [
    { id: 'day1', label: 'Day 1', date: 'March 15' },
    { id: 'day2', label: 'Day 2', date: 'March 16' },
    { id: 'day3', label: 'Day 3', date: 'March 17' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-black to-blue-950/50"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Floating Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-500 rounded-full animate-float"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        ></div>
      ))}

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
              <span className="text-white font-semibold text-sm tracking-wider">ANNUAL FEST 2024</span>
            </div>
          </div>
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 animate-gradient">
            TECHFEST
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
            <p className="text-xl font-light">Competition Timeline</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center gap-4 mb-16">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`group relative px-10 py-5 rounded-2xl font-bold transition-all duration-500 overflow-hidden ${
                selectedDay === day.id
                  ? 'scale-110'
                  : 'scale-100 hover:scale-105'
              }`}
            >
              {selectedDay === day.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-x"></div>
              )}
              {selectedDay !== day.id && (
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10"></div>
              )}
              <div className="relative z-10">
                <div className={`text-sm mb-1 ${selectedDay === day.id ? 'text-purple-200' : 'text-gray-500'}`}>
                  {day.label}
                </div>
                <div className={`text-xl ${selectedDay === day.id ? 'text-white' : 'text-gray-300'}`}>
                  {day.date}
                </div>
              </div>
              {selectedDay === day.id && (
                <div className="absolute inset-0 shadow-2xl shadow-purple-500/50"></div>
              )}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {competitions[selectedDay].map((timeSlot, slotIndex) => (
            <div
              key={slotIndex}
              className="animate-slide-up"
              style={{ animationDelay: `${slotIndex * 0.15}s` }}
            >
              {/* Time Badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50 rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-black text-white mb-1">{timeSlot.time}</div>
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 lg:ml-24">
                {timeSlot.events.map((event, eventIndex) => {
                  const Icon = event.icon;
                  return (
                    <div
                      key={event.id}
                      className="group relative animate-scale-in"
                      style={{ animationDelay: `${slotIndex * 0.15 + eventIndex * 0.1}s` }}
                      onMouseEnter={() => setHoveredEvent(event.id)}
                      onMouseLeave={() => setHoveredEvent(null)}
                    >
                      {/* Card Glow Effect */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${event.color} rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500`}></div>
                      
                      {/* Card */}
                      <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2">
                        {/* Icon Badge */}
                        <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Trophy Icon */}
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl mb-4`}>
                          <Trophy className="w-6 h-6 text-white" />
                        </div>

                        {/* Event Title */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {event.title}
                        </h3>
                        
                        {/* Category Badge */}
                        <div className="mb-4">
                          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${event.color} text-white shadow-lg`}>
                            {event.category}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-gray-400 group-hover:text-purple-300 transition-colors">
                            <div className={`w-8 h-8 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <MapPin className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium">{event.venue}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-400 group-hover:text-purple-300 transition-colors">
                            <div className={`w-8 h-8 bg-gradient-to-br ${event.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Users className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium">{event.participants}</span>
                          </div>
                        </div>

                        {/* Hover Line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-full border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200 font-medium">Register now at the fest registration desk</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-scale-in {
          opacity: 0;
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CompetitionTimeline;