import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SelectOption from "../atoms/SelectOption";

type Item = {
  id: string;
  name: string;
};

type Props = {
  list: Item[];
  type: string;
  onSelect: (item: Item) => void;
};

const MultiSelect = ({ list, onSelect, type }: Props) => {
  const all = {
    id: "all",
    name: `All ${type}`,
  };
  const [selectedOptions, setSelectedOptions] = useState<Item[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const removeSelection = (removeThis: Item) => {
    const newList = selectedOptions.filter(item => item.id !== removeThis.id);
    setSelectedOptions(newList);
  };

  useEffect(() => {
    selectedOptions.length === list.length ? setSelectAll(true) : null;
  }, [selectedOptions]);

  return (
    <Listbox
      value={selectedOptions}
      as="div"
      className="relative"
      onChange={setSelectedOptions}
      multiple
    >
      <Listbox.Button className="ring-1 px-3 py-2 ring-gray-300 rounded-[4px] w-full h-10 whitespace-nowrap overflow-x-hidden text-left bg-white">
        {selectAll
          ? "All Selected"
          : selectedOptions.map(person => person.name).join(", ")}
      </Listbox.Button>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-100 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-100 opacity-0"
        className="absolute top-12 z-10 w-full bg-white"
      >
        <Listbox.Options className="shadow-lg w-full max-h-60 overflow-y-scroll rounded-[4px] ring-1 ring-[#D4D4D8]">
          <SelectOption
            onClick={() => {
              !selectAll && onSelect(all);
              setSelectAll(!selectAll);
            }}
            selected={selectAll}
            option={all}
          />
          {list.map(item => {
            let selected = selectedOptions.includes(item);
            return (
              <Listbox.Option key={item.id} value={item}>
                <SelectOption
                  onClick={() => {
                    selectAll && setSelectAll(false);
                    selected && removeSelection(item)}}
                  selected={selected || selectAll}
                  option={item}
                />
              </Listbox.Option>
            );
          })}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default MultiSelect;
