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
  // selectCarsInfo,
  selectFilterSearchModel,
  selectFilterSearchPrice,
} from '../../redux/selectors';
import { getFilterModel, getFilterPrice } from '../../redux/carSlice';

const CarFilter = (props) => {
  const dispatch = useDispatch();

  // const allCarsInfo = useSelector(selectCarsInfo);
  // console.log(allCarsInfo);
  const searchModel = useSelector(selectFilterSearchModel);
  // console.log(searchModel);
  const searchPrice = useSelector(selectFilterSearchPrice);
  // console.log(searchPrice)

  const carBrandDefaultValue = { value: '', label: 'Enter the text' };
  const priceDefaultValue = { value: '', label: '$' };

  const handleMileageChange = e => {
    return console.log(e.target.value);
  };

  // до селекта №1
  const carsMarkOptions = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Mercedes-Benz',
    'Chrysler',
    'Kia',
    'Land',
  ];
  const transformedMarkOptions = carsMarkOptions.map(mark => ({
    value: mark,
    label: mark,
  }));

  // до селекта №2
  let carsPrice = [];
  for (let i = 10; i <= 150; i += 10) {
    carsPrice.push({ value: i, label: i });
  }
  const carsPriceObj = carsPrice.map(item => ({
    value: item.value + '$',
    label: item.label + '$',
  }));

  const handleFilterCar = e => {
    e.preventDefault();
 const { filterCars } = props;
  filterCars(searchModel, searchPrice);
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
            <CarMileageFromInput type="text" onChange={handleMileageChange} />
            <SpanText>From</SpanText>
          </MileageContainer>

          <MileageContainer>
            <CarMileageToInput type="text" />
            <SpanText>To</SpanText>
          </MileageContainer>
        </MileageInputContainer>
      </SelectorContainerStyled>

      <FilterButton type="submit">Search</FilterButton>
    </FilterFormStyled>
  );
};

export default CarFilter;
