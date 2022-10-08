/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/poster.png";
import release2 from "../assets/fest-1.png";
import Card from "./Card";
import { Link, useNavigate} from "react-router-dom";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Technical events and Workshops</h2>
          <p className="description">
            We have released four limited edition events early which can be viewed
            <a> <Link to="/events" style={{textDecoration:"none"}}>here</Link></a>
          </p>
          
          <p className="description">Get ready for amazing events</p>
          <a className="link"><Link to="/events" style={{textDecoration:"none"}}>
            Check them out <BsArrowRight /></Link>
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            loading="lazy"
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">This Festive Season</h2>
          <p className="description">
            Come n Enjoy our Techno-Cultural fest
          </p>
          
          <p className="description">Are you Ready??.</p>
          <a className="link"><Link to="/events" style={{textDecoration:"none"}}>
            Check them out <BsArrowRight /></Link>
          </a>
        </div>
      </div>
    </div>
  );
}
