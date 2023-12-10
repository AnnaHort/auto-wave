import React, { useEffect, useState } from 'react';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarCard from '../../components/CarCard/CarCard';
import { LoadMoreStyled } from './Catalog.styled';
import axios from 'axios';

const Catalog = () => {
  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?page=${currentPage + 1}&limit=12`);
      const newCarsData = response.data;
      setCarsData((prevData) => [...prevData, ...newCarsData]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.error('Error fetching more carInfo:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?page=1&limit=12`);
        const carsData = response.data;
        setCarsData(carsData);
        if (carsData && carsData.length > 0) {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, []);

  return isLoading === false ? (
    <div>...Loading</div>
  ) : (
    <>
      <CarFilter carInfo={carsData} />
      <CarCard carInfo={carsData} />
      <LoadMoreStyled onClick={fetchMoreData}>Load more</LoadMoreStyled>
    </>
  );
};

export default Catalog;

