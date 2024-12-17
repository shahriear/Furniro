import React from 'react';
import Button from '../Button';

const Banner = () => {
  return (
    <section className="py-[150px] bg-[url('/banner.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="container">
        <div className="w-1/2 ml-auto bg-[#FFF3E3] py-[62px] px-[40px] rounded-xl">
          <h2 className="font-primary text-primary font-semibold text-[16px]">
            New Arrival
          </h2>
          <h1 className="font-primary text-brand font-bold text-[52px] leading-[65px] w-[400px] pt-[4px] pb-[17px]">
            Discover Our New Collection
          </h1>
          <p className="font-primary text-primary font-medium text-[18px] leading-[24px] pb-[46px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button title="BUY NOW" path="/shop" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
