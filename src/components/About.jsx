/* eslint-disable jsx-a11y/anchor-is-valid */

import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import "../sass/index.scss";
import React, { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";
import ScrollToTop from "./ScrollToTop";
import Card2 from "./Card2";
import super1 from "../assets/Ashu.png";
import super2 from "../assets/Ayush.png";
import super3 from "../assets/Ankit.png";
import super4 from "../assets/Devi.png";
import super5 from "../assets/Panda.png";
import super6 from "../assets/Raj.png";

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
      image: super1,
      series: "Front-End",
      title: "Ashutosh Mohanty",
     link: "https://www.linkedin.com/in/ashutosh-mohanty-3464a6204/"
    },
    {
      image: super2,
      series: "Backend",
      title: "Ayush Sharma",
      link: "https://www.linkedin.com/in/ayush-sharma-551133213/"
      
    },
    {
      image: super3,
      series: "Grphics",
      title: "Ankit Mahapatra",
      link: "https://www.linkedin.com/in/ankit-mahapatra-5184711bb"
      
    },
    {
      image: super4,
      series: "UI/UX",
      title: "Devi Prasad Mishra",
      link: "https://www.linkedin.com/in/devi-prasad-mishra-726903210/"
      
    },
    
  ];
  const data1 = [
    {
      image: super6,
      series: "Front-end",
      title: "Ankit Raj",
     link: "https://www.linkedin.com/in/ankitrj1602"
    },
    {
      image: super5,
      series: "Deployment",
      title: "Sourav Kumar Panda",
      link: "https://www.linkedin.com/in/sourav-kumar-panda-38536b1a9/"
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
        <h2 className="title">About Our Team</h2>
        <p className="description">
          The offscreen heroes who made this possible
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, link }, index) => (
          <Card2
            image={image}
            series={series}
            title={title}
            link={link}
            loading="lazy"
          />
        ))}
      </div>
      <div className="cards">
        {data1.map(({ image, series, title, link }, index) => (
          <Card2
            image={image}
            series={series}
            title={title}
            link={link}
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