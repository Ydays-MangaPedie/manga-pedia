import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
function HomePage({mangas}) {
  return (
    <>
      <div className="home">
        <Header />
        <Slider data={mangas}/>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
