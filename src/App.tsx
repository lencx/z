import React from 'react';
import { HashRouter } from 'react-router-dom';

import Router from './router/Router';

import routes from './routes';

export default function App() {
  return (
    <HashRouter>
      <Router routes={routes} />
    </HashRouter>
  );
}
