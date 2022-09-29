/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import signup from "../assets/sign.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">The Techno-Cultural Fest</h1>
          <p className="description">
            The Event of Techies. Contact below to
            recieve updates when we go live.
          </p>
          <button>Contact Us</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" loading="lazy"/>
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
