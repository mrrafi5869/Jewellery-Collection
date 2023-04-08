import React from "react";
import slider1 from "../../../assets/image/slider (1).png";
import slider2 from "../../../assets/image/slider (2).png";
import slider3 from "../../../assets/image/slider (3).png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
const Slider = () => {
  return (
    <div className="mt-8 bg-gray-100 border-y border-gray-300">
      <div className="w-9/12 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hidden lg:block">
            <h1 className="text-3xl mb-5">
              PLATINUM GOLD <br /> JEWELLERY
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              corporis excepturi cumque, sequi quasi laborum. Lorem ipsum dolor
              sit, amet consectetur adipisicing.
            </p>
            <button className="mt-5 w-24 bg-gray-500 hover:bg-yellow-400 transition-all px-2 py-2 rounded-sm text-white font-serif">Shop Now</button>
          </div>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="hidden lg:block">
            <h1 className="text-3xl mb-5">
              DIAMOND SILVER <br /> JEWELLERY
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              corporis excepturi cumque, sequi quasi laborum. Lorem ipsum dolor
              sit, amet consectetur adipisicing.
            </p>
            <button className="mt-5 w-24 bg-gray-500 hover:bg-yellow-400 transition-all px-2 py-2 rounded-sm text-white font-serif">Shop Now</button>
          </div>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="hidden lg:block">
            <h1 className="text-3xl mb-5">
              WHITE GOLD <br /> JEWELLERY
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              corporis excepturi cumque, sequi quasi laborum. Lorem ipsum dolor
              sit, amet consectetur adipisicing.
            </p>
            <button className="mt-5 w-24 bg-gray-500 hover:bg-yellow-400 transition-all px-2 py-2 rounded-sm text-white font-serif">Shop Now</button>
          </div>
          <img src={slider3} alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Slider;
