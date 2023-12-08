import axios from "axios";
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
import { useEffect, useState } from "react";

const CarCard = () => {
  const BASE_URL = "https://657343ad192318b7db41d7f4.mockapi.io/advert";
  const [carsData, setCarsData] = useState([]);

  // отримання даних про машини
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const carsData = response.data;
        setCarsData(carsData);
        console.log("Cars Data:", carsData);
      } catch (error) {
        console.error("Error fetching carInfo:", error);
      }
    };
    fetchData();
  }, []);



  return (
    <ul>
      {carsData.map((item) => {
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
        } = item;
        return (
          <CardContainerStyled key={id}>
            <CardImgStyled src={img} alt="#" />
            <LikeSvgNormal />

            <AboutCarContainer>
              <CarMarkStyled>
                {make} <CarModelStyled>Enclave</CarModelStyled>, {year}
              </CarMarkStyled>
              <span>{rentalPrice}</span>
            </AboutCarContainer>
            <InfoListStyled>
              <li>
                <p>{address}</p>
              </li>
              <li>
                <p>Ukraine</p>
              </li>
              <li>
                <p>{rentalCompany}</p>
              </li>
              <li>
                <p>Premium</p>
              </li>
              <li>
                <p>{type}</p>
              </li>
              <li>
                <p>{model}</p>
              </li>
              <li>
                <p>{mileage}</p>
              </li>
              <li>
                <p>Power liftgate</p>
              </li>
            </InfoListStyled>
            <CarCardButton>Learn more</CarCardButton>
          </CardContainerStyled>
        );
      })}
    </ul>
  );
};
export default CarCard;
