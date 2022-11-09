import "../styles/Card.css";

function Card({ imageUrl, title }) {
  return (
    <>
      <div>
        <img
        className="card h-100"
          src={imageUrl}
          alt="manga"
        />
      </div>
    </>
  );
}

export default Card;
