# Management

[[toc]]

## PHP Version

If your server has [multiple versions of PHP](/1.0/servers/php.html) installed, you can switch the version used by your site at any time.

When switching the version used by your site, you should ensure that your server has any additional modules installed for that version. Failure to install additional modules may make your site unresponsive.

You will also need to update your [Deploy Script](/1.0/sites/deployments.html#deploy-script), to reload the correct version of PHP-FPM and run the right version of PHP when running any PHP commands.

## Maintenance Mode

If you have deployed a Laravel application, then you can make use of the maintenance mode feature. Clicking **Enable Maintenance Mode** will run `php artisan down` on your application, which will make your site unavailable. When the site is in maintenance mode, you can then click **Disable Maintenance Mode** to disable the mode and make your site available again.

## Site Logs

Forge provides the ability to view site log files from within the dashboard.

For performance reasons, Forge will only return the last 500 lines from a file. The log file path will be shown in both the dropdown and at the bottom of the log output.

:::tip Laravel Log Files Only

Forge is only able to display log files from Laravel 5+ applications at this time. Both `daily` and `single` log formats are supported, Forge will intelligently read the last updated file.

:::
