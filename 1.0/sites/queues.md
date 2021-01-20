# Queues

[[toc]]

## Overview

Forge's site management dashboard allows you to easily create as many Laravel queue workers as you like. Queue workers will automatically be monitored by Supervisor, and will be restarted if they crash. All workers will start automatically if the server is restarted.

## Creating A Queue Worker

You can create a new queue worker within the site's management dashboard. The "New Worker" form is a wrapper around the Laravel queue feature. You can read more about queues in the [full Laravel queue documentation](https://laravel.com/docs/queues).

When creating a new queue worker, you may [select a version of PHP](/1.0/servers/php.html) that is already installed on the server. The selected version of PHP will be used to execute the queue worker.
