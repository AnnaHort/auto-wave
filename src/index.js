import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/auto-wave" future={{ v7_startTransition: true }}>
      {/* <BrowserRouter basename="/auto-wave"> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>
);
