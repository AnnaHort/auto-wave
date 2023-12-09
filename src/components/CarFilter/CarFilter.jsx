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
import { useEffect, useState } from 'react';
import axios from 'axios';

const priceForHour = [
  { value: '30$', label: '30' },
  { value: '40$', label: '40' },
  { value: '50$', label: '50' },
];

const handleMileageChange = e => {
  return console.log(e.target.value);
};

const CarFilter = () => {
  const carBrandDefaultValue = { value: '', label: 'Enter the text' };
  const priceDefaultValue = { value: '', label: '' };

  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [carsData, setCarsData] = useState([]);

  // отримання даних про машини
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const carsData = response.data;
        setCarsData(carsData);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, []);

  let carsMarkOptions = []; // Оголосити тут, щоб було доступно за межами блока if

  if (carsData.length > 0) {
    carsData.forEach(item => {
      const carsMark = item.make;
      carsMarkOptions.push({ value: carsMark, label: carsMark }); // Додати варіант до масиву
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
            options={priceForHour}
            styles={priceSelectStyles}
            id="price"
            defaultValue={priceDefaultValue}
          />

          <PriseHourText>To $</PriseHourText>
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
