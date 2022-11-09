import "../styles/Card.css";
import { Link } from "react-router-dom";

function Card({ imageUrl, title,state }) {
  return (
    <>
   <Link to={`/manga/${title}`} state={{ data: state }}>
        <img
        className="card h-100"
          src={imageUrl}
          alt="manga"
        />
   </Link>
    
    </>
  );
}

export default Card;
