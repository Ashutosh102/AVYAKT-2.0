/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
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
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Fashion() {
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

  const [inputs, setInputs] = useState({
      
    name: "",
    email: "",
    Roll:"",
    Teamname:"",
    phone:"",
    type:"SOLO",
    arr:{
      names: [],
      emails: [],
      Rolls: [],
      phones: [],
  
    }
     
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputs)
  };

  const sendRequestandsubmit = async (e) => {
    e.preventDefault();
    if (inputs.email.includes("@giet.edu").toString() === "true") {
      if(inputs.phone.length===10){
    inputs.arr.names.push(inputs.name)
    inputs.arr.emails.push(inputs.email)
    inputs.arr.Rolls.push(inputs.Roll)
    inputs.arr.phones.push(inputs.phone)

    // console.log(inputs);
    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/fashion-show`, {
        token,
        name: inputs.arr.names,
        email:inputs.arr.emails, 
        rollno:inputs.arr.Rolls,
      // //  teamName:"soloo", 
      eventName:"Fashion Show",
      phone:inputs.arr.phones, 
      type:inputs.type

     
    })
    .catch((err) => {console.log(err)
      toast.warn('???? Wrong Credentials!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
        });

  const data = await res.data;
  
  if (res.status === 200) {
    toast.success('????Submitted Succesfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setInputs({
      name: "",
      email: "",
      Roll:"",
      Teamname:"",
      phone:"",
      type:"SOLO",
      arr:{
        names: [],
        emails: [],
        Rolls: [],
        phones: [],
    
      }
    })
  }
  // setOtp(!otp);
  return data;
    }
    else{
      toast.warn('???? Wrong Phone Number!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  else{
    toast.warn('???? Enter GIET official email!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  
};
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <div className="releases">
        <div className="release orange">
          <div className="content">
            <h2 className="title">Cultural events</h2>
            <p className="description">
              We have released limited edition events early which can be
              registered
              
            </p>

            <p className="description">Get ready for the amazing event</p>
            <a href="#" className="link">
              Register now!!! <BsArrowRight />
            </a>
          </div>
          <div className="image">
            <img src={release1} alt="release" />
            <div className="ellipse pink"></div>
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
      <form id="contact-form" onSubmit={sendRequestandsubmit}>
        <div className="form-group">
          
    
          <div className="field">
            <input type="text" name="name" placeholder="Name" required=""  onChange={handleChange} value={inputs.name} />
            <i className="fas fa-user" />
          </div>
          <div className="field">
            <input type="text" name="email" placeholder="Email" required=""  onChange={handleChange} value={inputs.email}/>
            <i className="fas fa-envelope" />
          </div>
          <div className="field">
            <input type="text" name="Roll" placeholder="Roll no." required=""  onChange={handleChange} value={inputs.Roll}/>
            <i className="fas fa-profile" />
          </div>
          <div className="field">
            <input type="text" name="phone" placeholder="Phone"  onChange={handleChange} value={inputs.phone}/>
            <i className="fas fa-phone-alt" />
          </div>
          
        </div>
        <div className="button-area">
          <button type="submit">
            Submit <i className="fa fa-paper-plane" />
          </button>
        </div>
      </form>
      <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
    </div>
  </div>
</section>
</Components.Main>
<br/>
<br/>
<br/>
<div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" loading="lazy" />
          </div>
          <h2 className="title">An Organization like no other</h2>
          <p className="description">
            Don't miss out on the release of our new event. Sign up to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new event. Sign in to
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
            Don't miss out on the release of our new Fest. Sign up  to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new Event. Sign up to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new Event.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Fashion