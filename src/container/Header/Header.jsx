import React from "react";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-banner">
        <img src={images.banner} alt="banner" />
      </div>
      <div className="app__header-Illustration">
        <img src={images.Illustration} alt="Illustration" />
      </div>

      <div className="app__header-text">
        <h1>We want give them a better tommorow!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="app__header-button">
        <button type="text">Get Started</button>
      </div>
    </div>
  );
};

export default Header;
