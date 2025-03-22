import React from 'react';
import Banner from '../Components/Shop/Banner';
import Filter from '../Components/Shop/Filter';
import Product_pagination from '../Components/Shop/Product_pagination';

const Shop = () => {
  return (
    <>
      <Banner />
      <Filter />
      <Product_pagination itemsPerPage={16} />
    </>
  );
};

export default Shop;
