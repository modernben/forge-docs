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
            'providers',
            'management',
            'php',
            'load-balancing',
            'backups',
            'monitoring',
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
            'security-rules',
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
            'caches',
            'integrations',
            'network',
            'scheduler',
            'cookbook',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
