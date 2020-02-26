module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ['introduction'],
    },
    {
        title: "Accounts",
        collapsable: false,
        children: prefix('accounts', [
            'your-account',
            'circles',
            'source-control',
            'ssh',
            "api",
            'cookbook',
            'tags',
        ]),
    },
    {
        title: "Servers",
        collapsable: false,
        children: prefix('servers', [
            'management',
            'providers',
            'load-balancing',
            'backups',
            'cookbook',
        ]),
    },
    {
        title: "Sites",
        collapsable: false,
        children: prefix('sites', [
            'the-basics',
            'deployments',
            'queues',
            'redirects',
            'ssl',
            'notifications',
            'user-isolation',
            'management',
            'cookbook',
        ]),
    },
    {
        title: "Resources",
        collapsable: false,
        children: prefix('resources', [
            'daemons',
            'databases',
            'monitoring',
            'network',
            'scheduler',
            'cookbook',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
