import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCarsInfo } from '../../redux/operations';
import {
  OurPropositionContainer,
  OurPropositionTitle,
  TopPropositionsContainerCarInfo,
  TopPropositionsImg,
  TopPropositionsLink,
  TopPropositionsList,
  TopPropositionsListEl,
  TopPropositionsTitle,
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
    if (carsData.length > 0 && randomCars.length < 2) {
      function getRandomObjects(arr, count) {
        const shuffledArray = arr.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
      }
      const randomObjects = getRandomObjects(carsData, 2);
      setRandomCars(randomObjects);
    }
  }, [carsData, randomCars]);

  return (
    <OurPropositionContainer>
      <OurPropositionTitle>OUR PROPOSITION</OurPropositionTitle>
      <TopPropositionsList>
        {randomCars.map((item, index) => {
          const { id, img, make, model, address } = item;
          return (
            <TopPropositionsListEl key={id}>
              <div>
                <TopPropositionsImg src={img} alt={`${make}`} />
                <TopPropositionsContainerCarInfo>
                  <TopPropositionsTitle>
                    {make} <span>{model}</span>
                  </TopPropositionsTitle>
                  <p>{address}</p>
                </TopPropositionsContainerCarInfo>
              </div>
            </TopPropositionsListEl>
          );
        })}
      </TopPropositionsList>

      <TopPropositionsLink to="/catalog">See more</TopPropositionsLink>
    </OurPropositionContainer>
  );
};

export default TopPropositions;
