# Monitoring

[[toc]]

## Overview

Forge can be configured to monitor important stats on your server and email you when the state changes:

- CPU Load
- Disk Space
- Free Memory
- Used Memory

:::warning Business Plan Only
During the feature launch period, server monitoring is only available on the Business plan.
:::

## Creating Monitors

You may configure a new monitor from the **Monitoring** tab within the server detail page:

1. Select the stat to monitor.
2. Select whether the value of the stat should be `>=` or `<=` a threshold.
3. Enter the threshold that the monitor would need to meet before notifying you.
4. Enter how long (in minutes) the stat needs to meet the above criteria for.
5. Enter an email address to notify when the monitor's state changes.
6. Click **Install Monitor**.

Once the monitor is installed, your server will begin collecting data on the stats and notify you once the state changes.

:::tip Notifying Multiple People
Forge will only accept one email address to notify. If you need to notify multiple people, you should create a distribution list such as `team@example.com`.
:::

### Stat Collection Frequencies

The CPU Load, Free Memory and Used Memory stats will collect data every minute, whereas the Disk Space metric collects hourly.

## Deleting Monitors

You may delete a monitor at any time by clicking the **X** icon next to the monitor in the **Monitors** section.
