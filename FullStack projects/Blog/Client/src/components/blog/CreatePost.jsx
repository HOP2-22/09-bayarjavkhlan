import React, { useContext, useState } from "react";
import { Context } from "../../provider/Context";
import axios from "axios";

const CreatePost = ({ setCreate }) => {
  const { user } = useContext(Context);

  const [image, setImage] = useState(null);

  const [body, setBody] = useState({
    title: "",
    text: "",
  });

  const handlePost = async () => {
    try {
      await axios.post("http://localhost:8000/post", {
        title: body.title,
        text: body.text,
        image: image,
        owner: user._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[60px] rounded-[10px] z-20 w-[90%] ls:w-[80%] sm:w-3/4 md:w-[70%] lg:w-3/5 px-8 py-10 h-auto bg-white ">
      <div className="flex flex-col gap-2 pb-6">
        <p className="text-[20px] font-semibold">Title:</p>
        <input
          className="bg-[#eaebee] rounded-[8px] focus:outline-none px-4 w-full py-2"
          onChange={(event) => {
            setBody({ ...body, title: event.target.value });
          }}
        />
      </div>
      <div className="flex flex-col gap-2 pb-6">
        <p className="text-[20px] font-semibold">Text:</p>
        <textarea
          rows="5"
          cols="30"
          className="bg-[#eaebee] rounded-[8px] focus:outline-none px-4 w-full py-2"
          onChange={(event) => {
            setBody({ ...body, text: event.target.value });
          }}
        />
      </div>
      <div className="w-full rounded-[10px] p-1 overflow-hidden h-32 flex justify-center items-center">
        <input
          type="file"
          onChange={(event) => setImage(event.target.value)}
          className={`${image !== null ? "hidden" : "block"}`}
        />
        <img
          alt=""
          src={image}
          className={`${
            image !== null ? "block" : "hidden"
          } w-full object-cover h-full`}
        />
      </div>
      <div className="w-full flex justify-center py-4">
        <div
          onClick={() => {
            handlePost();
            setCreate(false);
          }}
          className="w-48 py-[10px] rounded-[10px] font-semibold bg-[#eaebee] hover:bg-[#FFAE00]/10 active:bg-[#FFAE00] text-[#585858] group-hover:text-[#FFAE00] group-active:text-white flex justify-center items-center"
        >
          post
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
