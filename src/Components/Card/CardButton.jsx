import React from 'react';

const CardButton = ({ title }) => {
  return (
    <button className="py-2 px-8 border border-secondary rounded-full font-primary font-normal text-xs text-black">
      {title}
    </button>
  );
};

export default CardButton;
