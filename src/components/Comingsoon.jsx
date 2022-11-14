/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
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

function Comingsoon() {
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
      type: "GROUP",
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
        .post(`https://csefest.d3m0n1k.engineer/android-app-development`, {
         
          token,
          name:inputs.arr.names,
           rollno:inputs.arr.Rolls,
            teamName:inputs.Teamname, 
            eventName:"Android App Development",
            email:inputs.arr.emails, 
            phone:inputs.arr.phones, 
            type:inputs.type
  
  
        })
        .catch((err) => {
          
          toast.warn('🚫 Wrong Credentials!', {
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
    if(inputs.members>=1){
      
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
        if (inputs.email.includes("@giet.edu").toString() === "true") {
          if(inputs.phone.length===10){
            --inputs.members;
      inputs.arr.names.push(inputs.name)
      inputs.arr.emails.push(inputs.email)
      inputs.arr.Rolls.push(inputs.Roll)
      inputs.arr.phones.push(inputs.phone)
     inputs.name=""
      inputs.email= ""
      inputs.Roll= ""
      inputs.phone= ""
          }
          else{
            toast.warn('🚫 Wrong Phone Number!', {
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
          toast.warn('🚫 Enter GIET official email!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      // console.log(inputs.arr)
  }
  if(inputs.members === 0){
    toast.success('Hit Submit', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setshow(0)
  }
  }
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <div className="releases">
        <div className="release orange">
          <div className="content">
            <h2 className="title">Coming soon</h2>
            <p className="description">
              We have released four limited edition events early which can be
              registered
              
            </p>

            <p className="description">Hold back your seats tight....we are gonna come back soon !!</p>
            <a href="#" className="link">
              Registration starting soon!! <BsArrowRight />
            </a>
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
    </div>
  );
}

export default Comingsoon