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
import "./sass/index.scss";

function App() {

  const [cookies] = useCookies();
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    if(cookies.user)
    {
      toast.success('🦄 Logged in succesfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
