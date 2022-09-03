import Image from "next/image";
import React from "react";
import userBlogs from "../../pages/api/blogs";

type Props = {};

const Recents = (props: Props) => {
  return (
    <div className="space-y-3">
      <p className="text-gray-900 font-bold">Recent View</p>
      <div className="space-y-2 mb-2">
        {userBlogs.map((blog, index) => (
          <div className="text-xs" key={index + "blog"}>
            <p className="text-gray-700">{blog.user.name}</p>
            <p className="text-gray-900 font-medium">{blog.title}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-gray-900 font-bold">Top Companies</p>
        <div className="space-y-2">
          {userBlogs.slice(0, 2).map((blog, index) => (
            <div className="flex gap-x-2" key={index + "blog" + index}>
              <div className="w-4 h-4 relative">
                <Image
                  className="rounded-full"
                  layout="fill"
                  alt={blog.user.name}
                  objectFit="cover"
                  src={blog.user.avatar_url}
                />
              </div>
              <p className="font-medium text-xs">{blog.user.company}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-3">
        <div className=" bg-violet-500 w-full aspect-[256/365] rounded-lg relative overflow-hidden">
          <div className="h-full flex flex-col justify-center text-white gap-y-2 px-6">
            <p className="font-bold text-2xl">Want keep up-to-date?</p>
            <p className="font-medium text-xs">
              Get a daily email of all new jobs
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm placeholder:text-gray-300 py-2 px-3 w-full mt-2 rounded-[4px] text-gray-900"
            />
          </div>
          <div className="absolute -top-40 -left-12 w-56 h-56 rounded-full bg-violet-300" />
          <div className="absolute -bottom-5 -right-5 w-[107px] h-[107px] rounded-full bg-violet-300" />
        </div>
      </div>
    </div>
  );
};

export default Recents;
