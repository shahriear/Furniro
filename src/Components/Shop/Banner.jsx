import React from 'react';
import { FaGreaterThan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { BsGridFill } from 'react-icons/bs';
import { BsViewList } from 'react-icons/bs';
import Breadcrumb from '../Breadcrumb';

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[url('/bannerShop.png')] bg-cover bg-no-repeat w-full h-[316px] bg-center ">
      <div className="container ">
        <h2 className="title pb-3 text-center">Shop</h2>
        <Breadcrumb />
      </div>

      {/* <div className="bg-[#F9F1E7] h-24 flex justify-around">
        <div className="flex items-center gap-3">
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
          <p className="font-primary text-primary text-[20px] font-normal">
            Filter
          </p>
          <BsGridFill className="mx-4" />
          <BsViewList />
          <span className="text-3xl text-center text-secondary mx-5">|</span>
          <p>Showing 1–16 of 32 results</p>
        </div>
        <div className="flex items-center">
          <p>
            Show <span className="text-secondary mx-3 bg-white p-3">16</span>
            <span className="px-3">Short by</span>
            <span className="text-secondary mx-3 bg-white py-3 pl-4 pr-10">
              Default
            </span>
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
