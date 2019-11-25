# User Isolation

[[toc]]

## Overview

By default, Forge uses the `forge` user that is created as part of the provisioning process for all deployments, daemons, scheduled jobs, PHP-FPM, and other processes.

Forge User Isolation creates a new user separate from `forge`. This is particularly useful when combined with a Wordpress website in order to prevent plugins from maliciously accessing content in your `forge` (or other isolated user) directories.

:::tip Forge Permissions

The `forge` user is considered a "super user" and is therefore able to read all files within isolated users.
:::
