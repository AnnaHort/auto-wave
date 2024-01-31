import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCarsInfo } from '../../redux/operations';
import {
  TopPropositionsImg,
  TopPropositionsImgContainer,
  TopPropositionsList,
} from './TopPropositions.styled';

const TopPropositions = () => {
  const dispatch = useDispatch();
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(getAllCarsInfo());
        const carsData = response.payload;
        setCarsData(carsData);
        console.log(carsData);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h3>TOP PROPOSITION</h3>
      <TopPropositionsList>
        {carsData.map((item, index) => {
          const {
            id,
            img,
            make,
            model,
            address,
          } = item;
          return (
            <li key={id}>
              <TopPropositionsImgContainer>
                <TopPropositionsImg src={img} alt={`${make}`} />
                <h4>
                  {make} <span>{model}</span>
                </h4>
                <p>{address}</p>
              </TopPropositionsImgContainer>
            </li>
          );
        })}
      </TopPropositionsList>
    </div>
  );
};

export default TopPropositions;
