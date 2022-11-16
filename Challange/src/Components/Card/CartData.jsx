import React from "react";
import CardData from "../../JS/cardData";
import Card from "./Card";

const CartData = () => {
  return (
    <div className="bg-gray-200 pt-24 pb-40 px-40 flex  gap-64 overflow-scroll">
      {CardData?.map((data, ind) => {
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
