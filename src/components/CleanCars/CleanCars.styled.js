import styled from 'styled-components';

export const CleanCarsContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 60px;
  padding: 0 12px;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 0px;
    padding-bottom: 42px;
  }
  @media (min-width: 1024px) {
    padding: 0;
    margin-bottom: 0px;

    padding: 0 12px 32px 12px;
  }
`;

export const CleanCarsImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 16px;
  @media (min-width: 1440px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    display: block;
    margin-bottom: 21px;
  }
`;

export const CleanCarsTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const CleanCarsText = styled.p`
  text-align: center;
`;
