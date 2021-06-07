import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Router from './router/Router';

import routes from './routes';

export default function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Header />
        <Router routes={routes} />
        <Footer />
      </HashRouter>
    </RecoilRoot>
  );
}
