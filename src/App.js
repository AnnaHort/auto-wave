import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/HomePage/Home.jsx"));
const Catalog = lazy(() => import("./components/CatalogPage/Catalog.jsx"));
const Favorites = lazy(() =>
  import("./components/FavoritesPage/Favorites.jsx")
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;
