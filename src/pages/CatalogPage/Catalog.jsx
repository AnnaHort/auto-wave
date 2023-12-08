import React from "react";
import CarFilter from "../../components/CarFilter/CarFilter";
import CarCard from "../../components/CarCard/CarCard";
import { LoadMoreStyled } from "./Catalog.styled";

const Catalog = () => {
  return (
    <>
      <CarFilter />
      <CarCard/>
      <LoadMoreStyled>Load more</LoadMoreStyled>
    </>
  );
};

export default Catalog;
