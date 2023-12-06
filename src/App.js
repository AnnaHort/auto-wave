import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import { lazy, Suspense } from "react";

const MyComponent = lazy(() =>
  import("./components/MyComponent/MyComponent.jsx")
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MyComponent />} />
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;
