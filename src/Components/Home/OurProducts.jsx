import React from 'react';
import Productitem from './Productitem';
import { Link } from 'react-router-dom';

const OurProducts = () => {
  return (
    <section className="pb-[70px]">
      <div className="container">
        <h2 className="title text-center pb-[32px]">Our Products</h2>
        <div className="grid grid-cols-4 gap-8 xl:px-16 ">
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
          <Productitem />
        </div>
        <div className="text-center">
          <Link
            to="/shop"
            className="text-brand font-bold text-[16px]  py-[12px] px-[72px] border-2 border-brand inline-block mt-[32px]"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
