import React from "react";

const Bio = ({ theme }: any) => {
  return (
    <div>
      <p
        className={`${
          theme
            ? "text-[#EDEDED] decoration-[#535353] "
            : "text-black decoration-[#525252]"
        } text-[20px] font-medium py-2 decoration-[3px] underline underline-offset-4`}
      >
        Bio
      </p>
      <div
        className={`${
          !theme ? "text-black/90" : "text-white/90"
        } w-full flex flex-col`}
      >
        <div className="w-full flex">
          <div className="w-[54px] font-semibold pr-10">2004</div>
          <div>Born in Ulaanbaatar, Mongolia.</div>
        </div>
        <div className="w-full flex">
          <div className="w-[54px] font-semibold">2010</div>
          <div className="pl-4">
            Completed the Master's Program in the Graduate School of Information
            Science at Nara Institute of Science and Technology
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-[54px] font-semibold">2011</div>
          <div>Studied at 5th School! Mongolia Ulaanbaatar</div>
        </div>
        <div className="w-full flex">
          <div className="font-semibold pr-2">2012 to present </div>
          <div>Studing at 53th School</div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
