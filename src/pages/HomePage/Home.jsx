import React from 'react';
import { HomeContainer, TextStyle } from './Home.Styled';
import CarRentalBrands from '../../components/CarRentalBrands/CarRentalBrands';
import AboutUsComponent from '../../components/AboutUsComponent/AboutUsComponent';
import HomeHeroComponent from '../../components/HomeHeroComponent/HomeHeroComponent';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeHeroComponent />
        <TextStyle>
          AutoWave gives you access to the largest car rental brands.
        </TextStyle>
        <CarRentalBrands />
        <AboutUsComponent />
        <ScrollToTop
          smooth
          color="#3470ff"
          style={{
            padding: '6px 0',
            borderRadius: '12px',
            boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',
          }}
        />
      </HomeContainer>
    </>
  );
};

export default Home;
