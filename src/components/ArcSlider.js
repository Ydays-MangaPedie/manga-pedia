import { useState, useEffect } from "react";
import HorizontalSlider from "./HorizontalSlider";
import "./../styles/ArcSlider.css";

function ArcSlider({ arcs }) {
  useEffect(() => {
    console.log({ arcs });
  }, [arcs]);
  if (!arcs) {
    return "Pas d'arcs!";
  }
  if (true) {
    return (
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <HorizontalSlider show={2}>
          {arcs.map((arc) => {
            return (
              <div>
                <div className="slide">
                  <img
                    src={arc.imageUrl}
                    alt="placeholder"
                    style={{ width: "100%" }}
                  />
                  <h3 className="text-center">{arc.title}</h3>
                </div>
              </div>
            );
          })}
        </HorizontalSlider>
      </div>
    );
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