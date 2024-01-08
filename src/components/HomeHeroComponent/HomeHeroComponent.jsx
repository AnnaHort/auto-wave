import React from "react";
import {
  HomeHeroContainer,
  ListElementStyled,
  ListStyle,
  ListTextStyle,
  TitleStyle,
} from "./HomeHeroComponent.styled";
import { MdOutlineDoneOutline } from "react-icons/md";

const HomeHeroComponent = () => {
  return (
    <HomeHeroContainer>
      <TitleStyle>Car rental throughout Ukraine</TitleStyle>
      <ListStyle>
        <ListElementStyled>
          <MdOutlineDoneOutline size={40} color="#fff"/>
          <ListTextStyle>
          Free cancellation for most rooms
          </ListTextStyle>
        </ListElementStyled>
        <ListElementStyled>
          <MdOutlineDoneOutline size={40} color="#fff"/>
          <ListTextStyle>Over 60,000 rental locations</ListTextStyle>
        </ListElementStyled>
        <ListElementStyled>
          <MdOutlineDoneOutline size={40} color="#fff"/>
          <ListTextStyle>
          Customer support available in over 40 languages
          </ListTextStyle>
        </ListElementStyled>
      </ListStyle>
    </HomeHeroContainer>
  );
};

export default HomeHeroComponent;
