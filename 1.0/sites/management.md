# Management

[[toc]]

## Site Logs

Forge provides the ability to view site log files from within the dashboard.

For performance reasons, Forge will only return the last 500 lines from a file. The log file path will be shown in both the dropdown and at the bottom of the log output.

:::tip Laravel Log Files Only

Forge is only able to display log files from Laravel 5+ applications at this time. Both `daily` and `single` log formats are supported, Forge will intelligently read the last updated file.

:::
