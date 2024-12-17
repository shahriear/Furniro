import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdManageAccounts,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav>
      <div className="container py-7 flex justify-between">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <ul className="flex gap-16 items-center font-primary text-sm font-medium">
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
            <li className="text-3xl">
              <Link>
                <MdOutlineShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
