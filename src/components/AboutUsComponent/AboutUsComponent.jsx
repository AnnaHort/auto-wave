import React from 'react';
import {
  AboutUsCalendarSvg,
  AboutUsMoneySvg,
  AboutUsSearchSvg,
  ListItemStyled,
  ListStyled,
  TextStyled,
  TitleTextStyled,
} from './AboutUsComponent.styled';

const AboutUsComponent = () => {
  return (
    <>

      <ListStyled>
        <ListItemStyled>

            <AboutUsCalendarSvg />
            <TitleTextStyled>Flexible Rental</TitleTextStyled>


          <TextStyled>
            Cancel or change most bookings for free up to 48 hours before
            pickup.
          </TextStyled>
        </ListItemStyled>

        <ListItemStyled>
          <AboutUsSearchSvg />

          <TitleTextStyled>No Hidden Fees</TitleTextStyled>
          <TextStyled>Know exactly what you're paying for.</TextStyled>
        </ListItemStyled>

        <ListItemStyled>
          <AboutUsMoneySvg />

          <TitleTextStyled>Price Match Guarantee</TitleTextStyled>

          <TextStyled>
            Found the same offer for a lower price? We'll refund the difference.
          </TextStyled>
        </ListItemStyled>
      </ListStyled>
    </>
  );
};

export default AboutUsComponent;
