# Queues

[[toc]]

## Overview

Using Forge Queues you may easily create as many Artisan queue workers as you like. Queue workers will automatically be monitored by Supervisor, and will be restarted if they crash. All workers will start automatically if the server is rebooted.

## Creating A Queue Worker

You can create a new queue worker within the site's dashboard. The "New Worker" form is a wrapper around the Laravel queue feature. You can read more [here](https://laravel.com/docs/5.8/queues#running-the-queue-worker).

When creating a new queue worker, you may [select a version of PHP](/1.0/servers/php.html) that is already installed on the server.
