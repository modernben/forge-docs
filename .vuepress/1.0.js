module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ['introduction', 'cli'],
    },
    {
        title: "Accounts",
        collapsable: false,
        children: prefix('accounts', [
            'your-account',
            'circles',
            'source-control',
            'ssh',
            'api',
            'cookbook',
            'tags',
        ]),
    },
    {
        title: "Servers",
        collapsable: false,
        children: prefix('servers', [
            'providers',
            'types',
            'management',
            'provisioning-process',
            'ssh',
            'php',
            'packages',
            'recipes',
            'load-balancing',
            'nginx-templates',
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
            'commands',
            'packages',
            'queues',
            'security-rules',
            'redirects',
            'ssl',
            'user-isolation',
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
            'network',
            'scheduler',
            'integrations',
            'cookbook',
        ]),
    },
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
