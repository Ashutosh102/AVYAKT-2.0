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
import axios from "axios";

import Appdev from "../assets/Appdev1.png";
import Craft from "../assets/Craft1.png";
import Dance from "../assets/Dance1.png";
import Fashion from "../assets/Fashion1.png";
import Rangoli from "../assets/Rangoli1.png";
import Codebug from "../assets/Codebug1.png";

import Quiz from "../assets/Quiz1.png";
import Drama from "../assets/Drama1.png";
import Thunt from "../assets/Thunt1.png";
import Stall from "../assets/Stall1.png";
import Valo from "../assets/Valo1.png";
import Default from "../assets/Default1.png";
import Singing from "../assets/Singing1.png";
import Designing from "../assets/designing1.png";
import Mimicry from "../assets/mimicry1.png";
import GDSC from "../assets/GDSC1.png";
import Painting from "../assets/Painting1.png";
import Blind from "../assets/Blind1.png";
import Soccer from "../assets/Soccer1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Events() {
 
  const [cookies] = useCookies();
  let token = cookies.user;
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    toast.success('🦄Hurry Up and register!! Get ready for the fest from 2nd - 4th November', {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        
        
        .releases,
        .like,
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
    // const home = document.getElementsByClassName("home");

    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);

  // const data = [
  //   {
  //     image: GDSC,
  //     series: "Technical",
  //     title: "Hack for Giet",
  //     link: "/hack",
  //     line: "By GDSC"
  //   },
  //     {
  //       image: Appdev,
  //       series: "Technical",
  //       title: "Android App development",
  //      link: '/android-dev',
  //      line: "By Department"
  //     },

  //     {
  //       image: Soccer,
  //       series: "Technical",
  //       title: "Code Soccer",
  //       link: "/soccer",
  //       line: "By DSC Club"
  //     },
  //     {
  //       image: Blind,
  //       series: "Technical",
  //       title: "Blind Coding",
  //      link: "/blind",
  //      line: "By DSC Club"
  //     },
  //     {
  //       image: Codebug,
  //       series: "Technical",
  //       title: "Code Debugging",
  //       link: "/debug",
  //       line: "By CyberSecurity Club"
  //     },
  //     {
  //       image: Default,
  //       series: "Technical",
  //       title: "Web Puzzle",
  //       link: "/webp",
  //       line: "By Web Eye"
  //     },
  //     {
  //       image: Designing,
  //       series: "Technical",
  //       title: "Poster Making",
  //      link: "/poster",
  //      line: "By Department"
  //     },
  //     {
  //       image: Default,
  //       series: "Technical",
  //       title: "Robotics EVENT",
  //       link: "/robot",
  //       line: "By SARS Club"
  //     },
  //     {
  //       image: Default,
  //       series: "Technical",
  //       title: "Workshop",
  //       link: "/workshop",
  //       line: "By Department"
  //     },
  //     {
  //       image: Default,
  //       series: "Technical",
  //       title: "Guest talks",
  //      link: "/guest",
  //      line: "By Department"
  //     },
  //     {
  //       image: Default,
  //       series: "Technical",
  //       title: "Innovative Idea Poster Presentation",
  //       link: "/inn-poster",
  //       line: "By Department"
  //     },
  //     {
  //       image: Quiz,
  //       series: "Technical",
  //       title: "Quiz",
  //       link: "/quiz",
  //       line: "By Department"
  //     },

  //   ];

  const data4 = [
    {
      image: Valo,
      series: "Non-Tech",
      title: "Gaming",
      link: "/gaming",
      line: "By Department",
    },
    {
      image: Default,
      series: "Non-Tech",
      title: "Group Discussion",
      link: "/gd",
      line: "By Dept.",
    },
    {
      image: Craft,
      series: "Non-Tech",
      title: "Craft Making Workshop",
      link: "/craft",
      line: "By Department",
    },
    {
      image: Thunt,
      series: "Non-Tech",
      title: "Treasure Hunt",
      link: "/thunt",
      line: "By Department",
    },
    {
      image: Rangoli,
      series: "Non-Tech",
      title: "Rangoli",
      link: "/rangoli",
      line: "By Dept.",
    },
    {
      image: Default,
      series: "Non-Tech",
      title: "Musical Chair",
      link: "/musical",
      line: "By Department",
    },
    {
      image: Default,
      series: "Non-Technical",
      title: "Eureka",
      link: "/eureka",
      line: "By PDCS CLUB",
    },
    {
      image: Default,
      series: "Non-Technical",
      title: "G.K Quiz",
      link: "/gk",
      line: "By Organising Team",
    },
    {
      image: Default,
      series: "Non-Tech",
      title: "CSE-GOT Tallent",
      link: "/got",
      line: "By Department",
    },
    {
      image: Painting,
      series: "Non-Technical",
      title: "On the spot painting",
      link: "/spot",
      line: "By Department",
    },
    {
      image: Default,
      series: "Non-Technical",
      title: "CARTOONING",
      link: "/cartoon",
      line: "By Dept.",
    },
  ];

  const data8 = [
    {
      image: Singing,
      series: "Cultural",
      title: "Song",
      link: "/songs",
      line: "By Department",
    },
    {
      image: Dance,
      series: "Cultural",
      title: "Dance",
      link: "/dance",
      line: "By Department",
    },
    {
      image: Fashion,
      series: "Cultural",
      title: "Fashion Show",
      link: "/fashion",
      line: "By Department",
    },
    {
      image: Mimicry,
      series: "Cultural",
      title: "Mono Acting/Mimicry",
      link: "/mimicry",
      line: "By Department",
    },
    {
      image: Drama,
      series: "Cultural",
      title: "Drama",
      link: "/drama",
      line: "By Dept.",
    },
    {
      image: Default,
      series: "Cultural",
      title: "t-shirts",
      link: "/tshirt",
      line: "By Department",
    },
    {
      image: Stall,
      series: "Cultural",
      title: "Food stall",
      link: "/stall",
      line: "By Department",
    },
  ];

  const [events, setEvents] = useState([]);
  const sendRequest = async () => {
    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/show-events`, {
        token,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    // console.log(data.message)
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setEvents(data.eventsData));
    console.log(events);
  }, []);
  // console.log(events);
  return (
    <>
      <div data-theme={theme} className="app-container">
      <ToastContainer
                  position="top-right"
                  autoClose={10000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
        <ScrollToTop />
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <br />
        <br />
        <div className="super-rare">
          {/* <div className="title-container">
            <h2
              className="title"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "rgba(255, 40, 208, 0.49)",
              }}
            >
              Events You are waiting for
            </h2>
            <p className="description" onClick={sendRequest}>
              Hurry Up and Register now.
            </p>
          </div> */}
          <div className="content">
            <h1
              className="title"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "rgba(255, 40, 208, 0.49)",
              }}
            >
              Events You are waiting for
            </h1>
            <p className="sub-title" style={{ color: "#E40078" }}>
              Get your inner Hero out
            </p>
          </div>
          <div className="cards">
            {events.map((events, index) => (
              <Card
                image={events.PosterUrl}
                series={events.CoordinatorName[0]}
                title={events.EventName}
                roll={events.RollNo[0]}
                // link={link}
                link={
                  events.EventName === "Build App"
                    ? "/android-dev"
                    : events.EventName === "Hack For GIETU"
                    ? "/hack"
                    : events.EventName === "Code Debugging. (Cyber Security)"
                    ? "/debug"
                    : events.EventName === "Food Stall"
                    ? "/stall"
                    : events.EventName === "Song"
                    ? "/songs"
                    : events.EventName === "Dance"
                    ? "/dance"
                    : events.EventName === "On the spot painting"
                    ? "/spot"
                    : events.EventName === "Drama (Based on Short story 10 mins)"
                    ? "/drama"
                    : events.EventName === "Mono Acting/Mimicry)"
                    ? "/mimicry"
                    : events.EventName === "Craft Making. (Based on all recyclable items)"
                    ? "/craft"
                    : events.EventName === "Fashion Show"
                    ? "/fashion"
                    : events.EventName === "Poster Making Competition"
                    ? "/poster"
                    : events.EventName === "Rangoli. (individual)"
                    ? "/rangoli"
                    : events.EventName === "Treasure Hunt"
                    ? "/thunt"
                    : events.EventName === "Technical Quiz"
                    ? "/quiz"
                    : events.EventName === "Gaming"
                    ? "/gaming"
                    : events.EventName === "Innovative Idea Poster Presentation"
                    ? "/inn-poster"
                    : events.EventName === "CSE-GOT Talent"
                    ? "/got"
                    : events.EventName === "Group Discussion"
                    ? "/gd"
                    : events.EventName === "Eureka"
                    ? "/eureka"
                    : events.EventName === "Web puzzle"
                    ? "/webp"
                    : events.EventName === "Blind Coding."
                    ? "/blind"
                    : events.EventName === "Code Soccer."
                    ? "/soccer"
                    : events.EventName === "Cartooning."
                    ? "/cartoon"
                    : events.EventName === "G.K Quiz."
                    ? "/gk"
                    : events.EventName === "ROBO TECH."
                    ? "/robot"
                    : events.EventName === "Graphic Designer Competition"
                    ? "/poster"
                    : events.EventName === "Musical Chair"
                    ? "/musical"
                    : events.EventName === "T-Shirt"
                    ? "/t-shirt"
                    
                    
                    : null
                }
                line={events.Number[0]}
                loading="lazy"
              />
            ))}
            {/* {console.log(events)} */}
            {/* {
          events.forEach(element => {
            <Card
            // image={element}
            // series={series}
            // title={element}
            // link={link}
            // line={line}
            // loading="lazy"
          />
          })
        } */}
          </div>

          {/* <div className="content">
            <h1
              className="title"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "rgba(255, 40, 208, 0.49)",
              }}
            >
              Non-Technical Events
            </h1>
            <p className="sub-title" style={{ color: "#E40078" }}>
              Get your inner student out
            </p>
          </div> */}
          {/* <div className="cards">
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
      </div> */}

          {/* <div className="content">
            <h1
              className="title"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "rgba(255, 40, 208, 0.49)",
              }}
            >
              Cultural Events
            </h1>
            <p className="sub-title" style={{ color: "#E40078" }}>
              Get your inner artist out
            </p>
          </div> */}
          {/* <div className="cards">
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
      </div> */}
        </div>
        <br />
        <br />
        <Signup />
        <Footer />
      </div>
    </>
  );
}

export default Events;
