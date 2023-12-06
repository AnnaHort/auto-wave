import styled from "styled-components";

export const HomeHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 60px;
  padding: 40px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 128, 128, 0.5),
      rgba(0, 128, 128, 0)
    ),
    url("/pictures/HomeHeroBg/pexels-mike-bird-170286.jpg");
  background-size: cover;
  background-position: center;
`;

export const TitleStyle = styled.h2`
  font-size: 56px;
  line-height: 1.25;
  color: #fff;
  text-align: center;
  text-shadow: 1px -3px 6px rgba(0,0,0,0.83);
`;

export const ListStyle = styled.ul``;
export const ListElementStyled = styled.li`
  display: flex;
  gap: 8px;
`;
export const ListTextStyle = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 1.25;
  text-shadow: 1px -3px 6px rgba(0,0,0,0.83);
`;
