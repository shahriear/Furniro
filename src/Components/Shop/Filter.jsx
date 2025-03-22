import React from 'react';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';

const Filter = () => {
  return (
    <section className="bg-[#F9F1E7] py-8">
      <div className="container flex justify-between">
        <div className="flex">
          <p className=" items-center flex gap-3 pr-8  font-primary font-normal text-xl ">
            <HiOutlineAdjustmentsHorizontal />
            <span>Filter</span>
          </p>
          <p className=" items-center flex gap-3 pl-8 border-l-2 border-primary font-primary font-normal text-base ">
            Showing 1–16 of 32 results
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <label className="text-xl font-normal font-primary text-primary pr-4">
              Show
            </label>
            <input
              type="number"
              value="16"
              className="w-14 py-3 text-center font-normal text-secondary text-xl"
            />
          </div>
          <div>
            <label className="text-xl font-normal font-primary text-primary pl-6 pr-4">
              Short by
            </label>
            <select className="py-3 px-4 bg-white">
              <option value="default">Default</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
