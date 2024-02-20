import React from "react";
import "./Timeline.css";
import Projet from "../projets/Projet";
import { Link } from "react-router-dom";

import ShabbatHome from "./imageTimeline/home.png";
import FridgeHome from "./imageTimeline/FridgeScan.PNG";
import Ducsman from "./imageTimeline/ducsman.jpg";
import OlaBelBul from "./imageTimeline/OlaBelBulHome.PNG";
import MeteoConnect from "./imageTimeline/ApiMeteoHome.PNG";

function Timeline() {
  const projets = [
    {
      id: 1,
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
    },
    {
      id: 2,
      title: "Meteo Connect",
      description: "A Shabbat Brunch App",
      image: MeteoConnect,
    },
    {
      id: 3,
      title: "Ducsman",
      description: "A Shabbat Brunch App",
      image: Ducsman,
    },
    {
      id: 4,
      title: "Ola Bel Bul",
      description: "A Shabbat Brunch App",
      image: OlaBelBul,
    },
    {
      id: 5,
      title: "Fridge Mate",
      description: "A Shabbat Brunch App",
      image: FridgeHome,
    },
  ];

  return (
    <div className="timeline-container">
    <div className="timeline">
      {projets.map((projet, index) => (
        <Link className="timeline-item" key={index} to={`/projets/${projet.id}`}>
          <Projet {...projet} />
        </Link>
      ))}
    </div>
  </div>
  );
}

export default Timeline;
