import {
  MainModalContainerStyled,
  MobileModalContainer,
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
import { InfoListElStyled } from '../CarCard/CarCard.styled';

const ModalWindowCar = ({ car, onClose }) => {
  const handleSvgClick = () => {
    onClose();
  };

  const handleModalClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const {
    id,
    year,
    img,
    make,
    model,
    address,
    type,
    fuelConsumption,
    engineSize,
  } = car;
  const carAddress = address;

  const reversedText = carAddress.split(' ').slice(3);
  const town = reversedText[0].replace(',', '');
  const country = reversedText[1];


  return (
    <MainModalContainerStyled onClick={handleModalClose}>
      <ModalContainerStyled>
        <CloseModalSvg onClick={handleSvgClick}/>

        <ModalImgStyled src={img} alt={`${make}`} />
        <ModalTitleStyled>
          {make}
          <ModalTitleSpanStyled> {model} </ModalTitleSpanStyled>
          {year}
        </ModalTitleStyled>


        <MobileModalContainer 
        // style={{maxHeight:"400px",overflowY: 'auto', width:"210px"}}
        >
        <ModalListStyled>
          <InfoListElStyled>
            <p>{town}</p>
            <span>|</span>
          </InfoListElStyled>
          <InfoListElStyled>
            <p>{country}</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>id: {id}</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>year: {year}</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Type: {type} </p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Fuel Consumption: {fuelConsumption} </p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Engine Size: {engineSize} </p>
          </InfoListElStyled>
        </ModalListStyled>
        <ModalAboutTextStyled>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </ModalAboutTextStyled>
        <ModalAccessoriesStyled style={{marginBottom:"8px"}}>
          Accessories and functionalities:
        </ModalAccessoriesStyled>
        <ModalListStyled style={{marginBottom: "24px"}}>
          <InfoListElStyled>
            <p>Leather seats</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Panoramic sunroof</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Power liftgate</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Premium audio system</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Remote start</p>
            <span>|</span>
          </InfoListElStyled>

          <InfoListElStyled>
            <p>Blind-spot monitoring</p>
          </InfoListElStyled>
        </ModalListStyled>
        <ModalAccessoriesStyled >Rental Conditions: </ModalAccessoriesStyled>
        <ModalCarConditionsStyled>
          <li>
            <p>
              Minimum age :
              <ModalConditionsSpanStyled> 25</ModalConditionsSpanStyled>
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
              <ModalConditionsSpanStyled> 5,858</ModalConditionsSpanStyled>
            </p>
          </li>
          <li>
            <p>
              Price: <ModalConditionsSpanStyled>40$</ModalConditionsSpanStyled>
            </p>
          </li>
        </ModalCarConditionsStyled>
        </MobileModalContainer>


        <ModalLinkStyled to={'tel:+380730000000'}>Rental Car</ModalLinkStyled>
      </ModalContainerStyled>
    </MainModalContainerStyled>
  );
};
export default ModalWindowCar;
