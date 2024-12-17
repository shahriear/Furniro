import { Container } from 'postcss';
import React, { useEffect, useRef } from 'react';

const Setup_Part = () => {
  // const setupRef = useRef(null);
  // useEffect(() => {
  //   const handleMouseMove = e => {
  //     const { clientX, clientY, currentTarget } = e;
  //     const { width, height } = currentTarget.getBoundingClientRect();
  //     const centerX = width / 2;
  //     const centerY = height / 2;

  //     const sensitivity = 1;
  //     const deltaX = (centerX - clientX) / sensitivity;
  //     const deltaY = (centerY - clientY) / sensitivity;

  //     setupRef.current.style.transform = `translate(calc(-50% + ${deltaX}px,calc(-50% + ${deltaY}px)))`;
  //   };

  //   const container = document.querySelector('.container');
  //   container.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     container.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="pb-12 mb-14">
      <p className="details text-center">Share your setup with</p>
      <h1 className="title text-center pb-7">#FuniroFurniture</h1>
      {/* ref={setupRef} */}
      <div className="setup h-[721px] gap-2">
        <img src="setup-2.png" alt="pic" className="w-full h-full" />
        <img src="setup-3.png" alt="pic" className="w-full h-full" />
        <img src="setup-1.png" alt="pic" className="w-full h-full" />
        <img src="setup-4.png" alt="pic" className="w-full h-full" />
        <img src="setup-5.png" alt="pic" className="w-full h-full" />
        <img src="setup-6.png" alt="pic" className="w-full h-full" />
        <img src="setup-7.png" alt="pic" className="w-full h-full" />
        <img src="setup-8.png" alt="pic" className="w-full h-full" />
        <img src="setup-9.png" alt="pic" className="w-full h-full" />
      </div>
    </div>
  );
  // window.addEventListener('mousemove', e => {
  //   let x = e.clientX - Container.getBoundingClientRect().left;
  //   let y = e.clientX - Container.getBoundingClientRect().top;
  //   setup.style.transform = `translate(-${x}px,-${y * 2}px)`;
  // });
};

export default Setup_Part;
