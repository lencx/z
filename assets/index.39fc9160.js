import{R as e}from"./react.434ff2b9.js";const t=({owner:t})=>e.createElement("a",{className:"gh-stats-card",href:`https://github.com/${t}`,target:"_blank",rel:"noreferrer"},e.createElement("img",{src:`https://lencx-stats.vercel.app/api/?username=${t}&show_icons=true&bg_color=320,323031,84a59d&icon_color=b0c4b1&title_color=eec170&text_color=a2a392&include_all_commits=true`,alt:`${t} stats`}));t.defaultProps={owner:"lencx"};var l=t;const r=({owner:t})=>e.createElement("a",{className:"gh-wakatime-card",href:`https://github.com/${t}`,target:"_blank",rel:"noreferrer"},e.createElement("img",{src:`https://lencx-stats.vercel.app/api/wakatime?username=${t}&layout=compact&bg_color=150,323031,84a59d&title_color=eec170&text_color=a2a392`,alt:`${t}'s wakatime`}));r.defaultProps={owner:"lencx"};var a=r;const c=({repo:t,site:l,owner:r,name:a,desc:c})=>e.createElement("tr",null,e.createElement("td",null,e.createElement("a",{href:l||`https://github.com/${r}/${t}`},a||`${r}/${t}`)),e.createElement("td",null,c),e.createElement("td",null,e.createElement("div",null,e.createElement("img",{alt:"Stars",src:`https://img.shields.io/github/stars/${r}/${t}?style=plastic&labelColor=373f51&color=e07a5f`}))),e.createElement("td",null,e.createElement("div",null,e.createElement("img",{alt:"Forks",src:`https://img.shields.io/github/forks/${r}/${t}?style=plastic&labelColor=373f51&color=e07a5f`}))));c.defaultProps={owner:"lencx"};var n=c;function s(){return e.createElement("div",{className:"project-view"},e.createElement("h2",null,"Open Source"),e.createElement("h3",null,"Stats"),e.createElement("div",{className:"gh-card-box"},e.createElement(l,null),e.createElement(a,null)),e.createElement("h3",null,"Projects"),e.createElement("div",{className:"repos"},e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"📦 Projects"),e.createElement("th",null,"📃 Description"),e.createElement("th",null,"⭐ Stars"),e.createElement("th",null,"📚 Forks"))),e.createElement("tbody",null,e.createElement(n,{repo:"z",desc:"〽️ 浮之静"}),e.createElement(n,{repo:"awesome",desc:"😎 Awesome lists about all kinds of interesting topics"}),e.createElement(n,{repo:"create-mpl",desc:"⚡️ Create a project in seconds!"}),e.createElement(n,{repo:"vite-plugin-rsw",desc:"🦀 wasm-pack plugin for Vite"}),e.createElement(n,{repo:"download-github",desc:"⬇️ Download directory from a GitHub repo."}),e.createElement(n,{repo:"rsw-node",desc:"⚪️ `wasm-pack build` executed in remote deployment"}),e.createElement(n,{repo:"learn-wasm",desc:"🎲 Learning WebAssembly"}),e.createElement(n,{repo:"rust-learn",desc:"🦀 Learning Rust"}),e.createElement(n,{repo:"code-snippets",desc:"✍️ code - 手写系列"}),e.createElement(n,{repo:"rgd",desc:"🍱 GitHub Discussions API - RSS & JSON"}),e.createElement(n,{repo:"woap",desc:"🌀 GitHub Discussions - 生成微信文章 (支持二维码及脚注形式)"}),e.createElement(n,{repo:"monthly",desc:"📰 学习总结，输出打卡"})))))}export{s as default};
