// масив айді улюблених машин
export const selectFavoriteCar = state => state.car.favoriteId;

// фільтр по моделі
export const selectFilterSearchModel = state => state.filter.searchModel;
// фільтр по прайсу
export const selectFilterSearchPrice = state => state.filter.searchPrice;
// фільтр по милях
export const selectFilterSearchMileageFrom = state =>
  state.filter.searchMileageFrom;
export const selectFilterSearchMileageTo = state =>
  state.filter.searchMileageTo;

// масив всіх даних
export const selectCarsInfo = state => state.filter.carsInfo;
// ресет 
export const resetFilters = state => state.filter.reset;
