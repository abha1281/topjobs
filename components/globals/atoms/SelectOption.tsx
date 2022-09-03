import Image from "next/image";
import React from "react";

type Option = {
  id: string;
  name: string;
};

type Props = {
  selected: boolean;
  option: Option;
  onClick?: () => void;
  extraClass?: string;
};

const SelectOption = ({ selected, option, onClick, extraClass = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${extraClass} w-full px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2`}
    >
      <div
        className={`${
          selected ? "bg-blue-500" : "ring-1 ring-gray-300 bg-white"
        }  h-4 w-4 rounded-[4px] flex justify-center items-center`}
      >
        <Image src="/icons/Tick.svg" width={8} height={6} alt="Tick" />
      </div>
      <p>{option.name}</p>
    </button>
  );
};

export default SelectOption;
