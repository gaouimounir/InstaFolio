import React from 'react';
import './Projet.css';

function Projet({ title, description, image }) {
  return (
    <div className="projet">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
}

export default Projet;
