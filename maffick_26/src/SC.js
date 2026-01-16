import ProfileCard from "./ProfileCard";
import { Heart, Bookmark, Share2 } from "lucide-react";
import maffick from "./img/maffick.png";
import "./SC.css";

function App() {
  // Array of profile data (add more objects as needed)
  const profiles = [
  { name: "Ayush Singh", title: "President (Fourth Year, UG)", avatarUrl: maffick },
  { name: "Raj Chouhan", title: "Vice-President (Fourth Year, UG)", avatarUrl: maffick },
  { name: "K. Siddharth", title: "Secretary Media (Fourth Year,UG)", avatarUrl: maffick },
  { name: "Raghavendra Singh Gaur", title: "Secretary Technical (Fourth Year, UG)", avatarUrl: maffick },
  { name: "Naman Sharma", title: "Secretary Cultural (Fourth Year, UG)", avatarUrl: maffick },
  { name: "", title: "Secretary (sports)) (Fourth Year, UG)", avatarUrl: maffick },
  { name: "G. Lakshmi Sri Rama", title: "Secretary Discipline (Fourth Year, UG)", avatarUrl: maffick },
  { name: "Aryan Saxena", title: "General Secretary (Third Year, UG)", avatarUrl: maffick },
  { name: "Punit Kumar", title: "Treasurer (Third Year, UG)", avatarUrl: maffick },
  { name: "Aryan Singh Baglel", title: "Secretary Alumni (Third Year, UG)", avatarUrl: maffick },
  { name: "Aditya Chauhan", title: "Joint-Secretary (Second Year,UG)", avatarUrl: maffick },
  { name: "Anish Pandit", title: "Secretary (Literary, Hindi) (Second Year, UG)", avatarUrl: maffick },
  { name: "Aryan Patel", title: "Secretary(Literacy,English) (Second Year, UG)", avatarUrl: maffick },
  { name: "Harsh Rathore", title: "Executive Member, UG (1st Yr)", avatarUrl: maffick },
  { name: "Alen Joseph", title: "Executive Member, UG (1st Yr)", avatarUrl: maffick },
  { name: "Shikhar Viyay", title: "Executive Member, MCA/MBA/B.TECH+M.TECH", avatarUrl: maffick },
  { name: "Ambuj Kumar Dwivedi", title: "Executive Member (M.Tech/M.Plan/M.Arch)", avatarUrl: maffick },
  { name: "Ankit Kumar Pandey", title: "Executive Member, MA/MSc", avatarUrl: maffick },
  { name: "Virag Bohare", title: "Executive Member, Ph.D", avatarUrl: maffick },
  { name: "Vaibhav Goyal", title: "Ex-Member (Ex-Officio)", avatarUrl: maffick }
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
