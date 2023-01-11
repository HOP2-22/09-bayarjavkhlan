import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Search from "../components/Search";
import History from "../components/History";

import { FaSpinner } from "react-icons/fa";

const Home = () => {
  const { user, loading, navigateToSlash } = useContext(Context);

  useEffect(() => {
    if (user === undefined) {
      navigateToSlash();
    }
  }, []);

  return (
    <>
      <button
        disabled
        className={`${
          loading ? "flex" : "hidden"
        } justify-center items-center bg-green-600 py-4 px-6 my-10 rounded-lg`}
      >
        <FaSpinner className=" h-7 w-7 mr-3 animate-spin" color="white" />
        <p className="font-semibold pt-2 text-white"> Loading</p>
      </button>
      <div className={`${loading ? "hidden" : "block"}`}>
        <Search />
        <History />
      </div>
    </>
  );
};

export default Home;
