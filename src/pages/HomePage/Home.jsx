import React from "react";
import HomeHeroComponent from "../../components/HomeHeroComponent/HomeHeroComponent";
import { HomeContainer, HomeHeroContainer } from "./Home.Styled";

const Home = () => {
  return (
    <HomeContainer>
     <HomeHeroContainer>
     <h2>Прокат автомобілів по всій Україні</h2>
    <p>
      AutoWave відкриває вам доступ найбільших брендів в оренді автомобілів.
    </p>
   </HomeHeroContainer>

    <HomeHeroComponent/>
    </HomeContainer>

  )
};

export default Home;
