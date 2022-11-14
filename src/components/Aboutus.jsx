
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";
import scrollreveal from "scrollreveal";
// import { useCookies } from "react-cookie";
import ScrollToTop from "./ScrollToTop";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/poster.png";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import Image from "./assets/contact1.png";
import "./contacts.css";
import * as Components from "./components";
import axios from "axios";

function Aboutus() {
    const [cookies] = useCookies();
  const [theme, setTheme] = useState("dark");
  
  let token = cookies.user;
  // console.log(token)
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
      <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" loading="lazy" />
          </div>
          <h2 className="title">An Organization like no other</h2>
          <p className="description">
          GIET University believes that quality education should be followed by prime placements. 
          </p>
          <p className="description">
          Over the decades, the relentless effort of GIET University has ingrained a reputation for consistent quality placements. It has formed enduring & constructive partnerships with the corporate/Industries to provide foot-in- the-door opportunity to all the eligible students
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" loading="lazy"/>
          </div>
          <h2 className="title">25 Years of excellence</h2>
          <p className="description">
          GIET University, Gunupur was established by “Vidya Bharati Educational Trust,” Gunupur, Odisha, India in the year 1997. 
          </p>
          <p className="description">
          UGC approved GIET University is one of the leading universities in Odisha, located amongst the lush greenery and foothills of the Eastern Ghats of India with the scenic Bansadhara River flowing through its territory.
          </p>
        </div>
      </div>
    </div>
    <br/>
      <div className="releases">
        <div className="release orange">
          <div className="content">
            <h2 className="title">Let's enroll in events</h2>
            <p className="description">
              We have released limited edition events early which can be
              registered
              
            </p>

            <p className="description">Get ready for the amazing event</p>
            
          </div>
          <div className="image">
            <img src={release1} alt="release" />
            <div className="ellipse pink"></div>
          </div>
        </div>
      </div>
      
    
<br/>
<br/>
<br/>
<Footer/>
    </div>
  )
}

export default Aboutus