import React from "react";
import CardData from "../../JS/cardData";
import Card from "./Card";

const CartData = () => {
  return (
    <div className="flex gap-64 overflow-scroll px-40 justify-center pt-24 pb-40 bg-gray-200">
      {CardData.map((data, ind) => {
        return (
          <Card
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

export default CartData;
