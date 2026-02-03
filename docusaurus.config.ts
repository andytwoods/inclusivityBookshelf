import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Inclusivity Bookshelf',
  tagline: 'A simple way to build inclusion',
  favicon: 'img/favicon.svg',

  url: 'https://www.inclusivitybookshelf.com',
  baseUrl: '/',

  organizationName: 'inclusivitybookshelf',
  projectName: 'inclusivitybookshelf',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Inclusivity Bookshelf',
      items: [
        {
          href: '#contact',
          label: 'Contact',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Inclusivity Bookshelf.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
