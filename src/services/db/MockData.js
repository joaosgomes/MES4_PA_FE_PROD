//MockData.js
import { v4 as uuidv4 } from "uuid";

export const mockEvents = [
  {
    id: uuidv4(),
    name: "oktoberfest",
    description:
      "the 189th oktoberfest will be held at munich's theresienwiese from september 21 to october 6, 2024.",
    location: "munich",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1605493717198-ebe4197f606d?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "academy awards (oscar)",
    description:
      "an academy award of merit, an oscar statuette recognizes achievements that have an extraordinary influence upon the advancement of the motion picture arts and sciences. this award is generally reserved for achievements that have changed the course of filmmaking since their introduction.",
    location: "hollywood",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1528669608060-7b7282176925?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "super bowl",
    description:
      "the super bowl is the biggest and most important american football game of the year. it is the national football league (nfl) yearly championship game. the game is played between the winning teams from the nfl's two conferences, the american football conference (afc) and the national football conference (nfc).",
    location: "usa",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1642189523635-912d71d9cf12?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "tomorrowland",
    description:
      "set to welcome more than 400 of the world's finest electronic music artists across 16 mesmerizing stages during two weekends of magic",
    location: "belgium",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1520095972714-909e91b038e5?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "euro 2024",
    description:
      "euro 2024 is the 17th uefa european football championship, a quadrennial international men's football championship of europe organized by uefa. it brings together national teams from across europe to compete for the prestigious title and showcases top-level football talent and exciting matches.",
    location: "germany/europe",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "running of the bulls",
    description: "running of the bulls",
    location: "pamplona/spain",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1636600489499-9f453f1af3e7?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "day of the dead",
    description:
      "mexicans honor their ancestors on day of the dead, but they're also reminding themselves that death is just a part of life. hanging out with skeletons reminds people that one day they will be skeletons—but not for a very long Date!",
    location: "mexico",
    date: new Date(new Date().getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1633053663400-655b31fb88ac?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
  {
    id: uuidv4(),
    name: "yi peng lantern festival",
    description:
      "it symbolizes the beauty of the full moon. as the exact date varies each year, the festival will be held on november 15-16,2024 during yi peng, locals gather at temples to listen to the monks' prayers and offer lanterns as a form of devotion.",
    location: "mexico",
    date:new Date(new Date(new Date().getTime()+(5*24*60*60*1000)).getTime()+(5*24*60*60*1000)),
    src_image:
      "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop",
    createdate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    versiondate: new Date(new Date().getTime()+(5*24*60*60*1000)),
    capacity: 0,
    temperature: 1,
    isactive: true,
  },
];

export const mockImages = [
  {
    id: uuidv4(),
    alt: "1",
    description: "1",
    src_image:
      "https://images.unsplash.com/photo-1605493717198-ebe4197f606d?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "2",
    description: "2",
    src_image:
      "https://images.unsplash.com/photo-1528669608060-7b7282176925?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "3",
    description: "3",
    src_image:
      "https://images.unsplash.com/photo-1642189523635-912d71d9cf12?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "4",
    description: "4",
    src_image:
      "https://images.unsplash.com/photo-1520095972714-909e91b038e5?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "5",
    description: "5",
    src_image:
      "https://images.unsplash.com/photo-1434648957308-5e6a859697e8?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "6",
    description: "6",
    src_image:
      "https://images.unsplash.com/photo-1636600489499-9f453f1af3e7?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "7",
    description: "7",
    src_image:
      "https://images.unsplash.com/photo-1633053663400-655b31fb88ac?auto=format&fit=crop",
    size: 1,
  },
  {
    id: uuidv4(),
    alt: "8",
    description: "8",
    src_image:
      "https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?auto=format&fit=crop",
    size: 1,
  },
];
