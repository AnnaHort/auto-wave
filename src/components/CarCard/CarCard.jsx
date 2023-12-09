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
import ModalWindowCar from '../ModalCarCard/ModalCarCard';
import { useEffect, useState } from 'react';
import LikeSvgActive from '../LikeSvgActive/LikeSvgActive';

const CarCard = (props) => {
  const { carInfo } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [favorites, setFavorites] = useState({});

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleFavorite = (carId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      updatedFavorites[carId] = !prevFavorites[carId];
      return updatedFavorites;
    });
  };

  return (
    <>
      <ListCardStyled>
        {carInfo.map((item) => {
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

                {favorites[id] ? (
                  <LikeSvgActive onClick={() => toggleFavorite(id)} />
                ) : (
                  <LikeSvgNormal onClick={() => toggleFavorite(id)} />
                )}

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
                <CarCardButton onClick={() => openModal(item)}>
                  Learn more
                </CarCardButton>
              </CardContainerStyled>
            </li>
          );
        })}
      </ListCardStyled>

      {isModalOpen && (
        <ModalWindowCar
          car={selectedCar}
          isOpen={isModalOpen}
          onClose={() => closeModal()}
        />
      )}
    </>
  );
};

export default CarCard;

