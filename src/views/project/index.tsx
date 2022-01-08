import React from 'react';

import { StatsCard, WakatimeCard } from '@comps/GhCard';
import Repo from './Repo';

import './index.scss';

export default function HomeView() {
  return (
    <div className="project-view">
      <h2>Open Source</h2>
      <h3>Stats</h3>
      <div className="gh-card-box">
        <StatsCard />
        <WakatimeCard />
      </div>
      <h3>Projects</h3>
      <div className="repos">
        <table>
          <thead>
            <tr>
              <th>📦 Projects</th>
              <th>📃 Description</th>
              <th>⭐ Stars</th>
              <th>📚 Forks</th>
            </tr>
          </thead>
          <tbody>
            <Repo repo="z" desc="〽️ 浮之静" />
            <Repo
              repo="awesome"
              desc="😎 Awesome lists about all kinds of interesting topics"
            />
            <Repo repo="create-mpl" desc="⚡️ Create a project in seconds!" />
            <Repo repo="vite-plugin-rsw" desc="🦀 wasm-pack plugin for Vite" />
            <Repo
              repo="download-github"
              desc="⬇️ Download directory from a GitHub repo."
            />
            <Repo
              repo="rsw-node"
              desc="⚪️ `wasm-pack build` executed in remote deployment"
            />
            <Repo repo="learn-wasm" desc="🎲 Learning WebAssembly" />
            <Repo repo="rust-learn" desc="🦀 Learning Rust" />
            <Repo repo="code-snippets" desc="✍️ code - 手写系列" />
            <Repo repo="rgd" desc="🍱 GitHub Discussions API - RSS & JSON" />
            <Repo
              repo="woap"
              desc="🌀 GitHub Discussions - 生成微信文章 (支持二维码及脚注形式)"
            />
            <Repo repo="monthly" desc="📰 学习总结，输出打卡" />
          </tbody>
        </table>
      </div>
    </div>
  );
}
