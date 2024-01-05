import React, { useEffect, useState } from 'react';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarCard from '../../components/CarCard/CarCard';
import { LoadMoreStyled } from './Catalog.styled';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCarsInfo } from '../../redux/operations';
import { getCarInfo } from '../../redux/carSlice';
import { selectCarsInfo } from '../../redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const carArray = useSelector(selectCarsInfo);
  // console.log(carArray);
  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
      dispatch(getCarInfo([...carArray, ...newCarsData]));
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error('Error fetching more carInfo:', error);
    }
  };

  return isLoading === false ? (
    <div>...Loading</div>
  ) : (
    <>
      <CarFilter />
      <CarCard carInfo={carArray} />
      <LoadMoreStyled onClick={fetchMoreData}>Load more</LoadMoreStyled>
    </>
  );
};

export default Catalog;
