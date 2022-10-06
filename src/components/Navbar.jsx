/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/avyakt.png";
import "../sass/index.scss";
import { useCookies, removeCookie } from "react-cookie";
import { Link, useNavigate} from "react-router-dom";
import Popup from "reactjs-popup";

import { RiAccountPinCircleFill } from "react-icons/ri";
// import "rsuite/dist/rsuite.min.css";

// import {CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react';

// import { Popover, Whisper, Dropdown,
//     Button } from "rsuite/";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  let navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['Email', 'user']);
  let Email = cookies.Email;
  function handleRemoveCookie() {
    removeCookie('user');
    removeCookie('Email');
    navigate('/login');
  }
  //   const renderMenu = ({ left, top, className }, ref) => {

  //     return (
  //         <Popover ref={ref}
  //             className={className}
  //             style={{ left, top }} full>
  //             <Dropdown.Menu title="Create new file">
  //                 <Dropdown.Item eventKey={1}>
  //                     {Email}
  //                 </Dropdown.Item>
  //                 <Dropdown.Item eventKey={2}>
  //                 <Link to="/login">Log out</Link>
  //                 </Dropdown.Item>

  //             </Dropdown.Menu>
  //         </Popover>
  //     );
  // };
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");

  // return(
  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {

  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // })}
  // const auth = sendRequestlogin();
  return (
    
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo" loading="lazy" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        {cookies.Email? (<ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <Whisper placement="bottomStart" 
                    trigger="click" speaker={renderMenu}>
                    <Button appearance="primary" color="green"><RiAccountPinCircleFill/> Hello</Button></Whisper> */}
           

            {cookies.Email ? (
               <Popup
               trigger={<Link to="/">
               {" "}
               <RiAccountPinCircleFill /> Hello{" "}
             </Link>}
               modal
               nested
             >
               {(close) => (
                 <div className="modal">
                   <button className="close" onClick={close}>
                     &times;
                   </button>
                   <div className="header"> <RiAccountPinCircleFill /> {Email} </div>
                   <div className="content">
                     {" "}
                    Hello {Email} you are logged in
                     <br />
                     We are glad to have you onboard!!
                   </div>
                   <div className="actions">
                     <button className="button"> <Link
                       to="/login"
                       style={{
                         textDecoration: "none",
                         color: "white"
                       }} onClick={handleRemoveCookie}>Log out</Link></button>
                    
                     
                       
                   </div>
                 </div>
               )}
             </Popup>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>) : (<ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* <Whisper placement="bottomStart" 
                    trigger="click" speaker={renderMenu}>
                    <Button appearance="primary" color="green"><RiAccountPinCircleFill/> Hello</Button></Whisper> */}
           

            {cookies.Email ? (
               <Popup
               trigger={<Link to="/">
               {" "}
               <RiAccountPinCircleFill /> Hello{" "}
             </Link>}
               modal
               nested
             >
               {(close) => (
                 <div className="modal">
                   <button className="close" onClick={close}>
                     &times;
                   </button>
                   <div className="header"> <RiAccountPinCircleFill /> {Email} </div>
                   <div className="content">
                     {" "}
                    Hello {Email} you are logged in
                     <br />
                     We are glad to have you onboard!!
                   </div>
                   <div className="actions">
                     <button className="button"> <Link
                       style={{
                         textDecoration: "none",
                         color: "white"
                       }} onClick={handleRemoveCookie}>Log out</Link></button>
                    
                     
                       
                   </div>
                 </div>
               )}
             </Popup>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>)}
      </div>
    </nav>
  );
}
