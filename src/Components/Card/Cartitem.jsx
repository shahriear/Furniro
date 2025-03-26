import React from 'react';
import { MdDelete } from 'react-icons/md';

const Cartitem = () => {
  return (
    <tr>
      <td className="pt-5">
        <div className="flex items-center gap-9">
          <div className="w-28 rounded-xl overflow-hidden">
            <img src="/product2.png" alt="product" className="w-full" />
          </div>
          <p className="text-base font-primary font-medium text-secondary">
            Asgaard sofa
          </p>
        </div>
      </td>
      <td className="pt-5">
        <p className="text-base font-primary font-medium text-secondary text-center">
          Rs. 250,000.00
        </p>
      </td>
      <td className="text-base font-primary font-medium text-secondary pt-5">
        <div className="w-8 h-8 border flex justify-center items-center rounded-md m-auto">
          1
        </div>
      </td>
      <td className="text-base font-primary font-medium text-secondary pt-5">
        <div className="flex items-center gap-12 justify-center">
          <p>Rs. 250,000.00</p>
          <button>
            <MdDelete className="text-brand text-xl" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Cartitem;
