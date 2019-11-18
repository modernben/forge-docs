# SSH Keys

[[toc]]

## Adding Your SSH Key To Servers

Before you provision a server for the first time, you should add your SSH keys to your account. You can do this from the [account page](https://forge.laravel.com/user/profile#/keys) in the Forge dashboard.

As part of the provisioning process, Forge will add SSH keys to the `forge` account. This will allow you to SSH into the server as the `forge` user.

If any of your sites are using User Isolation, then you'll be asked to select the user you want to add the key to. This will then allow you to SSH into the server as that user.

## Server Public Key

During the provisioning process, Forge will generate a public key for the server.

## Forge Public Key

During the provisioning process, Forge will generate a public key for the `forge` user. This is used by Git to clone the projects to your server. The key will be added to the source control provider.