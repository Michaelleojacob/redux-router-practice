import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './app/store/store';
import Nav from './app/components/nav';
import App from './app/app';
import Counter from './app/components/counter';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Provider store={store}>
      <Nav />
      <div>=========================================================</div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement,
);
