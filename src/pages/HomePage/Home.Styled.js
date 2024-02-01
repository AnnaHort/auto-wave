import styled from 'styled-components';

export const HomeContainer = styled.div`
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

export const HomePageAcordeonContainer = styled.div`
@media (min-width: 768px) {
 display :flex ;
 gap: 16px;
 flex-direction: row-reverse;
}
`
