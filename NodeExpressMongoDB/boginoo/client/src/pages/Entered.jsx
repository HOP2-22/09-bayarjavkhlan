import React, { useState, useContext } from "react";
import axios from "axios";
import Search from "../components/Search";
import { Context } from "../context/Context";

const Entered = () => {
  const { stringId, cut } = useContext(Context);

  const [link, setLink] = useState();

  const createShort = async () => {
    try {
      await axios.post("http://localhost:8000", {
        orignalLink: link,
        shortLink: `http://localhost:3000/${stringId}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Search setLink={setLink()} createShort={createShort()} />
      <div className={`${!cut ? "hidden" : "block"}`}>
        <div className="">
          <div className="py-2 px-4 opacity-50">Өгөгдсөн холбоос:</div>
          <p className="pl-6 h-6">{link}</p>
        </div>
        <div className="">
          <div className="py-2 px-4 opacity-50">Богино холбоос:</div>
          <p className="pl-6 h-6">{`www.boginoo.com/${stringId}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Entered;
