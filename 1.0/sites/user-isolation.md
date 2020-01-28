# User Isolation

[[toc]]

## Overview

By default, Forge uses the `forge` user that is created as part of the provisioning process for all deployments, daemons, scheduled jobs, PHP-FPM, and other processes.

When using User Isolation, Forge will create a separate user for the site. This is particularly useful when combined with a Wordpress website in order to prevent plugins from maliciously accessing content in your `forge` (or other isolated user) directories.

:::tip Forge Permissions

The `forge` user is considered a "super user" and is therefore able to read all files within isolated user directories.
:::

## Connecting Via SFTP

You can connect to your server via SFTP using the isolated user for managing files and directories manually. We recommend using an SFTP client such as Transmit or Filezilla.

:::warning Upload Your SSH Key

You should first upload your SSH key to the server for the isolated user.
:::
