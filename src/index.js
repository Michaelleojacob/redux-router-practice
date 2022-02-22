import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './app/components/nav';
import App from './app/app';
import Counter from './app/components/counter';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Nav />
    <div>=========================================================</div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
