# Introduction

[[toc]]

## What is Forge?

Laravel Forge is a server management and site deployment service. After connecting to your preferred server provider, Forge will provision a new server, installing and configuring:

- Nginx
- PHP
- MySQL / Postgres / MariaDB (if selected)
- Logrotate
- UFW Firewall
- Opcache
- Memcached
- Redis
- Automatic Security Updates

In addition, Forge can assist you in managing scheduled jobs, queue workers, SSL certificates, and more. After a server has provisioned, you can then deploy your PHP / Laravel applications or Wordpress applications using the Forge UI dashboard.

## Learning More

Laracasts has a comprehensive and **free** [video course](https://laracasts.com/series/learn-laravel-forge) on Forge. Feel free to review this course if you are new to Laravel Forge and want a video overview of its features.

## Forge IP Addresses

If you are restricting SSH access to your server using IP allow lists, you should allow the following IP addresses:

- `159.203.161.246`
- `159.203.163.240`

:::tip IP Address Changes

The Forge IP addresses may change from time to time; however, we will always email you several weeks prior to an IP address change.

:::

## Forge API

Forge provides a powerful API that allows you to manage your servers programatically, providing access to the vast majority of Forge features. You can find the Forge API documentation [here](https://forge.laravel.com/api-documentation).
