import styled, { keyframes } from 'styled-components';

export const FilterFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
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
  width: 160px;
  height: 48px;
  padding: 0 0 0 24px;
  text-indent: 40px;
  font-family: 'Manrope', sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-indent: 0px; /* Змініть це значення, якщо потрібно інший відступ для плейсхолдера */
  }
`;
export const CarMileageToInput = styled.input`
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
`;
export const FilterButton = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  &:hover {
    background: #0b44cd;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
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
  color: rgba(18, 20, 23, 0.50);
  animation: ${slideIn} 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
`;

export const ButtonContainer = styled.div`
  position: relative;
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
  position: absolute;
  top: 100%;
  right: 0;
  border: none;
  color: rgba(18, 20, 23, 0.50);
  font-family: 'Manrope', sans-serif;
  background-color: transparent;
  animation: ${resetIn} 0.3s cubic-bezier(0.39, 0.4, 0.77, 0.74);
  &:hover {
    color: #3470ff;
    transition: color 450ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
