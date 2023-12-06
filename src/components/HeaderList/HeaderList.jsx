import { Outlet } from "react-router-dom";
import { NavStyled, HeaderListStyled, LinkStyle } from "./HeaderList.styled";
import { Suspense } from "react";

const HeaderList = () => {
  return (
    <>
      <NavStyled>
        
        <LinkStyle to="/">AutoWave</LinkStyle>

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
      </NavStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default HeaderList;
