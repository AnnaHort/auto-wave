import React from "react";
import {
  MainModalContainerStyled,
  ModalAboutTextStyled,
  ModalAccessoriesStyled,
  ModalButtonStyled,
  ModalCarConditionsStyled,
  ModalConditionsSpanStyled,
  ModalContainerStyled,
  ModalImgStyled,
  ModalListStyled,
  ModalTitleSpanStyled,
  ModalTitleStyled,
} from "./ModalCarCard.styled";
import CloseModalSvg from "../svg-components/CloseSvg/CloseSvg";

const ModalWindowCar = () => {
  return (
    <MainModalContainerStyled>
      <ModalContainerStyled>
        <CloseModalSvg />

        <ModalImgStyled
          src="/pictures/car/pexels-alexgtacar-1592384.jpg"
          alt="#"
        />
        <ModalTitleStyled>
          Buick<ModalTitleSpanStyled>Enclave</ModalTitleSpanStyled>2008
        </ModalTitleStyled>
        <ModalListStyled>
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
        </ModalListStyled>
        <ModalAboutTextStyled>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </ModalAboutTextStyled>
        <ModalAccessoriesStyled>
          Accessories and functionalities:
        </ModalAccessoriesStyled>
        <ModalListStyled>
          <li>Leather seats</li>
          <li>Panoramic sunroof</li>
          <li>Power liftgate</li>
          <li>Premium audio system</li>
          <li>Remote start</li>
          <li>Blind-spot monitoring</li>
        </ModalListStyled>

        <ModalAccessoriesStyled>Rental Conditions: </ModalAccessoriesStyled>
        <ModalCarConditionsStyled>
          <li>
            <p>
              Minimum age :{" "}
              <ModalConditionsSpanStyled>25</ModalConditionsSpanStyled>
            </p>
          </li>
          <li>
            <p>Valid driver’s license</p>
          </li>
          <li>
            <p>Security deposite required</p>
          </li>
          <li>
            <p>
              Mileage:{" "}
              <ModalConditionsSpanStyled>5,858</ModalConditionsSpanStyled>
            </p>
          </li>
          <li>
            <p>
              Price: <ModalConditionsSpanStyled>40$</ModalConditionsSpanStyled>
            </p>
          </li>
        </ModalCarConditionsStyled>
        <ModalButtonStyled>Rental car</ModalButtonStyled>
      </ModalContainerStyled>
    </MainModalContainerStyled>
  );
};
export default ModalWindowCar;
