const repoUrl = 'https://github.com/webdriverio/webdriverio'

module.exports = {
    title: 'WebdriverIO',
    projectName: 'webdriver.io',
    tagline: 'Next-gen WebDriver test framework for Node.js',
    url: 'https://webdriver.io',
    baseUrl: '/',
    repoUrl: repoUrl,
    favicon: 'img/favicon.png',

    colors: {
        primaryColor: '#ea5906',
        secondaryColor: '#111111'
    },

    // Add custom scripts here that would be placed in <script> tags
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://platform.twitter.com/widgets.js'
    ],

    presets: [
        ['@docusaurus/preset-classic', {
            docs: {
                // docs folder path relative to website dir.
                path: '../docs',
                // sidebars file relative to website dir.
                sidebarPath: require.resolve('./sidebars.json'),
            },
            theme: {
                customCss: require.resolve('./static/css/index.css'),
            },
            blog: {
                blogSidebarCount: 25
            },
            docs: {
                // Equivalent to `customDocsPath`.
                path: 'docs',
                // Equivalent to `editUrl` but should point to `website` dir instead of `website/docs`
                editUrl: repoUrl + '/edit/master/website/',
                // Equivalent to `docsUrl`.
                routeBasePath: 'docs',
                // Remark and Rehype plugins passed to MDX. Replaces `markdownOptions` and `markdownPlugins`.
                remarkPlugins: [],
                rehypePlugins: [],
                // Equivalent to `enableUpdateBy`.
                showLastUpdateAuthor: true,
                // Equivalent to `enableUpdateTime`.
                showLastUpdateTime: true
            }
        }]
    ],
    themeConfig: {
        footer: {
            logo: {
                alt: 'WebdriverIO Logo',
                src: 'img/webdriverio.png',
                href: 'https://webdriver.io/',
            },
            // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
            copyright: 'Copyright © ' + new Date().getFullYear() + ' OpenJS Foundation'
        },
        image: 'img/webdriverio.png',
        // Equivalent to `docsSideNavCollapsible`
        sidebarCollapsible: false,
        // navigation
        navbar: {
            links: [
                { position: 'right', to: 'gettingstarted', label: 'Guide' },
                { position: 'right', to: 'api', label: 'API' },
                { position: 'right', to: 'help', label: 'Help' },
                { position: 'right', to: 'versions', label: 'Versions' },
                { position: 'right', to: 'blog', label: 'Blog' },
                { position: 'right', to: 'docs/contribute', label: 'Contribute' },
                { search: true },
                { position: 'right', href: repoUrl, label: 'GitHub' }
            ]
        },
        algolia: {
            apiKey: '1b22fa823f22b7916528edc0e36d9d4a',
            indexName: 'webdriver',
            appId: 'BH4D9OD16A'
        },
        googleAnalytics: {
            gaTrackingId: 'UA-47063382-1'
        }
    }
}
