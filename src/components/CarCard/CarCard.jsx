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

const CarCard = props => {
  const { carInfo } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [selectedCar, setSelectedCar] = useState(null);

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

  const toggleFavorite = carId => {
    setFavorites(prevFavorites => {
      const updatedFavorites = { ...prevFavorites };
      updatedFavorites[carId] = !prevFavorites[carId];
      return updatedFavorites;
    });
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || {};
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
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

          const carAddress = address;

          const reversedText = carAddress.split(' ').slice(3);
          const town = reversedText[0].replace(',', '');
          const country = reversedText[1];

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
                    <p>{make} </p>
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
