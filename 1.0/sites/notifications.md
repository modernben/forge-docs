# Notifications

[[toc]]

## Deployment Notifications

You can enable deployment notifications for your site from the Forge Notifications page. Forge supports a few notification channels:

- Email
- Slack

:::tip Default Notifications
By default, Forge will automatically notify you by email for failed deployments.
:::

### Slack

To enable Slack notifications, first enter the Channel name that you wish to send messages to, and then click **Enable Slack Notifications**. You'll be redirected to the Slack app authorization page, where you need to click **Allow**.

If you wish to modify the channel that Forge posts to, you'll first need to disable notifications and then re-enable.

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
