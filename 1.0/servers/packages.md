---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/packages.html'
---
# Packages

[[toc]]

## Overview

Forge allows you to manage the "http-basic" portion of the selected server user's `auth.json` Composer configuration file. The provided credentials are only stored on the server, not in Forge.

### Global Composer Credentials

The Composer Credentials that you can manage on the server level will apply to all sites that are served by the same Ubuntu user account. For example, if you have two sites installed under the `forge` user, both these sites will benefit from the globally stored credentials. If you need fine-grained control, please see the [Packages](/1.0/sites/packages.html) documentation for sites.

### User Selection

If you have sites configured with user isolation, you will first need to select the appropriate server user. The `auth.json` file is global in terms of each individual server user account.

## Adding Credentials

Additional credentials can be added by clicking the "Add Credentials" button. You need to provide:

- Repository URL - this is how Composer matches the credentials to the package for which the provider wants to authenticate users
- Username - this is often an email address, but can also be any kind of unique identifier that the provider of the package uses
- Password - this is generally the password associated with the username, however in some case, this may also be a license key

Click "Save" in order to store these credentials in the user's global Composer configuration directory (`~/.config/composer/auth.json`).

## Removing Credentials

In order to remove Composer credentials, you can click on the red **X** button.

After removing credentials, you must click "Save" in order to update the credentials configuration.

# Updating Credentials

Any credentials that are shown on the screen can be updated with any new adequate value.

After updating the credential, you must click "Save" in order to update the credentials configuration.
