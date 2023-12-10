import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AboutCarContainer, CarCardButton, CarMarkStyled, CarModelStyled, CardContainerStyled, CardImgStyled, InfoListElStyled, InfoListStyled, ListCardStyled } from '../../components/CarCard/CarCard.styled';
import LikeSvgActive from '../../components/LikeSvgActive/LikeSvgActive';
import LikeSvgNormal from '../../components/LikeSvgNormal/LikeSvgNormal';
import { addToFavorite, deleteFromFavorite } from '../../redux/carSlice';
import ModalWindowCar from '../../components/ModalCarCard/ModalCarCard';


const Favorites = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const BASE_URL = 'https://657343ad192318b7db41d7f4.mockapi.io/advert';

  const favoriteIds = useSelector(state => state.car.favoriteId);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}?page=1&limit=12`);
        const carsData = response.data;
        // Фільтрація авто за favoriteIds
        const filteredCars = carsData.filter(car => favoriteIds.includes(car.id));
        setFavoriteCars(filteredCars);
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching carInfo:', error);
      }
    };

    fetchData();
  }, [favoriteIds]); // Додавання favoriteIds до залежностей useEffect
console.log(favoriteCars)


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


  return isLoading === false ? (<div>...Loading</div>) : (
    <>
    <ListCardStyled>
    {favoriteCars.map((item,index) => {
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
  
                  {favoriteIds.includes(id) ? (
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

export default Favorites;






