# Daemons

[[toc]]

## Overview

Powered by [Supervisor](http://supervisord.org), daemons are used to keep long-running scripts alive. For instance, you could start a daemon to keep a [ReactPHP](http://reactphp.org/) application running.

## Configuring Daemons

When creating a new daemon you need to provide Forge with a little information:

- Command - What are you running? For instance `php artisan websockets:serve`.
- User - Who's running the command? Defaults to `forge`.
- Directory - By default this will run within your site directory.
- Processes - How many instances of the process should be kept running?

## Log Files

Forge automatically configures your daemon to write to its own log file. Logs can be found within the `/home/forge/.forge/` directory. Log files are named `daemon-*.log`.

:::warning User Isolation

If you are using User Isolation, you should navigate to the `.forge` directory within the `/home/{username}` directory based on the user that the process belongs to.
:::
