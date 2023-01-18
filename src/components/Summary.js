import { useState, useEffect } from "react";
import "./../styles/Summary.css";

function Summary({ mangas }) {
  useEffect(() => {
    console.log({ mangas });
  }, mangas);
  return (
    <>
    <div className="contents">
      <div className="text">
        <p className="titlePage">Résumé</p>
        <p className="sous-titre">{mangas.title}</p>
        <p className="paragraphe">{mangas.resume}</p>
        <br></br>
      </div>
      <div className="images">
        <img src={mangas.imageUrl}></img>
      </div>
    </div>
    </>
  );
}

export default Summary;