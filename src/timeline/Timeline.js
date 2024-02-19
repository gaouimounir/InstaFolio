import React from "react";
import "./Timeline.css";
import Projet from "../projets/Projet";
import ShabbatHome from "./imageTimeline/home.png";
import FridgeHome from "./imageTimeline/FridgeScan.PNG";
import Ducsman from "./imageTimeline/ducsman.jpg";
import OlaBelBul from "./imageTimeline/OlaBelBulHome.PNG";

function Timeline() {
  const projects = [
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: FridgeHome,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: Ducsman,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: OlaBelBul,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
    },
    {
      title: "Shabbat Brunch",
      description: "A Shabbat Brunch App",
      image: ShabbatHome,
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
