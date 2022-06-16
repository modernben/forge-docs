---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/servers/packages.html'
---
# Packages

[[toc]]

## Overview

Forge allows you to manage the "http-basic" portion of the selected user's auth.json Composer configuration file. The provided credentials are only stored on the server, not in Forge.

### Global Composer Credentials

The Composer Credentials that you can manage on the server level will apply to all sites that are served by the same Ubuntu user account. For example, if you have two sites installed under the `forge` user, both these sites will benefit from globally stored credentials. If you need more fine-grained control, please see the [Packages](/1.0/sites/packages.html) documentation for sites.

### User Selection

If you have sites configured with user isolation, please make sure to first select the appropriate Ubuntu user. The auth.json file is global in terms of each individual Ubuntu user account.

## Adding Credentials

You can add additional credentials by clicking the "Add Credentials" button.
You need to provide the following details:
- URL of the repository - this is how Composer matches the credentials to the package for which the provider wants to authenticate users
- Username - this is generally an email address, but can also be any kind of unique identifier that the provider of the package uses
- Password - this is generally the password associated with the username, however in some case, this can also be a license key

Please click "Save" in order to store these credentials in the user's global composer configuration directory (`~/.config/composer/auth.json`).

## Removing Credentials

In order to remove Composer credentials, you can simply click on the red button displayed on the same line as the Repository URL.

After removing credentials, please do not forget to click "Save" in order to store your new credentials configuration.

# Updating Credentials

Any credentials that are shown on the screen can be updated with any new adequate value.

After updating the value, please do not forget to click the "Save" button in order your new credenials configuration.

