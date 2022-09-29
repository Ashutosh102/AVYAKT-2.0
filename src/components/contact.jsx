/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from "./assets/contact1.png";
import "./contacts.css";

import "../sass/index.scss";
const contact = () => {
  
  return (
    // <Components.Main>
    <section className="contact" id="contact">
  
  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={Image} alt="" />
      </div>
      <form id="contact-form">
        <div className="form-group">
          <div className="field">
            <input type="text" name="name" placeholder="Name" required="" />
            <i className="fas fa-user" />
          </div>
          <div className="field">
            <input type="text" name="email" placeholder="Email" required="" />
            <i className="fas fa-envelope" />
          </div>
          <div className="field">
            <input type="text" name="phone" placeholder="Phone" />
            <i className="fas fa-phone-alt" />
          </div>
          <div className="message">
            <textarea
              placeholder="Message"
              name="message"
              required=""
              defaultValue={""}
            />
            <i className="fas fa-comment-dots" />
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


  )
}

export default contact;