import React from "react";
import stylePreLoader2 from "./PreLoader2.module.css";

function PreLoader2() {
  return (
    <div className={stylePreLoader2.contenedorPreLoader}>
      <img
        className={stylePreLoader2.img}
        src={require("../../assets/portal.webp")}
        alt="loading..."
      />
      <img
        className={stylePreLoader2.img2}
        src={require("../../assets/MortyBlink.gif")}
        alt="loading..."
      />
    </div>
  );
}

export default PreLoader2;
