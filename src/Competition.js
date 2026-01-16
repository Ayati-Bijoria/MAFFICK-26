import React from 'react';
import CompetitionCardsDemo from "./TeamCard"; // Fixed import
import fest from "./img/fest.png";
import deshaj from './img/deshaj.jpeg';
import spardha from './img/SPARDHA.jpeg';
import echo from './img/Echos.jpeg';
import clashofideas from './img/clashofideas.jpeg';
import electrical from './img/Electrical.jpeg';
import onceuponamic from './img/onceuponamic.jpeg';
import iddc from './img/IDDC.jpeg'
import robofiesta from './img/RoboFiesta.jpeg';
import drone from './img/Drone.jpeg';
import photon from './img/photonRace.jpeg';
import waterrobo from './img/WaterRobo.jpeg';
import battism from './img/Battism.jpeg';


function App() {
  // Fixed: Use array of competition arrays, not object with duplicate keys
  const competitions = [
    ["PRODCONCLAVE-\nSPARDHA 1.0 ", spardha, "Organizer ProdCON", "22 Jan", "to be disclosed soon","https://unstop.com/competitions/prodconclave--1623629"],
    ["ECHOS", echo, "Organizer Student Council", "23 Jan\n10 am-1 pm", "MME AUDI","https://www.google.com/"],
    ["DESHAJ 1.0", deshaj, "Organizer Student Council", "24 Jan\n10 am-5 pm", "SAC","https://www.google.com/"],
    ["IDDC GROOVE WARS", iddc, "Organizer Student Council", "23 Jan\n2 pm-5 pm", "SAc","https://www.google.com/"],
    ["ONCE UPON A MIC", onceuponamic, "Organizer Student Council", "24 Jan\n 2pm-5 pm", "Gallery","https://www.google.com/"],
    ["RHYTHM RIOT", echo, "Organizer Student Council", "23 Jan\n2 pm-5 pm", "MME AUDI","https://www.google.com/"],
    ["CLASH OF IDEAS", clashofideas, "Organizer DebSoc", "24 Jan\n 10 am -12:30 pm", "SAC","https://www.google.com/"],
    ["PROJECT SHOWCASE COMPETITION ", electrical, "Organizer electrical dept", "22-23 Jan", "LRC","https://www.google.com/"],
    ["BATTISM", battism, "Organizer EVOLVE", "24 Jan", "venue to be disclosed soon","https://www.google.com/"],
    ["STEP SOLO", iddc, "Organizer Student Council", "23 Jan\n10 am-1 pm", "CIVIL AUDI","https://www.google.com/"],
    ["KSHITIJ 4.0: DRONE DESIGN", drone, "Organizer Astro Alliance", "24 Jan", "Venue to be disclosed sooon","https://www.google.com/"],
    ["KHITIJ 4.0: PHOTON RACE", photon, "Organizer Astro Alliance", "25 Jan\n", "Venue to be anounced soon","https://www.google.com/"],
    ["ROBOFIESTA", robofiesta, "Organizer Robotics club", "22-25 Jan", " Manit,Bhopal","https://www.google.com/"],
    ["WATER ROBO RACE", waterrobo, "Organizer EVOLVE", "25 Jan", " venue to be disclosed soon","https://www.google.com/"]
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
