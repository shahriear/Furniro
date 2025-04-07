import React, { useState } from 'react';
import ProductSlide from 'product-slide';
import { FaStar } from 'react-icons/fa';
import { FaStarHalf } from 'react-icons/fa6';
import CardButton from '../Card/CardButton';

const API = {
  images: [
    'https://i.imgur.com/QkIa5tT.jpeg',
    'https://i.imgur.com/jb5Yu0h.jpeg',
    'https://i.imgur.com/UlxxXyG.jpeg',
  ],
};

const Details = () => {
  const [selectSize, setselectSize] = useState(null);
  const [selectColor, setselectColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const settings = {
    direction: ' vertical', // or "horizontal"
    zoom: true, // or false
  };
  console.log(setselectSize);

  return (
    <section className="py-9">
      <div className="container flex gap-20">
        <div className=" flex gap-20">
          <div className="w-1/2">
            <ProductSlide settings={settings} api={API.images} />
          </div>
          <div className="w-1/2">
            <h2 className="title pb-2">Asgaard sofa</h2>
            <p className="font-primary font-medium text-2xl text-secondary">
              Rs. 250,000.00
            </p>
            <ul className="flex items-center gap-2 text-xl text-orange-300 py-4 ">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStarHalf />
              </li>
            </ul>
            <p className="font-primary font-normal text-base pb-5">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="pb-5">
              <p className="font-primary font-normal text-base text-secondary pb-2">
                Size
              </p>
              <div className="flex gap-4">
                <label
                  htmlFor="L"
                  className={`w-8 h-8 ${
                    selectSize === 'L' ? 'bg-brand' : 'bg-third'
                  } rounded-lg text-black font-primary justify-center flex items-center cursor-pointer`}
                >
                  L
                  <input
                    type="radio"
                    id="L"
                    name="size"
                    value="L"
                    onChange={e => setselectSize(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="XL"
                  className={`w-8 h-8 ${
                    selectSize === 'XL' ? 'bg-brand' : 'bg-third'
                  } rounded-lg text-black font-primary justify-center flex items-center cursor-pointer`}
                >
                  XL
                  <input
                    type="radio"
                    id="XL"
                    name="size"
                    value="XL"
                    onChange={e => setselectSize(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="XS"
                  className={`w-8 h-8 ${
                    selectSize === 'XS' ? 'bg-brand' : 'bg-third'
                  } rounded-lg text-black font-primary justify-center flex items-center cursor-pointer`}
                >
                  XS
                  <input
                    type="radio"
                    id="XS"
                    name="size"
                    value="XS"
                    onChange={e => setselectSize(e.target.value)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="pb-5">
              <p className="font-primary font-normal text-base text-secondary pb-2">
                Color
              </p>
              <div className="flex gap-4">
                <label
                  htmlFor="blue"
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectColor === 'blue' && 'scale-110'
                  }`}
                  style={{ background: 'blue' }}
                >
                  <input
                    type="radio"
                    id="blue"
                    name="Color"
                    value="blue"
                    onChange={e => setselectColor(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="black"
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectColor === 'black' && 'scale-110'
                  }`}
                  style={{ background: 'black' }}
                >
                  <input
                    type="radio"
                    id="black"
                    name="Color"
                    value="black"
                    onChange={e => setselectColor(e.target.value)}
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor="green"
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectColor === 'green' && 'scale-110'
                  }`}
                  style={{ background: 'green' }}
                >
                  <input
                    type="radio"
                    id="green"
                    name="Color"
                    value="green"
                    onChange={e => setselectColor(e.target.value)}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-5 items-center pb-14 border-b">
              <div className="flex py-4 px-2 gap-9 border w-fit rounded-xl text-lg">
                <button
                  onClick={() => {
                    quantity > 0 && setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <CardButton title={'Add To Cart'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
//video---->>>  18
