import React from "react";

import Header from "../components/home/Header";
import HeroSection1 from "../components/home/HeroSection1";
import HeroSection2 from "../components/home/HeroSection2";
import HeroSection3 from "../components/home/HeroSection3";
import Carts from "../components/home/Carts";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full md:mt-[25px] lg:mt-[70px] xl:mt-[130px] 2xl:mt-[250px] 3xl:mt-[220px] 4xl:mt-[335px] 5xl:mt-[420px] 6xl:mt-[470px] 7xl:mt-[520px] bg-primary-bg">
        <HeroSection1
          title={"Your Hub for teamwork"}
          text={
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
          }
          button={"Learn more"}
        />
        <HeroSection2
          title={"Simple task management"}
          text={
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
          }
          button={"Learn more"}
        />
        <HeroSection3
          title={"Scheduling that actually works"}
          text={
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
          }
          button={"Learn more"}
        />
        <Carts title={"What people say about us"} />
      </div>
    </div>
  );
};

export default Home;
