import React, { useState } from "react";
import "./style.css";
import { FaMusic } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const MusicComponents = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();
  const audioSrc = "/assets/audio/audio-1.mp3";

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="relative w-full h-full px-[3rem] py-[4rem] bg-gradient-to-br from-[rgba(52,55,59,0.35)] to-[rgba(17,20,24,1)] rounded-[1rem] flex flex-col gap-[1rem] items-center justify-center text-[5.6rem] max-[535px]:text-[4rem] max-[345px]:gap-[1.2rem] max-[405px]:text-[3rem] max-[335px]:text-[2.4rem] max-[285px]:flex-wrap">
      <audio ref={audioRef} src={audioSrc}></audio>
      <button
        onClick={togglePlay}
        className="play-pause flex justify-center items-center w-[10rem] h-[10rem] border border-white text-[2.8rem] rounded-full cursor-pointer"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="text-center">
        <h2>Oson bo'lmadi</h2>
        <p className="text-[1.8rem] max-[405px]:text-[1.6rem] max-[335px]:text-[1.4rem]">
          Minor Lightdream
        </p>
      </div>
      <div className="absolute text-[2rem] top-[1.6rem] left-[1.6rem]">
        <FaMusic />
      </div>
    </div>
  );
};

export default MusicComponents;
