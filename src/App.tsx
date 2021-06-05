import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Head from '@comps/Head';

import Router from './router/Router';

import routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Head />
      <Router routes={routes} />
    </BrowserRouter>
  );
}
