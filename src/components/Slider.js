import { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";
import uuid from "react-uuid";
import "../styles/Carousel.css";
function Slider({ data }) {
  const [goToSlide, setGoToSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const offsetRadius = useState(5);
  const showNavigation = useState(true);
  const configCarousel = useState(config.slow);

  useEffect(() => {
    const tmp = data.map((item, id) => ({
      key: uuid(),
      content: (
        <div className="h-75">
          <img src={item.imageUrl} alt={id} />
          <div className="rounded-pill bg-light mt-4">
          <h3 className="text-center">{item.title}</h3>
          </div>
        </div>
      ),
    }));

    console.log(tmp);

    setSlides(
      tmp.map((slide, index) => {
        return { ...slide, onClick: () => setGoToSlide(index) };
      })
    );
    console.log(slides);
  }, []);

  return (
    <div style={{ width: "40%", height: "600px", margin: "0 auto"}}>
      <Carousel slides={slides}
      goToSlide={0}
      offsetRadius={3}
      showNavigation={true}
      config={config.gentle}
      />
    </div>
  );
}

export default Slider;
