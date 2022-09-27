import React from "react";
import Card from "./Card";
import icon from "../assets/icon-z.png";
import super1 from "../assets/event.png";
import release2 from "../assets/study.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Get Ready for Avyakt 2.0</h2>
          <p className="description">
            Sign up today and you'll get all the details when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Events"
            title="Tech/non-tech"
            
           
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Workshops"
            title="hackathons"
            
           
          />
        </div>
      </div>
    </div>
  );
}
