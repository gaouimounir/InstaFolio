// Timeline.js
import React from "react";
import "./Timeline.css";
import Projet from "../projets/Projet";
import { Link } from "react-router-dom";
import projetsData from "../data/projetsData";

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {projetsData.map((projet, index) => (
          <Link
            className="timeline-item"
            key={index}
            to={`/projets/${projet.id}`}
          >
            <Projet {...projet} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
