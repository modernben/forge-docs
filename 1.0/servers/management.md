# Management

[[toc]]


## Recipes

Recipes allow you to save common Bash scripts and run them across any of your servers. For example, you could save a recipe to install MongoDB so you can conveniently run it on future servers. The output of the recipe will be e-mailed to you.

## Security

Typically, security updates are automatically applied to your server on a weekly basis. Forge accomplishes this by enabling and configuring Ubuntu's automated security update service that is built-in to the operating system.

Forge does not automatically update other software such as PHP or MySQL automatically, as doing so could cause your server to suffer downtime if your application's code is not compatible with the upgrade.
