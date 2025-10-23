import React, { useContext } from "react";
import { moneyContext } from "./FamilyTree";

const Friend = () => {
  const [money] = useContext(moneyContext);
  return (
    <div>
      <h2>Friend</h2>
      <p>Money: {money}</p>
    </div>
  );
};

export default Friend;
