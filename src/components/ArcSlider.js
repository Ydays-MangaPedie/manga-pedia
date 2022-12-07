import { useState, useEffect } from "react";
import "./../styles/ArcSlider.css";

function ArcSlider({ arcs }) {
    useEffect(() => {
      console.log({ arcs });

}, [arcs]);
  if (!arcs) {
    return "Pas d'arcs!"
  }

  return (
    <>
      <div className="game-section">
        {arcs.map((arc, id) => {
          return (
            <div key={id} className="item active">
              <img src={arc.imageUrl} alt="" />
              <p className="item-title">{arc.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ArcSlider;
