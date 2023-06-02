import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Detailsimg = ({ dImg }) => {
  return (
    <div className=" ">
      {dImg.map((item, index) => {
        return (
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              key={index}
            >
              <SwiperSlide>
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={item.images[0]}
                  height="200px"
                  width="400px"
                  className="dImg d-flex justify-content-center align-items-center"
                  
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={item.images[1]}
                  height="200px"
                  width="400px"
                  className="dImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={item.images[2]}
                  height="200px"
                  width="400px"
                  className="dImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={item.images[3]}
                  height="200px"
                  width="400px"
                  className="dImg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <LazyLoadImage
                  alt={item.title}
                  effect="blur"
                  src={item.images[4]}
                  height="200px"
                  width="400px"
                  className="dImg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        );
      })}
    </div>
  );
};

export default Detailsimg;
