import React from "react";
import main from "../../assets/images/main2.png";
import Wrapper from "../../Styled-components/LandingPage-styled";
import Logo from "../../components/Logo/Logo";
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            JobField is a job tracking application designed to help individuals
            keep track of their job search activities and progress.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
