// ProjetDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import "./ProjetDetail.css";
import projetsData from "../data/projetsData";

function ProjetDetail() {
  const { projetId } = useParams();
  const projet = projetsData.find((p) => p.id === parseInt(projetId));

  if (!projet) {
    return <p>Projet non trouvé</p>;
  }

  return (
    <div>
      <img className="projetDetail__image" src={projet.image} alt={projet.title} />
      <p className="projetDetail__title"> {projet.title}</p>
      <p className="projetDetail__description"> {projet.description}</p>
    </div>
  );
}

export default ProjetDetail;
