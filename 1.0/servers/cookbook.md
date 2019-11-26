# Cookbook

[[toc]]

## Resetting The Sudo Password

Forge does not store the sudo password and is therefore unable to reset it for you. To reset the password, you'll need to contact your server provider or use the sudo passowrd reset facilities on the server provider's dashboard.

Once the password has been reset, Forge will be unable to SSH into your machine as `root`. This prevents you from editing PHP / Nginx configuration files from the Forge UI, and will also prevent various Forge functionality from working correctly. Before Forge can access your server, you will need to SSH into your Forge server as `forge` and reset the `root` users password:

```bash
ssh forge@your-ip-address
sudo -i
passwd
```

## Restarting PHP FPM

When configuring your server, Forge configures FPM so that it can be restarted without using your server's "sudo" password. To do so, you should issue the following command. Of course, you should adjust the PHP version to match the version of PHP installed on your machine:

```bash
echo "" | sudo -S service php7.3-fpm reload
```

## Increasing Max Execution Time

To increase the maximum execution time of your scripts you need to update the `max_execution_time` directive in your `php.ini` file. The `php.ini` file is located at `/etc/php/7.3/fpm/php.ini`.

In addition, you will need to update the `fastcgi_read_timeout` directive in the `/etc/nginx/nginx.conf` file to match teh value provided for the `max_execution_time` configuration option you just updated.

:::tip Use The Right PHP Version
When editing the PHP files, be sure to edit the correct file under the PHP version you're using to serve your applications.
:::