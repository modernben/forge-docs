# Load Balancing

[[toc]]

## Overview

Load balancers are used to spread the load (meaning web traffic) amongst two or more servers and are often used for websites which receive high volumes of traffic.

The key differences between an app server and a load balancer:

- A database server will not be installed
- PHP is not installed
- Node.js is not installed

## Creating Load Balancers

When provisioning a new server you must select the **Provision As Load Balancer** option. Once provisioning has completed, you can now create a load balanced site.

Once you have added the site to your server, Forge will ask you to select the servers you wish to balance the site across. The list of servers will include all of the servers in the same private network as the load balancer.

## Removing Servers From Load Balancers

Servers can be removed from a "Balanced Server" at any time from the server's detail page.

## SSL

Typically you would install SSL certificates on the individual application server, but with load balancing the certificate should be configured on the load balancer itself. You can follow the SSL [documentation](/docs/1.0/sites/ssl.html#ssl) for more information.

When using SSL on a load balancer you must configure trusted proxies in your application. For Laravel application, see the [trusted proxies documentation](https://laravel.com/docs/master/requests#configuring-trusted-proxies).