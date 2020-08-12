# Server Providers

[[toc]]

## Supported Server Providers

Forge supports a range of third-party server providers:

- DigitalOcean
- Linode Cloud
- Amazon
- Vultr
- Hetzner Cloud

:::tip Bring Your Own Provider
If your preferred provider is not baked into Forge, you can always use the Custom VPS option.
:::

### DigitalOcean Backups

If you are using DigitalOcean as your server provider, you may also enable the [DigitalOcean Weekly Backups](https://www.digitalocean.com/community/tutorials/digitalocean-backups-and-snapshots-explained) feature.

:::warning Backups
Forge is not responsible for your backups. Enabling this feature only tells DigitalOcean to make weekly backups of your server.
:::

### Linking Additional Server Providers

You can link additional server providers from your account profile. You can access your account profile via the drop-down selection menu at the top-right of the Forge UI. Once you have accessed your account profile, you should navigate to the "Server Providers" tab.

### Vultr API Access

The Vultr server provider requires you to add the [Forge IP addresses](/1.0/introduction.html#forge-ip-addresses) to an allowed list, so that Forge can communicate with your servers. Make sure that you do this before provisioning a server via Forge.

## Bring Your Own Server

Alongside supporting several providers, Forge also supports the ability to use your own server. When creating a new server, select the **Custom VPS** option.

There are a few requirements to ensure that this works successfully:

- The server your connecting to **must be** running a fresh installation of Ubuntu 20.04 x64.
- Your server **must be** accessible externally over the internet.
- There **must be** a root user with no password.

During the creation process, you may customize the SSH Port that is used (defaulted to `22`).

If you need to add the Forge IP addresses to an allow list, you can find them [here](/1.0/introduction.html#forge-ip-addresses).
