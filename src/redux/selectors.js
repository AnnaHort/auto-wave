// масив айді улюблених машин
export const selectFavoriteCar = state => state.car.favoriteId

// фільтр по моделі
export const selectFilterSearchModel = state => state.filter.searchModel;
// фільтр по прайсу
export const selectFilterSearchPrice = state => state.filter.searchPrice;

// масив всіх даних
export const selectCarsInfo = state => state.filter.carsInfo


