import React from 'react';
import { useParams } from 'react-router-dom';

function ProjetDetail() {
  const { projetId } = useParams();


  return (
    <div>

      <h2>Détails du projet</h2>
      <p>ID du projet : {projetId}</p>
      
    </div>
  );
}

export default ProjetDetail;
