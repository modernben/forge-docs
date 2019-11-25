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

Forge automatically configures your daemon to write into its own log file. Logs can be found in the following directory `/home/forge/.forge/`. Log files are named `daemon-*.log`.

:::tip Using a Custom User

If you're using a different username, the `forge` directory will reflect this too.

:::
