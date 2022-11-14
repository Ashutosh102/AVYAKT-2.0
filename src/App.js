/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App2 from "./App2";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import { useCookies } from "react-cookie";
import { Link, useNavigate} from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";
import "./sass/index.scss";

function App() {

  const [cookies] = useCookies();
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  var fal=0
  useEffect(() => {
    if(cookies.user && fal===0)
    {
      fal=1
      // toast.success('🦄 Logged in succesfully!', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    }
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
  return (
    <>
      <div data-theme={theme} className="app-container">
        {cookies.user ? <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme}
        /> : null}
        <ScrollToTop />
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <Home />


        <Free />
        <Clients />
        <SuperRare />
        
        <Release />
        <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Download the official APP</p>
          <h1 className="title" style={{
    backgroundImage:
      "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }}>Official AVYAKT APP</h1>
          <p className="description">
            The Event of Techies. Download below to
            recieve updates
          </p>
          <button><a href="https://play.google.com/store/apps/details?id=com.gietu2.avyakt2o" style={{textDecoration:"none", color: "orange"}}><FaGooglePlay/> Google Playstore</a></button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src="https://i.imgur.com/yfPhA1w.png" alt="home image" loading="lazy"/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
        <Like />
        {/* <App2 /> */}
        <Signup />
        <Footer />

        {/* <Routes>
         
         <Route path="/about" element={<><About /></>} />
       </Routes> */}

      </div>
    </>
  );
}

export default App;
