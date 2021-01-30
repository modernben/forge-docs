# Queues

[[toc]]

## Overview

Forge's site management dashboard allows you to easily create as many Laravel queue workers as you like. Queue workers will automatically be monitored by Supervisor, and will be restarted if they crash. All workers will start automatically if the server is restarted.

## Creating A Queue Worker

You can create a new queue worker within the site's management dashboard. The "New Worker" form is a wrapper around the Laravel queue feature. You can read more about queues in the [full Laravel queue documentation](https://laravel.com/docs/queues).

When creating a new queue worker, you may [select a version of PHP](/1.0/servers/php.html) that is already installed on the server. The selected version of PHP will be used to execute the queue worker.

## Laravel Horizon

If your Laravel application is using [Laravel Horizon](https://laravel.com/docs/horizon) you do NOT need to set up Queue Workers as described above, because Horizon will take care of those for you according to how you configure it inside your application.

Instead, enable Horizon on Forge with these 3 steps:

1. Create a Server [Deamon](/1.0/resources/daemons.html#configuring-daemons) to run `php artisan horizon` from your site's application directory.
2. Add a `php artisan horizon:terminate` statement to your Site's deploy script, as described in the [Horizon Deployment](https://laravel.com/docs/master/horizon#deploying-horizon) docs.
3. If you wish to use Horizon's [metrics graphs](https://laravel.com/docs/master/horizon#metrics), be sure to configure the scheduled job for `horizon:snapshot` in your application code and set up a [Scheduler task](/1.0/resources/scheduler.html#scheduled-jobs) for `php artisan schedule:run` in Forge if you haven't already created one.

