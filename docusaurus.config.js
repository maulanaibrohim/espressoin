// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'EspressoIn',
  tagline: 'Teori Fungsi Kerapatan (Density Functional Theory) menggunakan Quantum Espresso',
  favicon: 'img/logo.ico',

  // Set the production URL of your site here
  url: 'https://maulanaibrohim.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages deployment, it is often '/<projectName>/'
  baseUrl: '/espressoin/',

  // GitHub Pages deployment config.
  // If you aren't using GitHub Pages, you don't need these.
  organizationName: 'maulanaibrohim', // Usually your GitHub org/user name.
  projectName: 'espressoin', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like HTML lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Set any additional configuration for the "docs" section
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-999X9XX9XX',
          anonymizeIP: true,
        },
      },
    ],
  ],


  themeConfig: {
    announcementBar: {
      id: 'supportus',
      content: '<b>Masih dalam pengembangan</b>, saran dan masukan sangat ditunggu <a target="_blank" rel="noopener noreferrer" href="https://github.com/maulanaibrohim/espressoin/issues/new/choose">di sini</a>!',
      isCloseable: true,
    },    
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EspressoIn',
      logo: {
        alt: 'logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/maulanaibrohim/espressoin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Docs',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Social Media',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/maulana-ibrohim/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mibrohim_',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/mibrohim_',
            },
            {
              label: 'Threads',
              href: 'https://www.threads.net/@mibrohim_',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/maulanaibrohim',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/maulanaibrohim',
            },
            {
              label: 'Hugging Face',
              href: 'https://huggingface.co/maulanaibrohim',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maulana Ibrohim.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;