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
function Gaming() {
  
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
    category:"PUBG",
    Teamname: "",
    phone: "",
    type: "SOLO",
    members:12,
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
    console.log(inputs.arr);
    // console.log(counter)
    if(inputs.type==="GROUP"){
    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/gaming`, {
       
        token,
        name:inputs.arr.names,
         rollno:inputs.arr.Rolls,
          teamName:inputs.Teamname, 
          eventName:"Gaming",
          email:inputs.arr.emails, 
          phone:inputs.arr.phones, 
          type:inputs.type,
          category:inputs.category


      })
      .catch((err) => {
        console.log(err);
        toast.warn('🚫 Wrong team name or details', {
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
      toast.success('🦄Submitted Succesfully! deposit the money as soon as possible as per the deatails below.', {
        position: "top-right",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });

      toast.success('Venue:- CSE GROUND FLOOR( SOLO:- 20/-  / GROUP- 100/-)', {
        position: "top-right",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    
    }
    // setOtp(!otp);
    return data;
  }
  if(inputs.type==="SOLO"){
    if (inputs.email.includes("@giet.edu").toString() === "true") {
      if(inputs.phone.length===10){
    inputs.arr.names.push(inputs.name)
    inputs.arr.emails.push(inputs.email)
    inputs.arr.Rolls.push(inputs.Roll)
    inputs.arr.phones.push(inputs.phone)
    
    console.log(inputs.arr)
    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/gaming`, {
       
        token,
      name:inputs.arr.names,
       rollno:inputs.arr.Rolls,
        teamName:inputs.Teamname, 
        eventName:"Gaming",
        email:inputs.arr.emails, 
        phone:inputs.arr.phones, 
        type:inputs.type,
        category:inputs.category


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
      });
      toast.success('🦄Pay as soon as possible at Venue:- CSE Ground Floor', {
        position: "top-right",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      toast.success('🦄Solo:- 20/- / Team:- 100/-', {
        position: "top-right",
        autoClose: 12000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });}
    // setOtp(!otp);
    return data;
      }
      else{
        toast.warn('🚫 Enter a Valid number!', {
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
      toast.warn('🚫 Enter a GIET email!', {
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
  };

const changenext=(e)=>{
  e.preventDefault();
  if(inputs.members>=1){
    // console.log(inputs.members)
   
      if (inputs.email.includes("@giet.edu").toString() === "true") {
        if(inputs.phone.length===10){
       
    inputs.arr.names.push(inputs.name)
    inputs.arr.emails.push(inputs.email)
    inputs.arr.Rolls.push(inputs.Roll)
    inputs.arr.phones.push(inputs.phone)
    console.log(inputs.arr)
   inputs.name=""
    inputs.email= ""
    inputs.Roll= ""
    inputs.phone= ""
    // if(inputs.members>1){
      console.log(inputs)
     
      setInputs({name:"",email:"",Roll:"",phone:"" ,members:inputs.members-1,arr:inputs.arr,category:inputs.category,Teamname:inputs.Teamname,type:inputs.type})
      console.log(inputs)
      toast.info('🦄 Succesfully registered a Player......enter a new Player', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    // }
    // --inputs.members;
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
}else{
inputs.members=1
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
            <h2 className="title">Non-Technical events</h2>
            <p className="description">
              We have released four limited edition events early which can be
              registered
              
            </p>

            <p className="description">Get ready for amazing events</p>
            <a href="#" className="link">
              Register now!! <BsArrowRight />
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
          <select
                      name="category"
                      
                      onChange={handleChange}
                      value={inputs.category}
                    >
                      <option value="PUBG" onChange={handleChange}>
                      BGMI
                      </option>
                      <option value="VALORANT" onChange={handleChange}>
                      VALORANT
                      </option>
                      <option value="COD" onChange={handleChange}>
                      Call Of Duty
                      </option>
                      <option value="FIFA" onChange={handleChange}>
                      FIFA
                      </option>
                      <option value="NFS" onChange={handleChange}>
                      NFS
                      </option>
                      <option value="MODERN_WARFARE" onChange={handleChange}>
                      MODERN WARFARE
                      </option>
                    </select>
                    </div>
                    {
                      inputs.category==="NFS" &&
                      (
                        inputs.type = "SOLO"
                      )
                    }
                    {
                      inputs.category==="FIFA" &&
                      (
                        inputs.type = "SOLO"
                      )
                    }
                    {
                      inputs.category==="PUBG" &&
                      (
                        inputs.type = "GROUP"
                      )
                    }
                     {
                      inputs.category==="VALORANT" &&
                      (
                        inputs.type = "GROUP"
                      )
                    }
                    {
                      inputs.category==="COD" &&
                      (
                        inputs.type = "GROUP"
                      )
                    }
                    {
                      inputs.category==="MODERN_WARFARE" &&
                      (
                        inputs.type = "GROUP"
                      )
                    }
                  
                  
                  
                  {inputs.type === "GROUP" && (
                    // { inputs.category==="PUBG" && (

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
                      {inputs.members===12 && (
                      <div className="field">
                        {
                      inputs.category==="PUBG" &&
                      (
                        <select
                          name="members"
                          placeholder="type"
                          onChange={handleChange}
                          value={inputs.members}
                        >
                          <option value="null" onChange={handleChange}>
                            Number of members
                          </option>
                          <option value={1} onChange={handleChange}>
                            1
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
                      )
                    }
                    {
                      inputs.category==="VALORANT" &&
                      (
                        <select
                          name="members"
                          placeholder="type"
                          onChange={handleChange}
                          value={inputs.members}
                        >
                          <option value="null" onChange={handleChange}>
                            Number of members
                          </option>
                          

                          <option value={5} onChange={handleChange}>
                            5
                          </option>
                          
                          
                        </select>
                      )
                    }
                    {
                      inputs.category==="COD" &&
                      (
                        <select
                          name="members"
                          placeholder="type"
                          onChange={handleChange}
                          value={inputs.members}
                        >
                          <option value="null" onChange={handleChange}>
                            Number of members
                          </option>
                          <option value={1} onChange={handleChange}>
                            1
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
                          <option value={5} onChange={handleChange}>
                            5
                          </option>
                          
                        </select>
                      )
                    }
                    {
                      inputs.category==="MODERN_WARFARE" &&
                      (
                        <select
                        name="members"
                        placeholder="type"
                        onChange={handleChange}
                        value={inputs.members}
                      >
                        <option value="null" onChange={handleChange}>
                          Number of members
                        </option>
                        <option value={1} onChange={handleChange}>
                          1
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
                        <option value={5} onChange={handleChange}>
                          5
                        </option>
                        
                      </select>
                      )
                    }
                        
                      </div>
                      )}
                    </>
                    
                  )}

                  {inputs.type === "SOLO" && (
                    <>
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
                </>
                  )}
                 {inputs.members!==0 && inputs.members!==12&&(
                  <>
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
                  </>
                 )}
                  {show && (inputs.members!==0  && inputs.members!==12) &&
                 <div className="button-area">
                  <button onClick={changenext}>
                    member-{(inputs.members)}<i className="fa fa-paper-plane" />
                  </button>
                </div> }
                {(!show || inputs.members===0) &&
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
      </Components.Main>
      <br/>
<br/>
<br/>
      
    </div>
  );
}
export default Gaming