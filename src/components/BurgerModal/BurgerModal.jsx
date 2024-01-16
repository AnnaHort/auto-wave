import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BurgerModalCloseBtnContainer, BurgerModalContainer, BurgerModalList, BurgerModalListEl, PortalContainer } from './BurgerModal.styled';
import { GiCarWheel } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { HeaderLogoContainer, LinkStyle } from 'components/HeaderList/HeaderList.styled';

export const BurgerModal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <PortalContainer>
      <BurgerModalContainer>
        <BurgerModalCloseBtnContainer>
          <HeaderLogoContainer>
            <GiCarWheel size={32} />
            <LinkStyle to="/">AutoWave</LinkStyle>
          </HeaderLogoContainer>
          <IoMdClose onClick={onClose} size={24}/>
        </BurgerModalCloseBtnContainer>
        <BurgerModalList>
          <BurgerModalListEl>
            <LinkStyle to="/" style={{marginLeft:"12px"}}>Home</LinkStyle>
          </BurgerModalListEl>
          <BurgerModalListEl>
            <LinkStyle to="/catalog" style={{marginLeft:"12px"}}>Catalog</LinkStyle>
          </BurgerModalListEl>
          <BurgerModalListEl>
            <LinkStyle to="/favorites" style={{marginLeft:"12px"}}>Favorites</LinkStyle>
          </BurgerModalListEl>
        </BurgerModalList>
      </BurgerModalContainer>
    </PortalContainer>,
    document.getElementById('portal')
  );
};
