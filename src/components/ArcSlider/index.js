import { useState, useEffect } from "react";
import HorizontalSlider from "../HorizontalSlider";
import "./ArcSlider.css";
import TitlePage from "../TitlePage/index"

function ArcSlider({ arcs }) {
  useEffect(() => {
    console.log({ arcs });
  }, [arcs]);
  if (!arcs) {
    return "Pas d'arcs!";
  }
  if (true) {
    return (
      <><TitlePage title={"Arcs"}></TitlePage><div
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
                    style={{ width: "100%" }} />
                  <h3 className="text-center">{arc.title}</h3>
                </div>
              </div>
            );
          })}
        </HorizontalSlider>
      </div></>
    );
  }
}

export default ArcSlider;