import React from "react";
import Select from "react-select";
import { carBrandSearchStyles } from "../../styles/selectStyles/carBrandSearchStyles";
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
