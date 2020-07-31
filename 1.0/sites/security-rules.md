# Security Rules

[[toc]]

## Overview

Forge can configure password protection on your sites using Basic Auth. You can choose whether to protect your entire site, or a specific path.

:::tip Basic Auth?

If you're unfamilar with Basic Auth, you can read more about it [here](https://en.wikipedia.org/wiki/Basic_access_authentication).

:::

## Managing Security Rules

### Creating a Security Rule

You may create a new Security Rule from your sites dashboard in Forge. You must supply a name, which some browsers will display in their authentication box, and provide at least one set of credentials.

If you need to add multiple credentials, you can click the **+** button to add a new username and password combination.

Once you're done, click **Add Security Rule**.

:::tip Security Rule Paths

Any valid Nginx `location` string is acceptable when creating a new security rule. For example, `= /docs` will limit only the root of the docs path. Learn more about the location block [here](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms#location-block-syntax).

:::

### Deleting a Security Rule

If you no longer need a rule, you can click the red delete button next to the rule under the **Security Rules** table.

## Credentials

Forge creates a unique `.htpasswd` for each created Security Rule, meaning each path may have its own set of credentials. This also means that you will need to re-enter the same credentials for multiple paths - there is no credential sharing.

If you need to modify credentials, you can find the `.htpasswd` at `/etc/nginx/forge-conf/.../server/.htpasswd-{ruleId}`.

:::warning Passwords

Forge does not store the passwords, and immediately sends it to the server to be encrypted by `openssl`.

:::

## Customization

Basic Auth within Nginx allows you to add further restrictions such as Allowing and Denying an IP address. Forge does not provide the ability to configure this, but you are free to customize your protected site config.

Forge creates a separate `/etc/nginx/forge-config/.../server/protected_site-{ruleId}.conf` configuration file for protected sites.

You can read more about [Nginx and Basic Auth here](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/#).
