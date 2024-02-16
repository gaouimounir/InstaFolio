import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Header.css";
import ImgProfil from "../images/ImgProfil.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <img className="header__img" src={ImgProfil} alt="" />

        <div className="header__contact">
          <a href="https://www.linkedin.com/in/am-gaoui/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:am.gaoui@protonmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/gaouimounir">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="header__presentation">
        <div className="header__name">
          <h1>GAOUI MOUNIR</h1>
        </div>
        <div className="header__metier">
          <h2>WEB DEVELOPER</h2>
        </div>
        <div className="header__description">
          <p>
            I am a Web Developer with 3 years of experience. I am currently
            working on my portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
