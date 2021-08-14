import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackTop from '@/components/BackTop';

import Router from './router/Router';

import routes from './routes';

const menuList: any[] = routes.filter((i) => !!i.name);

export default function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <div className="view">
          <Header menuList={menuList} />
          <Router routes={routes} />
          <Footer />
          <BackTop />
        </div>
      </HashRouter>
    </RecoilRoot>
  );
}
