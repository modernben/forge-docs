# Backups

[[toc]]

## Overview

Forge provides automatic database backups that can be scheduled right from the dashboard. You can choose to backup one or more databases at a specified frequency and also restore to any of your recent backups. The backup script is open source and can be [found on GitHub](https://github.com/laravel/forge-database-backups).

:::warning Business Plan Only

Database backups are only available on the Business plan.
:::

## Creating Backup Configurations

### Storage Providers

You can choose to backup your databases to:

1. Amazon S3
2. DigitalOcean Spaces
3. Custom (S3 Compatible)

For Amazon S3 and DigitalOcean Spaces storage providers you need to provide Forge with:

- Region (`eu-west-2`, `nyc3` etc..)
- Bucket
- Access Key
- Secret Key

:::warning AWS IAM Permissions
Your AWS IAM user must have write permissions for S3.
:::

When using a Custom provider, you must supply:

- Endpoint (the URL that the host is available at)
- Bucket
- Access Key
- Secret Key

You can also choose to provide a storage directory where backups will be restored relative to your bucket root. If left empty, backups will be stored within the root of your bucket.

### Frequency Options

Within the Forge UI, you can select one frequency:

- Hourly
- Daily (at a given time)
- Weekly (on a given day and time)

When using the API to create a **Daily** or **Weekly** backup, you may provide any valid time (e.g. `13:37`) to your schedule; however, for the sake of simplicity, the Forge UI allows you to select a time in 30 minute intervals. The time you select is in your local (web browser) time and will be converted to UTC on the server.

#### Customizing The Frequency

If you need to customize the frequency further, you may edit the `/etc/crontab` entry for the backup configuration.

:::warning Editing Cron Entries
Be careful when editing the `/etc/crontab` file. Any misconfigurations will prevent **all** cron entries from running.
:::

### Backup Retention

Forge will automatically trim old backups for you. If you have a retention rate of five, then only the five latest backups will exist at any one time for a given configuration. Forge will remove older backups once the latest backup process has completed.

### Notifications For Failed Backups

You may provide an email address to be notified when a backup fails. If you need to notify multiple people, you should create a distribution list such as `team@example.com`.

Forge will also display failed backups within the **Backups** panel of the dashboard.

## Managing Backups

### Deleting Backup Configurations

You can delete a backup configuration by clicking the **Delete** button next to your chosen backup configuration under the **Backup Configurations** section.

:::tip Backup Archives

When deleting a backup configuration, your backup archives **will not be removed from cloud storage**. You may remove these manually if you wish.
:::

### Backup Immediately

If you need to make a backup immediately, you can use the **Backup Now** button.

### Restoring Backups

You can restore backups from the **Recent Backups** section. Click the **Restore** button next to your chosen backup. Backups will be restored to the database they were created from. If the backup configuration contains more than one database, you will be asked to select which database to restore.

If you need to restore a backup to another server or database you may download the backup archive from your cloud storage provider and restore it using the GUI program of your choice, such as TablePlus.

### Deleting Backups

If you need to delete an individual backup, you can do this by clicking the Delete button next to the backup.

:::danger Deleting Backups

When deleting a backup, your backup archives **will be removed** from your cloud storage provider. Please be careful when removing backups.
:::

### Backup Output

Each backup process will create its own log so that you can inspect the output in the event of a failure. You can view the output of a backup by clicking the Eye icon next to your backup.
