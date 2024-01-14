import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 10px 10px 10px;
  @media (min-width: 768px) {
    padding: 0 40px 40px 40px;
  }
  @media (min-width: 1024px) {
    padding: 0 60px 60px 60px;
  }
`;
export const TextStyle = styled.h3`
  color: var(--color-primary-black);
  text-align: center;
  margin-bottom: 28px;
  font-size: 24px;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    margin-bottom: 36px;
    font-size: 28px;
  }
`;
