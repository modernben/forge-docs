# Load Balancing

[[toc]]

## Overview

Load balancers are used to distribute web traffic amongst two or more servers and are often used for websites which receive high volumes of traffic.

The key differences between a Forge application server and a load balancer are:

- A database server will not be installed
- PHP is not installed
- Node.js is not installed

## Creating Load Balancers

When provisioning a new server, select the **Provision As Load Balancer** option. Once provisioning has completed, you can now create a load balanced site. The site name / domain should match the name of the corresponding site on the servers that will be receiving the traffic.

Once you have added the site to your server, Forge will ask you to select the servers you wish to balance traffic across. The list of servers will include all of the servers in the same private network as the load balancer.

### Load Balancer Methods

Forge allows you to select one of three load balancer methods:

1. Round Robin - the default method, where requests are distributed evenly across all servers
2. Least Connections - requests are sent to the server with the least connections
3. IP Hash - The server to which a request is sent is determined from the client IP address.

You may switch the load balancer method at any time, simply by updating your Load Balancer.

:::tip Nginx Load Balancing Methods

You can learn more about how Nginx load balancers work [here](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/#method).
:::

## Removing Servers From Load Balancers

Servers can be removed from a "Balanced Server" at any time from the server's detail page.

## SSL

Typically, SSL certificates are installed on the individual application servers. However, when using load balancing, the certificate should be configured on the load balancer itself. You can follow the SSL [documentation](/1.0/sites/ssl.html#ssl) for more information.

When using SSL on a load balancer, you must configure the "trusted proxies" in your application. For Laravel application, see the [trusted proxies documentation](https://laravel.com/docs/requests#configuring-trusted-proxies).
