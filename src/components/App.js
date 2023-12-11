import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';
import NotFound from './NotFound/NotFound.jsx';

const HeaderList = lazy(() => import('./HeaderList/HeaderList.jsx'));
const Home = lazy(() => import('../pages/HomePage/Home.jsx'));
const Catalog = lazy(() => import('../pages/CatalogPage/Catalog.jsx'));
const Favorites = lazy(() => import('../pages/FavoritesPage/Favorites.jsx'));

function App() {
  return (
    <>

        <Routes>
          <Route path="/" element={<HeaderList />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
