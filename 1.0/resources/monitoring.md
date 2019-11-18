# Monitoring

[[toc]]

## Configuring Monitoring

By default, Forge does not provide built-in monitoring systems. Instead, you can configure a monitoring option from within the Forge dashboard.

## Blackfire.io

[Blackfire](https://blackfire.io/) provides thorough PHP application profiling and is our recommended solution for monitoring your PHP application's performance. After providing your server ID and token, Blackfire will be installed and configured for your server.

## Papertrail

[Papertrail](https://papertrailapp.com/) provides hosted log monitoring and searching for your PHP application. If you are using Laravel, just configure your application to use the `syslog` driver.