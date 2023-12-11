import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HashRouter basename="/auto-wave" future={{ v7_startTransition: true }}> */}
    <BrowserRouter basename="/auto-wave">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    {/*  
    </HashRouter> */}
  </React.StrictMode>
);
