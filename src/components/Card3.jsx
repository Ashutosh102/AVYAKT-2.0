/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "../sass/index.scss";
import { Link } from "react-router-dom";
import Default from "../assets/Default1.png";
export default function Card3({ image, series, title, link, line, roll }) {
  return (
    <div className="card">
      <div className="card-image"  >
        <img style={{borderRadius : "15px 15px 0 0", border:"8px solid black", width:"22rem", height:"24rem"}} src={image} alt="super1" onLoad={Default}/>
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series} (Co-ordinator)</span>
          <span className="card-top">{roll}</span>
        </div>
        <div className="card-heading">
        <div className="card-sub-details"><span>{line}</span>
          </div>
        </div>
        <br/>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            
          </div>
        </div>
        
        <br/>
        <div className="card-sub-details">
          <span>#GIETU</span>
          <span><a class="glow-button" target="_blank"><Link to={link} style={{textDecoration:"none", color: "white"}}>Register</Link></a></span>
        </div>
        <br/>
      </div>
    </div>
  )
}

