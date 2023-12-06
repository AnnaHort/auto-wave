import React from "react";
import { HomeHeroContainer } from "./HomeHeroComponent.styled";
import { MdOutlineDoneOutline } from "react-icons/md";

const HomeHeroComponent = () => {
  return (
    <HomeHeroContainer>
      <h2>Прокат автомобілів по всій Україні</h2>
      <ul>
        <li>
          <MdOutlineDoneOutline /> Безкоштовне скасування для більшості номерів
        </li>
        <li>
          <MdOutlineDoneOutline /> Понад 60 000 пунктів прокату
        </li>
        <li>
          <MdOutlineDoneOutline />
          Служба підтримки надає допомогу понад 40 мовами
        </li>
      </ul>
    </HomeHeroContainer>
  );
};

export default HomeHeroComponent;
