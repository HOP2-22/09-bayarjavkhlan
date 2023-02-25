import React from "react";
import Paginate from "./Paginate";
import Card from "./Card";

const Cards = ({ pagination, setPage, posts }) => {
  return (
    <div className="py-10 px-5 xl:px-0">
      <div className="w-full grid ls:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-[15px] justify-center">
        {posts.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
      <Paginate pagination={pagination} setPage={setPage} />
    </div>
  );
};

export default Cards;
