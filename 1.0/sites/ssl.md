# SSL

[[toc]]

## Overview

Forge supports installing custom SSL certificates and using LetsEncrypt to generate free certificates for your websites. 

## LetsEncrypt

[LetsEncrypt](https://letsencrypt.org) provides free SSL certificates that are recognized across all major browsers.

If you need to install LetsEncrypt for multiple domains, you may separate multiple domains using commas.

:::warning Cloning a LetsEncrypt Certificate

Because of the LetsEncrypt renewal process, it is not possible to clone LetsEncrypt certificates. You will need to issue a new certificate.

:::

### Wildcard Subdomain LetsEncrypt Certificates

To install a LetsEncrypt certificate with support for wildcard subdomains, you will need to list both the wildcard subdomain and the root domain in your domain list: `*.domain.com, domain.com`. LetsEncrypt only supports the `dns-01` challenge type when issuing wildcard certificates, so you will need to provide API credentials for your DNS provider.

Forge currently supports the following DNS providers:

- Cloudflare
- DigitalOcean
- DNSimple
- Linode
- Route53
- OVH

### Cloudflare API Token

If you are using [Cloudflare](https://cloudflare.com), your Cloudflare API token must have the `Zone.Zone.Read` and `Zone.DNS.Edit` permissions. In addition, the token must have permissions on **all** zones attached to your Cloudflare account.

## Existing Certificates

You can also install purchased certificates through the Forge UI.
