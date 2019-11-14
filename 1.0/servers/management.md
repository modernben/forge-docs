# Management

[[toc]]

## Resetting The Sudo Password

Forge does not store the sudo password and is unable to reset this password for you. To reset the password, you'll need to contact your server provider.

Once the password has been reset, Forge will be unable to SSH into your machine as `root`. This prevents you from editing PHP / Nginx configuration files from the Forge UI. To solve this, SSH into your Forge server as `forge` and reset the `root` users password:

```bash
ssh forge@your-ip-address
sudo -i
passwd
```

After resetting the password successfully, you'll be able to update files from the Forge interface.

## Recipes

Recipes allow you to save common Bash scripts and run them across any of your servers. For example, you could save a recipe to install MongoDB so you can conveniently run it on future servers. The output of the recipe will be e-mailed to you.

## Restarting PHP FPM

When configuring your server, Forge configures FPM so that it can be restarted without using your server's "sudo" password. To do so, you should issue the following command. Of course, you should adjust the PHP version to match the version of PHP installed on your machine:

```bash
echo "" | sudo -S service php7.3-fpm reload
```

## Increasing the maximum execution time

To increase the maximum execution time of your scripts you need to update the `max_execution_time` directive in your `php.ini` file, the file is located at `/etc/php/7.3/fpm/php.ini`.

Also in `/etc/nginx/nginx.conf` you need to update `fastcgi_read_timeout` to match the value provided for the `max_execution_time`.

:::tip Use The Right PHP Version
When editing the PHP files, be sure to edit the correct file under the PHP version you're using.
:::
