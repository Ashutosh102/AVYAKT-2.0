/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "./Card";
import super1 from "../assets/fest-1.png";
import super2 from "../assets/fest-2.png";
import super3 from "../assets/fest-3.png";
import super4 from "../assets/fest-4.png";

export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "Cultural",
      title: "Events",
     
    },
    {
      image: super2,
      series: "Workshop",
      title: "Events",
      
    },
    {
      image: super3,
      series: "Technical",
      title: "hackathons",
      
    },
    {
      image: super4,
      series: "Culrtural",
      title: "Dance and song",
      
    },
    
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Events You are waiting for</h2>
        <p className="description">
          Hurry Up and Register now <a href="#">here</a>.
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
