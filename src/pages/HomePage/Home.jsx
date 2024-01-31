import React, { useState } from 'react';
import { HomeContainer, TextStyle } from './Home.Styled';
import CarRentalBrands from '../../components/CarRentalBrands/CarRentalBrands';
import AboutUsComponent from '../../components/AboutUsComponent/AboutUsComponent';
import HomeHeroComponent from '../../components/HomeHeroComponent/HomeHeroComponent';
import ScrollToTop from 'react-scroll-to-top';
import FrequentlyQestions from 'components/FrequentlyQestions/FrequentlyQestions';
import TopPropositions from 'components/TopPropositions/TopPropositions';

const Home = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <>
      <HomeContainer>
        <HomeHeroComponent />
        <TextStyle>
          AutoWave gives you access to the best car rental brands.
        </TextStyle>
        <CarRentalBrands />
        <AboutUsComponent />
        <FrequentlyQestions/>
        <TopPropositions/>
        <ScrollToTop
          smooth
          color="var(--color-primary-blue)"
          style={{
            scrollBehavior: 'smooth',
            WebkitTapHighlightColor : 'rgba(0,0,0,0)',
            userSelect: 'none',
            padding: '6px 0',
            borderRadius: '12px',
            boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.75)',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </HomeContainer>
    </>
  );
};

export default Home;
