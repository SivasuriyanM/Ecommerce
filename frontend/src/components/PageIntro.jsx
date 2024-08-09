import React from "react";
import "../App.css";
import { UserChange } from "../Context/NavigationContext";

function PageIntro() {
  const { setNav } = UserChange();

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to Chunklebytes Fashion</h1>
        <p>
          Explore our handpicked selections and enjoy the best of fashion right
          at your fingertips.
        </p>
        <button className="btn" onClick={() => setNav("product")}>
          GET STARTED NOW!
        </button>
      </div>
      <div className="intro-img"></div>
    </div>
  );
}

export default PageIntro;
