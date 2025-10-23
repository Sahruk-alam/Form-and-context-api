import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>{name}</h2>
      {name === "Rakib" && <Special asset={asset}></Special>}
      {name === "Mohim" && <Special asset={asset}></Special>}
      {name === "Nishi" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
