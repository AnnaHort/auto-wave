import styled from 'styled-components';

export const FrequentlyQestionsContainer = styled.div`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const FrequentlyQestionsTitle = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  text-transform: uppercase;
`;

export const FrequentlyQestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FrequentlyQestionsListEl = styled.li`
  position: relative;
`;

export const FrequentlyQestionsText = styled.p`
  margin-left: 16px;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-primary-blue);
    transform: translateY(-50%);
  }
`;
