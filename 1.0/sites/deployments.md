# Deployments

[[toc]]

## Overview

A deployment is the process in which your code is downloaded from your source control provider on to your server, ready for the world to access. Forge tracks the latest 10 deployments so that you can see what was deployed, when it was deployed, and how long it took to be deployed.

### Environments

Some applications, such as those created with the Laravel framework, may require a `.env` file to configure settings such as databases and caches. You can create and edit your Environment file within the Forge site's management dashboard.

:::tip Automatic Environment Files

If your project contains a `.env.example` file, Forge will automatically copy this and replace some of the settings to match your server's database settings. An empty `.env.example` could result in an empty environment file on the first deploy.
:::

## Quick Deploy

Forge's "Quick Deploy" feature allows you to easily deploy your projects when you push to your source control provider. When you push to your configured quick deploy branch, Forge will pull your latest code from source control and run your application's configured deployment script.

You can enable Forge's quick deploy feature by clicking the "Enable Quick Deploy" button within the *Apps* tab of your site's management dashboard.

## Deploy Script

The commands that are executed on your server when your project is deployed are determined by your site's deployment script. Of course, this deployment script can be edited directly within the Forge UI. By default, your site's deployment script will:

- Navigate into the site's directory
- Execute the `git pull` command
- Installs your application's Composer dependencies
- Execute the `php artisan migrate` command (if your application contains an `artisan` file)

:::warning Zero Downtime Deployments

Deployments may make your site unavailable for a brief moment. If you need absolutely zero downtime during deployments, check out [Envoyer](https://envoyer.io).
:::

### PHP Versions

If you have installed [multiple versions of PHP](/1.0/servers/php.html) on your server, your deploy script may need to be updated to use the correct version of PHP.

By default, `php` will always point to the active version of PHP used on the CLI. If you need to use a different version of PHP, you must use `phpx.x` where `x.x` reflects on the version used (e.g. `php8.0`) when invoking PHP commands.

The deploy script for newly created sites uses the `$FORGE_PHP` [environment variable](#environment-variables). This environment variable will always contain the current PHP binary configured for the site, so no additional changes are needed to your deployment script when using this variable and switching your site's PHP version.

### Environment Variables

Forge will automatically inject the following environment variables into your deployment script at runtime:

| Key | Description |
| ----- | ---- |
| `FORGE_COMPOSER` | The path to the Composer installation. |
| `FORGE_CUSTOM_DEPLOY` | Whether the deployment was triggered with a custom deployment trigger request. |
| `FORGE_DEPLOY_AUTHOR` | The author of the commit. |
| `FORGE_DEPLOY_COMMIT` | The Git hash of the commit being deployed. |
| `FORGE_DEPLOY_MESSAGE` | The Git commit message. |
| `FORGE_MANUAL_DEPLOY` | Whether the deploy was triggered by clicking "Deploy Now". |
| `FORGE_PHP_FPM` | The PHP-FPM process name that is being used by Forge. |
| `FORGE_PHP` | The `php` binary that is being used by the Forge site or server. |
| `FORGE_QUICK_DEPLOY` | Whether the deploy was triggered by a source control provider webhook. |
| `FORGE_REDEPLOY` | Whether this is a re-deployed commit. |
| `FORGE_SERVER_ID` | The ID of the Forge server that is being deployed to. |
| `FORGE_SITE_BRANCH` | The name of the branch that is being deployed. |
| `FORGE_SITE_ID` | The ID of the Forge site that is being deployed to. |
| `FORGE_SITE_PATH` | The root of the deployment path, e.g. `/home/forge/mysite.com` |
| `FORGE_SITE_USER` | The name of ther user deploying the site. |

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

Forge will prefix any injected variables with `FORGE_`. Please do not use this "namespace" when defining your own environment variables.
:::

## Deployment Triggers

If you're using a custom Git service, or want a service like [Travis CI](https://travis-ci.org/) to run your tests before your application is deployed to Forge, you can use deployment triggers. When you commit fresh code, or when your continuous integration service finishes testing your application, instruct the service to make a `GET` or `POST` request to the URL displayed in the Forge dashboard. Making a request to the provided URL will trigger your Forge deployment.

Although you can refresh the site token at any time, you will need to update any services which are using this URL.

## Deployment Branch

You may change the branch that is deployed to your site by updating the deployment branch setting. Once you have updated the branch, you will then need to click **Deploy Now** to manually trigger a fresh deployment of the new branch.

## Git Remote

Updating the Git remote from the site's **App** management dashboard will update the Git remote URL on your server; however, the site will not be removed or become unavailable during the process. The updated Git remote must contain the same repository / Git history as the currently installed repository.

You should not use this function to install an entirely different project onto a site. If you would like to install an entirely different project, you should completely uninstall the existing repository using the "Uninstall Repository" button within the **App** dashboard.
