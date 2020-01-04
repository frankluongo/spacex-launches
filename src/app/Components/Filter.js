import React from "react";

import "../../scss/components/filter.css";
import Checkmark from "../Icons/Checkmark";

const Filter = ({ filterAction, name, value, isDisabled }) => {
  return (
    <div className="website-filter">
      <input
        className="website-filter__checkbox"
        type="checkbox"
        name={name}
        value={value}
        id={name}
        onChange={filterAction}
        disabled={isDisabled}
      />
      <span className="website-filter__checkmark">
        <Checkmark modifiers="checkmark__icon" />
      </span>
      <label className="website-filter__label" htmlFor={name}>
        {value}
      </label>
    </div>
  );
};

Filter.defaultProps = {
  filterAction: () => {
    console.log("hi");
  },
  name: "landSuccess",
  value: "Land Success",
  isDisabled: false
};

export default Filter;
