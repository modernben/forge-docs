---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/sites/packages.html'
---
# Packages

[[toc]]

## Overview

Forge allows you to manage the "http-basic" portion of the site's auth.json Composer configuration file. The provided credentials are only stored on the server inside the site's base directory, not in Forge.

### Site Composer Credentials

The Composer Credentials that you can manage on the site level only apply to this site . For example, if you have two sites installed under the `forge` user, and you need both sites to use different credentials for the same Composer package, you should use the site's packages. If you want to store one set of credentials that applies to all sites with a user's home directory, please see [Packages](/1.0/servers/packages.html) for more details.

### Adding Credentials Before Installing a Repository

Forge does not allow you to install credentials before you have installed a repository; instead it will redirect you back to the App tab. This is done because Forge recreates the site's base directory if the initial installation does not finish successfully. So if you need to provide local Composer Credentials, you need to install a repository without "Install Composer Dependencies".

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
