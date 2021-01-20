# SSH

[[toc]]

## Overview

When provisioning a new server Forge will automatically add any of your [account's SSH keys](/1.0/accounts/ssh.html) to the server. This means that you can SSH onto your server without using a password:

```bash
ssh forge@IP_ADDRESS
```

## Server Git Project Access

During the provisoning of a server, Forge will add the server's public SSH key to the SSH keys of the Forge user's connected source control providers. This allows the server to clone any repository that the user has access to.

To opt-out of having a server's SSH key added to your source control provider account, uncheck the **Add Server's SSH Key To Source Control Providers** option in the **Create Server** form.

### Deploy Keys

Sometimes you may wish to only grant the Forge user access to a specific repository. This is typically accomplished by adding an SSH key to that repository's "Deploy Keys" on the repository's GitHub, GitLab, or Bitbucket dashboard.

When adding a new site to the server, you may choose to generate a Deploy Key for that application. Once the key has been generated, you can add it to the repository of your choice via your source control provider's dashboard - allowing the server to clone that specific repository.

:::tip Additional Access

You can use Deploy Keys inconjuction with existing servers, where the Forge user does not have or need direct access to a project, but the server should be able to clone it.
:::