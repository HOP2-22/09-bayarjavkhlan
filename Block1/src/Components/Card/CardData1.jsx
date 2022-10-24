import React from "react";
import CardData1 from "../../JS/cardData1";
import Card1 from "./Card1"


const CartData1 = () => {
  return (
    <div className="grid grid-cols-2">
      {CardData1.map((data, ind) => {
        return (
          <Card1
            starNumber={data.star}
            comment={data.comment}
            avatar={data.avatar}
            name={data.name}
            key={ind}
          />
        );
      })}
    </div>
  );
}

export default CartData1;