import React from "react";
import eth1 from "../assets/GIET.png";
import eth2 from "../assets/avyakt-L1.png";

export default function Like() {
  return (
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
            <img src={eth2} alt="eth2" loading="lazy"/>
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
  );
}
