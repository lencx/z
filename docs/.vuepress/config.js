module.exports = {
  title: 'MTC',
  description: 'My tools & config, and awesome lists.',
  base: '/',
  themeConfig: {
    logo: '/logo.webp',
    repo: 'lencx/mtc',
		repoLabel: '点⭐️不迷路',
		editLinks: true,
		docsDir: 'docs',
		editLinkText: '为该章节纠错',
    lastUpdated: '上次更新',
    'nav': [
			{ text: '关于我', link: 'https://nofwl.com' },
		],
    sidebar: [
      '/awesome/online',
    ]
  }
}