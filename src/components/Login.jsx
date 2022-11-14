/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link, useNavigate } from "react-router-dom";
import * as Components from "./components";
import "../sass/index.scss";
import { useCookies } from "react-cookie";
import React, { useState } from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function Login() {
  let navigate = useNavigate();
  const [signIn, toggle] = React.useState(true);
  const [otp, setOtp] = useState(true);
  const [sotp, setsOtp] = useState(true);
  // const [signup,setsignup]=useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["Email", "token"]);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    sname: "",
    semail: "",
    sroll: "",
    spass: "",
    otp: "",
    snum: "",
    syear: "",
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

    const res = await axios
      .post("https://csefest.d3m0n1k.engineer/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => {
        if (err.response.status === 400) {
          setsOtp(!sotp);
          sendotp();
          toast.warn("🚫 Account inactive Register again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        if (err.response.status === 401) {
          toast.warn("🚫 Wrong Cerdentials", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        if (err.response.status === 500) {
          toast.warn("🚫 Server error", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        if (err.response.status === 404) {
          toast.warn("🚫 Account not found!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    if (res) {
      const data = await res.data;
      // console.log(data);
      if (res.status === 200) {
        toast.success("🦄Logged in succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setCookie("Email", inputs.email, { path: "/" });
        setCookie("user", res.data.token, { path: "/" });
        setCookie("status", res.status, { path: "/" });

        navigate("/", { replace: true });

        window.location.reload();
      }

      localStorage.setItem("user", res.data);

      return data;
    }
  };

  const handle = () => {
    setCookie("Email", inputs.email, { path: "/" });
  };

  const sendRequestotp = async () => {
    // e.preventDefault();

    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/sendotp`, {
        email: inputs.semail,
      })
      .catch((err) => {
        if(err.response.status === 400){
        toast.warn("🚫 Could not send!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      });
    if (res.status === 200) {
      toast.success("🦄OTP sent successfully!", {
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
    }
    if (res.status === 400) {
      toast.warn("🚫User has not registered!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const data = await res.data;

    // setOtp(!otp);
    return data;
  };

  const sendotp = async () => {
    // e.preventDefault();

    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/sendotp`, {
        email: inputs.email,
      })
      .catch((err) => {
        if(err.response.status === 400){
        toast.warn("🚫 Could not send!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      });
    if (res.status === 200) {
      toast.success("🦄OTP sent successfully!", {
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
    }
    if (res.status === 400) {
      toast.warn("🚫User has not registered!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const data = await res.data;

    // setOtp(!otp);
    return data;
  };

  const sendRequestregister = async (e) => {
    e.preventDefault();

    if (inputs.semail.includes("@giet.edu").toString() === "true") {
      if (inputs.spass.length >= 8) {
        if (inputs.snum.length === 10) {
      
        const res = await axios
          .post(`https://csefest.d3m0n1k.engineer/register`, {
            name: inputs.sname,
            email: inputs.semail,
            password: inputs.spass,
            number: inputs.snum,

            rollno: inputs.sroll,
            year: inputs.syear,
          })
          .catch((err) => {
            if (err.response.status === 400) {
              toast.warn("🚫Credentials Already exists!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          });

        if (res.status === 200) {
          toast.success("🦄Registered successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }

        const data = await res.data;

        setOtp(!otp);
        sendRequestotp();
        return data;
      }
      else{
        toast.warn("🚫Invalid number!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      } else {
        toast.warn("🚫 Minimum 8 characters required", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.warn("🚫 Not a GIET mail id!", {
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

  const sendverify = async (e) => {
    e.preventDefault();

    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/verifyotp`, {
        email: inputs.email,
        otp: parseInt(inputs.otp),
      })
      .catch((err) => {
        console.log(err);
        toast.warn("🚫 Wrong OTP!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (res.status === 401) {
          toast.warn("🚫Invalid OTP.!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        if (res.status === 200) {
          toast.warn("🚫Invalid OTP.!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });

    const data = await res.data;

    if (res.status === 200) {
      toast.success("🦄Your Account is active now.!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login", { replace: true });

        window.location.reload();
      
    }
    toggle(true)
    return data;
  };

  const sendRequestverify = async (e) => {
    e.preventDefault();

    const res = await axios
      .post(`https://csefest.d3m0n1k.engineer/verifyotp`, {
        email: inputs.semail,
        otp: parseInt(inputs.otp),
      })
      .catch((err) => {
        console.log(err);
        if(err.response.status === 500){
        toast.warn("🚫 some issue occured!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });}
        if (err.response.status === 401) {
          toast.warn("🚫Invalid OTP.!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });

    const data = await res.data;

    if (res.status === 200) {
      setOtp(!otp);
      toast.success("🦄Your Account is active now.!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    toggle(true)
    return data;
  };

  return (
    <>
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
              <Components.Form>
                {/* <Components.Title>Create Account</Components.Title> */}
                {otp && (
                  <Components.Input
                    type="text"
                    placeholder="Name"
                    name="sname"
                    onChange={handleChange}
                    value={inputs.sname}
                  />
                )}
                {otp && (
                  <Components.Input
                    type="email"
                    placeholder="Email"
                    name="semail"
                    onChange={handleChange}
                    value={inputs.semail}
                  />
                )}
                {otp && (
                  <Components.Input
                    type="password"
                    placeholder="Password"
                    name="spass"
                    onChange={handleChange}
                    value={inputs.spass}
                  />
                )}
                {otp && (
                  <Components.Input
                    type="text"
                    placeholder="Mob no"
                    name="snum"
                    onChange={handleChange}
                    value={inputs.snum}
                  />
                )}
                {otp && (
                  <Components.Input
                    type="text"
                    placeholder="Roll no"
                    name="sroll"
                    onChange={handleChange}
                    value={inputs.sroll}
                  />
                )}
                {otp && (
                  <Components.Select
                    type="text"
                    placeholder="Year"
                    name="syear"
                    onChange={handleChange}
                    value={inputs.syear}
                  >
                    <Components.Option value="" onChange={handleChange}>
                      Select Year
                    </Components.Option>
                    <Components.Option value="1st" onChange={handleChange}>
                      1st
                    </Components.Option>
                    <Components.Option value="2nd" onChange={handleChange}>
                      2nd
                    </Components.Option>
                    <Components.Option value="3rd" onChange={handleChange}>
                      3rd
                    </Components.Option>
                    <Components.Option value="4th" onChange={handleChange}>
                      4th
                    </Components.Option>
                  </Components.Select>
                )}

                {otp && (
                  <Components.Button name="otp" onClick={sendRequestregister}>
                    Request otp
                  </Components.Button>
                )}
                {!otp && (
                  <Components.Input
                    type="email"
                    placeholder="Email"
                    name="semail"
                    onChange={handleChange}
                    value={inputs.semail}
                    disabled
                  />
                )}
                {!otp && (
                  <Components.Input
                    type="password"
                    placeholder="otp"
                    name="otp"
                    onChange={handleChange}
                    value={inputs.otp}
                  />
                )}
                {!otp && (
                  <Components.Button name="verify" onClick={sendRequestverify}>
                    <Link style={{ textDecoration: "none", color: "white" }}>
                      verify
                    </Link>
                  </Components.Button>
                )}

                {/* {signup && <Components.Button name="submit" type="submit">Sign Up</Components.Button> } */}
              </Components.Form>
            </Components.SignUpContainer>
            <Components.SignInContainer signingIn={signIn}>
              <Components.Form onSubmit={sendRequestlogin}>
                <Components.Title
                  style={{
                    backgroundImage:
                      "linear-gradient(95deg, #059DFF, #6549D5 , #E33FA1, #FB5343)",
                    WebkitBackgroundClip: "text",
                    MozBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Sign in
                </Components.Title>
                <Components.Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={inputs.email}
                />
                <Components.Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                />
                <Components.Anchor>
                  <Link to="/reset" style={{ textDecoration: "none" }}>
                    Forgot your password?
                  </Link>
                </Components.Anchor>
                {otp && (
                  <Components.Button
                    name="submit"
                    type="submit"
                    onClick={handle}
                  >
                    Sign In
                  </Components.Button>
                )}
                {!sotp && (
                  <Components.Input
                    type="email"
                    placeholder="Email"
                    name="semail"
                    onChange={handleChange}
                    value={inputs.email}
                    disabled
                  />
                )}
                {!sotp && (
                  <Components.Input
                    type="password"
                    placeholder="otp"
                    name="otp"
                    onChange={handleChange}
                    value={inputs.otp}
                  />
                )}
                {!sotp && (
                  <Components.Button name="verify" onClick={sendverify}>
                    <Link style={{ textDecoration: "none", color: "white" }}>
                      verify
                    </Link>
                  </Components.Button>
                )}
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
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Components.GhostButton>Home</Components.GhostButton>
                  </Link>
                </Components.LeftOverlayPanel>
                <Components.RightOverlayPanel signingIn={signIn}>
                  <img src={eth2} alt="eth2" loading="lazy" />
                  <Components.Title>Hello GIETian!!</Components.Title>
                  <Components.Paragraph>
                    Start Enjoying the Fest!!
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                    Sign Up
                  </Components.GhostButton>
                  <br />
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Components.GhostButton>Home</Components.GhostButton>
                  </Link>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
            <div className="ellipse-container">
              <div className="ellipse pink"></div>
              <div className="ellipse orange"></div>
            </div>
          </div>
          {cookies.status ? (
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
          ) : null}
        </Components.Container>
      </Components.Main>
    </>
  );
}

export default Login;
