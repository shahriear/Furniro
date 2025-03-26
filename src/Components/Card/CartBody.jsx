import React from 'react';
import Cartitem from './Cartitem';
import CardButton from './CardButton';

const CartBody = () => {
  return (
    <section className="py-16">
      <div className="container flex gap-8 ">
        {/* ========Item Section====== */}
        <table className="w-3/4">
          <thead>
            <tr>
              <th className="bg-third py-4 font-primary font-medium text-black">
                Product
              </th>
              <th className="bg-third py-4 font-primary font-medium text-black">
                Price
              </th>
              <th className="bg-third py-4 font-primary font-medium text-black">
                Quantity
              </th>
              <th className="bg-third py-4 font-primary font-medium text-black">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
          </tbody>
        </table>
        {/* ========Cart Total Section====== */}
        <div className="w-1/4 px-16 pt-6 pb-12 bg-third text-center h-fit">
          <h3 className=" font-primary font-semibold text-3xl mb-16">
            Cart Totals
          </h3>
          <div className="flex justify-between">
            <p className="font-primary font-medium text-base">Subtotal</p>
            <p className="font-primary font-medium text-secondary text-base">
              Rs. 250,000.00
            </p>
          </div>
          <div className="flex justify-between pt-8 pb-10">
            <p className="font-primary font-medium text-base">Subtotal</p>
            <p className="font-primary font-medium text-brand">
              Rs. 250,000.00
            </p>
          </div>
          <CardButton path="/check-out" title="Check out" />
        </div>
      </div>
    </section>
  );
};

export default CartBody;
