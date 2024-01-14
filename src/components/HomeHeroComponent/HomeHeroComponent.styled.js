import styled from 'styled-components';
import carBg from '../../images/car/pexels-alexgtacar-1592384.jpg';

export const HomeHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  padding: 16px;
  border-radius: 10px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 128, 128, 0.5),
      rgba(0, 128, 128, 0)
    ),
    url(${carBg});
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    gap: 24px;
    margin-bottom: 40px;
    padding: 40px;
  }
  @media (min-width: 1024px) {
    padding: 120px;
    margin-bottom: 60px;
  }
`;

export const TitleStyle = styled.h2`
  font-size: 40px;
  line-height: 1.25;
  color: var(--color-primary-white);
  text-align: center;
  text-shadow: 1px -3px 6px rgba(0, 0, 0, 0.83);
  font-family: 'Manrope';
  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ListElementStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;
export const ListTextStyle = styled.p`
  color: var(--color-primary-white);
  font-size: 20px;
  line-height: 1.25;
  text-shadow: 1px -3px 6px rgba(0, 0, 0, 0.83);
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.25;
    text-shadow: 1px -3px 6px rgba(0, 0, 0, 0.83);
  }
  @media (min-width: 768px) {
  }
`;
