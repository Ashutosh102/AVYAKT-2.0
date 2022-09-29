/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "../sass/index.scss";
export default function Card2({ image, series, title, link, line }) {
  return (
    <div className="card">
      <div className="card-image"  >
        <img style={{borderRadius : "15px 15px 0 0", border:"8px solid black"}} src={image} alt="super1" />
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
        <div className="card-heading">
        <div className="card-sub-details"><span>{line}</span>
          </div>
        </div>
        <br/>
        <div className="card-sub-details">
          <span>#GIETU</span>
          <span><a href={link} class="glow-button" target="_blank">Contact</a></span>
        </div>
        <br/>
      </div>
    </div>
  )
}

