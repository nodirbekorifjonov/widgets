import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa6";

const Clock = () => {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = new Date();
      setHour(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="relative w-full h-full px-[3rem] py-[4rem] bg-gradient-to-br from-[rgba(52,55,59,0.35)] to-[rgba(17,20,24,1)] rounded-[1rem] flex gap-[2rem] justify-center text-[5.6rem] max-[430px]:text-[4rem] max-[345px]:gap-[1.2rem] max-[345px]:text-[3rem] max-[285px]:flex-wrap">
      <div>
        <span>{hour <= 9 ? `0${hour}` : hour}</span>{" "}
        <span className="text-[4rem] max-[430px]:text-[2.4rem] max-[345px]:text-[2rem]">
          :
        </span>
      </div>
      <div>
        <span>{minutes <= 9 ? `0${minutes}` : minutes}</span>{" "}
        <span className="text-[4rem] max-[430px]:text-[2.4rem] max-[345px]:text-[2rem]">
          :
        </span>
      </div>
      <div>
        <span>{seconds <= 9 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="absolute text-[2rem] top-[1.6rem] left-[1.6rem]">
        <FaRegClock />
      </div>
    </div>
  );
};

export default Clock;
