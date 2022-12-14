/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import signup from "../assets/sign.png";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Are you ready for</p>
          <h1 className="title" style={{
    backgroundImage:
      "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }}>The Techno-Cultural Fest</h1>
          <p className="description">
            The Event of Techies. Contact below to
            recieve updates when we go live.
          </p>
          <button><Link to="/contact" style={{textDecoration:"none", color: "orange"}}>Contact Us</Link></button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="https://i.imgur.com/8cqWglN.png" alt="home image" loading="lazy"/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
