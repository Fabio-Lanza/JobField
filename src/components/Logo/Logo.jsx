import React from "react";
import "./Logo.css";
import jobfield from "../../assets/images/jobfield.png";
import jobIcon from "../../assets/images/jobIcon.png";

function Logo() {
  return (
    <div className="logo-box">
      <img src={jobIcon} alt="" className="logo-icon" />
      <img src={jobfield} alt="" className="logo" />
    </div>
  );
}

export default Logo;
