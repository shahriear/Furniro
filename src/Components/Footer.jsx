import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-10 px-24 border-t">
      <div className="container">
        <div className="border-b pb-12 flex justify-evenly">
          <div>
            <img src="logo.png" alt="logo" className="f" />
            <p className="w-80 details pt-12">
              400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
            </p>
          </div>
          <div>
            <ul className="">
              <li className="details pb-14">
                <p>Links</p>
              </li>
              <li className="pb-8">
                <Link to="/">Home</Link>
              </li>
              <li className="pb-8">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="pb-8">
                <Link to="/">About</Link>
              </li>
              <li className="pb-8">
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li className="details pb-14">
                <p>Help</p>
              </li>
              <li className="pb-8">
                <Link to="/">Payment Options</Link>
              </li>
              <li className="pb-8">
                <Link to="/">Returns</Link>
              </li>
              <li className="pb-8">
                <Link to="/">Privacy Policies</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="details pb-14">Newsletter</p>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b border-black"
            />
            <button className="font-primary border-b border-black ml-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <p className="font-primary pt-9">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
