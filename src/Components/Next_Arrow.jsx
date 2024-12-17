import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const Next_Arrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer h-12 w-12 rounded-full bg-white flex justify-center items-center text-brand text-3xl absolute top-1/2 right-0 -translate-y-1/2 border-[2px] border-brand hover:bg-yellow-200"
    >
      <MdArrowForwardIos />
    </div>
  );
};

export default Next_Arrow;
