import React from "react";

const Paginate = ({ pagination, setPage }) => {
  return (
    <div className="w-full flex items-center justify-center gap-4 pt-8">
      {pagination?.prevPage !== "open page" && (
        <div
          className="w-28 py-[10px] bg-white text-[#585858] text-[16px] cursor-pointer font-semibold shadow-md rounded-[10px] flex justify-center"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          previous
        </div>
      )}
      {pagination?.nextPage !== "last page" && (
        <div
          className="w-28 py-[10px] bg-white text-[#585858] text-[16px] cursor-pointer font-semibold shadow-md rounded-[10px] flex justify-center"
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </div>
      )}
    </div>
  );
};

export default Paginate;
