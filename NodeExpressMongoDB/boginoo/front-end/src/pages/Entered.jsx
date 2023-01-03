import React, { useState, useContext } from "react";
import Search from "../components/Search";
import { Context } from "../context/Context";

const Entered = () => {
  const { stringId, cut } = useContext(Context);

  const [link, setLink] = useState();

  return (
    <div>
      <Search setLink={setLink} />
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
