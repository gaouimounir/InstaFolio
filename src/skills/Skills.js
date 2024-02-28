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
import SqlLogo from "./imageSkills/logoSql.PNG";
import MySqlLogo from "./imageSkills/logoMysql.PNG";
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
    SqlLogo,
    MySqlLogo,
    SwiftLogo,
    GithubLogo,

    // Ajoutez d'autres logos selon vos besoins
  ];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    focusonselect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 4,
          swipeToSlide: true,
          focusonselect: true,
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
