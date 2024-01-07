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
  selectFilterSearchPrice,
  selectFilterSearchModel,
  resetFilters,
} from '../../redux/selectors';
import {
  changeReset,
  getCarInfo,
  getFilterMileageFrom,
  getFilterMileageTo,
  getFilterModel,
  getFilterPrice,
  reset,
} from '../../redux/carSlice';
import { getAllCarsInfo } from '../../redux/operations';
import { useState } from 'react';
import { useFormik } from 'formik';

const CarFilter = () => {
  const dispatch = useDispatch();
  const [, setIsLoading] = useState(false);

  const searchModel = useSelector(selectFilterSearchModel);
  const searchPrice = useSelector(selectFilterSearchPrice);
  const searchMileageFrom = useSelector(selectFilterSearchMileageFrom);
  const searchMileageTo = useSelector(selectFilterSearchMileageTo);
  const currentReset = useSelector(resetFilters);

  const formik = useFormik({
    initialValues: {
      mileageFrom: '',
      mileageTo: '',
    },
    onSubmit: async values => {
      dispatch(reset());

      if (values.mileageFrom && values.mileageFrom !== null) {
        dispatch(getFilterMileageFrom(values.mileageFrom));
      }
      if (values.mileageTo && values.mileageTo !== null) {
        dispatch(getFilterMileageTo(values.mileageTo));
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

        if (values.mileageFrom && values.mileageFrom !== null) {
          filteredCars = filteredCars.filter(car => {
            const filterMileage = car.mileage;
            return filterMileage >= values.mileageFrom;
          });
        }
        if (values.mileageTo && values.mileageTo !== null) {
          filteredCars = filteredCars.filter(car => {
            const filterMileage = car.mileage;
            return filterMileage <= values.mileageTo;
          });
        }
        dispatch(getCarInfo(filteredCars));
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    },
  });

  // console.log('Form values: ', formik.values);

  const carBrandDefaultValue = { value: '', label: 'Enter the text' };
  const priceDefaultValue = { value: '', label: '$' };

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
    dispatch(reset());

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

      if (mileageFrom && mileageFrom !== null) {
        filteredCars = filteredCars.filter(car => {
          const filterMileage = car.mileage;
          return filterMileage >= mileageFrom;
        });
      }
      if (mileageTo && mileageTo !== null) {
        filteredCars = filteredCars.filter(car => {
          const filterMileage = car.mileage;
          return filterMileage <= mileageTo;
        });
      }
      dispatch(getCarInfo(filteredCars));
      setIsLoading(true);
    } catch (error) {
      console.error('Error fetching carInfo:', error);
    }
  };

  const handleReset = async e => {
    e.preventDefault();
    dispatch(changeReset());
    try {
      const response = await dispatch(getAllCarsInfo());
      const carsData = response.payload;
      dispatch(getCarInfo(carsData));
      setIsLoading(true);
    } catch (error) {
      console.error('Error fetching carInfo:', error);
    }
  };

  return (
    <FilterFormStyled method="post" onSubmit={formik.handleSubmit}>
      <SelectorContainerStyled>
        <LabelStyled htmlFor="carBrand">Car brand</LabelStyled>
        <Select
          options={transformedMarkOptions}
          styles={carBrandSearchStyles}
          id="carBrand"
          value={
            searchModel
              ? { value: searchModel, label: searchModel }
              : carBrandDefaultValue
          }
          onChange={selectedOption => {
            dispatch(getFilterModel(selectedOption.value));
          }}
        />
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="price">Price/ 1 hour</LabelStyled>
        <MileageContainer>
          <Select
            options={carsPriceObj}
            styles={priceSelectStyles}
            id="price"
            value={
              searchPrice
                ? { value: searchPrice, label: searchPrice }
                : priceDefaultValue
            }
            onChange={e => {
              formik.handleChange(e);
              dispatch(getFilterMileageFrom(e.target.value));
            }}
          />

          <PriseHourText>To</PriseHourText>
        </MileageContainer>
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="mileage">Car mileage / km</LabelStyled>
        <MileageInputContainer>
          <MileageContainer>
            <CarMileageFromInput
              type="number"
              id="mileageFrom"
              name="mileageFrom"
              value={
                searchMileageFrom !== null ? formik.values.mileageFrom : ''
              }
              onChange={e => {
                formik.handleChange(e);
                dispatch(getFilterMileageFrom(e.target.value));
              }}
            />
            <SpanText>From</SpanText>
          </MileageContainer>

          <MileageContainer>
            <CarMileageToInput
              type="number"
              id="mileageTo"
              name="mileageTo"
              value={
                searchMileageTo !== null
                  ? formik.values.mileageTo.toString()
                  : ''
              }
              onChange={e => {
                formik.handleChange(e);
                dispatch(getFilterMileageTo(e.target.value));
              }}
            />
            <SpanText>To</SpanText>
          </MileageContainer>
        </MileageInputContainer>
      </SelectorContainerStyled>

      <FilterButton type="submit">Search</FilterButton>

      <FilterButton
        type="button"
        onClick={handleReset}
        style={{ display: currentReset === false ? 'none' : 'block' }}
      >
        Reset
      </FilterButton>
    </FilterFormStyled>
  );
};

export default CarFilter;
