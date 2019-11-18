# Scheduler

[[toc]]

## Scheduled Jobs

Scheduled jobs are used to run commands at a specified interval. Forge provides several common defaults, or you may enter a custom Cron schedule for the command.

You can create scheduled jobs through the Forge dashboard. When creating a new scheduled job, you'll need to provide:

- The command to run, for example `php /home/forge/default/artisan schedule:run`.
- The user to run the command as, for example `forge`.
- The frequency to run the command at.

### Laravel Scheduled Jobs

If you've deployed a Laravel application and are using the scheduler feature, you will need to create a scheduled job to run the built in `schedule:run` command. The frequency of this job should be **every minute**.

### Default Scheduled Jobs

As part of the provisioning process, Forge will automatically configure two scheduled jobs:

- Composer will update nightly
- Ubuntu package clean up weekly

## Scheduled Jobs Not Running?

It's important to be aware that one single broken job will break **all jobs** in the scheduler. You should verify that your frequency and commands are correct by using [Crontab.guru](https://crontab.guru).