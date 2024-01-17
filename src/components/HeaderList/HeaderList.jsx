import { Outlet } from 'react-router-dom';
import {
  NavStyled,
  HeaderListStyled,
  LinkStyle,
  LogoContainer,
  HeaderLogoContainer,
  BurgerSvg,
} from './HeaderList.styled';
import { Suspense, useEffect, useState } from 'react';
import { GiCarWheel } from 'react-icons/gi';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { BurgerModal } from 'components/BurgerModal/BurgerModal';

const HeaderList = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);;

  return (
    <>
      <NavStyled>
        <LogoContainer>
          <HeaderLogoContainer>
            <GiCarWheel size={32} />
            <LinkStyle to="/">AutoWave</LinkStyle>
          </HeaderLogoContainer>

          <BurgerSvg size={24} onClick={() => setIsOpen(true)} />
          <BurgerModal open={isOpen} onClose={() => setIsOpen(false)} />
        </LogoContainer>

        <HeaderListStyled>
          <li>
            <LinkStyle to="/">Home</LinkStyle>
          </li>
          <li>
            <LinkStyle to="/catalog">Catalog</LinkStyle>
          </li>
          <li>
            <LinkStyle to="/favorites">Favorites</LinkStyle>
          </li>
        </HeaderListStyled>
        <Toaster />
      </NavStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HeaderList;
