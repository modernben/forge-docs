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
        ]),
    },
    {
        title: "Servers",
        collapsable: false,
        children: prefix('servers', [
            'management',
            'providers',
        ]),
    },
    {
        title: "Sites",
        collapsable: false,
        children: prefix('sites', [
            'the-basics',
            'queues',
            'notifications',
            'user-isolation',
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
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
