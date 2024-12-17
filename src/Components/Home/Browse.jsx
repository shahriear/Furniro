import React from 'react';

const Browse = () => {
  return (
    <section className="mb-[56px]">
      <div className="container">
        <div>
          <h1 className="title text-center pt-14">Browse The Range</h1>
          <p className="details text-center pb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-[20px] md:px-48">
            <div className="w-1/3">
              <img src="/pic1.png" className="w-full rounded-xl" alt="pic1" />
              <p className="text-[24px] font-primary font-semibold text-primary text-center pt-[30px]">
                Dining
              </p>
            </div>
            <div className="w-1/3">
              <img src="/pic2.png" className="w-full rounded-xl" alt="pic2" />
              <p className="text-[24px] font-primary font-semibold text-primary text-center pt-[30px]">
                Living
              </p>
            </div>
            <div className="w-1/3">
              <img src="/pic3.png" className="w-full rounded-xl" alt="pic3" />
              <p className="text-[24px] font-primary font-semibold text-primary text-center pt-[30px]">
                Bedroom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
