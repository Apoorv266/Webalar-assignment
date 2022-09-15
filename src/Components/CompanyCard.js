import React from "react";
import "../Styles/Companycard.css"
import Border from "./Border";
import Responsive from "./Responsive";

const CompanyCard = () => {
  return (

    <div className="companycard" id="about">

        <div className="slider">
            <h2>Trusted Companies</h2>
            <Responsive className="slider1"/>
        </div>

      <div className="companies"></div>
      <div className="service">
        <h1>Our services<br/> that we provide</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
          libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
          arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra
          diam arcu massa amet non metus ornare.
        </p>
      </div>

      <div className="skills">
        <div className="skillset">
        <img src={require('../Assets/skill1.png')} alt='' width={"50px"}/>
          <h2>Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
        </div>

        <div className="skillset">
        <img src={require('../Assets/skill3.png')} alt='' width={"50px"}/>
          <h2>Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
        </div>

        <div className="skillset">
        <img src={require('../Assets/skill2.png')} alt='' width={"30px"}/>
          <h2>Marketing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
