import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Inclusivity Bookshelf',
  tagline: 'A simple way to build inclusion',
  favicon: 'img/favicon.ico',

  url: 'https://www.inclusivitybookshelf.com',
  baseUrl: '/',

  organizationName: 'inclusivitybookshelf',
  projectName: 'inclusivitybookshelf',

  headTags: [
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: '/img/site.webmanifest' } },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Inclusivity Bookshelf',
        description: 'A simple, low-cost way to build inclusion in your department — start a physical bookshelf with books on diversity, neurodiversity, race, gender, and belonging.',
        url: 'https://www.inclusivitybookshelf.com',
        author: { '@type': 'Person', name: 'Andy Woods', affiliation: 'Royal Holloway, University of London' },
      }),
    },
  ],

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
    image: 'img/social-card.png',
    metadata: [
      { name: 'keywords', content: 'inclusivity, bookshelf, inclusion, diversity, neurodiversity, race, gender, belonging, DEI, DEIB, university, department' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@inclusivitybookshelf' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Inclusivity Bookshelf' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Inclusivity Bookshelf',
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Inclusivity Bookshelf. Released under the <a href="https://github.com/andytwoods/inclusivityBookshelf/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a> — this site is open source and <a href="https://github.com/andytwoods/inclusivityBookshelf" target="_blank" rel="noopener noreferrer">contributions are very welcome on GitHub</a>.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
