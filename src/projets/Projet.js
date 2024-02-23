// Projet.js
import React from 'react';

import './Projet.css';

function Projet({ title, description, mainImage,}) {
  return (
    <div className="projet">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={mainImage} alt={title} />
    </div>
  );
}


export default Projet;
