# Network

[[toc]]

## Server Network

Server networks make it painless to use a connected server as a separate database, cache, or queue box.

## Firewalls

Firewalls allow you to open ports on your server to the internet. These can also be configured to be limited to IP addresses. You can configure firewalls from within the Forge dashboard.

### Default Firewall Rules

As part of the provisioning process, Forge will automatically configure three rules:

- SSH - Port 22 from any IP Address
- HTTP - Port 80 from any IP Address
- HTTPS - Port 443 from any IP Address

You are free to delete and re-create these rules if your requirements are different.