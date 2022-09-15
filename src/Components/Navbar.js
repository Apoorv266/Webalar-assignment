import React from "react";
import "../Styles/Navbar.css"
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="inner-navbar">
        <div className="logo">
        <img src={require("../Assets/logo.png")} alt="" />
        </div>

        <div className="links">
        <Link to={"/"}>Home</Link>
            <a href="#about">About</a>
            <Link to={"/contact-us"}>Contact</Link>
            <Link to={"/contact-us"} className="btn">Get in touch</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
