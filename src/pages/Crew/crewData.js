import douglasHurleyPng from "../../assets/crew/image-douglas-hurley.png";
import douglasHurleyWebp from "../../assets/crew/image-douglas-hurley.webp";
import markShuttleworthPng from "../../assets/crew/image-mark-shuttleworth.png";
import markShuttleworthWebp from "../../assets/crew/image-mark-shuttleworth.webp";
import victorGloverPng from "../../assets/crew/image-victor-glover.png";
import victorGloverWebp from "../../assets/crew/image-victor-glover.webp";
import anoushehAnsariPng from "../../assets/crew/image-anousheh-ansari.png";
import anoushehAnsariWebp from "../../assets/crew/image-anousheh-ansari.webp";

const crewData = [
  {
    name: "Douglas Hurley",
    images: {
      png: douglasHurleyPng,
      webp: douglasHurleyWebp,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: markShuttleworthPng,
      webp: markShuttleworthWebp,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: victorGloverPng,
      webp: victorGloverWebp,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: anoushehAnsariPng,
      webp: anoushehAnsariWebp,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export default crewData;
