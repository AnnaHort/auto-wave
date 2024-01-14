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
  ValidationErrorContainer,
  ResetButton,
  ButtonContainer,
} from './CarFilter.styled';
import { priceSelectStyles } from '../../styles/selectStyles/priceSelectStyles';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterSearchMileageFrom,
  selectFilterSearchMileageTo,
  selectFilterSearchPrice,
  selectFilterSearchModel,
  resetFilters,
  selectCarsInfo,
} from '../../redux/selectors';
import {
  addMoreData,
  changeReset,
  deleteMoreData,
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
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const CarFilter = () => {
  const dispatch = useDispatch();
  const [, setIsLoading] = useState(false);

  const carsInfo = useSelector(selectCarsInfo);
  const searchModel = useSelector(selectFilterSearchModel);
  const searchPrice = useSelector(selectFilterSearchPrice);
  const searchMileageFrom = useSelector(selectFilterSearchMileageFrom);
  const searchMileageTo = useSelector(selectFilterSearchMileageTo);
  const currentReset = useSelector(resetFilters);

  const validationSchema = Yup.object().shape({
    make: Yup.string(),
    rentalPrice: Yup.string(),
    mileageFrom: Yup.string()
      .min(2, 'Too short')
      .max(6, 'Too long')
      .matches(/^\d+$/, 'Mileage must be only numbers')
      .test(
        'is-less-than-mileageTo',
        'From must be less than To',
        function (value) {
          const { mileageTo } = this.parent;

          return (
            !value ||
            !mileageTo ||
            parseInt(value, 10) < parseInt(mileageTo, 10)
          );
        }
      ),
    mileageTo: Yup.string()
      .min(2, 'Too short')
      .max(6, 'Too long')
      .matches(/^\d+$/, 'Mileage must be only numbers'),
  });

  const formik = useFormik({
    initialValues: {
      make: '',
      rentalPrice: '',
      mileageFrom: '',
      mileageTo: '',
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      if (
        searchModel === '' &&
        searchPrice === null &&
        searchMileageFrom === null &&
        searchMileageTo === null
      ) {
        return toast.error('Please enter any filters before searching', {
          duration: 2000,
          style: {
            border: '1px solid var(--color-primary-black)',
            padding: '16px',
            color: 'var(--color-primary-blue)',
          },
          iconTheme: {
            primary: 'var(--color-primary-blue)',
            secondary: 'var(--color-primary-white-2)',
          },
        });
      }

      dispatch(reset());

      if (searchMileageFrom && searchMileageFrom !== null) {
        dispatch(getFilterMileageFrom(searchMileageFrom));
      }
      if (searchMileageTo && searchMileageTo !== null) {
        dispatch(getFilterMileageTo(searchMileageTo));
      }

      try {
        const response = await dispatch(getAllCarsInfo());
        const carsData = response.payload;

        dispatch(addMoreData(true));

        let filteredCars = carsData;
        console.log(filteredCars);

        if (filteredCars.length < 12) {
          dispatch(deleteMoreData(false));
        }
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
        if (searchMileageFrom && searchMileageFrom !== null) {
          filteredCars = filteredCars.filter(car => {
            const filterMileage = car.mileage;
            return filterMileage >= searchMileageFrom;
          });
        }
        if (searchMileageTo && searchMileageTo !== null) {
          filteredCars = filteredCars.filter(car => {
            const filterMileage = car.mileage;
            return filterMileage <= searchMileageTo;
          });
        }
        dispatch(getCarInfo(filteredCars));
        setIsLoading(true);

        if (carsInfo.length === 0 && filteredCars.length === 0) {
          return toast.error('No cars found with the selected filter values', {
            duration: 2000,
            style: {
              border: '1px solid var(--color-primary-black)',
              padding: '16px',
              color: 'var(--color-primary-blue)',
            },
            iconTheme: {
              primary: 'var(--color-primary-blue)',
              secondary: 'var(--color-primary-white-2)',
            },
          });
        } else {
          toast.success('Cars are filtered!', {
            duration: 2000,
            style: {
              border: '1px solid var(--color-primary-black)',
              padding: '16px',
              color: 'var(--color-primary-blue)',
            },
            iconTheme: {
              primary: 'var(--color-primary-blue)',
              secondary: 'var(--color-primary-white-2)',
            },
          });
        }
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    },
  });

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

  const handleReset = async e => {
    e.preventDefault();
    dispatch(changeReset());
    dispatch(addMoreData());
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
          onBlur={formik.handleBlur}
          value={
            searchModel
              ? { value: searchModel, label: searchModel }
              : carBrandDefaultValue
          }
          onChange={selectedOption => {
            dispatch(getFilterModel(selectedOption.value));
          }}
        />

        {formik.touched.make && formik.errors.make && (
          <div>{formik.errors.make}</div>
        )}
      </SelectorContainerStyled>

      <SelectorContainerStyled>
        <LabelStyled htmlFor="price">Price/ 1 hour</LabelStyled>
        <MileageContainer>
          <Select
            options={carsPriceObj}
            styles={priceSelectStyles}
            id="price"
            onBlur={formik.handleBlur}
            value={
              searchPrice
                ? { value: searchPrice, label: searchPrice }
                : priceDefaultValue
            }
            onChange={selectedOption => {
              dispatch(getFilterPrice(selectedOption.value));
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
              onBlur={formik.handleBlur}
              value={
                searchMileageFrom !== null ? formik.values.mileageFrom : ''
              }
              onChange={e => {
                formik.handleChange(e);
                dispatch(getFilterMileageFrom(e.target.value));
              }}
            />
            {formik.touched.mileageFrom && formik.errors.mileageFrom && (
              <ValidationErrorContainer>
                {formik.errors.mileageFrom}
              </ValidationErrorContainer>
            )}
            <SpanText>From</SpanText>
          </MileageContainer>

          <MileageContainer>
            <CarMileageToInput
              type="number"
              id="mileageTo"
              name="mileageTo"
              onBlur={formik.handleBlur}
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
            {formik.touched.mileageTo && formik.errors.mileageTo && (
              <ValidationErrorContainer>
                {formik.errors.mileageTo}
              </ValidationErrorContainer>
            )}
            <SpanText>To</SpanText>
          </MileageContainer>
        </MileageInputContainer>
      </SelectorContainerStyled>

      <ButtonContainer>
        <FilterButton type="submit">Search</FilterButton>

        <ResetButton
          style={{ display: currentReset === false ? 'none' : 'block' }}
          type="button"
          onClick={handleReset}
        >
          Reset all filters
        </ResetButton>
      </ButtonContainer>
    </FilterFormStyled>
  );
};

export default CarFilter;
