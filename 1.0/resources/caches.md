# Caches

[[toc]]

## Overview

When provisioning a server Forge will install a Redis server. The Redis server is private, meaning Forge will not expose the default port: 6379 to the public internet.
The Redis server is accessible only within the Forge provisioned server.

## Default configuration settings

The installed Redis server has the following default configuration settings:

```bash
Host: 127.0.0.1 (within your Forge server)
Port: 6379
Password: no password
```

## Connecting to the Redis Server using your Laravel Application(s)

You can use the default configuration settings mentioned above to populate your environment (.env) variables if needed.

```bash
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

:::tip Default environment variables - .env.example
The environment variables and their values mentioned above are the defaults in the .env.example file that comes with every Laravel application.
:::

## Connecting to the Redis Server using a Database/Redis GUI Client

All Forge servers require SSH key authentication and are not able to be accessed using passwords. Therefore, when using a GUI client to connect to your Forge Redis server, you will need to use SSH authentication.

When selecting the SSH key to use during authentication, **ensure that you select your private SSH key**. 
