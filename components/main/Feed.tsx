import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import userBlogs from "../../pages/api/blogs";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="space-y-3 col-span-2 bg-white xl:mx-[72px] mx-2.5 rounded-[4px] shadow-md">
      <div className="border-b border-gray-200 px-[22.5px] py-5 flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />
          <input placeholder="Start searching..." />
        </div>
        <button className="items-center text-gray-500 gap-x-1 xl:flex hidden">
          Sort by:
          <span className="font-medium text-sm">Lastest</span>
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      </div>
      {userBlogs.map((blog, index) => (
        <div key={index} className="py-6 mx-6 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <div className="relative w-8 h-8">
                <Image
                  className="rounded-full"
                  src={blog.user.avatar_url}
                  alt={blog.user.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-gray-700 font-medium">
                {blog.user.company}
                <span className="text-gray-400 text-xs font-normal">
                  {" "}
                  • {blog.user.name}
                </span>
              </p>
            </div>
            <p className="text-xs text-violet-700 capitalize">
              {blog.uploaded}
            </p>
          </div>
          <div>
            <p className="font-bold text-lg text-gray-900">{blog.title}</p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">{blog.message}</p>
              <button>
                <Image
                  src="/icons/Heart.svg"
                  alt="Heart"
                  width={16}
                  height={14}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
