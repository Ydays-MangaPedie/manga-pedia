import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
function HomePage({mangas}) {
  return (
    <>
      <div className="home">
        <Header />
        <CardList data={mangas}/>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
