import React from "react";
import CarFilter from "../../components/CarFilter/CarFilter";
import CarCard from "../../components/CarCard/CarCard";
import { LoadMoreStyled } from "./Catalog.styled";
import ModalWindowCar from "../../components/modalCarCard/ModalCarCard";

const Catalog = () => {
  return (
    <>
      <CarFilter />
      <CarCard/>
      <ModalWindowCar/>
      <LoadMoreStyled>Load more</LoadMoreStyled>
    </>
  );
};

export default Catalog;
