import {
  AboutCarContainer,
  CarCardButton,
  CarMarkStyled,
  CarModelStyled,
  CardContainerStyled,
  CardImgStyled,
  InfoListElStyled,
  InfoListStyled,
  ListCardStyled,
} from './CarCard.styled';
import LikeSvgNormal from '../LikeSvgNormal/LikeSvgNormal';
import ModalWindowCar from '../ModalCarCard/ModalCarCard';
import { useEffect, useState } from 'react';
import LikeSvgActive from '../LikeSvgActive/LikeSvgActive';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite } from '../../redux/carSlice';

const CarCard = props => {
  const { carInfo } = props;
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const favoriteId = useSelector(state => state.car.favoriteId);

  const openModal = car => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <ListCardStyled>
        {carInfo.map((item, index) => {
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

          const carAddress = address;

          const reversedText = carAddress.split(' ').slice(3);
          const town = reversedText[0].replace(',', '');
          const country = reversedText[1];

          const functionalitiesCar = functionalities[0];

          const shouldDisplayCarModel = index <= 2;

          return (
            <li key={id}>
              <CardContainerStyled>
                <CardImgStyled src={img} alt={`${make}`} />

                {favoriteId.includes(id) ? (
                  <LikeSvgActive
                    onClick={() => dispatch(deleteFromFavorite({ id }))}
                  />
                ) : (
                  <LikeSvgNormal
                    onClick={() => dispatch(addToFavorite({ id }))}
                  />
                )}

                <AboutCarContainer>
                  <CarMarkStyled>
                    {make}{' '}
                    {shouldDisplayCarModel && (
                      <CarModelStyled>{model}</CarModelStyled>
                    )}
                    , {year}
                  </CarMarkStyled>
                  <span>{rentalPrice}</span>
                </AboutCarContainer>
                <InfoListStyled>
                  <InfoListElStyled>
                    <p>{town}</p>
                    <span>|</span>
                  </InfoListElStyled>
                  <InfoListElStyled>
                    <p>{country}</p>
                    <span>|</span>
                  </InfoListElStyled>
                  <InfoListElStyled>
                    <p>{rentalCompany} </p>
                    <span>|</span>
                  </InfoListElStyled>
                  <InfoListElStyled>
                    <p>{type} </p>
                    <span>|</span>
                  </InfoListElStyled>

                  <InfoListElStyled>
                    <p>{model} </p>
                    <span>|</span>
                  </InfoListElStyled>
                  <InfoListElStyled>
                    <p>{mileage}</p>
                    <span>|</span>
                  </InfoListElStyled>
                  <InfoListElStyled>{functionalitiesCar} </InfoListElStyled>
                </InfoListStyled>
                <CarCardButton onClick={() => openModal(item)}>
                  Learn more
                </CarCardButton>
              </CardContainerStyled>
            </li>
          );
        })}
      </ListCardStyled>


    </>
  );
};

export default CarCard;
