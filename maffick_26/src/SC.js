import ProfileCard from "./ProfileCard";
import { Heart, Bookmark, Share2 } from "lucide-react";
import maffick from "./img/maffick.png";
import "./SC.css";

function App() {
  // Array of profile data (add more objects as needed)
  const profiles = [
    {
      name: "Javi A. Torres",
      title: "Software Engineer",
      avatarUrl: maffick,
      handle: "javicodes",
      status: "Online",
    },
    {
      name: "Priya Sharma",
      title: "Full Stack Developer",
      avatarUrl: maffick,
      handle: "priyacodes",
      status: "Active",
    },
    {
      name: "Alex Chen",
      title: "UI/UX Designer",
      avatarUrl: maffick,
      handle: "alexdesigns",
      status: "Online",
    },
    {
      name: "Priya Sharma",
      title: "Full Stack Developer",
      avatarUrl: maffick,
      handle: "priyacodes",
      status: "Active",
    },
    {
      name: "Alex Chen",
      title: "UI/UX Designer",
      avatarUrl: maffick,
      handle: "alexdesigns",
      status: "Online",
    },
    {
      name: "Priya Sharma",
      title: "Full Stack Developer",
      avatarUrl: maffick,
      handle: "priyacodes",
      status: "Active",
    },
    {
      name: "Alex Chen",
      title: "UI/UX Designer",
      avatarUrl: maffick,
      handle: "alexdesigns",
      status: "Online",
    },
    {
      name: "Priya Sharma",
      title: "Full Stack Developer",
      avatarUrl: maffick,
      handle: "priyacodes",
      status: "Active",
    },
    {
      name: "Alex Chen",
      title: "UI/UX Designer",
      avatarUrl: maffick,
      handle: "alexdesigns",
      status: "Online",
    },
    // Add more profiles here - .pfp-row will wrap to new rows of 3
    {
      name: "Sara Khan",
      title: "Data Scientist",
      avatarUrl: maffick,
      handle: "saradata",
      status: "Busy",
    },
  ];

  const handleContactClick = (name) => {
    console.log(`Contact clicked for ${name}`);
  };

  return (
    <>
      <div className="pfp-container">
        <div className="pfp-row">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index} // Use unique id in production
              name={profile.name}
              title={profile.title}
              handle={profile.handle}
              status={profile.status}
              avatarUrl={profile.avatarUrl}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => handleContactClick(profile.name)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
