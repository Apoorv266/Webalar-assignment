import React from "react";
import "../Styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="text">
        
          <h1>
            Let's create <br />
            Something Great <br /> Together
          </h1>
        

      
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
            ultrices venenatis in. Sed elit aenean mattis vulputate aliquet
            vitae.
          </p>
       
          <button className="btn">Let's Talk</button>
       
      </div>

      <div className="img">
        <img src={require("../Assets/banner.jpg")} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Banner;
