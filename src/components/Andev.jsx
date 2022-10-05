/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCookies, removeCookie } from "react-cookie";
import scrollreveal from "scrollreveal";
// import { useCookies } from "react-cookie";
import ScrollToTop from "./ScrollToTop";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/poster.png";
import release2 from "../assets/fest-1.png";
import Card from "./Card";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";
import Image from "./assets/contact1.png";
import "./contacts.css";
import * as Components from "./components";
import axios from "axios";
function Andev() {
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
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
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
    const res = await axios
      .post(`https://backend-fest.onrender.com/android-app-development`, {
        token,
        name: inputs.name,
        email: inputs.email,
        rollno: inputs.Roll,
        // //  teamName:"soloo",
        phone: inputs.phone,
        type: inputs.type,
      })
      .catch((err) => {
        console.log(err);
      });

    const data = await res.data;
    console.log(data);
    // setOtp(!otp);
    return data;
  };

  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <div className="releases">
        <div className="release orange">
          <div className="content">
            <h2 className="title">Technical events and Workshops</h2>
            <p className="description">
              We have released four limited edition events early which can be
              viewed
              <a href="#"> here</a>
            </p>

            <p className="description">Get ready for amazing events</p>
            <a href="#" className="link">
              Check them out <BsArrowRight />
            </a>
          </div>
          <div className="image">
            <img src={release1} alt="release" />
            <div className="ellipse pink"></div>
          </div>
        </div>
      </div>
      <div className="like">
        <div className="container">
          <div className="content">
            <div className="image">
              <img src={eth1} alt="eth1" loading="lazy" />
            </div>
            <h2 className="title">An Organization like no other</h2>
            <p className="description">
              Don't miss out on the release of our new event. Sign up below to
              recieve updates when we go live on 11/22.
            </p>
            <p className="description">
              Don't miss out on the release of our new event. Sign up below to
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
                    {/* <input type="text" name="type" placeholder="type"  onChange={handleChange} value={inputs.type}/> */}

                    <select
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
                          value={inputs.value}
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
                      {(function (rows, i, len) {
                        while (++i <= len) {
                          rows.push(
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
                          );
                        }
                        return rows;
                      })([], 1, inputs.members)}
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
                </div>
                <div className="button-area">
                  <button type="submit">
                    Submit <i className="fa fa-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Components.Main>
    </div>
  );
}

export default Andev;