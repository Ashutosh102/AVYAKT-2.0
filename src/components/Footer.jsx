import React from "react";
import logo from "../assets/avyakt.png";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link, useNavigate} from "react-router-dom";

export default function Footer() {
  const links = [
    {
      title: "About",
      data: [<Link to="/about" style={{textDecoration:"none", color:"#FF00B6"}}>About</Link>, <Link to="/about-team" style={{textDecoration:"none", color:"#FF00B6"}}>About Team</Link>],
    },
    {
      title: "Events",
      data: [<Link to="/events" style={{textDecoration:"none", color:"#FF00B6"}}>Technical</Link>, <Link to="/events" style={{textDecoration:"none", color:"#FF00B6"}}>Non-Technical</Link>, <Link to="/events" style={{textDecoration:"none", color:"#FF00B6"}}>Cultural</Link>],
    },
    {
      title: "Contact",
      data: [<Link to="/contact" style={{textDecoration:"none", color:"#FF00B6"}}>Contact</Link>, <Link to="/contact" style={{textDecoration:"none", color:"#FF00B6"}}>Support</Link>],
    },
   
  ];
  const socialLink = [
   <a href="https://www.facebook.com/profile.php?id=100086428294981" style={{color:"#FF00B6"}}> <BsFacebook /></a>,
   <a href="https://www.linkedin.com/in/avyakt-cse-975732253/" style={{color:"#FF00B6"}}> <BsLinkedin /></a>,
    <a href="https://www.instagram.com/avyakt2.0/" style={{color:"#FF00B6"}}> <BsInstagram /></a>,
    
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <p>Exclusive Techno-cultural Fest</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 AVYAKT 2.0</span>
        <span>The Techno-Cultural fest</span>
      </div>
    </footer>
  );
}
