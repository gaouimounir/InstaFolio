import React from "react";
import Slider from "react-slick";
import "./Skills.css";

import HTMLLogo from "./imageSkills/logo-html.png";
import CSSLogo from "./imageSkills/logo-css.png";
import JavaScriptLogo from "./imageSkills/logo-js.png";
import ReactLogo from "./imageSkills/logo-react.png";
import CsharpLogo from "./imageSkills/logo-cSharp.jpg";
import MvcLogo from "./imageSkills/logo-mvc.net.png";
import JavaLogo from "./imageSkills/logo-java.jpg";
import SpringBootLogo from "./imageSkills/logo-springboot.jpg";
import SwiftLogo from "./imageSkills/logo-swift.png";
import GithubLogo from "./imageSkills/logo-github.png";
// Ajoutez d'autres logos selon vos besoins

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const logos = [
    HTMLLogo,
    CSSLogo,
    JavaScriptLogo,
    ReactLogo,
    CsharpLogo,
    MvcLogo,
    JavaLogo,
    SpringBootLogo,
    SwiftLogo,
    GithubLogo,

    // Ajoutez d'autres logos selon vos besoins
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          
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
