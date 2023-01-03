import React, { useState } from "react";
import Search from "../components/Search";

const Home = () => {
  const [link, setLink] = useState();

  return (
    <div>
      <Search setLink={setLink} />
      <div className="">
        <div className="">
          <div className="py-2 px-4 opacity-50">Өгөгдсөн холбоос:</div>
          <p className="pl-6 h-6">{link}</p>
        </div>
        <div className="">
          <div className="py-2 px-4 opacity-50">Богино холбоос:</div>
          <p className="pl-6 h-6">{link}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
