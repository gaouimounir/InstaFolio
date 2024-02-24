// Projet.js
import React from 'react';

import './Projet.css';

function Projet({ title, mainImage,}) {
  return (
    <div className="projet">
      <h3>{title}</h3>
      <img src={mainImage} alt={title} />
    </div>
  );
}


export default Projet;
