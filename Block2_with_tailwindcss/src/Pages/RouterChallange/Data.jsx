import React from "react";
import RouterData from "../../JS/RouterData";
import DataBody from "./DataBody";

const Data = () => {
  return (
    <div className="pt-40 flex flex-col">
      <div className="flex flex-col">Blog Post</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {RouterData.map((data, ind) => {
            return (
              <DataBody
                title={data.title}
                date={data.date}
                image={data.image}
                comment={data.comment}
                avatar={data.avatar}
                name={data.name}
                key={ind}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;
