import CardData2 from "../../JS/cardData2";
import Card2 from "./Card2"

const CartData2 = () => {
  return (
    <div className="grid grid-cols-2">
      {CardData2.map((data, ind) => {
        return (
          <Card2
            topic={data.topic}
            comment2={data.comment}
            avatar2={data.avatar}
            key={ind}
          />
        );
      })}
    </div>
  );
}

export default CartData2;