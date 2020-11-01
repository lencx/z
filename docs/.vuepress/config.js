module.exports = {
  title: 'MTC',
  description: 'My tools & config, and awesome lists.',
  base: '/',
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
