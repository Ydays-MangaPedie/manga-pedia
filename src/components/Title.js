import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../styles/HomePage.css";
function Title({title}) {
  return (
    <>
      <div className="title">
       <h1>{title}</h1>
       <div className="line">____</div>
      </div>
    </>
  );
}

export default Title;