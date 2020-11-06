# Root Access

[[toc]]

## Overview

Forge requires root access to install and configure various applications and services on your server. Without this access, Forge will not be able to manage your server correctly.

## Provisioning

During the initial provisioning of your server, Forge will connect as the `root` user over SSH. This is so that Forge is able to add repositories, install dependencies and configure new services, firewalls and more.

## Post-Provisioning

Forge continues to need root access to that it can manage your server's software, services and configurations. For example, root access is needed to manage:

- Firewalls
- Daemons
- Scheduled Tasks
- Create isolated users
- Install and manage PHP
- And more

## Security

We take security very seriously and ensure that we do everything we can to protect customer's data.

- Forge issues a unique SSH key for each server that it connects to.
- Passwordless logins are disabled during provisioning.
- The SSH `PermitRootLogin` setting is left enabled, but only Forge has the SSH key for the root user by default.
- Each server is issued a unique root password.
- All ports are blocked by default with UFW. We then explicitly open ports: 22 (SSH), 80 (HTTP) and 443 (HTTPS).
