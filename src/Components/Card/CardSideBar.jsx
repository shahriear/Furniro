import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import Slidbaritems from './Slidbaritems';
import CardButton from './CardButton';

const CardSideBar = ({ handelSidebar }) => {
  return (
    <div className=" top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.20)] fixed z-50">
      <div className="w-fit py-7 px-6 ml-auto bg-white h-[746px]">
        <div className="flex justify-between items-center pb-6 border-b mb-10 ">
          <h2 className="font-primary font-semibold text-2xl text-black">
            Shopping Cart
          </h2>
          <RxCross1
            onClick={() => handelSidebar(false)}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="h-[480px] overflow-y-scroll bg-slate-100 cursor-pointer slideCard ">
          <Slidbaritems />
          <Slidbaritems />
          <Slidbaritems />
          <Slidbaritems />
          <Slidbaritems />
          <Slidbaritems />
        </div>
        <div className="flex justify-between font-primary font-normal p-6 border-b">
          <p>Subtotal</p>
          <p className="text-brand">Rs. 520,000.00</p>
        </div>
        <div className="flex gap-4 justify-center items-center mt-6">
          <CardButton path="/cart" title="cart" />
          <CardButton path="/cart" title="checkout" />
        </div>
      </div>
    </div>
  );
};

export default CardSideBar;
