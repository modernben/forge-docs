# Server Providers

[[toc]]

## Supported Server Providers

Forge supports a range of third-party server providers:

- DigitalOcean
- Linode Cloud
- Amazon
- Vultr

### Linking Additional Server Providers

You can link additional server providers from your account profile. You can access your account profile via the drop-down selection menu at the top-right of the Forge UI. Once you have accessed your account profile, you should navigate to the "Server Providers" tab.

## Bring Your Own Server

Alongside support for DigitalOcean, Linode, AWS and Vultr, Forge also supports the ability to use your own server. When creating a new server, select the **Custom VPS** option.

There are a few requirements to ensure that this works successfully:

- The server your connecting to **must be** running a fresh installation of Ubuntu 18.04 x64.
- Your server **must be** accessible externally over the internet.
- There **must be** a root user with no password.

 During the creation process, you may customize the SSH Port that is used (defaulted to `22`).

If you need to whitelist the Forge IP addresses, you can find them [here](/1.0/introduction.html#forge-ip-addresses).
