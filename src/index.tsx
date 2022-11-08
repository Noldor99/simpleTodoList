import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import '../node_modules/react-bootstrap/dist/react-bootstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import { store } from './store/redusers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

 
