import React from 'react';
import { FaGreaterThan } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
const Breadcrumb = () => {
  const location = useLocation();
  const path1 = location.pathname.split('/')[1];
  const path2 = location.pathname.split('/')[2];

  return (
    <ul className="flex items-center  justify-center gap-6 mt-1">
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
        <Link
          to={`/${path1}`}
          className="font-primary text-primary text-[16px] font-light"
        >
          {path1}
        </Link>
      </li>
      {
        <>
          <li>
            <FaGreaterThan className="mx-2" />
          </li>
          <li>
            <p className="font-primary text-primary text-[16px] font-light border-l-2 border-l-secondary pl-8">
              {path2}
            </p>
          </li>
        </>
      }
    </ul>
  );
};

export default Breadcrumb;

// video-14-done nxt--15
