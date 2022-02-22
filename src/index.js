import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <h1>hi</h1>
  </BrowserRouter>,
  rootElement,
);
