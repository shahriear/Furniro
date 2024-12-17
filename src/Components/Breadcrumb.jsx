import React from 'react';
import { FaGreaterThan } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
const Breadcrumb = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <ul className="flex items-center  justify-center">
      <li>
        <Link
          to="/"
          className="font-primary text-primary text-[16px] font-medium"
        >
          Home
        </Link>
      </li>
      <li>
        <FaGreaterThan className="mx-2" />
      </li>
      <li>
        <p className="font-primary text-primary text-[16px] font-light">
          {path}
        </p>
      </li>
    </ul>
  );
};

export default Breadcrumb;
