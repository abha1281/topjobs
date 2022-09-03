import React from "react";

type Option = {
  id: string;
  name: string;
};

type Props = {
  option: Option;
  active: boolean;
  onClick: (option: Option) => void;
};

const RadioInput = ({ option, active, onClick }: Props) => {
  return (
    <button
      onClick={() => onClick(option)}
      className="flex gap-x-2 items-center group w-max"
    >
      <div
        className={`w-4 h-4 flex justify-center rounded-full transition-colors ease-out ${
          active
            ? "bg-violet-600"
            : "bg-white group-hover:bg-violet-300 ring-1 ring-gray-400 group-hover:ring-white"
        }`}
      >
        <div className="w-1 h-1 rounded-full bg-white my-auto" />
      </div>
      <p className="text-sm capitalize text-gray-500">{option.name}</p>
    </button>
  );
};

export default RadioInput;
