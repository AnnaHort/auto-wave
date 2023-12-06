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
      <TitleStyle>Прокат автомобілів по всій Україні</TitleStyle>
      <ListStyle>
        <ListElementStyled>
          <MdOutlineDoneOutline size={40} color="#fff"/>
          <ListTextStyle>
            Безкоштовне скасування для більшості номерів
          </ListTextStyle>
        </ListElementStyled>
        <ListElementStyled>
          <MdOutlineDoneOutline size={40} color="#fff"/>
          <ListTextStyle>Понад 60 000 пунктів прокату</ListTextStyle>
        </ListElementStyled>
        <ListElementStyled>
          <MdOutlineDoneOutline size={40} color="#fff"/>
          <ListTextStyle>
            Служба підтримки надає допомогу понад 40 мовами
          </ListTextStyle>
        </ListElementStyled>
      </ListStyle>
    </HomeHeroContainer>
  );
};

export default HomeHeroComponent;
