import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import { store } from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <BrowserRouter basename="/auto-wave">
      <App />
    </BrowserRouter>
     </Provider>
  </React.StrictMode>
);
