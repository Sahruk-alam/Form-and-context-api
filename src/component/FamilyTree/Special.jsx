import React, { useContext } from "react";
import { assetContext } from "./FamilyTree";

const Special = ({ asset }) => {
  const newAsset = useContext(assetContext);
  console.log(newAsset);
  return (
    <div>
      <h2>Special</h2>
      <p>Asset : {asset}</p>
      <p> New Asset : {newAsset}</p>
    </div>
  );
};

export default Special;
