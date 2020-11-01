module.exports = {
  title: 'MTC',
  description: 'My tools & config, and awesome lists.',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true,
  }],
  themeConfig: {
    logo: '/logo.webp',
		docsDir: 'docs',
    repo: 'lencx/mtc',
		repoLabel: '点⭐️不迷路',
		editLinks: true,
		editLinkText: '为该章节纠错',
    lastUpdated: '上次更新',
    sidebar: 'auto',
    // displayAllHeaders: true,
    'nav': [
			{ text: '关于我', link: 'https://nofwl.com' },
    ],
    sidebar: [
      [ "/welcome", "序" ],
      {
        title: '⚙️ 配置&工具',
        collapsable: true,
        children: [
          'settingTools/terminal',
          '/settingTools/vscode',
          '/settingTools/git',
          '/settingTools/rust',
          '/settingTools/zsh',
        ],
      },
      {
        title: '😎 Awesome',
        collapsable: true,
        children: [
          '/awesome/online',
          '/awesome/roadmaps',
          '/awesome/react',
          '/awesome/rust',
          '/awesome/ebook',
        ],
      },
      {
        title: '💡 学习&思考',
        collapsable: true,
        children: [],
      },
      {
        title: '📝 笔记',
        collapsable: true,
        children: [
          // '/notes/ai',
          '/notes/rust',
        ],
      },
    ]
  }
}
