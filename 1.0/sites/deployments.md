# Deployments

[[toc]]

## Overview

Deployments is how Forge gets your website from your source control provider on to your server.

## Quick Deploy

Quick deploy allows you to easily deploy your projects when you push to source control. When you push to your master branch, Forge will pull your latest code from source control, install Composer dependencies, and run your migrations.

You can enable Forge's quick deploy by clicking the "Enable Quick Deploy" button within the Apps page of your site within the Forge dashboard.

## Deploy Script

Almost all of the deployment process is set by the **Deploy Script** found in the Forge UI. By default, Forge:

- Changes into the site directory
- Runs a `git pull` command
- Install Composer dependencies (depending on the site type)
- Run `php artisan migrate` if there is an `artisan.php` file found

You may configure this script to change or add steps to your deployments.

:::tip Zero Downtime Deployments
Deployments may temporarily make your site unavailable. If you need zero downtime deployments, check out [Envoyer](https://envoyer.io).
:::

### Environment Variables

Forge will automatically inject the following environment variables into your deployment script at runtime:

| Key | Description |
| ----- | ---- |
| `FORGE_DEPLOY_COMMIT` | The hash of the commit being deployed. |
| `FORGE_DEPLOY_AUTHOR` | The author of the commit. |
| `FORGE_DEPLOY_MESSAGE` | The commit message. |
| `FORGE_REDEPLOY` | Whether this is a re-deployed commit. |
| `FORGE_SERVER_ID` | The ID of the Forge server that is being deployed to. |
| `FORGE_SITE_ID` | The ID of the Forge site that is being deployed to. |
| `FORGE_PHP` | The `php` binary that is being used by Forge. |
| `FORGE_PHP_FPM` | The PHP-FPM process name that is being used by Forge. |
| `FORGE_QUICK_DEPLOY` | Whether the deploy was triggered by a source control provider webhook. |
| `FORGE_CUSTOM_DEPLOY` | Whether the deploy was triggered with a custom deployment trigger. |
| `FORGE_MANUAL_DEPLOY` | Whether the deploy was triggered by clicking "Deploy Now". |

You may use these variables as you would any other Bash variable:

```bash
if [[ $FORGE_MANUAL_DEPLOY -eq 1 ]]; then
    echo "This deploy was triggered manually."
fi
```

For example, you may wish to prevent deployments if the commit message contains "wip":

```bash
if [[ $FORGE_DEPLOY_MESSAGE =~ "wip" ]]; then
    echo "WORK IN PROGRESS, DO NOT CONTINUE."
    exit 1
fi
```

:::warning Environment Variables

Forge will prefix any injected variables with `FORGE_`. Please do not use this "namespace".
:::

## Deployment Triggers

If you're using a custom Git service, or want a service like [Travis CI](https://travis-ci.org/) to run your tests before your application is deployed to Forge, you can use deployment triggers. When you commit fresh code, or when your continuous integration service finishes testing your application, instruct the service to make a `GET` or `POST` request to the URL displayed in the Forge dashboard. Making a request to the provided URL will trigger your Forge deployment.

Although you can refresh the site token at any time, you will need to update any services which are using this URL.

## Maintenance Mode

If you have deployed a Laravel application, then you can make use of the maintenance mode feature. Clicking **Enable Maintenance Mode** will run `php artisan down` on your application, which will make your site unavailable. When the site is in maintenance mode, you can then click **Disable Maintenance Mode** to disable the mode and make your site available again.

## Deployment Branch

You may change the branch that is deployed by updating the deployment branch setting. Once you have updated the branch, you will then need to click **Deploy Now** to manually trigger a fresh deployment of the new branch.

## Git Remote

This will update the Git remote URL on your server; however, the site will not be removed or become unavailable during the process. The updated Git remote must contain the same repository / Git history as the currently installed repository.

You should not use this function to install an entirely different project onto this site. If you would like to install an entirely different project, you should completely uninstall the existing repository using the "Uninstall Repository" feature.
