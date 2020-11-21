module.exports = {
  title: 'MTC',
  description: 'My tools & config, and awesome lists.',
  base: '/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
  ],
  // markdown: {
  //   lineNumbers: true,
  // },
  plugins: [
    '@vuepress/back-to-top',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容",
        buttonText: "刷新"
      },
    }],
    ['@vuepress/last-updated', {
      dateOptions:{
        hour12: false,
      },
    }],
    ['medium-zoom', {
      selector: '.theme-default-content img:not(.no-medium-zoom)',
      // delay: 1000,
      // options: { margin: 24, scrollOffset: 0 },
    }],
  ],
  themeConfig: {
    logo: '/logo.webp',
		docsDir: 'docs',
    repo: 'lencx/mtc',
    repoLabel: '点⭐️不迷路',
    docsBranch: 'main',
		editLinks: true,
    editLinkText: '帮助改善此页面',
    lastUpdated: '上次更新',
    smoothScroll: true,
    // sidebar: 'auto',
    // displayAllHeaders: true,
    'nav': [
			{ text: '关于我', link: 'https://nofwl.com' },
    ],
    sidebar: [
      [ "/preface", "「 序 」" ],
      {
        title: '😎 Awesome',
        collapsable: true,
        children: [
          '/awesome/app',
          '/awesome/browser',
          '/awesome/ebook',
          '/awesome/online',
          '/awesome/tech',
        ],
      },
      {
        title: '⚙️ 配置 & 工具',
        collapsable: true,
        children: [
          '/settingTools/tools',
          '/settingTools/fe',
          '/settingTools/git',
          '/settingTools/mac',
          '/settingTools/rust',
          'settingTools/terminal',
          '/settingTools/vscode',
          '/settingTools/zsh',
        ],
      },
      {
        title: '💡 学习 & 思考',
        collapsable: true,
        children: [
          '/thinking/web-component',
        ],
      },
      {
        title: '📝 阅读 & 笔记',
        collapsable: true,
        children: [
          // '/notes/ai',
          '/notes/rust',
          '/notes/hackers-and-painters',
          '/notes/pale-blue-dot',
        ],
      },
      {
        title: '🔢 数学 & 算法',
        collapsable: true,
        children: [
          '/algorithms/iterative',
          '/algorithms/math-induction',
          '/algorithms/merge-sort',
        ],
      },
    ]
  }
}
