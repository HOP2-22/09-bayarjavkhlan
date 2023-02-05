const profileImg: string =
  "https://avatars.githubusercontent.com/u/110808418?s=96&v=4";

const AboutMe = ({ theme }: any) => {
  return (
    <div className="w-[90%] sm:w-[80%] md:w-[570px] flex flex-col gap-6">
      <div
        className={`w-full rounded flex overflow-hidden justify-center items-center ${
          !theme ? "bg-[#f6f0e8] " : "bg-[#313134] "
        } `}
      >
        <p className=" py-[10px]">
          Hello, I'm study at software engineer in Mongolia
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between ">
        <div className="flex flex-col">
          <div className="text-[30px] md:text-6 font-[monospace] font-bold">
            Batgerel Bayrjavkhlan
          </div>
          <div className="">
            Digital Craftsman ( Artist / Developer / Designer )
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={profileImg}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
