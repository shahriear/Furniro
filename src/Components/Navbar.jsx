import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import {
  MdManageAccounts,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import CardSideBar from './Card/CardSideBar';

const Navbar = () => {
  const [show, setshow] = useState(true);
  const [sideCard, setSideCard] = useState(false);
  const handelSidebar = result => {
    setSideCard(result);
  };

  return (
    <>
      <nav className="py-7 relative">
        <div className="container  flex justify-between items-center ">
          <div className="logo ">
            <img src="/logo.png" alt="logo" />
          </div>
          <ul
            className={`absolute ${
              !show ? '-translate-x-full' : 'translate-x-0'
            } lg:static gap-16 flex flex-col lg:flex-row w-1/2 lg:w-auto items-center font-primary text-lg font-medium text-black  top-full left-0  bg-white lg:h-auto transition-all pb-20 lg:pb-0   `}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div>
            <ul className="flex items-center gap-[45px]">
              <li className="text-3xl">
                <Link>
                  <MdManageAccounts />
                </Link>
              </li>
              <li className="text-3xl">
                <Link>
                  <BiSearchAlt />
                </Link>
              </li>
              <li className="text-3xl">
                <Link>
                  <MdFavoriteBorder />
                </Link>
              </li>
              <li onClick={() => setSideCard(true)}>
                <MdOutlineShoppingCart className="text-3xl cursor-pointer" />
              </li>
            </ul>
          </div>
          <button className="block lg:hidden" onClick={() => setshow(!show)}>
            <FaBars className="text-3xl" />
          </button>
        </div>
      </nav>
      {sideCard && <CardSideBar handelSidebar={handelSidebar} />}
    </>
  );
};

export default Navbar;
