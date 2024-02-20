import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams();


  return (
    <div>

      <h2>Détails du projet</h2>
      <p>ID du projet : {projectId}</p>
      
    </div>
  );
}

export default ProjectDetail;
