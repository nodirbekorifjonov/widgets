import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const DateComponent = () => {
  const dateTime = new Date();
  const day = dateTime.getUTCDate();
  const month = dateTime.getUTCMonth() + 1;
  const year = dateTime.getFullYear();

  return (
    <div className="relative w-full h-full px-[3rem] py-[4rem] bg-gradient-to-br from-[rgba(52,55,59,0.35)] to-[rgba(17,20,24,1)] rounded-[1rem] flex gap-[2rem] justify-center text-[5.6rem] max-[430px]:text-[4rem] max-[345px]:gap-[1.2rem] max-[345px]:text-[3rem] max-[285px]:flex-wrap">
      <div>
        <span>{`${day <= 9 ? `0${day}` : day}.${
          month <= 9 ? `0${month}` : month
        }.${year <= 9 ? `0${year}` : year}`}</span>
      </div>
      <div className="absolute text-[2rem] top-[1.6rem] left-[1.6rem]">
        <FaCalendarAlt />
      </div>
    </div>
  );
};

export default DateComponent;
