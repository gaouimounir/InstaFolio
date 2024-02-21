import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Header.css";
import { useHeader } from '../Context';


function Header() {

  const { headerData } = useHeader();  // Utilisez le hook pour accéder aux données du Header

  return (
    <div className="header">
      <div className="header__nav">
        <img className="header__img" src={headerData.imgSrc} alt="" />

        <div className="header__contact">
          <a href="https://www.linkedin.com/in/am-gaoui/">
            <i className="fa-brands fa-linkedin"></i>
            <p className="name__contact">LinkedIn</p>
          </a>
          <a href="https://github.com/gaouimounir">
            <i className="fa-brands fa-github"></i>
            <p className="name__contact">Github</p>
          </a>
          <a href="mailto:am.gaoui@protonmail.com">
            <i className="fa-solid fa-envelope"></i>
            <p className="name__contact">Email</p>
          </a>
        </div>
      </div>
      <div className="header__presentation">
        <div className="header__name">
          <h1>{headerData.name}</h1>
        </div>
        <div className="header__metier">
          <h3>📱 WEB DEVELOPER 💻</h3>
        </div>
        <div className="header__description">
          <p>
            💡 Passionate developer, I am ready to put my technical precision
            and determination at the service of your company.
          </p>
          <p>
            🧠 My thirst for learning and ability to adapt quickly make me a
            driving force within your team.
          </p>
          <p>
            🎯 With a background in projects and hands-on practices, I am
            prepared to tackle technical challenges and actively contribute to
            your projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
