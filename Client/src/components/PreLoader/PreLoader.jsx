import React from "react";
import stylePreLoader from "./PreLoader.module.css";

function PreLoader1() {
  return (
    <div className={stylePreLoader.contenedorPreLoader}>
      <img
        className={stylePreLoader.img}
        src={require("../../assets/MortyblinkingLoader.gif")}
        alt="loading..."
      />
    </div>
  );
}

export default PreLoader1;
