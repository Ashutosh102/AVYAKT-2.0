/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "./assets/contact1.png";
import "./contacts.css";
import * as Components from "./components";
import axios from "axios";
import "../sass/index.scss";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message:"",
    subject:""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputs)
  };
  const sendRequest = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const res = await axios
      .post(`https://backend-fest.onrender.com/contact`, {
        name:inputs.name,
      email:inputs.email, 
     message:inputs.message, 
    subject:inputs.subject, 
    number:inputs.phone
      })
      .catch((err) => {console.log(err)
        alert("Form not submitted");});

    const data = await res.data;
    alert("Form Submitted Successfully");
    console.log(data);
    return data;
  };
  return (
    <Components.Main>
   <section className="contact" id="contact">
  
  <div className="container">
    <div className="content">
      <div className="image-box">
        <img draggable="false" src={Image} alt="" />
      </div>
      <form id="contact-form" onSubmit={sendRequest}>
        <div className="form-group">
          <div className="field">
            <input type="text" name="name" placeholder="Name" required="" onChange={handleChange} value={inputs.name} />
            <i className="fas fa-user" />
          </div>
          <div className="field">
            <input type="text" name="email" placeholder="Email" required="" onChange={handleChange} value={inputs.email}/>
            <i className="fas fa-envelope" />
          </div>
          <div className="field">
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={inputs.phone}/>
            <i className="fas fa-phone-alt" />
          </div>
          <div className="field">
            <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={inputs.subject}/>
            <i className="fas fa-phone-alt" />
          </div>
          <div className="message">
            <textarea
              placeholder="Message"
              name="message"
              required=""
              onChange={handleChange} value={inputs.message}
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
</Components.Main>

  )
}

export default Contact;