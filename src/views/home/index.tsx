import React from 'react';

import { RepoCard } from '@comps/GhCard';

import './index.scss';

export default function HomeView() {
  return (
    <div className="home-view">
      {/* <div className="gh-card-box">
        <StatsCard />
        <WakatimeCard />
      </div> */}
      <h2>Projects</h2>
      <div className="gh-card-box">
        <RepoCard repo="z" />
        <RepoCard repo="vite-plugin-rsw" />
        <RepoCard repo="rsw-node" />
        <RepoCard repo="learn-wasm" />
        <RepoCard repo="rust-learn" />
        <RepoCard repo="js-wheel" />
        <RepoCard repo="rgd" />
        <RepoCard repo="create-xc-app" />
        {/* <RepoCard repo="woap" /> */}
      </div>
    </div>
  );
}
