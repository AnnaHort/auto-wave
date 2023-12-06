import React from "react";
import { ListStyle } from "./CarRentalBrands.styled";

const CarRentalBrands = () => {
  const imagePaths = [
    "/pictures/CarRentalBrands/alamo_logo_lrg.jpg",
    "/pictures/CarRentalBrands/budget_logo_lrg.jpg",
    "/pictures/CarRentalBrands/enterprise_logo_lrg.jpg",
    "/pictures/CarRentalBrands/europcar_logo_lrg.jpg",
    "/pictures/CarRentalBrands/firent_logo_lrg.jpg",
    "/pictures/CarRentalBrands/hertz_logo_lrg.jpg",
    "/pictures/CarRentalBrands/sixt_logo_lrg.jpg",
    "/pictures/CarRentalBrands/thrifty_logo_lrg.jpg",
  ];
  return (
    <ListStyle>
      {imagePaths.map((path, index) => (
        <li key={index}>
          <img  src={path} alt={`Car Rental Brand ${index}`} />
        </li>
      ))}
    </ListStyle>
  );
};

export default CarRentalBrands;
