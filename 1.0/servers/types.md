# Server Types

[[toc]]

## Introduction

Forge supports provisioning several different types of servers:

- Application Servers
- Web Servers
- Load Balancers
- Database Servers
- Cache Servers

Below, we will discuss each of these server types in more detail.

## Server Types

### App Servers

Application servers are designed include everything you need to deploy a typical Laravel / PHP application within a single server. Therefore, they are provisioned with the following software:

- PHP
- Nginx
- MySQL / Postgres (if selected)
- Redis
- Memcached
- Node.js

Application servers are the most typical type of server provisioned on Laravel Forge. If your unsure which server type you need, most likely you should provision an application server.

### Web Servers

Web servers contain the web server software you need to deploy a typical Laravel / PHP application, but they do not contain a database or cache. Therefore, these servers are meant to be [networked to](./../resources/network.md) other dedicated database and cache servers. Web servers are provisioned with the following software:

- PHP
- Nginx
- Node.js

### Load Balancers

Load balancers are meant to distribute incoming web traffic across your servers. To do so, load balances use Nginx as a "reverse proxy" to evenly distribute the incoming traffic. Therefore, load balancers are only provisioned with Nginx.

### Database Servers

Database servers are intended to function as dedicated MySQL / Postgres servers for your application. These servers are meant to be accessed by a dedicated application or web server via Forge's [network management features](./../resources/network.md). Database servers are provisioned with the following software, based on your selections during the server's creation:

- MySQL, MariaDB, or PostgreSQL

### Cache Servers

Cache servers are intended to function as dedicated Redis / Memcached servers for your application. These servers are meant to be accessed by a dedicated application or web server via Forge's [network management features](./../resources/network.md). Cache servers are provisioned with the following software:

- Redis
- Memcached
