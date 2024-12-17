import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ title, path }) => {
  return (
    <Link
      className="text-white font-bold text-[16px] bg-brand py-[25px] px-[72px]"
      to={path}
    >
      {title}
    </Link>
  );
};

export default Button;
