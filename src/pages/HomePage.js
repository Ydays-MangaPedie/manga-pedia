import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/HomePage.css";
function HomePage() {
  const cardData = {
      imageUrl:
      "https://fr.web.img2.acsta.net/pictures/19/08/02/15/12/4423178.jpg",
      title: "Naruto",
      name:"naruto"
  };

  const [mangas, setMangas] = React.useState(Array(15).fill(cardData));

  return (
    <>
      <div className="home">
        <Header />
        <div className="cardList position-relative d-flex">
          {mangas.map((manga) => (
                <Card imageUrl={manga.imageUrl} title={manga.title} state={manga} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
