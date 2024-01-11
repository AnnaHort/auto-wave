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
import { getCarInfo } from '../../redux/carSlice';
import { selectCarsInfo } from '../../redux/selectors';
import ScrollToTop from 'react-scroll-to-top';
import { Loader } from 'components/Loader/Loader';

const Catalog = () => {
  const dispatch = useDispatch();
  const carArray = useSelector(selectCarsInfo);
  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getAllCarsInfo());
        const carsData = response.payload;
        dispatch(getCarInfo(carsData));
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const fetchMoreData = async () => {
    try {
      const url = new URL(`${BASE_URL}?page=${currentPage + 1}&limit=12`);
      const response = await axios.get(url);
      const newCarsData = response.data;

      if (newCarsData.length < 12) {
        setHasMoreData(false);
      } else {
        dispatch(getCarInfo([...carArray, ...newCarsData]));
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.error('Error fetching more carInfo:', error);
    }
  };

  return isLoading === false ? (

   <Loader/>

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
      ) : (
        hasMoreData && (
          <LoadMoreStyled onClick={fetchMoreData}>Load more</LoadMoreStyled>
        )
      )}
      <ScrollToTop
        smooth
        color="#3470ff"
        style={{
          padding: '6px 0',
          borderRadius: '12px',
          boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',
        }}
      />
    </>
  );
};

export default Catalog;
