# The Basics

[[toc]]

## What is the Default Site?

When you initially provision a Forge server, Forge creates a single site on the server named `default`. This site may be accessed by visiting the IP address of your server in your web browser. This is convenient because sometimes you may not have a particular domain you want to associate with a given server immediately after provisioning.

When you are ready to transition your application to an official domain name, you may rename the site in the "Meta" tab of the site's management panel. Once you have renamed the site, you will no longer be able to access it using the server's IP address. Instead, you must add a DNS "A" record for the domain that points to your server's IP address.

## My Site is Stuck in a Deploying state

You can reset the deployment state at the bottom right of the site management panel using the **Self Help** drop-down menu.
