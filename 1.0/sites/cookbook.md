# Cookbook

[[toc]]

## My Site Is Stuck Deploying

Rarely, your application may get stuck in a "deploying" state. When this occurs, you can reset the deployment state at the bottom right of the site management panel using the **Self Help** drop-down menu.

## Using User Isolation With Existing Sites

This is not possible, you will need to create a new site with the user isolation option enabled.

## Please Commit Your Changes Or Stash Them Before You Merge

This error occurs when files within the site directory have changed and will be overwritten by the fresh deploy.

To fix this, you should SSH into your sites directory and run:

```
git reset --hard && git clean -df
``` 

You should also take a look to see why files in your project have changed.
