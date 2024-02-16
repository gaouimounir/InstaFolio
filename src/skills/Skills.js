import React from 'react';
import Slider from 'react-slick';
import './Skills.css';

import HTMLLogo from '../images/logo-html.png';
import CSSLogo from '../images/logo-css.png';
import JavaScriptLogo from '../images/logo-js.png';
// Ajoutez d'autres logos selon vos besoins

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Skills() {
  const logos = [
    HTMLLogo,
    CSSLogo,
    JavaScriptLogo,
    // Ajoutez d'autres logos selon vos besoins
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Ajoutez cette ligne pour activer l'autoplay
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="skills-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img className="skill-logo" src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
