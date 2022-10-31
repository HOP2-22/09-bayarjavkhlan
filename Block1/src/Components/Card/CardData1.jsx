import React from "react";
import CardData1 from "../../JS/cardData1";
import Card1 from "./Card1";

const CartData1 = () => {
  return (
    <div className="flex gap-14 justify-center pt-24 pb-40 bg-gray-200">
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
};

export default CartData1;
