/* eslint-disable jsx-a11y/anchor-is-valid */

import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import "../sass/index.scss";

import React, { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";
import ScrollToTop from "./ScrollToTop";
import Card2 from "./Card2";


function About() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .super-rare,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  const data = [
    {
      image: "https://i.imgur.com/8MTl612.png",
      series: "React Front-End / Deployment",
      title: "Ashutosh Mohanty",
     link: "https://www.linkedin.com/in/ashutosh-mohanty-3464a6204/",
     line: "Jack Of All Trades"
    },
    {
      image: "https://i.imgur.com/o60KLih.png",
      series: "Backend / Deployment",
      title: "Ayush Sharma",
      link: "https://www.linkedin.com/in/ayush-sharma-551133213/",
      line: "Hardwork Pays off"
    },
    {
      image: "https://i.imgur.com/pYHZbLk.png",
      series: "Graphics / Posters",
      title: "Ankit Mahapatra",
      link: "https://www.linkedin.com/in/ankit-mahapatra-5184711bb",
      line: "Creativity in every pixel"
    },
   
    
  ];
  const data1 = [
    {
      image: "https://i.imgur.com/DSEHN6u.png",
      series: "Graphics / Posters",
      title: "Devi Prasad Mishra",
      link: "https://www.linkedin.com/in/devi-prasad-mishra-726903210/",
      line: "Designing every aspects"
    },
    {
      image: "https://i.imgur.com/Dem4vzn.png",
      series: "React Front-end / Integration",
      title: "Ankit Raj",
     link: "https://www.linkedin.com/in/ankitrj1602",
     line: "Developing new plans"
    },
  
   
    
  ];
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <br/>
      <br/>
      <div className="super-rare">
      <div className="title-container">
        <h2 className="title" style={{
    backgroundImage:
      "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "rgba(255, 40, 208, 0.49)"
  }}>About Our Team</h2>
        <p className="description">
          The offscreen heroes who made this possible
        </p>
      </div>
      <div className="cards2">
        {data.map(({ image, series, title, link, line }, index) => (
          <Card2
            image={image}
            series={series}
            title={title}
            link={link}
            line={line}
            loading="lazy"
          />
        ))}
      </div>
      <div className="cards2">
        {data1.map(({ image, series, title, link, line }, index) => (
          <Card2
            image={image}
            series={series}
            title={title}
            link={link}
            line={line}
            loading="lazy"
          />
        ))}
      </div>
    </div>
    <br/>
      <br/>
      <Signup />
      <Footer />
    </div>
  )
}

export default About