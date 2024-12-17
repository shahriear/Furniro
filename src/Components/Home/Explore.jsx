import React from 'react';
import Button from '../Button';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import Next_Arrow from '../Next_Arrow';

const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Next_Arrow />,
    prevArrow: <div></div>,
  };
  return (
    <section className=" py-11 mb-16 bg-[#FCF8F3] explore">
      <div className="container flex gap-10 items-center">
        <div className="w-2/5  ">
          <h1 className="title">50+ Beautiful rooms inspiration</h1>
          <p className="details pb-14">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button title="Explore More" path="/shop" />
        </div>
        <div className="w-3/5">
          <Slider {...settings}>
            <div className="slider_items ">
              <img src="/slide1.png" alt="" className="w-full h-full " />
            </div>
            <div className="slider_items">
              <img src="/slider2.png" alt="" className="w-full h-full " />
            </div>
            <div className="slider_items">
              <img src="/slider3.png" alt="" className="w-full h-full " />
            </div>
            <div className="slider_items">
              <img src="/slide1.png" alt="" className="w-full h-full " />
            </div>
            <div className="slider_items">
              <img src="/slider3.png" alt="" className="w-full h-full " />
            </div>
            <div className="slider_items">
              <img src="/slide1.png" alt="" className="w-full h-full " />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
