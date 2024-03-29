import React, { useEffect, useState } from 'react';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarCard from '../../components/CarCard/CarCard';
import {
  LoadMoreStyled,
  NoCardsContainer,
  NoCarsText,
  SearchNoCarsSvg,
} from './Catalog.styled';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsInfo } from '../../redux/operations';
import {
  addMoreData,
  deleteMoreData,
  getCarInfo,
  updateCurrentPage,
} from '../../redux/carSlice';
import {
  selectCarsInfo,
  selectFilterSearchMileageFrom,
  selectFilterSearchModel,
  selectFilterSearchPrice,
  selectFilterSearchMileageTo,
  currentPage,
  moreData,
} from '../../redux/selectors';
import ScrollToTop from 'react-scroll-to-top';
import { Loader } from 'components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const carArray = useSelector(selectCarsInfo);
  const modelFilter = useSelector(selectFilterSearchModel);
  const priceFilter = useSelector(selectFilterSearchPrice);
  const mileageFromFilter = useSelector(selectFilterSearchMileageFrom);
  const mileageToFilter = useSelector(selectFilterSearchMileageTo);
  const currentPageNumber = useSelector(currentPage);

  const hasMoreData = useSelector(moreData);

  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getAllCarsInfo());
        const carsData = response.payload;
        dispatch(getCarInfo(carsData));
        setIsLoading(true);
        dispatch(addMoreData());
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchMoreData = async () => {
    try {
      if (
        modelFilter === '' &&
        priceFilter === null &&
        mileageFromFilter === null &&
        mileageToFilter === null
      ) {
        const url = new URL(
          `${BASE_URL}?page=${currentPageNumber + 1}&limit=12`
        );
        const response = await axios.get(url);
        const carsData = response.data;

        if (carsData.length < 12) {
          dispatch(deleteMoreData());
        }
        dispatch(getCarInfo([...carArray, ...carsData]));
        dispatch(updateCurrentPage());
      } else {
        const url = new URL(`${BASE_URL}`);
        if (modelFilter) url.searchParams.append('make', modelFilter);
        const response = await axios.get(url);
        const carsData = response.data;
        if (carsData.length < 12) {
          dispatch(deleteMoreData());
        }
        let filteredCars = carsData;
        console.log(filteredCars);
        if (priceFilter && priceFilter !== '') {
          const numericSearchPrice = parseInt(priceFilter.replace('$', ''), 10);
          filteredCars = filteredCars.filter(car => {
            const numericRentalPrice = parseInt(
              car.rentalPrice.replace('$', ''),
              10
            );
            return numericRentalPrice <= numericSearchPrice;
          });
        }
        if (mileageFromFilter && mileageFromFilter !== null) {
          filteredCars = filteredCars.filter(car => {
            const filterMileage = car.mileage;
            return filterMileage >= mileageFromFilter;
          });
        }
        if (mileageToFilter && mileageToFilter !== null) {
          filteredCars = filteredCars.filter(car => {
            const filterMileage = car.mileage;
            return filterMileage <= mileageToFilter;
          });
        }
        dispatch(getCarInfo(filteredCars));
        setIsLoading(true);
        dispatch(updateCurrentPage());
        dispatch(deleteMoreData(false));
      }
    } catch (error) {
      console.error('Error fetching more carInfo:', error);
    }
  };

  return isLoading === false ? (
    <Loader />
  ) : (
    <>
      <CarFilter />
      <CarCard carInfo={carArray} />
      {carArray.length === 0 ? (
        <NoCardsContainer>
          <SearchNoCarsSvg />
          <NoCarsText>
            Unfortunately, there are no cars available at the moment
          </NoCarsText>
        </NoCardsContainer>
      ) : hasMoreData === undefined || hasMoreData === false ? null : (
        <LoadMoreStyled onClick={fetchMoreData}>Load more</LoadMoreStyled>
      )}
      <ScrollToTop
        smooth
        color="var(--color-primary-blue)"
        style={{
          scrollBehavior: 'smooth',
          WebkitTapHighlightColor : 'rgba(0,0,0,0)',
          userSelect: 'none',
          padding: '6px 0',
          borderRadius: '12px',
          boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </>
  );
};

export default Catalog;
