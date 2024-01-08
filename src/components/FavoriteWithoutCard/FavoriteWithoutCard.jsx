import React from 'react';
import {
  WithoutFavoriteContainer,
  WithoutFavoriteHeartSvg,
  WithoutFavoriteText,
} from './FavoriteWithoutCard.styled';

export const FavoriteWithoutCard = () => {
  return (
    <WithoutFavoriteContainer>
      <WithoutFavoriteHeartSvg />
      <WithoutFavoriteText>
        It appears that you haven't added any cars to your favorites yet. To get
        started, you can add cars that you like to your favorites for easier
        access in the future.
      </WithoutFavoriteText>
    </WithoutFavoriteContainer>
  );
};
