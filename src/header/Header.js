import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import "./Header.css";
import ImgProfil from "../image/ImgProfil.jpg";

function Header() {
  return (
    <div className="header">
      <img className="header__img" src={ImgProfil} alt="" />
      <div className="contact">
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
  );
}

export default Header;
