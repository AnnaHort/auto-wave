import {
  AboutCarContainer,
  CarCardButton,
  CarMarkStyled,
  CarModelStyled,
  CardContainerStyled,
  CardImgStyled,
  InfoListStyled,
} from "./CarCard.styled";
import LikeSvgNormal from "../LikeSvgNormal/LikeSvgNormal";
// import LikeSvgActive from "../LikeSvgActive/LikeSvgActive";

const CarCard = () => {
  const OpenModalWindow = () => {
    console.log("modal is open");
  };

  return (
    <CardContainerStyled>
      <CardImgStyled
        src="/pictures/car/pexels-alexgtacar-1592384.jpg"
        alt="#"
      />

      <LikeSvgNormal />

      <AboutCarContainer>
        <CarMarkStyled>
          Buick <CarModelStyled>Enclave</CarModelStyled>, 2008
        </CarMarkStyled>
        <span>$40</span>
      </AboutCarContainer>
      <InfoListStyled>
        <li>
          <p>Kiev</p>
        </li>
        <li>
          <p>Ukraine</p>
        </li>
        <li>
          <p>Luxury Car Rentals</p>
        </li>
        <li>
          <p>Premium</p>
        </li>
        <li>
          <p>Suv</p>
        </li>
        <li>
          <p>Enclave</p>
        </li>
        <li>
          <p>9582</p>
        </li>
        <li>
          <p>Power liftgate</p>
        </li>
      </InfoListStyled>
      <CarCardButton onClick={OpenModalWindow}>Learn more</CarCardButton>
    </CardContainerStyled>
  );
};
export default CarCard;
