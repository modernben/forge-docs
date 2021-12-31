# SSH Keys

[[toc]]

## Adding Your SSH Key To Servers

Before you provision a server for the first time, you should add your SSH keys to your account. You can do this from the [account page](https://forge.laravel.com/user-profile/ssh-keys) in the Forge dashboard.

As part of the provisioning process, Forge will add SSH keys to the `forge` account. This will allow you to SSH into the server as the `forge` user.

If any of your sites are using User Isolation, you will be asked to select the user you want to add the key to. You will then be able to SSH into the server as that user.

## Server Public Key

During the provisioning process, Forge will generate its own keypair so that it may access the server. It will add the public key from this keypair to the `authorized_keys` file of both the `root` and `forge` users.

## Forge Public Key

During the provisioning process, Forge will generate a public key for the `forge` user. This is used by Git to clone the projects to your server. The key will be added to the source control provider. This key is located at `/home/forge/.ssh/id_rsa.pub`.
