import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full relative">
      <div className="text-white flex flex-col items-center gap-y-6 py-[58px]">
        <h1 className="font-bold text-5xl max-w-lg text-center">
          Top jobs board for professionals
        </h1>
        <p className="max-w-[410px] text-center">
          Discover your next career move with over <span className="font-medium">15 000</span> opening vacancies,
          customer support, sowtware, design anywhere in the world or remotely.
        </p>
      </div>
      <Image layout="fill" alt="Banner" src="/Banner.png" objectFit="cover" className="-z-10"/>
    </div>
  );
};

export default Banner;
