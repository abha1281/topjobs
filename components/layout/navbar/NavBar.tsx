import Image from "next/image";
import React from "react";
import CustomLink from "../../globals/atoms/CustomLink";

type Props = {};

const links = [
  {
    name: "find a job",
    link: "/find_a_job",
  },
  {
    name: "categories",
    link: "/categories",
  },
  {
    name: "community",
    link: "/community",
  },
];

const NavBar = (props: Props) => {
  return (
    <div className="py-7 flex justify-between items-center xl:mx-0 mx-4">
      <div className="flex gap-x-4">
        <Image src="/MainIcon.svg" width={96} height={21} alt="Main Icon" />
        <p className="text-gray-400 text-xs xl:block hidden">
          Find the job that fits you the best
        </p>
      </div>
      <div className="gap-x-6 items-center xl:flex hidden">
        {links.map((link, index) => (
          <CustomLink
            link={link.link}
            key={`link-${index}`}
            className="capitalize text-sm text-gray-500"
          >
            {link.name}
          </CustomLink>
        ))}
        <button className="rounded-[4px] bg-violet-600 px-4 py-2 text-white font-medium">
          Post a job
        </button>
      </div>
      <button className="relative xl:hidden w-6 h-6">
        <Image src="/icons/Menu.svg" alt="Menu" layout="fill" />
      </button>
    </div>
  );
};

export default NavBar;
