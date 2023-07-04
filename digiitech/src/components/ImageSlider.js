import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Image1 from "../assets/images/image1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styling/ImageSlider.css";

SwiperCore.use([Autoplay, Navigation]);

function ImageSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        swiperInstance.slidePrev();
      } else if (event.key === "ArrowRight") {
        swiperInstance.slideNext();
      }

      // Restart autoplay timer
      swiperInstance.autoplay.start();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="slider">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false, // Allow autoplay to continue even when interacting with slides
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1}></img>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
