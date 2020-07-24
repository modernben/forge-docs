module.exports = {
    title: "Laravel Forge",
    description: "Laravel Hosting & Instant PHP Servers",
    base: '/docs/',

    head: [
        [
            'link',
            {
                href:
                    'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
                rel: 'stylesheet',
                type: 'text/css',
            },
        ],
    ],

    themeConfig: {
        // logo: '/assets/img/logo.svg',
        displayAllHeaders: false,
        activeHeaderLinks: false,
        searchPlaceholder: 'Search...',
        lastUpdated: 'Last Updated', // string | boolean
        sidebarDepth: 0,

        nav: [
            { text: 'Home', link: 'https://forge.laravel.com' }
        ],

        sidebar: {
            '/1.0/': require('./1.0')
        },
    },
}
