import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Menu from "../components/Menu";


function HomePage({mangas}) {
  return (
    <>
      <div className="bg-img">
        {/* <Header /> */}
        <Menu />
        <CardList data={mangas}/>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
