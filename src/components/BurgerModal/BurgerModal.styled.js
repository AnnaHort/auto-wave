import styled from 'styled-components';

export const PortalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
export const BurgerModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-primary-white);
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const BurgerModalCloseBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const BurgerModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const BurgerModalListEl = styled.li`
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-primary-blue);
    margin-right: 5px;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
