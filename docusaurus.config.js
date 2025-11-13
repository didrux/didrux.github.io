// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Mykhailo Ovdiienko',
    tagline: 'I turn complex systems into clear, developer-ready docs.',
    favicon: 'img/favicon.ico',

    future: { v4: true },

    url: 'https://didrux.github.io',
    baseUrl: '/',

    organizationName: 'didrux',
    projectName: 'didrux.github.io',
    deploymentBranch: 'gh-pages',

    onBrokenLinks: 'throw',
    i18n: { defaultLocale: 'en', locales: ['en'] },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: false, // turn on later if you want a blog
                theme: { customCss: './src/css/custom.css' },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            image: 'img/og.png', // put an OG image in /static/img/og.png
            colorMode: { respectPrefersColorScheme: true },
            navbar: {
                title: 'Mykhailo Ovdiienko',
                logo: { alt: 'MO', src: 'img/logo.svg' },
                items: [
                    { href: '/#work', label: 'Work', position: 'left' },
                    { href: '/#skills', label: 'Skills', position: 'left' },
                    { href: '/#about', label: 'About', position: 'left' },
                    { href: '/#contact', label: 'Contact', position: 'left' },
                    { href: 'https://github.com/didrux', label: 'GitHub', position: 'right' },
                    { href: 'https://www.linkedin.com/in/mykhailo-ovdiienko', label: 'LinkedIn', position: 'right' },
                ],
            },
            footer: {
                style: 'dark',
                copyright: `© ${new Date().getFullYear()} Mykhailo Ovdiienko. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            metadata: [
                { name: 'author', content: 'Mykhailo Ovdiienko' },
                { name: 'description', content: 'Technical Writer portfolio: API docs, docs-as-code, IA, and case studies.' },
                { property: 'og:title', content: 'Mykhailo Ovdiienko – Technical Writer' },
                { property: 'og:description', content: 'Docs, tutorials, API guides, and case studies.' },
            ],
        }),
};

export default config;
