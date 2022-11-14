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
          GIET University believes that quality education should be followed by prime placements. 
          </p>
          <p className="description">
          Over the decades, the relentless effort of GIET University has ingrained a reputation for consistent quality placements. It has formed enduring & constructive partnerships with the corporate/Industries to provide foot-in- the-door opportunity to all the eligible students
          </p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" loading="lazy"/>
          </div>
          <h2 className="title">25 Years of excellence</h2>
          <p className="description">
          GIET University, Gunupur was established by “Vidya Bharati Educational Trust,” Gunupur, Odisha, India in the year 1997. 
          </p>
          <p className="description">
          UGC approved GIET University is one of the leading universities in Odisha, located amongst the lush greenery and foothills of the Eastern Ghats of India with the scenic Bansadhara River flowing through its territory.
          </p>
        </div>
      </div>
    </div>
  );
}
