import styled from "styled-components";

export const FilterFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  padding: 50px 0 50px 0 ;
`;

export const SelectorContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  color: #8a8a89;
  font-family: Manrope;
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
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-indent: 0px; 
  }
`;

export const MileageInputContainer = styled.div`
display: flex;
`

export const PriseHourText = styled.span`
position: absolute;
top: 15px;
left: 18px;
`

export const SpanText = styled.span`
position: absolute;
top: 16px;
left: 24px;
`
export const MileageContainer = styled.div`
position: relative;
`
export const FilterButton = styled.button`
padding: 14px 44px;
border-radius: 12px;
background: #3470FF;
border: none;
background: #3470FF;
color: #fff;
&:hover{
  background: #0B44CD;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1)
}
` 
