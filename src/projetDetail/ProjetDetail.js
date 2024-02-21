// ProjetDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ProjetDetail.css";
import projetsData from "../data/projetsData";
import { useHeader } from '../Context';

function ProjetDetail() {
  const { projetId } = useParams();
  const projet = projetsData.find((p) => p.id === parseInt(projetId));
  const { headerData } = useHeader();  // Utilisez le hook pour accéder aux données du Header


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
      <Link to="/" className="projetDetail__header">
      <img src={headerData.imgSrc} alt= "" className="projetDetail__profil" />
      <p className="projetDetail__name">{headerData.name}</p>
      </Link>
      <Slider {...carouselSettings}>
        {projet.images.map((image, index) => (
          <img className="projetDetail__image" key={index} src={image} alt={`${projet.title} - Images ${index + 1}`} />
        ))}
      </Slider>
      <p className="projetDetail__title"> {projet.title}</p>
      <p className="projetDetail__description"> {projet.description}</p>
    </div>
  );
}

export default ProjetDetail;
