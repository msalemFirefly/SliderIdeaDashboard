import React from 'react';
import ReactDOM from 'react-dom/client';
import SwipeCards from './SwiperCards';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SwipeCards />
  </React.StrictMode>
);
