import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '入菩萨行论',
  favicon: 'img/favicon.ico',

    // Set the production url of your site here
  url: 'https://michael-weizhong-shan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/way-of-bodhisattva/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'michael-weizhong-shan', // Usually your GitHub org/user name.
  projectName: 'way-of-bodhisattva', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // Future flags are optional; keeping v4: true is fine for longevity
  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '入菩萨行论',
        items: [
          {
            type: 'dropdown',
            label: '浏览模式',
            position: 'left',
            items: [
              {
                label: '按科判浏览',
                type: 'doc',
                docId: 'analysis/p0-analysis', 
              },
              {
                label: '按品目浏览',
                type: 'doc',
                docId: 'chapters/p0-chapter',
              },
            ],
          },
          {
            to: '/intro',
            position: 'left',
            label: '关于本站',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} 网站版权开放，欢迎流通`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

   themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        docsRouteBasePath: "/", 
      },
    ],
  ], 
};

export default config;
