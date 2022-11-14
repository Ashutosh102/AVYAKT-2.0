import React from "react";
export default function Card({ image, series, title }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top">Stay Tuned</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            
          </div>
        </div>
        <div className="card-sub-details">
          <span>#GIETU</span>
          
        </div>
      </div>
    </div>
  );
}
