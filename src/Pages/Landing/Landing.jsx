import React from "react";
import logo from "../../assets/images/logo.svg";
import main from "../../assets/images/main2.png";
import Wrapper from '../../Styled-components/LandingPage'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>Jobster is a job tracking app software application designed to help 
        individuals keep track of their job search activities and progress.
        </p>
        <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
}



export default Landing;
