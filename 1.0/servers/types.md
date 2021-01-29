# Server Types

[[toc]]

## Overview

Forge supports provisioning different types of servers:

- App Server (+ Optional Database & Cache)
- Web Server (PHP & Nginx)
- Load Balancer (Nginx)
- Database Server (MySQL, Postgres or MariaDB)
- Cache Server (Redis & Memcached)

Recipes can still be ran as part of the provisioning process to further configure your servers.

## Server Types

Each type of server is designed to give you the best configuration.

### App Server

App Servers are designed include everything you'd need to deploy and run your website in a production environment. They are provisioned with:

- PHP
- Nginx
- Database (if selected)
- Cache (Redis + Memcached)
- Node.js

### Web Server

Web Servers are provisoned with:

- PHP
- Nginx
- Node.js

:::tip Use A Dedicated Cache & Database

These servers are designed to be networked to dedicated cache or database servers.

:::

### Load Balancer

Load Balancers are provisoned with:

- Nginx

### Database Server

Databse Servers are provisioned with:

- MySQL / MariaDB / PostgreSQL

You can continue to manage your databases and database users within the Forge Databases panel.

### Cache Server

Cache Servers are provisoned with:

- Redis
- Memcached
