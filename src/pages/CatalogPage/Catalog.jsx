import React, { useEffect, useState } from 'react';
import CarFilter from '../../components/CarFilter/CarFilter';
import CarCard from '../../components/CarCard/CarCard';
import { LoadMoreStyled } from './Catalog.styled';
import axios from 'axios';

const Catalog = () => {
  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';
  const [carsData, setCarsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // отримання даних про машини
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const carsData = response.data;
        setCarsData(carsData);
        // console.log(carsData);
        if (carsData && carsData.length > 0) {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    isLoading === false ? <div>...Loading</div> :
    <>
      <CarFilter carInfo={carsData}/>
      <CarCard carInfo={carsData}/>
      {/* <ModalWindowCar/> */}
      <LoadMoreStyled>Load more</LoadMoreStyled>
    </>
  );
};

export default Catalog;
