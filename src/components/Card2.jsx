/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "../sass/index.scss";
export default function Card2({ image, series, title, link }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top">Team</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            
          </div>
        </div>
        <div className="card-sub-details">
          <span>#GIETU</span>
          <span><a href={link} class="glow-button" target="_blank">Contact</a></span>
        </div>
      </div>
    </div>
  )
}

