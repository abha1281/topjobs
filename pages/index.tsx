import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Feed from "../components/main/Feed";
import Filter from "../components/main/Filter";
import Recents from "../components/main/Recents";

// will change the components later

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4">
      <div className="hidden xl:block">
        <Filter />
      </div>
      <button className="ring-1 ring-gray-800 flex items-center justify-center mx-2.5 py-2 rounded-[4px] gap-x-2 mb-4 xl:hidden">
        <p className="text-gray-700 text-sm ">Filters</p>
        <p className="bg-violet-600 rounded-full text-[10px] text-white font-medium w-4 h-4">
          1
        </p>
      </button>
      <Feed />
      <div className="hidden xl:block">
        <Recents />
      </div>
    </div>
  );
};

export default Home;
