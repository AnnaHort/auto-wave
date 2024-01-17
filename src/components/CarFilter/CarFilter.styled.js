import styled, { keyframes } from 'styled-components';

export const FilterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 16px;
  max-width: 274px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    max-width: 574px;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    gap: 18px;
    margin-bottom: 50px;
  }
`;

export const SelectorContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  color: #8a8a89;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;

export const CarMileageFromInput = styled.input`
  position: relative;
  border: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 12px 0 0 12px;
  width: 100%;
  height: 48px;
  padding: 0 0 0 24px;
  text-indent: 40px;
  font-family: 'Manrope', sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-indent: 0px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    position: relative;
    border: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 12px 0 0 12px;
    width: 160px;
    height: 48px;
    padding: 0 0 0 24px;
    text-indent: 40px;
    font-family: 'Manrope', sans-serif;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-indent: 0px;
    }
  }
`;
export const CarMileageToInput = styled.input`
  position: relative;
  border: 1px solid rgba(138, 138, 137, 0.2);
  border-radius: 0 12px 12px 0;
  width: 100%;
  height: 48px;
  padding: 0 0 0 24px;
  text-indent: 20px;
  font-family: 'Manrope', sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-indent: 0px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    position: relative;
    border: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 0 12px 12px 0;
    width: 160px;
    height: 48px;
    padding: 0 0 0 24px;
    text-indent: 20px;
    font-family: 'Manrope', sans-serif;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-indent: 0px;
    }
  }
`;

export const MileageInputContainer = styled.div`
  display: flex;
`;

export const PriseHourText = styled.span`
  position: absolute;
  top: 15px;
  left: 18px;
  font-family: 'Manrope', sans-serif;
`;

export const SpanText = styled.span`
  position: absolute;
  top: 16px;
  left: 24px;
  font-family: 'Manrope', sans-serif;
`;
export const MileageContainer = styled.div`
  position: relative;
  max-width: 320px;
`;
export const FilterButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  border-radius: 12px;
  background: var(--color-primary-blue);
  border: none;
  color: var(--color-primary-white);
  font-family: 'Manrope', sans-serif;
  &:hover {
    background: var(--color-primary-blue-2);
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 768px) {
    width: 218px;
  }
`;

const slideIn = keyframes`
  from {
    left: 20px;
    opacity: 0;
  }
  to {
    left: 0;
    transition: 0.3s cubic-bezier(.39,.4,.77,.74);
    opacity: 1;
  }
`;

export const ValidationErrorContainer = styled.div`
  position: absolute;
  color: rgba(18, 20, 23, 0.5);
  animation: ${slideIn} 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
`;

const resetIn = keyframes`
  from {
    right: 20px;
    opacity: 0;
  }
  to {
    right: 0;
    transition: 0.3s cubic-bezier(.39,.4,.77,.74);
    opacity: 1;
  }
`;
export const ResetButton = styled.button`
  width: 100%;
  padding: 14px 24px;
  border-radius: 12px;
  background: var(--color-primary-blue);
  border: none;
  color: var(--color-primary-white);
  font-family: 'Manrope', sans-serif;
  &:hover {
    background: var(--color-primary-blue-2);
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 768px) {
    width: 218px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 100%;
    right: 0;
    border: none;
    color: rgba(18, 20, 23, 0.5);
    font-family: 'Manrope', sans-serif;
    background-color: transparent;
    animation: ${resetIn} 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
    &:hover {
      background: transparent;
      color: var(--color-primary-blue);
      transition: color 450ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
`;
