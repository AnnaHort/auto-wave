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

import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterSearchMileageFrom,
  selectFilterSearchMileageTo,
  selectCarsInfo,
  selectFilterSearchPrice,
} from '../../redux/selectors';
import {
  getCarInfo,
  getFilterMileageFrom,
  getFilterMileageTo,
  getFilterModel,
  getFilterPrice,
} from '../../redux/carSlice';
import { getAllCarsInfo } from '../../redux/operations';
import { useState } from 'react';

const CarFilter = () => {
  const dispatch = useDispatch();
  const [, setIsLoading] = useState(false);

  const searchPrice = useSelector(selectFilterSearchPrice);
  const carsDataFilter = useSelector(selectCarsInfo);
  const searchMileageFrom = useSelector(selectFilterSearchMileageFrom);
  const searchMileageTo = useSelector(selectFilterSearchMileageTo);

  const [filteredCarsInfo, setFilteredCarsInfo] = useState(carsDataFilter);

  const carBrandDefaultValue = { value: '', label: 'Enter the text' };
  const priceDefaultValue = { value: '', label: '$' };

  const carsMarkOptions = [
    'Buick', 'Volvo', 'HUMMER', 'Subaru', 'Mitsubishi', 'Nissan', 'Lincoln',
    'GMC', 'Hyundai', 'MINI', 'Bentley', 'Mercedes-Benz', 'Aston Martin', 'Pontiac',
    'Lamborghini', 'Audi', 'BMW', 'Chevrolet', 'Mercedes-Benz', 'Chrysler', 'Kia', 'Land',
  ];
  const transformedMarkOptions = carsMarkOptions.map(mark => ({
    value: mark,
    label: mark,
  }));

  let carsPrice = [];
  for (let i = 10; i <= 150; i += 10) {
    carsPrice.push({ value: i, label: i });
  }
  const carsPriceObj = carsPrice.map(item => ({
    value: item.value + '$',
    label: item.label + '$',
  }));

  const handleFilterCar = async e => {
    e.preventDefault();

    const mileageFrom = parseInt(document.getElementById('mileageFrom').value);
    const mileageTo = parseInt(document.getElementById('mileageTo').value);

    if (mileageFrom && mileageFrom !== null) {
      dispatch(getFilterMileageFrom(mileageFrom));
    }
    if (mileageTo && mileageTo !== null) {
      dispatch(getFilterMileageTo(mileageTo));
    }

    try {
      const response = await dispatch(getAllCarsInfo());
      const carsData = response.payload;

      let filteredCars = carsData;

      if (searchPrice && searchPrice !== '') {
        const numericSearchPrice = parseInt(searchPrice.replace('$', ''), 10);
        filteredCars = filteredCars.filter(car => {
          const numericRentalPrice = parseInt(
            car.rentalPrice.replace('$', ''),
            10
          );
          return numericRentalPrice <= numericSearchPrice;
        });
      }

      // if (searchMileageFrom !== null && searchMileageTo !== null) {
      //   filteredCars = filteredCars.filter(car => {
      //     const rentalMileageCar = car.mileage;
      //     return rentalMileageCar >= searchMileageFrom && rentalMileageCar <= searchMileageTo;
      //   });
      // } else if (searchMileageFrom !== null) {
      //   filteredCars = filteredCars.filter(car => car.mileage >= searchMileageFrom);
      // } else if (searchMileageTo !== null) {
      //   filteredCars = filteredCars.filter(car => car.mileage <= searchMileageTo);
      // }
      
      setFilteredCarsInfo(filteredCars);
      dispatch(getCarInfo(filteredCars));
      setIsLoading(true);
    } catch (error) {
      console.error('Error fetching carInfo:', error);
    }
  };
  
  return (
    <FilterFormStyled method="post" onSubmit={handleFilterCar}>
      <SelectorContainerStyled>
        <LabelStyled htmlFor="carBrand">Car brand</LabelStyled>
        <Select
          options={transformedMarkOptions}
          styles={carBrandSearchStyles}
          id="carBrand"
          defaultValue={carBrandDefaultValue}
          onChange={selectedOption =>
            dispatch(getFilterModel(selectedOption.value))
          }
        />
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="price">Price/ 1 hour</LabelStyled>
        <MileageContainer>
          <Select
            options={carsPriceObj}
            styles={priceSelectStyles}
            id="price"
            defaultValue={priceDefaultValue}
            onChange={selectedOption =>
              dispatch(getFilterPrice(selectedOption.value))
            }
          />

          <PriseHourText>To</PriseHourText>
        </MileageContainer>
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="mileage">Car mileage / km</LabelStyled>
        <MileageInputContainer>
          <MileageContainer>
            <CarMileageFromInput type="number" id="mileageFrom" />
            <SpanText>From</SpanText>
          </MileageContainer>

          <MileageContainer>
            <CarMileageToInput type="number" id="mileageTo" />
            <SpanText>To</SpanText>
          </MileageContainer>
        </MileageInputContainer>
      </SelectorContainerStyled>

      <FilterButton type="submit">Search</FilterButton>
    </FilterFormStyled>
  );
};

export default CarFilter;
