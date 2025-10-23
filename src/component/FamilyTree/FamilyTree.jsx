import React, { createContext, useState } from "react";
import GrandFather from "./GrandFather";
import "./familyTree.css";
export const assetContext = createContext('');
export const moneyContext = createContext('');

const FamilyTree = () => {
    const [money, setMoney] = useState(0)
  const asset = "House";
  const newAsset = "Diamond";
  return (
    <div className="family-tree"> 
      <h2>Family Tree</h2>
      <h3>Family total asset: {money}</h3>
      <moneyContext.Provider value={[money, setMoney]}>
        <assetContext.Provider value={newAsset}>
        <GrandFather asset={asset}></GrandFather>
      </assetContext.Provider>
      </moneyContext.Provider>
    </div>
  );
};

export default FamilyTree;
