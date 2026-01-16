import { Settings, User, AlertTriangle, Star, TrendingUp, Handshake } from 'lucide-react';

export default function HorizontalTimeline() {
  const timelineSteps = [
    {
      year: "2021",
      icon: Settings,
      title: "This is a sample text.",
      description: "You simply add your own text and description here. This text is fully editable.",
      color: "bg-blue-500",
      position: "top"
    },
    {
      year: "2022",
      icon: Star,
      title: "This is a sample text.",
      description: "You simply add your own text and description here. This text is fully editable.",
      color: "bg-blue-400",
      position: "bottom"
    },
    {
      year: "2023",
      icon: User,
      title: "This is a sample text.",
      description: "You simply add your own text and description here. This text is fully editable.",
      color: "bg-green-500",
      position: "top"
    },
    {
      year: "2024",
      icon: TrendingUp,
      title: "This is a sample text.",
      description: "You simply add your own text and description here. This text is fully editable.",
      color: "bg-yellow-400",
      position: "bottom"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-700 mb-2">
          Horizontal Timeline Infographics – 6 Steps
        </h1>
        <p className="text-gray-500">Enter your subhead line here</p>
      </div>

      <div className="relative mt-20">
        {/* Chevron Timeline Bar */}
        <div className="flex items-center justify-center mb-20">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center" style={{ width: `${100 / timelineSteps.length}%` }}>
                {/* Top Content */}
                {step.position === "top" && (
                  <div className="absolute -top-40 flex flex-col items-center w-48">
                    <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center mb-3 shadow-lg`}>
                      <Icon className="text-white" size={36} />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    <div className={`w-0.5 h-12 ${step.color} mt-3`}></div>
                  </div>
                )}

                {/* Chevron Shape */}
                <div className={`${step.color} h-16 flex items-center justify-center relative`}
                     style={{
                       clipPath: index === timelineSteps.length - 1 
                         ? 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)'
                         : 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)',
                       marginLeft: index === 0 ? '0' : '-20px',
                       zIndex: timelineSteps.length - index
                     }}>
                  <span className="text-white font-bold text-xl">{step.year}</span>
                </div>

                {/* Bottom Content */}
                {step.position === "bottom" && (
                  <div className="absolute -bottom-40 flex flex-col items-center w-48">
                    <div className={`w-0.5 h-12 ${step.color} mb-3`}></div>
                    <div className="text-center mb-3">
                      <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={36} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}