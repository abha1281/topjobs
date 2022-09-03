import React, { useState } from "react";
import locations from "../../pages/api/locations";
import RadioInput from "../globals/atoms/RadioInput";
import ToggleButton from "../globals/atoms/ToggleButton";
import ComboBox from "../globals/molecules/ComboBox";
import MultiSelect from "../globals/molecules/MultiSelect";

const filterOptions = [
  {
    id: "all",
    name: "all offers",
  },
  {
    id: "most_relevant",
    name: "Most Relevant",
  },

  {
    id: "recommended",
    name: "recommended",
  },

  {
    id: "most_recent",
    name: "Most Recent",
  },
];

type Props = {};

const Filter = (props: Props) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isRemote, setIsRemote] = useState(false);

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <p className="font-bold">Filters</p>
        {filterOptions.map(option => (
          <RadioInput
            active={selectedFilter === option.id}
            option={option}
            key={option.id}
            onClick={value => setSelectedFilter(value.id)}
          />
        ))}
      </div>
      <div className="space-y-3">
        <p className="font-bold">Location</p>
        <ComboBox
          onChange={value => setSearchLocation(value)}
          onSelect={location => setSearchLocation(location.id)}
          list={locations}
        />
      </div>

      <div className="space-y-3">
        <p className="font-bold">Type of Work</p>
        <MultiSelect
          type="Types"
          onSelect={values => console.log(values)}
          list={locations}
        />
      </div>

      <div className="space-y-3">
        <p className="font-bold">Industries</p>
        <MultiSelect
          type="Industries"
          onSelect={values => console.log(values)}
          list={locations}
        />
      </div>

      <div className="flex gap-x-2 items-center">
        <ToggleButton
          value={isRemote}
          text={"Only Remote"}
          onChange={() => setIsRemote(!isRemote)}
        />
        <p className="text-sm text-gray-500">Only Remote</p>
      </div>
    </div>
  );
};

export default Filter;
