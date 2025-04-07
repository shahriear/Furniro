import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import Details from '../Components/ProductDetails/Details';
import RealatedProducts from '../Components/ProductDetails/RealatedProducts';

const ProductDetails = () => {
  return (
    <section>
      <div className="py-8 bg-third">
        <Breadcrumb />
      </div>
      <Details />
      <RealatedProducts />
    </section>
  );
};

export default ProductDetails;
