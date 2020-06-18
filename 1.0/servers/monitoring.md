# Monitoring

[[toc]]

## Overview

Forge can be configured to monitor the following metrics on your server and email you when the state changes:

- CPU Load
- Used Disk Space
- Used Memory

:::warning Business Plan Only

Server monitoring is only available on the Business plan.
:::

## Creating Monitors

You may configure a new monitor from the **Monitoring** tab within the server detail page:

1. Select the metric to monitor.
2. Select whether the value of the metric should be `>=` or `<=` a threshold.
3. Enter the threshold percentage that the metric would need to meet before notifying you.
4. Enter how long (in minutes) the metric needs to exceed the threshold criteria for before you are notified.
5. Enter an email address to notify when the monitor's state changes.
6. Click **Install Monitor**.

Once the monitor is installed, your server will begin collecting metric data data and notify you once the state changes.

:::tip Notifying Multiple People

Forge will only accept one email address to notify. If you need to notify multiple people, you should create a distribution list such as `team@example.com`.
:::

### Stat Collection Frequencies

The CPU Load and Used Memory metric data will be collected every minute, whereas the Disk Space metric will be collected hourly.

## Deleting Monitors

You may delete a monitor at any time by clicking the **X** icon next to the monitor in the **Monitors** section.
