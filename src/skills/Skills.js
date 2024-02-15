import React from 'react';
import Slider from 'react-slick';
import './Skills.css';

import HTMLLogo from '../images/html-logo.png';
import CSSLogo from '../images/css-logo.png';
import JavaScriptLogo from '../images/javascript-logo.png';
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
      <h2>My Skills</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
