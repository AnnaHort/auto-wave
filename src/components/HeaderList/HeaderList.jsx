import { Outlet } from 'react-router-dom';
import {
  NavStyled,
  HeaderListStyled,
  LinkStyle,
  LogoContainer,
  HeaderLogoContainer,
  BurgerSvg,
} from './HeaderList.styled';
import { Suspense } from 'react';
import { GiCarWheel } from 'react-icons/gi';
import { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const HeaderList = () => {
  return (
    <>
      <NavStyled>
        <LogoContainer>
          <HeaderLogoContainer>
            <GiCarWheel size={32} />
            <LinkStyle to="/">AutoWave</LinkStyle>
          </HeaderLogoContainer>

          <BurgerSvg size={24}/>
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
