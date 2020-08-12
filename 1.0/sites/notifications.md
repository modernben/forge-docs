# Notifications

[[toc]]

## Deployment Notifications

You can enable deployment notifications for your site from the Forge Notifications page. Forge supports a few notification channels:

- Email
- Slack
- Telegram
- Microsoft Teams

:::tip Default Notifications
By default, Forge will automatically notify you by email for failed deployments.
:::

### Slack

To enable Slack notifications, first enter the Channel name that you wish to send messages to, and then click **Enable Slack Notifications**. You'll be redirected to the Slack app authorization page, where you need to click **Allow**.

If you wish to modify the channel that Forge messages, you'll first need to disable Slack notifications and then re-enable.

### Telegram

To enable Telegram notifications, click the **Enable Telegram Notifications** button. Forge will open a new window that takes you to the official Telegram website. If you have the desktop application installed, your browser will ask if you wish to open Telegram, alternatively you'll need to login to the web version.

Click **Open Telegram** and select the group chat that you want Forge to send deployment notifications to. Forge will send the group a message confirming the connection.

If you wish to change the group that Forge messages, you should disable Telegram notifications and then re-enable the notifications.

### Microsoft Teams

To enable Microsoft Teams notifications, you first need to create a new **Incoming Webhook** connector in your Teams channel of choice. Once Teams has generated a webhook, you need to copy the URL into the **Webhook URL** field, then click **Enable Microsoft Teams Notifications**. Forge will now notify the configured channel for both successful and failed deployments.

If you wish to change the webhook URL, you first need to disable Microsoft teams notifications and then re-enable the notifications.

### Webhooks

Forge can also send an HTTP POST request to arbitrary URLs after each deployment. The payload of the request will contain the server ID, site ID, deployment status, and the relevant commit information:

```json
{
  "status": "success",
  "server": {
    "id": 123,
    "name": "my-awesome-server"
  },
  "site": {
    "id": 456,
    "name": "my-awesome-site.dev"
  },
  "commit_hash": "382b0f5185773fa0f67a8ed8056c7759",
  "commit_url": "https://github.com/johndoe/my-awesome-site/commit/382b0f5185773fa0f67a8ed8056c7759",
  "commit_author": "John Doe",
  "commit_message": "deploying!"
}
```
