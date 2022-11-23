import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../styles/HomePage.css";
function HomePage({mangas}) {
  return (
    <>
      <div className="home bg-img">
        <Header />
        <Slider data={mangas}/>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
