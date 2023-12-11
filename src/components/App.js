import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import NotFound from './NotFound/NotFound.jsx';

const HeaderList = lazy(() => import('./HeaderList/HeaderList.jsx'));
const Home = lazy(() => import('../pages/HomePage/Home.jsx'));
const Catalog = lazy(() => import('../pages/CatalogPage/Catalog.jsx'));
const Favorites = lazy(() => import('../pages/FavoritesPage/Favorites.jsx'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HeaderList />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
