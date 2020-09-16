# Recipes

[[toc]]

## Overview

Recipes allow you to save common Bash scripts and run them across any of your servers. For example, you could save a recipe to install MongoDB so you can conveniently run it on future servers. The output of the recipe will be e-mailed to you.

## Creating Recipes

You can create your own recipe from the [Recipes](https://forge.laravel.com/recipes) page. When creating a new recipe you will be asked to supply:

- Name of the recipe
- User to run the script as (`root` or `forge`)
- Script contents

#### Variables

Forge provides a few variables that can be used to make your recipe more dynamic:

<div v-pre>

- `{{server_id}}` - The ID of the server that the recipe is running on
- `{{ip_address}}` - The public IP address of the server.
- `{{private_ip_address}}` - The private IP address of the server.
- `{{username}}` - The server user who is running the script.

</div>

When used in a recipe, variables must exactly match the syntax shown above.

## Managing Recipes

Your existing recipes will be listed on the [Recipes](https://forge.laravel.com/recipes) page, which is where you can edit, run and delete them.

## Running Recipes

When running a recipe, you will be presented with options that allow you to have the output of the recipe emailed to you and allow you configure which servers the recipe will run on.
