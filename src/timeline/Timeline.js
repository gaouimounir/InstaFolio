import React from "react";
import "./Timeline.css";
import Projet from "../projets/Projet";
import ShabbatHome from "../images/home.png";

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
