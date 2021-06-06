import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Router from './router/Router';

import routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router routes={routes} />
      <Footer />
    </BrowserRouter>
  );
}
