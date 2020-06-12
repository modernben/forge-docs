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

### PHP Versions

If you have installed [multiple versions of PHP](/1.0/servers/php.html) your deploy script may need to be updated to use the correct version of PHP.

By default, `php` will always point to the active version of PHP used on the CLI. If you need to use a different version of PHP to that of the default, you must use `php7.x` where `7.x` reflects on the version used. For PHP 5.6, you should use `php56`.

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
