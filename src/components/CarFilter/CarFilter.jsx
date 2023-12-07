import Select from "react-select";
import { carBrandSearchStyles } from "../../styles/selectStyles/carBrandSearchStyles";
import {
  FilterFormStyled,
  LabelStyled,
  SelectorContainerStyled,
} from "./CarFilter.styled";
import { priceSelectStyles } from "../../styles/selectStyles/priceSelectStyles";

const carBrand = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
const priceForHour = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CarFilter = () => {

  const carBrandDefaultValue = { value: "", label: "Enter the text" };
  const priceDefaultValue = { value: "", label: "To $" };


  return (
    <FilterFormStyled method="post">
      <SelectorContainerStyled>
        <LabelStyled htmlFor="carBrand">Car brand</LabelStyled>
        <Select
          options={carBrand}
          styles={carBrandSearchStyles}
          id="carBrand"
          defaultValue={carBrandDefaultValue}
        />
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="price">Price/ 1 hour</LabelStyled>
        <Select
          options={priceForHour}
          styles={priceSelectStyles}
          id="price"
          defaultValue={priceDefaultValue}
        />
      </SelectorContainerStyled>
    </FilterFormStyled>
  );
};

export default CarFilter;
