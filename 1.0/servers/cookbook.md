# Cookbook

[[toc]]

## Restarting PHP FPM

When configuring your server, Forge configures FPM so that it can be restarted without using your server's "sudo" password. To do so, you should issue the following command. Of course, you should adjust the PHP version to match the version of PHP installed on your machine:

```bash
echo "" | sudo -S service php8.0-fpm reload
```

## Resetting The Sudo Password

Forge does not store your server's sudo password and is therefore unable to reset it for you. To reset the password, you'll need to contact your server provider or use the sudo password reset facilities on the server provider's dashboard.

Once the password has been reset, Forge will be unable to SSH into your machine as `root`. This prevents you from editing PHP / Nginx configuration files from the Forge UI, and will also prevent various Forge functionality from working correctly. Before Forge can access your server, you will need to SSH into your Forge server as `forge` and reset the `root` users password:

```bash
ssh forge@your-ip-address
sudo -i
passwd
```

## Upgrading Node.js

The latest version of Node.js is installed by Forge when it is provisioning a new server. However, as your server ages, you may wish to upgrade the version of Node.js:

```bash
sudo apt-get install --only-upgrade nodejs
```

## DigitalOcean Droplet Limit Exceeded

This error is returned by [DigitalOcean](https://digitalocean.com) when you have reached a limit on how many droplets you can create. You can ask DigitalOcean to increase your droplet limit by contacting their support. Once they have increased your limit, you may create servers in Forge.

## AWS Provisioned Servers Are Disappearing

To ensure Forge works correctly with AWS, please review [these requirements](/1.0/servers/providers.html#amazon-aws-api-access).

## Server Disconnected

There are several reasons why your server may be showing as disconnected. You should check these common solutions before contacting support:

- Check that the server is accessible. If the server is turned off, you should restart it using your **provider's dashboard**.
- Check that the  server's public key is added to `/root/.ssh/authorized_keys` and `/home/forge/.ssh/authorized_keys`.
- If your server is behind a firewall, make sure you have [whitelisted Forge's IP addresses](/1.0/introduction.html#forge-ip-addresses).
- If you removed Port 22 from the server's firewall, you will need to contact your server provider and ask them to restore the rule.
- Remove any private keys or lines that do not contain a valid public key from both `/root/.ssh/authorized_keys` and `/home/forge/.ssh/authorized_keys` files.

If you are still seeing connectivity issues, you should also check that the permissions and ownership of these directories and files are correct:

```bash
# Fixes the root user (run as root)

chown root:root /root
chown -R root:root /root/.ssh
chmod 700 /root/.ssh
chmod 600 /root/.ssh/authorized_keys

# Fixes the forge user

chown forge:forge /home/forge
chown -R forge:forge /home/forge/.ssh
chmod 700 /home/forge/.ssh
chmod 600 /home/forge/.ssh/authorized_keys
```

If after trying all of the above solutions, Forge is still unable to conenct to your server but you can SSH to it, run the following as the `root` user and share the output with Forge support:

```bash
grep 'sshd' /var/log/auth.log | tail -n 10
```

:::danger Forge Management

If Forge is not able to connect to your server, you will not be able to manage it through the Forge dashboard until connectivity is restored.
:::
