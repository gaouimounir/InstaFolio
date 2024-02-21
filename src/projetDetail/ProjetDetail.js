// ProjetDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ProjetDetail.css";
import projetsData from "../data/projetsData";

function ProjetDetail() {
  const { projetId } = useParams();
  const projet = projetsData.find((p) => p.id === parseInt(projetId));

  if (!projet) {
    return <p>Projet non trouvé</p>;
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projetDetail">
      <Slider {...carouselSettings}>
        {projet.images.map((image, index) => (
          <img key={index} src={image} alt={`${projet.title} - Images ${index + 1}`} />
        ))}
      </Slider>
      <p className="projetDetail__title"> {projet.title}</p>
      <p className="projetDetail__description"> {projet.description}</p>
    </div>
  );
}

export default ProjetDetail;
