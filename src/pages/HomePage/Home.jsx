import React from 'react';
import { HomeContainer, TextStyle } from './Home.Styled';
import CarRentalBrands from '../../components/CarRentalBrands/CarRentalBrands';
import AboutUsComponent from '../../components/AboutUsComponent/AboutUsComponent';
import HomeHeroComponent from '../../components/HomeHeroComponent/HomeHeroComponent';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeHeroComponent />
        <TextStyle>
          AutoWave відкриває вам доступ найбільших брендів в оренді автомобілів.
        </TextStyle>
        <CarRentalBrands />
        <AboutUsComponent />
      </HomeContainer>
    </>
  );
};

export default Home;
