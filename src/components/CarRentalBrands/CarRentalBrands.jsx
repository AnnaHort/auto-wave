import React from "react";
import { ListStyle } from "./CarRentalBrands.styled";

const CarRentalBrands = () => {
  const imagePaths = [
    require("../../images/carRentalBrands/alamo_logo_lrg.jpg"),
    require("../../images/carRentalBrands/budget_logo_lrg.jpg"),
    require("../../images/carRentalBrands/enterprise_logo_lrg.jpg"),
    require("../../images/carRentalBrands/europcar_logo_lrg.jpg"),
    require("../../images/carRentalBrands/firent_logo_lrg.jpg"),
    require("../../images/carRentalBrands/hertz_logo_lrg.jpg"),
    require("../../images/carRentalBrands/sixt_logo_lrg.jpg"),
    require("../../images/carRentalBrands/thrifty_logo_lrg.jpg"),
  ];
  return (
    <ListStyle>
      {imagePaths.map((path, index) => (
        <li key={index}>
          <img
            src={path}
            alt={`Car Rental Brand ${index}`}
            width="110"
            height="65"
          />
        </li>
      ))}
    </ListStyle>
  );
};

export default CarRentalBrands;
