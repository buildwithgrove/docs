---
sidebar_position: 2
sidebar_label: Get an Endpoint
---

# Get an Endpoint

Welcome to the "Get an Endpoint" guide for Grove. This guide will walk you through the process of obtaining an endpoint from the Grove Portal, which you can then use to interact with the blockchain network of your choice.

## Step 1: Sign Up for the Grove Portal

The first step to getting an endpoint is to sign up for the Grove Portal. You can do this by visiting the [Sign Up Page](https://portal.grove.city/api/auth/auth0?signup=true). Fill in the required information, including your email address and a strong password. Once you've filled in the information, click on the "Sign Up" button to create your account.

## Step 2: Verify Your Email Address

After signing up, you'll receive an email from us to verify your email address. Click on the link in the email to verify your account. If you don't see the email in your inbox, please check your spam or junk mail folder.

## Step 3: Log In to the Grove Portal

Once you've verified your email address, you can log in to the Grove Portal using the email address and password you provided during sign up. Visit the [Login Page](https://portal.grove.city/api/auth/auth0) and enter your credentials to log in.

## Step 4: Create an Application

After logging in, you'll be taken to the Grove Portal dashboard. From here, you can create a new application. Click on the "New App" button to start the process.

You'll be asked to provide some information about your application, including its name and the blockchain network you want to interact with. Fill in the required information and click on the "Create" button to create your application.

## Step 5: Get Your Endpoint

Once your application is created, you'll be taken to the application details page. Here, you'll see your application's endpoint. This is the URL you'll use to interact with the blockchain network.

The endpoint will look something like this: `https://<NETWORK>.rpc.grove.city/v1/<APP_ID>`

- `<NETWORK>` is the blockchain network you selected when creating your application.
- `<APP_ID>` is the unique identifier for your application, also referred to as the "Portal ID" on the UI.

You can copy the endpoint URL by clicking on the "Copy" button next to it.

## Step 6: Use Your Endpoint

Now that you have your endpoint, you can use it to interact with the blockchain network. Simply plug the endpoint into your application or tool of choice. For example, if you're using a web3 library like ether.js or web3.js, you can use the endpoint as the provider URL.

## Summary

That's it! You've successfully obtained an endpoint from Grove.
