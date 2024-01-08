import React from "react";
import { RxCalendar } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import {
  ListItemStyled,
  ListStyled,
  TextContainerStyled,
  TextStyled,
} from "./AboutUsComponent.styled";

const AboutUsComponent = () => {
  return (
    <>
<ListStyled>
  <ListItemStyled>
    <RxCalendar size={40} color="teal" />
    <TextContainerStyled>
      <h3>Flexible Rental</h3>
      <TextStyled>
        Cancel or change most bookings for free up to 48 hours before pickup.
      </TextStyled>
    </TextContainerStyled>
  </ListItemStyled>
  <ListItemStyled>
    <FaSearch size={40} color="teal" />
    <TextContainerStyled>
      <h3>No Hidden Fees</h3>
      <TextStyled>Know exactly what you're paying for.</TextStyled>
    </TextContainerStyled>
  </ListItemStyled>
  <ListItemStyled>
    <TbPigMoney size={40} color="teal" />
    <TextContainerStyled>
      <h3>Price Match Guarantee</h3>
      <TextStyled>
        Found the same offer for a lower price? We'll refund the difference.
      </TextStyled>
    </TextContainerStyled>
  </ListItemStyled>
</ListStyled>

    </>
  );
};

export default AboutUsComponent;
