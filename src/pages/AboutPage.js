import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About"
import Menu from "../components/Menu";
import AboutSlider from "../components/AboutSlider";


function AboutPage({mangas}) {
    console.log({mangas})
    return (
        <>
            <div className="home bg-img">
            <Header />
            <Menu/>
            <About/>
            <AboutSlider data={mangas}/>
            <Footer />
            </div>
        </>
    )
}

export default AboutPage;