"use client";

import { MouseEvent, useRef, useState } from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  

  return (
    <div
      className="w-full h-full border-2 border-[#2F2F2F] m-2  rounded-3xl shadow-md"
    >
      <div className="flex flex-col items-start text-start gap-5 p-5">
        <img
          className="w-[382px] h-[250px] rounded-3xl object-cover"
          alt="Img"
          src={imageSrc}
        />
        <div className="flex flex-col items-start gap-5 justify-center">
          <p className="md:w-[366px] h-[54px] font-medium text-white text-[24px] text-ellipsis overflow-hidden leading-[24.1px] overflow-hidden">
            {title}
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="w-[4px] h-[4px] bg-[#1E1E1E] rounded-[2px]" />
          </div>
          <div className="">
          <p className="md:w-[336px] w-[220px] font-normal text-[#7F7F7F] text-[16px] tracking-[0] leading-[23px] overflow-none " >

            {description}
          </p>
          <div className=" font-medium text-white text-[16px] tracking-[0] leading-[normal] underline whitespace-nowrap overflow-hidden">
            See More
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};