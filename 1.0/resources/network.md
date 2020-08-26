# Network

[[toc]]

## Overview

Forge makes managing firewalls and connecting servers to internal networks easy from the dashboard.


:::tip Manually Managing Rules

If you manually create a `ufw` rule on your server, this will not be reflected in the Forge dashboard. Forge is only aware of rules made through the Forge dashboard.
:::

## Server Network

Server networks make it painless to use a connected server as a separate database, cache, or queue box. For a server to be connected to an internal network, it must:

- Be created by the same provider
- Be using the same server provider credentials
- Be owned by the same user
- Be within the same region

## Firewalls

You can configure firewalls from within the Forge dashboard, under the **Network** tab on the server. Firewalls are used to open ports on your server to the internet. For example, you may install FTP and need to open port `21`.

For added security, you can restrict opened ports to specific IP addresses.

### Port Ranges

When creating new firewall rules, you may supply a range of ports to open e.g. `8000:8010` which will open every port from `8000` to `8010`.

### Allow or Deny

You may select whether to allow or deny the traffic that matches the rule. By creating a `deny` rule, you'll be preventing traffic from reaching the service.

:::tip Deny Rules Run First

To make `deny` rules work correctly, they are added at a higher priority than `allow`. Each new `deny` rule will be added above existing `deny` rules.
:::

## Default Firewall Rules

As part of the provisioning process, Forge will automatically configure three rules:

- SSH - Port 22 from any IP Address
- HTTP - Port 80 from any IP Address
- HTTPS - Port 443 from any IP Address

You are free to delete and re-create these rules if your requirements are different.
