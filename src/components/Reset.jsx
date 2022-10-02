/* eslint-disable no-unused-vars */
import { Link, useNavigate} from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import { useCookies } from 'react-cookie';
import React, { useState } from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import axios from "axios";

function Reset() {
  let navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
    const [otp,setOtp]=useState(true);
    // const [signup,setsignup]=useState(false);
    const [cookies, setCookie] = useCookies();
    const [inputs, setInputs] = useState({
      
      email: "",
      password: "",
      sname:"",
      semail:"",
      sroll:"",
      spass:"",
      otp:"",
      snum:"",
      syear:""
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
      const res = await axios.post('https://backend-fest.onrender.com/login', {
        email: inputs.email,
        password:inputs.password
        }).catch((err) => {console.log(err)
          alert("Wrong credentials")});
  
      const data = await res.data;
      // console.log(data);
      if (res.status === 200) {
        navigate('/');
      }
      alert("id verified")
      localStorage.setItem('user', res.data)
      console.log(res.data)
      return data;
    };

    const handle = () => {
      setCookie('Email', inputs.semail, { path: '/' });
      setCookie('Password',inputs.spass, { path: '/' });
   };
    
    const sendRequestotp = async (e) => {
      // e.preventDefault();
      console.log(inputs.email);
      const res = await axios
        .post(`https://backend-fest.onrender.com/sendotp`, {
          email:inputs.semail,
           })
        .catch((err) => console.log(err));
  
      const data = await res.data;
      console.log(data);
      setOtp(!otp);
      return data;
    };
    
    
    
    const sendRequestverify = async (e) => {
      e.preventDefault();
      console.log(inputs.otp);

      const res = await axios
        .post(`https://backend-fest.onrender.com/verifyotp`, {
          email:inputs.semail,
          otp:parseInt(inputs.otp)

        })
        .catch((err) => {console.log(err)
        alert("Wrong OTP")
      });
  
      const data = await res.data;
      console.log(data);
      alert("otp verified")
      sendRequestReset();
      return data;
      
      
    };
  const sendRequestReset = async (e) => {
    e.preventDefault();
    console.log(inputs);
    setOtp(!otp);
    const res = await axios
      .post(`https://backend-fest.onrender.com/reset-password`, {
        
        email: inputs.semail,
        otp: inputs.otp,
        password: inputs.spass,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    alert("Password Reset Successfully");
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
                  type="submit" onClick={handle}>Sign In</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
      <Components.Form onSubmit={sendRequestReset}>
          <Components.Title>Submit New password</Components.Title>
       
          {otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={cookies.Email} disabled/> }
          {otp && <Components.Button name="otp" onClick={sendRequestReset}>Send otp</Components.Button> }
          {!otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail} disabled/> }
          { !otp &&  <Components.Input type="otp" placeholder="otp" name="otp" onChange={handleChange} value={inputs.otp}/> }
        {!otp &&  <Components.Input type="password" placeholder="New Password" name="spass" onChange={handleChange} value={inputs.spass}/> }
        {!otp  && <Components.Button name="submit"
                  type="submit">verify</Components.Button> }
  
        {/* {!!otp &&  <Components.Input type="password" placeholder="New Password" name="spass" onChange={handleChange} value={inputs.spass} disabled/> }
        {!!otp && <Components.Button name="submit" type="submit" onClick={() => toggle(false)}>Submit</Components.Button> } */}
       
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