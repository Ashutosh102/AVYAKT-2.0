/* eslint-disable no-unused-vars */
import { Link, useNavigate} from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import { useCookies } from 'react-cookie'
import React, { useState } from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Reset() {
  let navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
    const [otp,setOtp]=useState(true);
    // const [signup,setsignup]=useState(false);
    const [cookies, setCookie] = useCookies(['Email', 'token']);
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
      
      const res = await axios.post('https://csefest.d3m0n1k.engineer/login', {
        email: inputs.email,
        password:inputs.password
        }).catch((err) => {console.log(err)
          toast.warn('🚫 Wrong Credentials!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });});
  
      const data = await res.data;
      // console.log(data);
      if (res.status === 200) {
        toast.success('🦄Logged in succesfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        setCookie('Email', inputs.email, { path: '/' });
        setCookie('user', res.data.token, { path: '/' });
        navigate('/',  { replace: true });
        
        window.location.reload();
      }
      
      localStorage.setItem('user', res.data)
      
      return data;
    };

    
    
    const sendRequestotp = async (e) => {
      e.preventDefault();
      // console.log(inputs.email);
      const res = await axios
        .post(`https://csefest.d3m0n1k.engineer/sendotp`, {
          email:inputs.semail,
           })
        .catch((err) => {console.log(err)
          toast.warn('🚫 Can not send OTP!', {
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
        toast.success('🦄OTP sent succesfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          toast.success("🦄If not in inbox, check SPAM📩!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      setOtp(!otp);
      return data;
    };
  }
    const sendRequestregister = async (e) => {
      e.preventDefault();
      

      const res = await axios
        .post(`https://csefest.d3m0n1k.engineer/register`, {
            name:inputs.sname,
            email:inputs.semail,
            password:inputs.spass,
            number:inputs.snum,
            
            rollno:inputs.sroll,
            year:inputs.syear
        })
        .catch((err) => console.log(err));
        
      const data = await res.data;
      
      setOtp(!otp);
      sendRequestotp();
      return data;
    };
    
    
    const sendRequestverify = async (e) => {
      e.preventDefault();
      console.log(inputs.otp);

      const res = await axios
        .post(`https://csefest.d3m0n1k.engineer/verifyotp`, {
          email:inputs.semail,
          otp:parseInt(inputs.otp)

        })
        .catch((err) => {console.log(err)
        alert("Wrong OTP")
      });
  
      const data = await res.data;
      
      alert("otp verified")
      sendRequestReset();
      return data;
      
      
    };
  const sendRequestReset = async (e) => {
    e.preventDefault();
   
    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/reset-password`, {
        
        email: inputs.semail,
        otp: parseInt(inputs.otp),
        newpassword: inputs.spass,
      })
      .catch((err) => {console.log(err)
        toast.warn('🦄 Wrong credentials hero!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });});

    const data = await res.data;
    
    toast.success('🦄 Password reset successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      toggle(false);
    return data;
  };
  
  return (
    <Components.Main>
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
          <Components.Title>Reset Password</Components.Title>
       
          {otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={cookies.Email}/> }
          {otp && <Components.Button name="otp" onClick={sendRequestotp}>Send otp</Components.Button> }
          {!otp &&   <Components.Input type="email" placeholder="Email" name="semail" onChange={handleChange} value={inputs.semail} disabled/> }
          { !otp &&  <Components.Input type="number" placeholder="otp" name="otp" onChange={handleChange} value={inputs.otp}/> }
        {!otp &&  <Components.Input type="password" placeholder="New Password" name="spass" onChange={handleChange} value={inputs.spass}/> }
        {!otp  && <Components.Button name="verify" onClick={sendRequestReset} >Reset</Components.Button> }
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