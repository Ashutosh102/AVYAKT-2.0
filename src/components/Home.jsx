/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import home from "../assets/illust.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function Home() {
  const [cookies, removeCookie] = useCookies();
  return (
    
    <div className="home">
      <div className="container">
        <div className="content">
          {/* <p className="sub-title">Avyakt 2.0</p> */}
          <h1 className="title" style={{
    backgroundImage:
      "linear-gradient(95deg, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "rgba(255, 40, 208, 0.49)"
  }}>AVYAKT 2.0<Typewriter
            
  onInit={(typewriter)=> {
    
  typewriter
   .start()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .deleteAll()
  .typeString("For Geeks")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Techies")
  .pauseFor(1000)
  .deleteAll()
  .typeString("For Students")
  .start()
  }}
  /></h1>
          <p className="description">
            Don't miss out on the release of our new Techno-Cultural Fest. Taking place from 2nd - 4th November
          </p>
          
          {cookies.user ?<Link to="/events" style={{textDecoration:"none", color: "#DBAA00"}} ><button>Visit events</button></Link>:<Link to="/login" style={{textDecoration:"none", color: "#DBAA00"}}><button>Log in</button></Link>}
          
          
        </div>
        <div className="image-container">
          <div className="image">
            <img src="https://i.imgur.com/QqyQHXZ.png" alt="home image" loading="lazy" />
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
