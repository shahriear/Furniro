import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const Slidbaritems = () => {
  return (
    <div className="flex items-center p-5">
      <div className="w-28 rounded-xl overflow-hidden">
        <img src="/sofa2.png" className="w-full" alt="" />
      </div>
      <div className="ml-8 mr-14">
        <h3 className="font-primary font-normal text-base pb-3">
          Asgaard sofa
        </h3>
        <p className="text-[#B88E2F] text-xs font-light">1 X Rs. 270,000.00</p>
      </div>
      <div>
        <RxCrossCircled className="text-2xl bg-slate-200 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default Slidbaritems;
