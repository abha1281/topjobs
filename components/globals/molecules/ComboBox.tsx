import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Item = {
  id: string;
  name: string;
};

type Props = {
  list: Item[];
  defaultValue?: Item;
  placeholder?: string;
  onChange: (value: string) => void;
  onSelect: (selectedItem: Item) => void;
};

const ComboBox = ({
  list,
  defaultValue,
  onSelect,
  onChange,
  placeholder = "Search...",
}: Props) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? list[0]);

  const handleChange = (item: Item) => {
    setSelectedValue(item);
    onSelect(item);
  };

  return (
    <Combobox value={selectedValue} onChange={handleChange} as="div" className="relative">
      <Combobox.Input
        className="ring-1 px-3 py-2 ring-gray-300 rounded-[4px] w-full placeholder:text-gray-200"
        placeholder={placeholder}
        displayValue={() => selectedValue.name}
        onChange={event => {
          onChange(event.target.value);
        }}
      />
      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-100 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-100 opacity-0"
        className="absolute top-12 z-10 w-full bg-white"
      >
        <Combobox.Options className="shadow-lg w-full max-h-60 overflow-y-scroll rounded-[4px] ring-1 ring-[#D4D4D8]">
          {list.map(option => (
            <Combobox.Option key={option.id} value={option}>
              {({ active, selected }) => (
                <div className="cursor-pointer px-3 py-2 hover:bg-gray-100 flex items-center gap-x-2">
                  <div
                    className={`${
                      selected ? "bg-blue-500" : "ring-1 ring-gray-300 bg-white"
                    }  h-4 w-4 rounded-[4px] flex justify-center items-center`}
                  >
                    <Image
                      src="/icons/Tick.svg"
                      width={8}
                      height={6}
                      alt="Tick"
                    />
                  </div>
                  <p>{option.name}</p>
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};

export default ComboBox;
