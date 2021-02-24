module.exports = {
  title: 'MTC',
  description: 'My tools & config, and awesome lists.',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover' }],
  ],

  themeConfig: {
		docsDir: 'docs',
    repo: 'lencx/mtc',
    repoLabel: '点⭐️不迷路',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    // algolia: {
    //   apiKey: '',
    //   indexName: ''
    // },

    nav: [
      {
        text: '😎 Awesome',
        link: '/awesome/tech',
        activeMatch: '^/awesome/'
      },
      {
        text: '🤖 Technology',
        link: '/tech/tools/terminal',
        activeMatch: '^/tech/'
      },
      {
        text: '🤔 Notes & Thinking',
        link: '/nt/pale-blue-dot',
        activeMatch: '^/nt/'
      },
      {
        text: '👨🏻‍💻 About',
        link: '/about/lencx',
        activeMatch: '^/about/'
      },
      {
        text: '🌐 Blog',
        link: 'https://nofwl.com'
      }
    ],

    sidebar: {
      '/awesome/': getAwesomeSidebar(),
      '/tech/': getTechSidebar(),
      '/nt/': getNotesAndThinkingSidebar(),
      '/about/': getAboutSidebar(),
    }
  }
}

function getAwesomeSidebar() {
  return [
    {
      title: '😎 Awesome',
      children: [
        { text: 'Tech', link: '/awesome/tech' },
        { text: 'WebAssembly', link: '/awesome/wasm' },
        { text: 'Application', link: '/awesome/app' },
        { text: 'Design', link: '/awesome/design' },
        { text: 'Online', link: '/awesome/online' },
        { text: 'Browser', link: '/awesome/browser' },
        { text: 'eBook', link: '/awesome/ebook' },
      ],
    }
  ]
}

function getNotesAndThinkingSidebar() {
  return [
    {
      text: '📝 阅读笔记',
      children: [
        { text: 'Pale Blue Dot', link: '/nt/pale-blue-dot' },
        { text: 'Hackers & Painters', link: '/nt/hackers-and-painters' },
        { text: 'Rust笔记', link: '/nt/rust' },
      ],
    }
  ]
}

function getAboutSidebar() {
  return [
    {
      text: '👨🏻‍💻 About',
      children: [
        { text: 'lencx', link: '/about/lencx' },
        { text: 'Project', link: '/about/project' },
        { text: 'Friends', link: '/about/friends' },
      ],
    }
  ]
}

function getTechSidebar() {
  return [
    {
      text: '⚙️ 配置工具',
      children: [
        { text: 'Terminal', link: '/tech/tools/terminal' },
        { text: 'Git', link: '/tech/tools/git' },
        { text: 'Mac', link: '/tech/tools/mac' },
        { text: 'Rust', link: '/tech/tools/rust' },
        { text: 'VS Code', link: '/tech/tools/vscode' },
      ],
    },
    // {
    //   text: '🕸 WebAssembly',
    //   children: [],
    // },
    {
      text: '📜 技术文章',
      children: [
        { text: '组件解耦', link: '/tech/post/web-component' },
        { text: 'Vite+Vue3实现日历', link: '/tech/post/vue3-calendar' },
        { text: '前端入门建议', link: '/tech/post/fe-getting-started' },
        { text: 'WebAssembly入门', link: '/tech/post/wasm-start' },
        { text: 'Vite与Rust邂逅', link: '/tech/post/vite-rust-wasm' },
        { text: 'Vite Rsw插件启动优化', link: '/tech/post/vite-rsw-optimized' },
        { text: 'Git速查表', link: '/tech/post/git' },
      ],
    },
    {
      text: '🚧 常见问题',
      children: [
        { text: 'Front-end', link: '/tech/faq/fe' },
        { text: 'Rust', link: '/tech/faq/rust' },
        { text: 'Git', link: '/tech/faq/git' },
        { text: 'GitHub', link: '/tech/faq/github' },
      ],
    },
    {
      text: '🔣 数学算法',
      children: [
        { text: '迭代法', link: '/tech/algorithms/iterative' },
        { text: '数学归纳法', link: '/tech/algorithms/math-induction' },
        { text: '归并排序', link: '/tech/algorithms/merge-sort' },
      ],
    },
  ];
}