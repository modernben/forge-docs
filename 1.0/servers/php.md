# PHP

[[toc]]

## Overview

Forge makes it easy to install and configure PHP on your server.

## Multiple PHP Versions

When provisioning a server, you may decide which version of PHP you want to install by default.

Forge makes it easy to install additional versions alongside the default version.

### Installation

You can install additional versions of PHP between 5.6 and 7.4. Click the **Install** button to start the process. Once the version has been installed, you may select it when creating a site, or switching a site's PHP version.

When you install a version of PHP onto your server, Forge will create and configure the PHP-FPM process for that version. This means that your server will be running multiple versions of PHP at once.

### CLI

When a version of PHP has been installed you may reference it on the CLI via `php5.6` or `php7.x` (replacing the `x` with the version number). The `php` binary will always point to the active CLI version.

### Set As Default

You can set the default version of PHP used when creating a new site.

:::tip Switching Default
When switching the default version, existing sites will not be updated. This is so that you can update each site individually, without risking any upgrade issues.
:::

### Patch Versions

You can upgrade patch versions of PHP at any time using the **Patch Version** button. Forge will attempt to update PHP without making any adjustments to the configurations.

## PHP Configuration

Forge makes it easy to configure common PHP settings.

:::warning Configuration Notice
Due to the way that these settings work, they will apply to all versions of PHP installed on the server.
:::

### Max File Upload Size

You may configure the maximum file upload size through the Forge dashboard. This value should be provided in Megabytes. For reference, `1024MB` is `1GB`.

### Max Execution Time

You may configure the maximum execution time through the Forge dashboard. This value should be provided in seconds. This can be temporarily overwritten within your application codebase.

### OPCache

Optimizing the PHP OPcache for production will configure OPcache to store your compiled PHP code in memory to greatly improve performance. If you choose to optimize OPcache for production, you should verify that your deployment script reloads the PHP FPM service at the end of each deployment.
