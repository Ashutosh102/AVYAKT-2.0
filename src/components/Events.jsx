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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
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
          title: "Android App development",
         link: '/android-dev',
         line: "By Department"
        },
        {
          image: super2,
          series: "Technical",
          title: "Hack for Giet",
          link: "#",
          line: "By GDSC"
        },
        {
          image: super3,
          series: "Technical",
          title: "Code Soccer",
          link: "#",
          line: "By DSC Club"
        },
        {
          image: super1,
          series: "Technical",
          title: "Blind Coding",
         link: "#",
         line: "By DSC Club"
        },
        {
          image: super2,
          series: "Technical",
          title: "Code Debugging",
          link: "#",
          line: "By CyberSecurity Club"
        },
        {
          image: super3,
          series: "Technical",
          title: "Web Puzzle",
          link: "#",
          line: "By Web Eye"
        },
        {
          image: super1,
          series: "Technical",
          title: "Poster Making",
         link: "#",
         line: "By Department"
        },
        {
          image: super2,
          series: "Technical",
          title: "Robotics EVENT",
          link: "#",
          line: "By SARS Club"
        },
        {
          image: super3,
          series: "Technical",
          title: "Workshop",
          link: "#",
          line: "By Department"
        },
        {
          image: super1,
          series: "Technical",
          title: "Guest talks",
         link: "#",
         line: "By Department"
        },
        {
          image: super2,
          series: "Technical",
          title: "Innovative Idea Poster Presentation",
          link: "#",
          line: "By Department"
        },
        {
          image: super3,
          series: "Technical",
          title: "Quiz",
          link: "#",
          line: "By Department"
        },
        
        
      ];
      
      
      
      const data4 = [
       
        {
            image: super1,
            series: "Non-Tech",
            title: "Gaming",
           link: "#",
           line: "By Department"
          },
          {
            image: super2,
            series: "Non-Tech",
            title: "Group Discussion",
            link: "#",
            line: "By Dept."
          },
          {
            image: super3,
            series: "Non-Tech",
            title: "Craft Making Workshop",
            link: "#",
            line: "By Department"
          },
          {
            image: super1,
            series: "Non-Tech",
            title: "Treasure Hunt",
           link: "#",
           line: "By Department"
          },
          {
            image: super2,
            series: "Non-Tech",
            title: "Rangoli",
            link: "#",
            line: "By Dept."
          },
          {
            image: super3,
            series: "Non-Tech",
            title: "Musical Chair",
            link: "#",
            line: "By Department"
          },     
          {
            image: super1,
            series: "Non-Technical",
            title: "Eureka",
           link: "#",
           line: "By PDCS CLUB"
          },
          {
            image: super2,
            series: "Non-Technical",
            title: "G.K Quiz",
            link: "#",
            line: "By Organising Team"
          },
          {
            image: super3,
            series: "Non-Tech",
            title: "CSE-GOT Tallent",
            link: "#",
            line: "By Department"
          },   
          {
            image: super1,
            series: "Non-Technical",
            title: "On the spot painting",
           link: "#",
           line: "By Department"
          },
          {
            image: super2,
            series: "Non-Technical",
            title: "CARTOONING",
            link: "#",
            line: "By Dept."
          },
      ];
      
      const data8 = [
       
        {
            image: super1,
            series: "Cultural",
            title: "Song",
           link: "#",
           line: "By Department"
          },
          {
            image: super2,
            series: "Cultural",
            title: "Dance",
            link: "#",
            line: "By Department"
          },
          {
            image: super3,
            series: "Cultural",
            title: "Fashion Show",
            link: "#",
            line: "By Department"
          },
          {
            image: super1,
            series: "Cultural",
            title: "Mono Acting/Mimicry",
           link: "#",
           line: "By Department"
          },
          {
            image: super2,
            series: "Cultural",
            title: "Drama",
            link: "#",
            line: "By Dept."
          }
        
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
          Hurry Up and Register now.
        </p>
      </div>
      <div className="content">
          
          <h1 className="title" style={{color:"#E40078"}}>Technical Events
          </h1>
          <p className="sub-title" style={{color:"#E40078"}}>Get your inner Geek out</p>
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
      
      
      <div className="content">
          
          <h1 className="title" style={{color:"#E40078"}}>Non-Technical Events
          </h1>
          <p className="sub-title" style={{color:"#E40078"}}>Get your inner student out</p>
          </div>
      <div className="cards">
        {data4.map(({ image, series, title, link, line }, index) => (
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
      
      <div className="content">
          
          <h1 className="title" style={{color:"#E40078"}}>Cultural Events
          </h1>
          <p className="sub-title" style={{color:"#E40078"}}>Get your inner artist out</p>
          </div>
      <div className="cards">
        {data8.map(({ image, series, title, link, line }, index) => (
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