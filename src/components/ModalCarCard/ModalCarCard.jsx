import {
  MainModalContainerStyled,
  ModalAboutTextStyled,
  ModalAccessoriesStyled,
  ModalCarConditionsStyled,
  ModalConditionsSpanStyled,
  ModalContainerStyled,
  ModalImgStyled,
  ModalLinkStyled,
  ModalListStyled,
  ModalTitleSpanStyled,
  ModalTitleStyled,
} from './ModalCarCard.styled';
import CloseModalSvg from '../svg-components/CloseSvg/CloseSvg';

const ModalWindowCar = ({ car, onClose }) => {


  const handleSvgClick = () => {
    onClose();
  };

  const handleModalClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  console.log(car)

  const {
    year,
    img,
    make,
    model,
    address,
    mileage,
    rentalCompany,
    type,
    functionalities,
  } = car
  const reverseAddress = address;
  const reversedText = reverseAddress.split(' ').reverse().join(' ');

  const functionalitiesCar = functionalities[0];
  return (
    <MainModalContainerStyled onClick={handleModalClose}>
      <ModalContainerStyled>
        <CloseModalSvg onClick={handleSvgClick} />

        <ModalImgStyled
          src={img}
          alt={`${make}`}
        />
        <ModalTitleStyled>
        {make}<ModalTitleSpanStyled> {model} </ModalTitleSpanStyled>{year}
        </ModalTitleStyled>
        <ModalListStyled>
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
              age
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
              Mileage
              <ModalConditionsSpanStyled>5,858</ModalConditionsSpanStyled>
            </p>
          </li>
          <li>
            <p>
              Price: <ModalConditionsSpanStyled>40$</ModalConditionsSpanStyled>
            </p>
          </li>
        </ModalCarConditionsStyled>

        <ModalLinkStyled to={'tel:+380730000000'}>Rental Car</ModalLinkStyled>
      </ModalContainerStyled>
    </MainModalContainerStyled>
  );
};
export default ModalWindowCar;
