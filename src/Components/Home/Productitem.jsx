import React from 'react';
import { BsFillShareFill } from 'react-icons/bs';
import { MdCompareArrows } from 'react-icons/md';
import { GiSelfLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Productitem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative group">
        <img src="/product1.png" className="w-full" alt="product1 " />
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full scale-0 group-hover:scale-100 bg-[#3a3a3a97] 	">
          <button className="text-brand font-bold text-[16px] bg-white py-[12px] px-[52px] inline-block  ">
            Add to cart
          </button>
        </div>
        <div className="flex items-center justify-center absolute top-11 left-0 w-full h-full scale-0 group-hover:scale-100  transition-all duration-500	">
          <a className="text-white font-semibold text-[14px] flex items-center ">
            <BsFillShareFill />
            <span className="pr-5 pl-2">Share</span>
            <MdCompareArrows className="text-2xl" />
            <span className="pr-5 pl-2"> Compare</span>
            <GiSelfLove className="text-xl" />
            <span>Like</span>
          </a>
        </div>
      </div>

      {/* ==================== */}

      <Link to="/shop/details" className="bg-slate-500/5 pl-6">
        <h3 className="font-semibold text-[24px] font-primary text-primary pt-[16px] pb-[8px]">
          Syltherine
        </h3>
        <p className="font-medium text-[16px] font-primary text-secondary/60">
          Stylish cafe chair
        </p>
        <h2 className="font-semibold text-[20px] font-primary text-primary pt-[8px] pb-[30px]">
          Rp 2.500.000
          <span className="font-normal text-[16px] font-primary text-secondary/70 pl-16 line-through">
            Rp 3.500.000
          </span>
        </h2>
      </Link>
    </div>
  );
};
export default Productitem;
