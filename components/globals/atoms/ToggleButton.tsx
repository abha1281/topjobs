import { useState } from "react";
import { Switch } from "@headlessui/react";

type Props = {
  text: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const ToggleButton = ({ text, value, onChange }: Props) => {
  return (
    <Switch
      checked={value}
      onChange={onChange}
      className="relative bg-gray-200 inline-flex h-4 w-7 items-center rounded-lg"
    >
      <span className="sr-only">{text}</span>
      <span
        className={`${
          value ? "translate-x-3 bg-violet-600" : "translate-x-0 bg-violet-300"
        } transition-all duration-100 inline-block h-4 w-4 transform rounded-full `}
      />
    </Switch>
  );
};

export default ToggleButton;
