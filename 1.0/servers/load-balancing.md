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

### Port

If your load balancer needs to forward requests to a server that is listening on a port other than 80 (the default), you can manually specify it.

### Server Weights

Each server that makes up a load balancer can be configured with different weights, indicating that some servers should serve more traffic than others. For example, if you had two servers in your load balancer, one with a weight of 5 and the other with 1, then the first server would be sent five out of every six requests made to the load balancer.

### Backup Servers

Individual servers can be marked as a **backup**, which by default will recieve no traffic. Only when all other servers in the load balancer are down, will the backup become active.

### Pause

You may pause traffic to a specific server being managed by the balancer. While paused, the selected server will no longer serve incoming traffic. You may unpause the server at any time.

This is different from entirely removing it from the load balancer pool, because when you want to bring it back, you'll need to re-enter the configuration of weight and flagging it as a backup server etc.

## Removing Servers From Load Balancers

Servers can be removed from a "Balanced Server" at any time from the server's detail page.

## SSL

Typically, SSL certificates are installed on the individual application servers. However, when using load balancing, the certificate should be configured on the load balancer itself. You can follow the SSL [documentation](/1.0/sites/ssl.html#ssl) for more information.

When using SSL on a load balancer, you must configure the "trusted proxies" in your application. For Laravel application, see the [trusted proxies documentation](https://laravel.com/docs/requests#configuring-trusted-proxies).
