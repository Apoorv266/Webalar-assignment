import React from "react";
import "../Styles/Work.css";

export const Work = () => {
  return (
    <div className="work">
      <div className="title1">
        <h1>Our Works</h1>
      </div>

      <div className="work-card">
        <div className="card">
          <p className="img"></p>
          <div className="card1">
            <div className="left">
              <h3>Project 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="right">
              <img
                src={require("../Assets/icon.png")}
                alt=""
                style={{ width: "50px" }}
              />
            </div>
          </div>
        </div>

        <div className="card">
          <p className="img"></p>
          <div className="card1">
            <div className="left">
              <h3>Project 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="right">
              <img
                src={require("../Assets/icon.png")}
                alt=""
                style={{ width: "50px" }}
              />
            </div>
          </div>
        </div>

        <div className="card">
          <p className="img"></p>
          <div className="card1">

            <div className="left">
              <h3>Project 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="right">
              <img
                src={require("../Assets/icon.png")}
                alt=""
                style={{ width: "50px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="work-btn">
        <button className="btn1">View More</button>
      </div>
    </div>
  );
};
