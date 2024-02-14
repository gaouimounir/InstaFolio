import React from "react";
import "./Header.css";
import ImgProfil from "../image/ImgProfil.jpg";
function Header() {
  return (
    <div className="header">
      <img className="header__img" src={ImgProfil} alt="" />
      <div className="contact">
        
      </div>
    </div>
  );
}

export default Header;
