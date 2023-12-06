import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { lazy, Suspense } from "react";

const HeaderList = lazy(() => import("./components/HeaderList.jsx"));
const Catalog = lazy(() => import("./pages/CatalogPage/Catalog.jsx"));
const Favorites = lazy(() => import("./pages/FavoritesPage/Favorites.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HeaderList />}>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;
