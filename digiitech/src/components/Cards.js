import React from "react";
import "./Cards.css";
function Cards() {
  return (
    <div className="container">
      <div className="box">
        <div className="title">
          Become a <br />
          <h5>Web Developer</h5>
        </div>
        <div className="content">
          <span>Know More</span>
        </div>
      </div>

      <div className="box">
        <div className="title">
          Become a <br />
          <h5>Data Scientist</h5>
        </div>
        <div className="content">
          <span>Know more</span>
        </div>
      </div>

      <div className="box">
        <div className="title">
          Become a <br />
          <h5>DevOps Engineer</h5>
        </div>
        <div className="content">
          <span>Know More</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
