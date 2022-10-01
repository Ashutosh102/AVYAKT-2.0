/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import React, { useState } from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


function Login() {
  const [signIn, toggle] = React.useState(true);
  const [otp,setOtp]=useState(true);
  const [signup,setsignup]=useState(false);
  const [inputs, setInputs] = useState({
    
    email: "",
    password: "",
    sname:"",
    semail:"",
    sroll:"",
    spass:"",
    otp:""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputs)
  };
  const sendRequestlogin = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const res = await axios
      .post(`/login`, {
        
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };
  const sendRequestsignup = async (e) => {
    e.preventDefault();
    console.log(inputs);

    // const res = await axios
    //   .post(`/register`, {
    //     sname:inputs.sname,
    //     semail:inputs.semail,
    //     sroll:inputs.sroll,
    //     spass:inputs.spass,

    //   })
    //   .catch((err) => console.log(err));

    // const data = await res.data;
    // console.log(data);
    // return data;
  };
  const sendRequestotp = async (e) => {
    e.preventDefault();
    console.log(inputs.email);
    // const res = await axios
      // .post(`/sendotp`, {
        // semail:inputs.semail,
        //  })
      // .catch((err) => console.log(err));

    // const data = await res.data;
    // console.log(data);
    // return data;
    setOtp(!otp);
  };
  const sendRequestverify = async (e) => {
    e.preventDefault();
    console.log(inputs.otp);

    // const res = await axios
    //   .post(`/verifyotp`, {
    //     otp:inputs.otp

    //   })
    //   .catch((err) => console.log(err));

    // const data = await res.data;
    // console.log(data);
    // return data;
    setsignup(!signup);
  };
  
  
  return (
    <Components.Main>
    <Components.Container>
    <div className="image-container">
      <Components.SignUpContainer signingIn={signIn}>
      <Components.Form onSubmit={sendRequestsignup}>
          <Components.Title>Create Account</Components.Title>
       {otp &&  <Components.Input type="text" placeholder="Name" name='sname' onChange={handleChange} value={inputs.sname} /> }
       {otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail}/> }
       {otp &&  <Components.Input type="text" placeholder="Roll no" name="sroll" onChange={handleChange} value={inputs.sroll}/> }
       {otp &&  <Components.Input type="password" placeholder="Password" name="spass" onChange={handleChange} value={inputs.spass}/> }
  
  
        {otp && <Components.Button name="otp" onClick={sendRequestotp}>otp</Components.Button> }
        {!otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail} disabled/> }
          { !otp &&  <Components.Input type="text" placeholder="otp" name="otp" onChange={handleChange} value={inputs.otp}/> }
          {!otp && !signup && <Components.Button name="verify" onClick={sendRequestverify}>verify</Components.Button> }

          {signup && <Components.Button name="submit" type="submit" onClick={() => toggle(true)}>Sign Up</Components.Button> }
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={sendRequestlogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" name="email"
            onChange={handleChange}
            value={inputs.email}/>
          <Components.Input type="password" placeholder="Password"  name="password"
            onChange={handleChange}
            value={inputs.password}/>
          <Components.Anchor>
            <Link to="/reset" style={{textDecoration:"none"}}>
            Forgot your password?
            </Link>
          </Components.Anchor>
          <Components.Button name="submit"
                  type="submit" >Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
          <img src={eth1} alt="eth1" loading="lazy" />
          <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
             Please login with your info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
            <br/>
            
            <Components.GhostButton>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
              Home
            </Link>
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
          <img src={eth2} alt="eth2" loading="lazy" />
            <Components.Title>Hello GIETian!!</Components.Title>
            <Components.Paragraph>
            Start Enying the Fest!!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
            <br/>
            <Components.GhostButton>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
              Home
            </Link>
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
      <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
      </div>
    </Components.Container>
    </Components.Main>
  )
}

export default Login