import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselCard from "../components/CarouselCard";
import "../styles/HomePage.css";
import Title from "../components/Title";

function ArcPage({arc}) {
  return (
    <>
      <div className="arc bg-img">
        <Header />
        <Title/>
        <CarouselCard data={arc}/>
        <Footer />
      </div>
    </>
  );
}

export default ArcPage;