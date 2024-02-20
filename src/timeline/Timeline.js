import React from "react";
import "./Timeline.css";
import Projet from "../projets/Projet";
import ShabbatHome from "./imageTimeline/home.png";
import FridgeHome from "./imageTimeline/FridgeScan.PNG";
import Ducsman from "./imageTimeline/ducsman.jpg";
import OlaBelBul from "./imageTimeline/OlaBelBulHome.PNG";
import MeteoConnect from "./imageTimeline/ApiMeteoHome.PNG";

function Timeline() {
  const projects = [
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
    },
    {
      title: "Meteo Connect",
      description: "A Shabbat Brunch App",
      image: MeteoConnect,
    },
    {
      title: "Ducsman",
      description: "A Shabbat Brunch App",
      image: Ducsman,
    },
    {
      title: "Ola Bel Bul",
      description: "A Shabbat Brunch App",
      image: OlaBelBul,
    },
    {
      title: "Fridge Mate",
      description: "A Shabbat Brunch App",
      image: FridgeHome,
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {projects.map((project, index) => (
          <Projet key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
