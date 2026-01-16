import React from 'react';
import CompetitionCardsDemo from "./TeamCard"; // Fixed import
import fest from "./img/fest.png";
import deshaj from './img/deshaj.jpeg';

function App() {
  // Fixed: Use array of competition arrays, not object with duplicate keys
  const competitions = [
    ["Debate", fest, "Organizer A", "10:00 AM", "Main Hall","https://www.google.com/"],
    ["Music", fest, "Organizer B", "2:00 PM", "Auditorium","https://www.google.com/"],
    ["Dance", deshaj, "Organizer C", "4:00 PM", "Stage Area","https://www.google.com/"],
    ["Quiz", fest, "Organizer D", "6:00 PM", "Lecture Hall","https://www.google.com/"],
    ["Art", fest, "Organizer E", "10:00 AM", "Gallery","https://www.google.com/"],
    ["Tech", fest, "Organizer F", "12:00 PM", "Lab 101","https://www.google.com/"],
    ["Sports", fest, "Organizer G", "3:00 PM", "Sports Complex","https://www.google.com/"],
    ["Drama", fest, "Organizer H", "7:00 PM", "Theatre","https://www.google.com/"],
    ["Coding", fest, "Organizer I", "9:00 AM", "Computer Lab","https://www.google.com/"],
    ["Design", fest, "Organizer J", "1:00 PM", "Design Studio","https://www.google.com/"],
    ["Poetry", fest, "Organizer K", "5:00 PM", "Library","https://www.google.com/"],
    ["Theatre", fest, "Organizer L", "8:00 PM", "Main Theatre","https://www.google.com/"]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8"> {/* Proper container */}
      <CompetitionCardsDemo
        head="Competitions" 
        competitions={competitions} 
      />
    </div>
  );
}

export default App;
