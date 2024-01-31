import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCarsInfo } from '../../redux/operations';
import {
    OurPropositionContainer,
  OurPropositionTitle,
  TopPropositionsContainerCarInfo,
  TopPropositionsImg,
  TopPropositionsList,
} from './TopPropositions.styled';

const TopPropositions = () => {
  const dispatch = useDispatch();
  const [carsData, setCarsData] = useState([]);
  const [randomCars, setRandomCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getAllCarsInfo());
        const carsData = response.payload;
        setCarsData(carsData);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (carsData.length > 0 && randomCars.length < 3) {
      function getRandomObjects(arr, count) {
        const shuffledArray = arr.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
      }
      const randomObjects = getRandomObjects(carsData, 3);
      setRandomCars(randomObjects);
    }
  }, [carsData, randomCars]);

  return (
    <OurPropositionContainer>
      <OurPropositionTitle>TOP PROPOSITION</OurPropositionTitle>
      <TopPropositionsList>
        {randomCars.map((item, index) => {
          const { id, img, make, model, address } = item;
          return (
            <li key={id}>
              <div>
                <TopPropositionsImg src={img} alt={`${make}`} />
                <TopPropositionsContainerCarInfo>
                  <h4>
                    {make} <span>{model}</span>
                  </h4>
                  <p>{address}</p>
                </TopPropositionsContainerCarInfo>
              </div>
            </li>
          );
        })}
      </TopPropositionsList>
    </OurPropositionContainer>
  );
};

export default TopPropositions;
