import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import scrollreveal from "scrollreveal";
import { useCookies } from "react-cookie";
import ScrollToTop from "./ScrollToTop";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/poster.png";
import release2 from "../assets/fest-1.png";
import Card from "./Card";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import Image from "./assets/contact1.png";
import "./contacts.css";
import * as Components from "./components";

function Andev() {
  const [cookies] = useCookies();
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
        .home,
        .free,
        .clients,
        .super-rare,
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
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <div className="releases">
        <div className="release orange">
          <div className="content">
            <h2 className="title">Technical events and Workshops</h2>
            <p className="description">
              We have released four limited edition events early which can be
              viewed
              <a href="#"> here</a>
            </p>

            <p className="description">Get ready for amazing events</p>
            <a href="#" className="link">
              Check them out <BsArrowRight />
            </a>
          </div>
          <div className="image">
            <img src={release1} alt="release" />
            <div className="ellipse pink"></div>
          </div>
        </div>
      </div>
      <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" loading="lazy" />
          </div>
          <h2 className="title">An Organization like no other</h2>
          <p className="description">
            Don't miss out on the release of our new event. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new event. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new Event.
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" loading="lazy"/>
          </div>
          <h2 className="title">An Event like no other</h2>
          <p className="description">
            Don't miss out on the release of our new Fest. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new Event. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new Event.
          </p>
        </div>
      </div>
    </div>
    <Components.Main>
   <section className="contact" id="contact">
  
  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={Image} alt="" />
      </div>
      <form id="contact-form">
        <div className="form-group">
          <div className="field">
            <input type="text" name="name" placeholder="Name" required=""  />
            <i className="fas fa-user" />
          </div>
          <div className="field">
            <input type="text" name="email" placeholder="Email" required="" />
            <i className="fas fa-envelope" />
          </div>
          <div className="field">
            <input type="text" name="Roll" placeholder="Roll no." required="" />
            <i className="fas fa-profile" />
          </div>
          <div className="field">
            <input type="text" name="Teamname" placeholder="Team name." required="" />
            <i className="fas fa-profile" />
          </div>
          <div className="field">
            <input type="text" name="phone" placeholder="Phone" />
            <i className="fas fa-phone-alt" />
          </div>
          <div className="field">
            <input type="text" name="type" placeholder="type" />
            <i className="fas fa-phone-alt" />
          </div>
          
        </div>
        <div className="button-area">
          <button type="submit">
            Submit <i className="fa fa-paper-plane" />
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
</Components.Main>
    </div>
  );
}

export default Andev;
