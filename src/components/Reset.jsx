import { Link } from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import React, { useState } from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import axios from "axios";

function Reset() {
    const [signIn, toggle] = React.useState(true);
  const [otp,setOtp]=useState(true);
  const [signup,setsignup]=useState(false);
  const [inputs, setInputs] = useState({
    
    email: "",
    otp:"",
    password: "",
   
    
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputs)
  };
  const sendRequestReset = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const res = await axios
      .post(`/reset-password`, {
        
        email: inputs.email,
        otp: inputs.otp,
        password: inputs.password,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
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
  return (
    <Components.Main>
    <Components.Container>
    <div className="image-container">
      <Components.SignUpContainer signingIn={signIn}>
      <Components.Form onSubmit={sendRequestlogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" name="email"
            onChange={handleChange}
            value={inputs.email}/>
          <Components.Input type="password" placeholder="Password"  name="password"
            onChange={handleChange}
            value={inputs.password}/>
          
          <Components.Button name="submit"
                  type="submit" >Sign In</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
      <Components.Form onSubmit={sendRequestReset}>
          <Components.Title>Submit New password</Components.Title>
       
       {otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail}/> }
       {otp &&  <Components.Input type="otp" placeholder="otp" name="otp" onChange={handleChange} value={inputs.otp}/> }
       {otp &&  <Components.Input type="password" placeholder="New Password" name="spass" onChange={handleChange} value={inputs.spass}/> }
  
  
        {otp && <Components.Button name="submit" type="submit" onClick={() => toggle(false)}>Submit</Components.Button> }
       
        </Components.Form>
        
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
          <img src={eth1} alt="eth1" loading="lazy" />
          <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
             Please login with your info Or
            </Components.Paragraph>
            <Components.GhostButton>
             <Link to="/login" style={{textDecoration:"none", color:"white"}}>Sign Up</Link>
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
            <Components.Title>Forgot??</Components.Title>
            <Components.Paragraph>
            Enter your Otp and new password!!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign in
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

export default Reset