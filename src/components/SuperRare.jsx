/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "./Card";
import super1 from "../assets/fest-1.png";
import super2 from "../assets/fest-2.png";
import super3 from "../assets/fest-3.png";
import super4 from "../assets/fest-4.png";
import { Link, useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function SuperRare() {
  const [cookies] = useCookies();
  let token = cookies.user;
  const sendRequestandsubmit = async (e) => {
    e.preventDefault();
  const res = await axios
  .post(`https://csefest.d3m0n1k.engineer/show-events`, {
    token,
})
const data = await res.data;
console.log(data)
  }
  
  const data = [
    {
      image: "https://i.imgur.com/DHQ4Kct.png",
      series: "Non-Technical",
      title: "Events",
     
    },
    {
      image: "https://i.imgur.com/P3GFU9E.png",
      series: "Technical",
      title: "Events",
      
    },
    {
      image: "https://i.imgur.com/PqMlIOh.png",
      series: "LAN",
      title: "Gaming",
      
    },
   
    {
      image: " https://i.imgur.com/Sy9ZB8C.png",
      series: "Culrtural",
      title: "Events",
      
    },
    
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title" style={{
    backgroundImage:
      "linear-gradient(to left, #059DFF, #6549D5 , #E33FA1, #FB5343)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  }}>Events You are waiting for</h2>
        <p className="description" >
          Hurry Up and Register now <Link to="/events">here</Link>.
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
