import React from "react";
import Clock from "../components/clock";
import DateComponent from "../components/date";
import WeatherComponent from "../components/weather";
import GalleryComponent from "../components/gallery";
import MusicComponents from "../components/music";

const Home = () => {
  return (
    <div className="container mx-auto px-[2rem] py-[3rem]">
      <div className="widgets grid grid-cols-2 grid-rows-2 gap-[1.2rem] max-[1045px]:flex max-[1045px]:flex-col mb-[1rem]">
        <div className="row-span-3">
          <WeatherComponent />
        </div>
        <div>
          <Clock />
        </div>
        <div className="col-start-2 ">
          <DateComponent />
        </div>
      </div>
      <div className="flex justify-between gap-[1rem] max-[1045px]:flex-col">
        <div className="w-[70%] max-[1280px]:w-[60%] max-[1045px]:w-full">
          <GalleryComponent />
        </div>
        <div>
          <MusicComponents />
        </div>
      </div>
    </div>
  );
};

export default Home;
