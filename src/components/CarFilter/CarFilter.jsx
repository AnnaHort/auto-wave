import React from "react";
import Select from "react-select";

import {
  FilterFormStyled,
  LabelStyled,
  SelectorContainerStyled,
} from "./CarFilter.styled";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const carBrandSearchStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: "#d9d9d9",
    boxShadow: state.isFocused ? "transparent" : "none",
    width: "224px",
    height: "48px",
    "&:hover": {
      borderColor: "#d9d9d9",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: state.isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
    "&:hover": {
      backgroundColor: state.isFocused ? "transparent" : "#transparent",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    width: "224px",
  }),
};

const CarFilter = () => {
  const defaultValue = { value: "", label: "Enter the text" };
  return (
    <FilterFormStyled method="post">
      <SelectorContainerStyled>
        <LabelStyled htmlFor="carBrand">Car brand</LabelStyled>
        <Select
          options={options}
          styles={carBrandSearchStyles}
          id="carBrand"
          defaultValue={defaultValue}
        />
      </SelectorContainerStyled>
    </FilterFormStyled>
  );
};

export default CarFilter;
