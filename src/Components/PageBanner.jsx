import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageBanner = ({ tital }) => {
  return (
    <section className="flex flex-col items-center justify-center bg-[url('/bannerShop.png')] bg-cover bg-no-repeat w-full h-[316px] bg-center ">
      <div className="container ">
        <img src="/logo-icon.png" alt="logo-icon" className="m-auto" />
        <h2 className="title pb-3 text-center">{tital}</h2>
        <Breadcrumb />
      </div>
    </section>
  );
};

export default PageBanner;
