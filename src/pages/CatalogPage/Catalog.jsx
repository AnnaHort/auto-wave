import React, { useEffect, useState } from 'react';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarCard from '../../components/CarCard/CarCard';
import { LoadMoreStyled } from './Catalog.styled';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllCarsInfo } from '../../redux/operations';

import { getCarInfo } from '../../redux/carSlice';


const Catalog = () => {
  const dispatch = useDispatch();
  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [originalCarsInfo, setOriginalCarsInfo] = useState([]);
  const [filteredCarsInfo, setFilteredCarsInfo] = useState([]);
console.log(originalCarsInfo)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getAllCarsInfo());
        const carsData = response.payload;
        dispatch(getCarInfo(carsData));
        setOriginalCarsInfo(carsData);
        setFilteredCarsInfo(carsData);
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  const filterCars = (searchModel, searchPrice) => {
    let filteredCars = [...originalCarsInfo];
    // console.log(filteredCars)
  
    if (searchModel && searchModel !== '') {
      filteredCars = filteredCars.filter(car =>
        car.make.toLowerCase().includes(searchModel.toLowerCase())
      );
    }
  
    if (searchPrice && searchPrice !== '') {
      const numericSearchPrice = parseInt(searchPrice.replace('$', ''), 10);
  
      filteredCars = filteredCars.filter(car => {
        const numericRentalPrice = parseInt(car.rentalPrice.replace('$', ''), 10);
        return numericRentalPrice <= numericSearchPrice;
      });
    }
    setFilteredCarsInfo(filteredCars);
  };

  // отримання даних при натиcканні на load more
  const fetchMoreData = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?page=${currentPage + 1}&limit=12`
      );
      const newCarsData = response.data;
      // console.log(newCarsData)
      setFilteredCarsInfo([...filteredCarsInfo, ...newCarsData])
      setOriginalCarsInfo([...originalCarsInfo, ...newCarsData])
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error('Error fetching more carInfo:', error);
    }
  };

  return isLoading === false ? (
    <div>...Loading</div>
  ) : (
    <>
      <CarFilter filterCars={filterCars} />
      <CarCard carInfo={filteredCarsInfo} />
      <LoadMoreStyled onClick={fetchMoreData}>Load more</LoadMoreStyled>
    </>
  );
};

export default Catalog;
