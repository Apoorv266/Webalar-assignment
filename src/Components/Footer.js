import React from "react";
import "../Styles/Footer.css";
import Border from "./Border";

const Footer = () => {
  return (
    <>
      <div className="footer">


        <div className="top">


          <div className="title">
            <h1>
              Let's Work
              <br />
              Together
            </h1>
          </div>

          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
              nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
              erat diam arcu.
            </p>
            <button className="btn3">Let's work</button>
          </div>


        </div>


        <div className="bottom">

            <div className="logo">
                <img src={require("../Assets/logo.png")} alt="" />

                <div className="social">
                <i class="devicon-linkedin-plain"></i>
                <i class="devicon-twitter-original"></i>
                <i class="devicon-facebook-plain"></i>
          
                </div>
            </div>

            <div className="about">
                <div className="details">
                    <h4>Address</h4>
                    <p>0199 Taylor Park,<br/> North Dakota, USA</p>
                </div>

                <div className="details">
                    <h4>Address</h4>
                    <p>0199 Taylor Park,<br/> North Dakota, USA</p>
                </div>

                <div className="details">
                    <h4>Address</h4>
                    <p>0199 Taylor Park,<br/> North Dakota, USA</p>
                </div>
            </div>
        </div>
        <div className="footnotes">
<Border/>
            <p>Copyright © Webalar. All Rights Reserved</p>
        </div>


      </div>
    </>
  );
};

export default Footer;
