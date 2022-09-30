/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
// import "../sass/index.scss";

import React, { useState, useEffect } from "react";
import scrollreveal from "scrollreveal";
import ScrollToTop from "./ScrollToTop";
import Card from "./Card3";
import super1 from "../assets/fest-1.png";
import super2 from "../assets/fest-2.png";
import super3 from "../assets/fest-3.png";
import super4 from "../assets/fest-4.png";
function Events() {
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
          series: "Technical",
          title: "Blind Coding",
         link: "#",
         line: "Jack Of All Trades"
        },
        {
          image: super2,
          series: "Technical",
          title: "Web Dev",
          link: "#",
          line: "Hardwork Pays off"
        },
        {
          image: super3,
          series: "Workshop",
          title: "Hackathon",
          link: "#",
          line: "Creativity in every pixel"
        },
        
        
      ];
      const data1 = [
       
        {
            image: super1,
            series: "Technical",
            title: "Blind Coding",
           link: "#",
           line: "Jack Of All Trades"
          },
          {
            image: super2,
            series: "Technical",
            title: "Web Dev",
            link: "#",
            line: "Hardwork Pays off"
          },
          {
            image: super3,
            series: "Workshop",
            title: "Hackathon",
            link: "#",
            line: "Creativity in every pixel"
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
        <h2 className="title">Events You are waiting for</h2>
        <p className="description">
          Hurry Up and Register now <a href="#">here</a>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, link, line }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            link={link}
            line={line}
            loading="lazy"
          />
        ))}
      </div>
      <div className="cards">
        {data1.map(({ image, series, title, link, line}, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            link={link}
            line={line}
            loading="lazy"
          />
        ))}
      </div>
      <div className="cards">
        {data.map(({ image, series, title, link, line }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            link={link}
            line={line}
            loading="lazy"
          />
        ))}
      </div>
      <div className="cards">
        {data.map(({ image, series, title, link, line }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            link={link}
            line={line}
            loading="lazy"
          />
        ))}
      </div>
      <div className="cards">
        {data.map(({ image, series, title, link, line }, index) => (
          <Card
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

export default Events