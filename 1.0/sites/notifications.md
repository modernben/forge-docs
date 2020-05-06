# Notifications

[[toc]]

## Deployment Notifications

You can enable deployment notifications for your site from the Forge dashboard. Forge supports several notification methods:

- Email
- Slack

:::tip Default Notifications
By default, Forge will automatically notify you by email for failed deployments.
:::

## Deployment Webhooks

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
