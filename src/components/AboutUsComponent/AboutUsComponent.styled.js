import styled from "styled-components";

export const ListStyled = styled.ul`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  padding: 60px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const ListItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 44px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TextStyled = styled.p`
  max-width: 280px;
  font-family: 'Manrope', sans-serif;
`;
