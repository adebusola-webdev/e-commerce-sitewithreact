import React from "react";
import { Link, defer } from "react-router-dom";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Suspense } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Allproducts } from "../components/Allproducts";
import { Await, useRouteLoaderData ,useLoaderData,} from "react-router-dom";

export const Home = () => {
  const  myproducts = useLoaderData();
  return (
    <>
      <section className="home-container py-3 ">
        <div className="container-xxl topcontainer">
          <div className="row main-row">
            <div className="col-lg-6 mainimg">
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
              >
                <SwiperSlide>
                  <div className="main-banner-img position-relative p-1">
                  <SwiperSlide>
                <LazyLoadImage
                  src="/images/headphone.girlllll.jpeg"
                  alt="headphone"
                  className="img-fluid rounded-3 "
                  effect="blur"
                />
              </SwiperSlide>
                  
                    <div className="main-banner-content position-absolute">
                      <h4 className="text-white">
                        BLASTING HEADPHONES FOR YOU
                      </h4>
                      <h5 className="text-danger">BOOMPLAY+ Pro.</h5>
                      <p className="text-white">$200</p>
                      <Link className="primary-btn mt-5">BUY NOW</Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main-banner-img position-relative p-1">
                  <LazyLoadImage
                  src="/images/jewelry.png"
                  alt="headphone"
                  className="img-fluid rounded-3 "
                  effect="blur"
                />
                   
                    <div className="main-banner-content position-absolute">
                      <h4 className="text-white">QUALITY JEWELRY</h4>
                      <h5 className="text-danger">L/V Necklace</h5>
                      <p className="text-white">$100</p>
                      <Link className="primary-btn mt-5">BUY NOW</Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-sm-8 col-lg-6 small-image-con ">
              <div className="d-flex flex-wrap justify-content-between align-item-center">
                <div className="small-banner-img position-relative p-1">
                  <LazyLoadImage
                    src="/images/fragrance.png"
                    alt="headphone"
                    className="img-fluid rounded-3 "
                    effect="blur"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-white">Want to smell nice?</h4>
                    <h5 className="text-danger">Perfumes</h5>
                    <p className="text-dark">$80</p>
                  </div>
                </div>
                <div className="small-banner-img position-relative p-1">
                  <LazyLoadImage
                    src="/images/dress.png"
                    alt="headphone"
                    className="img-fluid rounded-3 "
                    effect="blur"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-white">Shoping for outfit?</h4>
                    <h5 className="text-danger">Lovely dress</h5>
                    <p className="text-dark">$200</p>
                  </div>
                </div>
                <div className="small-banner-img position-relative p-1">
                  <LazyLoadImage
                    src="/images/home.decor.jpeg"
                    alt="headphone"
                    className="img-fluid rounded-3 "
                    effect="blur"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-white">redecorating?</h4>
                    <h5 className="text-danger">decor</h5>
                    <p className="text-dark">$200</p>
                  </div>
                </div>
                <div className="small-banner-img position-relative p-1">
                  <LazyLoadImage
                    src="/images/iphone.png"
                    alt="headphone"
                    className="img-fluid rounded-3 "
                    effect="blur"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4 className="text-white">Get Latest Iphone.</h4>
                    <h5 className="text-danger">Iphone 13 Pro-max</h5>
                    <p className="text-dark">$900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Allproducts myproducts={myproducts}/>
      
    
    </>
  );
};

export const ProductLoader= async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=10");
    const product = await res.json();
    console.log(product)
    return product.products;
  } catch (err) {
    console.log(err);
  }
};
