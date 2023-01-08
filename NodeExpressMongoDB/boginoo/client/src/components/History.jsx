import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

const History = () => {
  const { userHistory } = useContext(Context);

  return (
    <>
      <p
        className={`${
          userHistory.length < 1 ? "hidden" : "block"
        } pt-12 pb-6 text-main text-3xl font-extrabold`}
      >
        Түүх
      </p>
      <div className="flex flex-col-reverse">
        {userHistory.map((el, index) => {
          return (
            <div key={index}>
              <div className="flex items-end pb-4 border-b-2 decoration-black">
                <div className="flex">
                  <div className="flex flex-col gap-3 w-80">
                    <div className="opacity-50">Өгөгдсөн холбоос:</div>
                    <div className="text-sm">
                      {el?.orignalLink.length > 50
                        ? el?.orignalLink.substring(0, 50) + "..."
                        : el?.orignalLink}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-56">
                    <div className="opacity-50">Богино холбоос:</div>
                    <div className="">{`http://localhost:3000/${el?.shortLink}`}</div>
                  </div>
                </div>
                <div
                  className="text-md text-main underline decoration-main cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `http://localhost:3000/${el?.shortLink}`
                    );
                  }}
                >
                  Хуулж авах
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default History;
