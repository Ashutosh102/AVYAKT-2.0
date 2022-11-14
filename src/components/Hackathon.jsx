/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import signup from "../assets/unstop.png";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from "react-cookie";
import scrollreveal from "scrollreveal";
// import { useCookies } from "react-cookie";
import ScrollToTop from "./ScrollToTop";
import hacker from "../assets/hackitup.jpg"
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/gdsc.jpg";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import Image from "./assets/contact1.png";
import "./contacts.css";
import * as Components from "./components";
import axios from "axios";
function Hackathon() {
  
  const [cookies] = useCookies();
  const [theme, setTheme] = useState("dark");
  const [show, setshow] = useState(1);


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
    Roll: "",
    Teamname: "",
    phone: "",
    type: "SOLO",
    members:0,
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
    // console.log(inputs);
    // console.log(counter)
    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/hack-for-giet`, {
       
        token,
        name:inputs.arr.names,
         rollno:inputs.arr.Rolls,
          teamName:inputs.Teamname, 
          eventName:"Hack For GIETU",
          email:inputs.arr.emails, 
          phone:inputs.arr.phones, 
          type:inputs.type


      })
      .catch((err) => {
        console.log(err);
        toast.warn('🚫 Wrong Team name or inputs!', {
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
      toast.success('🦄Submitted Succesfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });}
    // setOtp(!otp);
    return data;
  };

const changenext=(e)=>{
  e.preventDefault();
  if(--inputs.members>1){
    // console.log(inputs.members)
    toast.info('🦄 Enter data for every user after clicking next and first update roll no. to enter other data!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    inputs.arr.names.push(inputs.name)
    inputs.arr.emails.push(inputs.email)
    inputs.arr.Rolls.push(inputs.Roll)
    inputs.arr.phones.push(inputs.phone)
    inputs.name=""
    inputs.email= ""
    inputs.Roll= ""
    inputs.phone= ""
    
    // console.log(inputs.arr)
}
if(inputs.members === 0){
  setshow(0)
}
}
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <div className="free2" style={{backgroundColor:"transparent"}}>
      <div className="container">
      <img src="https://i.imgur.com/6Rp9nIA.jpg" alt="release" style={{width:"100%", height:"100%"}} />
        </div></div>
      <div className="releases2">
        <div className="release orange">
          <div className="content">
            <h2 className="title">GDSC GIETU Presents</h2>
            <h2 className="title"> "Hack For GIETU"</h2>
            <p className="description">
              Win Prize Worth Rs. 50,000/-
              
            </p>

            <p className="description">- Deadline:- 18th Oct 22, 12.00AM</p>
            <p className="description">- Team size:- 3-5</p>
            <p className="description">- Free registration</p>
            <p className="description">- Start Date/ End Date:- 12 oct - 01 Nov</p>
            <a href="https://unstop.com/p/hack-for-gietu-google-developer-student-clubs-gdsc-458043" className="link">
              Register now!! <BsArrowRight />
            </a>
            
          </div>
          <div className="image">
            <img src="https://i.imgur.com/POrHln1.jpg" alt="release" />
            <div className="ellipse pink"></div>
          </div>
        </div>
      </div>

      <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Register now</p>
          <h1 className="title" style={{
    backgroundImage:
      "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }}>The Hack for GIETU</h1>
          <p className="description">
            The GIET centric hackathon.
          </p>
          <button><a href="https://unstop.com/p/hack-for-gietu-google-developer-student-clubs-gdsc-458043" style={{textDecoration:"none", color: "orange"}}>Register Now</a></button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="img" loading="lazy"/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
      
      {/* <Components.Main>
        <section className="contact" id="contact">
          <div className="container">
            <div className="content">
              <div className="image-box">
                <img draggable="false" src={Image} alt="" />
              </div>
              <form id="contact-form" onSubmit={sendRequestandsubmit}>
                <div className="form-group">
                  <div className="field">
                    {/* <input type="text" name="type" placeholder="type"  onChange={handleChange} value={inputs.type}/> */}

                    {/* <select
                      name="type"
                      placeholder="type"
                      onChange={handleChange}
                      value={inputs.value}
                    >
                      <option value="SOLO" onChange={handleChange}>
                        SOLO
                      </option>
                      <option value="GROUP" onChange={handleChange}>
                        GROUP
                      </option>
                    </select>

                    <i className="fas fa-phone-alt" />
                  </div>
                  {inputs.type === "GROUP" && (
                    <>
                      <div className="field">
                        <input
                          type="text"
                          name="Teamname"
                          placeholder="Team name."
                          required=""
                          onChange={handleChange}
                          value={inputs.Teamname}
                        />
                        <i className="fas fa-profile" />
                      </div>
                      <div className="field">
                        <select
                          name="members"
                          placeholder="type"
                          onChange={handleChange}
                          value={inputs.members}
                        >
                          <option value="null" onChange={handleChange}>
                            Number of members
                          </option>
                          <option value={2} onChange={handleChange}>
                            2
                          </option>
                          <option value={3} onChange={handleChange}>
                            3
                          </option>
                          <option value={4} onChange={handleChange}>
                            4
                          </option>
                          
                        </select>
                      </div>
                     
                    </>
                    
                  )}
                 
                  <div className="field">
                    <input
                      type="text"
                      name="Roll"
                      placeholder="Roll no."
                      required=""
                      onChange={handleChange}
                      value={inputs.Roll}
                      
                    />
                    <i className="fas fa-profile" />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required=""
                      onChange={handleChange}
                      value={inputs.name}
                    />
                    <i className="fas fa-user" />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      required=""
                      onChange={handleChange}
                      value={inputs.email}
                    />
                    <i className="fas fa-envelope" />
                  </div>

                  <div className="field">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      onChange={handleChange}
                      value={inputs.phone}
                    />
                    <i className="fas fa-phone-alt" />
                  </div>
                  {show && (inputs.members ) &&
                 <div className="button-area">
                  <button onClick={changenext}>
                    next <i className="fa fa-paper-plane" />
                  </button>
                </div> }
                {(!show || !inputs.members) &&
                <div className="button-area">
                  <button type="submit">
                  submit <i className="fa fa-paper-plane" />
                  </button>
                </div> 
                  }
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
      </Components.Main> */} 
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
              Don't miss out on the release of our new event. Sign up to
              recieve updates when we go live on 11/22. Don't miss out on the
              release of our new Event.
            </p>
          </div>
          <div className="content">
            <div className="image">
              <img src={eth2} alt="eth2" loading="lazy" />
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
      <Footer/>
    </div>
  );
}

export default Hackathon