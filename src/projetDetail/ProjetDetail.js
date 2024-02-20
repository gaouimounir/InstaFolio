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
      <h2>Détails du projet</h2>
      <p>ID du projet : {projet.id}</p>
      <p>Titre : {projet.title}</p>
      <p>Description : {projet.description}</p>
      <img src={projet.image} alt={projet.title} />
    </div>
  );
}

export default ProjetDetail;
