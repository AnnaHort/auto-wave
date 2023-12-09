import axios from 'axios';
import {
  AboutCarContainer,
  CarCardButton,
  CarMarkStyled,
  CarModelStyled,
  CardContainerStyled,
  CardImgStyled,
  InfoListStyled,
  ListCardStyled,
} from './CarCard.styled';
import LikeSvgNormal from '../LikeSvgNormal/LikeSvgNormal';

const CarCard = props => {
  
  const { carInfo } = props;

  return (
    <ListCardStyled>
      {carInfo.map(item => {
        const {
          id,
          year,
          img,
          make,
          model,
          rentalPrice,
          address,
          mileage,
          rentalCompany,
          type,
          functionalities,
        } = item;

        const reverseAddress = address;
        const reversedText = reverseAddress.split(' ').reverse().join(' ');

        const functionalitiesCar = functionalities[0];
    
        return (
          <li key={id}>
            <CardContainerStyled>
              <CardImgStyled src={img} alt={`${make}`} />
              <LikeSvgNormal />

              <AboutCarContainer>
                <CarMarkStyled>
                  {make} <CarModelStyled>{model}</CarModelStyled>, {year}
                </CarMarkStyled>
                <span>{rentalPrice}</span>
              </AboutCarContainer>
              <InfoListStyled>
                <li>
                  <p>{reversedText}</p>
                </li>
                <li>
                  <p>{rentalCompany}</p>
                </li>
                <li>
                  <p>{type}</p>
                </li>
                <li>
                  <p>{make}</p>
                </li>
                <li>
                  <p>{model}</p>
                </li>
                <li>
                  <p>{mileage}</p>
                </li>
                <li>{functionalitiesCar}</li>
              </InfoListStyled>
              <CarCardButton>Learn more</CarCardButton>
            </CardContainerStyled>
          </li>
        );
      })}
    </ListCardStyled>
  );
};
export default CarCard;
