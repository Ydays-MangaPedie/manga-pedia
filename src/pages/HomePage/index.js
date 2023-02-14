import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import "./HomePage.css";
import Menu from "../../components/Menu";
// import Logo from "../components/Logo";

function HomePage({mangas}) {
  return (
    <>
      <div className="home bg-img">
     
        <Header />
        
        <h2 className="titleManga">Bienvenue sur Mangapédie</h2>
        <Menu/>
        <Slider data={mangas}/>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
