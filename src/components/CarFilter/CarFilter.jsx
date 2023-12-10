import Select from 'react-select';
import { carBrandSearchStyles } from '../../styles/selectStyles/carBrandSearchStyles';
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
} from './CarFilter.styled';
import { priceSelectStyles } from '../../styles/selectStyles/priceSelectStyles';



const CarFilter = props => {
  const carBrandDefaultValue = { value: '', label: 'Enter the text' };
  const priceDefaultValue = { value: '', label: '$' };

  const { carInfo } = props;

  const handleMileageChange = e => {
    return console.log(e.target.value);
  };

  // до селекта №1
  let carsMarkOptions = [];

  if (carInfo.length > 0) {
    carInfo.forEach(item => {
      const carsMark = item.make;
      carsMarkOptions.push({ value: carsMark, label: carsMark });
    });
  }

  //   // до селекта №2
  let carsPriceOptions = [];

  if (carInfo.length > 0) {
    carInfo.forEach(item => {
      const carsPrice = item.rentalPrice;
      carsPriceOptions.push({ value: carsPrice, label: carsPrice });
    });
  }

  return (
    <FilterFormStyled method="post">
      <SelectorContainerStyled>
        <LabelStyled htmlFor="carBrand">Car brand</LabelStyled>
        <Select
          options={carsMarkOptions}
          styles={carBrandSearchStyles}
          id="carBrand"
          defaultValue={carBrandDefaultValue}
        />
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="price">Price/ 1 hour</LabelStyled>
        <MileageContainer>
          <Select
            options={carsPriceOptions}
            styles={priceSelectStyles}
            id="price"
            defaultValue={priceDefaultValue}
          />

          <PriseHourText>To</PriseHourText>
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
