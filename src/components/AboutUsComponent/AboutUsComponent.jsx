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
            <h3>Оренда з гнучкими умовами</h3>
            <TextStyled>
              Скасовуйте або змінюйте більшість бронювань безкоштовно за 48
              годин до отримання.
            </TextStyled>
          </TextContainerStyled>
        </ListItemStyled>
        <ListItemStyled>
          <FaSearch size={40} color="teal" />
          <TextContainerStyled>
            <h3>Жодних прихованих зборів</h3>
            <TextStyled>Знайте, за що саме ви платите.</TextStyled>
          </TextContainerStyled>
        </ListItemStyled>
        <ListItemStyled>
          <TbPigMoney size={40} color="teal" />
          <TextContainerStyled>
            <h3>Гарантія відповідності ціни</h3>
            <TextStyled>
              Знайшли таку ж пропозицію дешевше? Ми повернемо різницю в ціні.
            </TextStyled>
          </TextContainerStyled>
        </ListItemStyled>
      </ListStyled>
    </>
  );
};

export default AboutUsComponent;
