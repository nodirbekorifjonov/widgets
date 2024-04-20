import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay } from "swiper/modules";

const GalleryComponent = () => {
  return (
    <div className="relative w-full h-[50rem] rounded-[1rem] max-[1045px]:h-[40rem] max-[575px]:h-[30rem] max-[405px]:h-[20rem]">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper rounded-[1rem]"
      >
        <SwiperSlide>
          <img src="/assets/images/slide-1.jpg" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/slide-2.webp" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/slide-3.png" alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/images/slide-4.png" alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GalleryComponent;
