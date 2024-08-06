import React from "react";
import "../App.css";

function PageIntro() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to Chunklebytes Fashion</h1>
        <p>
          Explore our handpicked selections and enjoy the best of fashion right
          at your fingertips.
        </p>
        <button className="btn">GET STARTED NOW!</button>
      </div>
      <div className="intro-img"></div>
    </div>
  );
}

export default PageIntro;
