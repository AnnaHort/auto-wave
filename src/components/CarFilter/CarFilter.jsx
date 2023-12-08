import Select from "react-select";
import { carBrandSearchStyles } from "../../styles/selectStyles/carBrandSearchStyles";
import {
  CarMileageFromInput,
  CarMileageToInput,
  FilterFormStyled,
  LabelStyled,
  SelectorContainerStyled,
  SpanText,
  MileageContainer,
  MileageInputContainer,
  FilterButton,
  PriseHourText,
} from "./CarFilter.styled";
import { priceSelectStyles } from "../../styles/selectStyles/priceSelectStyles";

const carBrand = [
  { value: "buick", label: "Buick" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const priceForHour = [
  { value: "30$", label: "30" },
  { value: "40$", label: "40" },
  { value: "50$", label: "50" },
];

const handleMileageChange = (e) => {
  return console.log(e.target.value);
};

const CarFilter = () => {
  const carBrandDefaultValue = { value: "", label: "Enter the text" };
  const priceDefaultValue = { value: "", label: "" };

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
        <MileageContainer>
          <Select
            options={priceForHour}
            styles={priceSelectStyles}
            id="price"
            defaultValue={priceDefaultValue}
          />
        
          <PriseHourText>
            To $
          </PriseHourText>
        </MileageContainer>
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="mileage">Car mileage / km</LabelStyled>
        <MileageInputContainer>
          <MileageContainer>
            <CarMileageFromInput type="text" onChange={handleMileageChange} />
            <SpanText>From</SpanText>
          </MileageContainer>

          <MileageContainer>
            <CarMileageToInput type="text" />
            <SpanText>To</SpanText>
          </MileageContainer>
        </MileageInputContainer>
      </SelectorContainerStyled>

      <FilterButton type="button">Search</FilterButton>

    </FilterFormStyled>
  );
};

export default CarFilter;
