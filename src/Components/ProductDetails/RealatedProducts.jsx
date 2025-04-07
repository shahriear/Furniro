import React from 'react';
import Productitem from '../Home/Productitem';
import Button from '../Button';
import { Link } from 'react-router-dom';

const RealatedProducts = () => {
  return (
    <section className="pt-14 pb-24">
      <div className="container">
        <h2 className="title text-center">RealatedProducts</h2>
        <div className="flex justify-evenly pt-6 pb-11">
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

export default RealatedProducts;
