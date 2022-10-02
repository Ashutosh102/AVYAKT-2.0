/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link, useNavigate} from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import { useCookies } from 'react-cookie';
import React, { useState } from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


function Login() {
  let navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
    const [otp,setOtp]=useState(true);
    // const [signup,setsignup]=useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['Email', 'Password']);
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
        setCookie('Email', inputs.email, { path: '/' });
        setCookie('Password',inputs.password, { path: '/' });
        navigate('/');
      }
      alert("id verified")
      localStorage.setItem('user', res.data)
      console.log(res.data)
      return data;
    };

    const handle = () => {
      setCookie('Email', inputs.email, { path: '/' });
      setCookie('Password',inputs.password, { path: '/' });
   };
    
    const sendRequestotp = async () => {
      // e.preventDefault();
      console.log(inputs.email);
      const res = await axios
        .post(`https://backend-fest.onrender.com/sendotp`, {
          email:inputs.semail,
           })
        .catch((err) => console.log(err));
  
      const data = await res.data;
      console.log(data);
      // setOtp(!otp);
      return data;
    };
    
    const sendRequestregister = async (e) => {
      e.preventDefault();
      console.log(inputs);

      const res = await axios
        .post(`https://backend-fest.onrender.com/register`, {
            name:inputs.sname,
            email:inputs.semail,
            password:inputs.spass,
            number:inputs.snum,
            
            rollno:inputs.sroll,
            year:inputs.syear
        })
        .catch((err) => console.log(err));
        
      const data = await res.data;
      console.log(data);
      setOtp(!otp);
      sendRequestotp();
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
      return data;
      
      
    };
  
  
  return (
    <Components.Main>
    <Components.Container>
    <div className="image-container">
    <Components.SignUpContainer signingIn={signIn}>
        <Components.Form >
          {/* <Components.Title>Create Account</Components.Title> */}
       {otp &&  <Components.Input type="text" placeholder="Name" name='sname' onChange={handleChange} value={inputs.sname} /> }
       {otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail}/> }
       {otp &&  <Components.Input type="password" placeholder="Password" name="spass" onChange={handleChange} value={inputs.spass}/> }
       {otp &&  <Components.Input type="text" placeholder="Mob no" name="snum" onChange={handleChange} value={inputs.snum}/> }
       {otp &&  <Components.Input type="text" placeholder="Roll no" name="sroll" onChange={handleChange} value={inputs.sroll}/> }
       {otp &&  <Components.Input type="text" placeholder="Year" name="syear" onChange={handleChange} value={inputs.syear}/> }
  
  
        {otp && <Components.Button name="otp" onClick={sendRequestregister}>otp</Components.Button> }
        {!otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail} disabled/> }
          { !otp &&  <Components.Input type="number" placeholder="otp" name="otp" onChange={handleChange} value={inputs.otp}/> }
          {!otp  && <Components.Button name="verify" onClick={sendRequestverify}><Link to="/" style={{textDecoration:"none", color:"white"}}>verify</Link></Components.Button> }

          {/* {signup && <Components.Button name="submit" type="submit">Sign Up</Components.Button> } */}
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
            Forgot your password?</Link>
          </Components.Anchor>
          <Components.Button name="submit"
                  type="submit" onClick={handle}>Sign In</Components.Button>
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

export default Login;