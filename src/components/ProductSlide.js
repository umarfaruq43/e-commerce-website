import React, { useEffect, useState } from "react";
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Img from "../assests/images/image-product-1.jpg";
import Img2 from "../assests/images/image-product-2.jpg";
import Img3 from "../assests/images/image-product-3.jpg";
import Img4 from "../assests/images/image-product-4.jpg";

// // import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/swiper-bundle.min.css";

// // install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

export default function ProductSlide() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //  Getting the screen size
  const [size, setSize] = useState({
    x: window.innerWidth,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <div className="lg:w-7/12  mx-auto">
      <Swiper
        loop={true}
        spaceBetween={1}
        navigation={size.x <= 760 ? true : false}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={true}
        className="mySwiper2 md:rounded-xl"
      >
        <SwiperSlide>
          <img src={Img} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="product" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper hidden md:flex w-full mt-8 mx-auto"
      >
        <SwiperSlide
          style={{ width: "100px", height: "100px" }}
          className="rounded-xl cursor-pointer overflow-hidden "
        >
          <img src={Img} alt="product" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100px", height: "100px" }}
          className="rounded-xl cursor-pointer overflow-hidden "
        >
          <img src={Img2} alt="product" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100px", height: "100px" }}
          className="rounded-xl cursor-pointer overflow-hidden "
        >
          <img src={Img3} alt="product" />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100px", height: "100px" }}
          className="rounded-xl cursor-pointer overflow-hidden "
        >
          <img src={Img4} alt="product" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
