import React from 'react';
import {
  AboutUsCalendarSvg,
  AboutUsMoneySvg,
  AboutUsSearchSvg,
  ListItemStyled,
  ListStyled,
  // TextStyled,
  TitleTextStyled,
} from './AboutUsComponent.styled';
import { useSpring, animated } from '@react-spring/web';

const AboutUsComponent = () => {
  // const springs = useSpring({
  //   from: { x: 0 },
  //   to: { x: 100 },
  // })
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));
  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };
  return (
    <>
      <animated.div
        onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      />
      <ListStyled>
        <ListItemStyled>
          <AboutUsCalendarSvg />
          <TitleTextStyled>Flexible & comfortable Rental</TitleTextStyled>

          {/* <TextStyled>
            Cancel or change most bookings for free up to 48 hours before
            pickup.
          </TextStyled> */}
        </ListItemStyled>

        <ListItemStyled>
          <AboutUsSearchSvg />

          <TitleTextStyled>No Hidden Fees</TitleTextStyled>
          {/* <TextStyled>Know exactly what you're paying for.</TextStyled> */}
        </ListItemStyled>

        <ListItemStyled>
          <AboutUsMoneySvg />

          <TitleTextStyled>Price Match Guarantee</TitleTextStyled>

          {/* <TextStyled>
            Found the same offer for a lower price? We'll refund the difference.
          </TextStyled> */}
        </ListItemStyled>
      </ListStyled>
    </>
  );
};

export default AboutUsComponent;
