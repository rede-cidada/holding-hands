import React from "react";
import Image from "../assets/img/image.svg";

const Home = () => {
  return (
    <Home>
      <div className="home">
        <h1>Holding Hands</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <img
            className="logo"
            src={Image}
            alt="Lâmpada e os objetivos da ONU"
          />
        </p>
      </div>
    </Home>
  );
};

export default Home;