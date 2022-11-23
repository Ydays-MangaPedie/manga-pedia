import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/CardList";
import Background from "../components/Background";
function HomePage({mangas}) {
  
  return (
    <>
      <div className="home">
         <head>
          
         </head>
        <Header/>
    
        <CardList data={mangas}/>
        <Footer/>
        
      </div>
    </>
  );
}

export default HomePage;
