import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// React Icons
import { TiWeatherPartlySunny } from "react-icons/ti";

const WeatherComponent = () => {
  const API_KEY = "b6189d89177e1c681dc2c52155033a1a";
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${"tashkent"}&units=metric&appid=${API_KEY}`
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="relative w-full h-[97%] px-[3rem] py-[4rem] bg-gradient-to-br from-[rgba(52,55,59,0.35)] to-[rgba(17,20,24,1)] rounded-[1rem] flex gap-[2rem] justify-center text-[5.6rem] max-[1045px]:h-auto">
      {weather && (
        <div className="flex justify-center flex-col items-center">
          <div className="flex flex-col items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
              width={100}
              height={100}
              className="rounded-full"
            />
            <span className="text-[2rem] mb-[1.6rem]">{`${weather.name}, ${
              weather.sys.country !== undefined ? weather.sys.country : ""
            }`}</span>
            <div className="relative mt-[-1.5rem]">
              <span>{Math.round(weather.main.temp)}</span>
              <span className="absolute top-0 right-[-2rem] text-[2rem]">
                o
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="absolute text-[2rem] top-[1.6rem] left-[1.6rem]">
        <TiWeatherPartlySunny />
      </div>
    </div>
  );
};

export default WeatherComponent;
