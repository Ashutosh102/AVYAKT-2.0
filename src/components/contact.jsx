/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./contacts.css";
import * as Components from "./components";
import axios from "axios";
import "../sass/index.scss";
import "../sass/sections/_free.scss"

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: ""
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
      .post(`http://3.111.252.41:5000/contact`, {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
        subject: inputs.subject,
        number: inputs.phone
      })
      .catch((err) => {
        console.log(err)
        alert("Form not submitted");
      });

    const data = await res.data;
    alert("Form Submitted Successfully");
    console.log(data);
    return data;
  };
  return (<>
    
    <Components.Main>
      <section className="contact" id="contact">

        <div className="container">

          <div className="content">

            <form id="contact-form" onSubmit={sendRequest}>
              <div className="form-group">
              <center><h1 className="title" style={{
    backgroundImage:
      "linear-gradient(95deg, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }}>Contact Us.</h1></center>
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required="" onChange={handleChange} value={inputs.name} />
                  <i className="fas fa-user" />
                </div>
                <div className="field">
                  <input type="text" name="email" placeholder="Email" required="" onChange={handleChange} value={inputs.email} />
                  <i className="fas fa-envelope" />
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={inputs.phone} />
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="field">
                  <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={inputs.subject} />
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
            <div className="image-box">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={474}
                    height={549}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=GIET%20University,%20gunupur,%20Raygada&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  {/* <a href="https://123movies-to.org">123 movies</a> */}
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:549px;width:474px;}"
                    }}
                  />
                  <a href="https://www.embedgooglemap.net">google map code</a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:549px;width:474px;}"
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </Components.Main>
  </>

  )
}

export default Contact;