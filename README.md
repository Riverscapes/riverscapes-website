# Riverscapes Main Website

## Getting started for writing content

1. Open up the `RiverscapesWebsite.code-workspace` file in VSCode. This should open up the workspace and put you in the right place to run the site.
2. Make sure you are running node > v18 and have access to yarn at the command line:

```bash
> node --version
v18.16.0

> yarn --version
3.6.1
```

***The version of yarn isn't that important for content writers. We just run this command to make sure it's installed.***

3. Open up a terminal window in VSCode and run `yarn install` to install all the dependencies.
4. Run `yarn start` to start the dev server and develop locally.
5. If you think something is broken or weird you can run `yarn clean` to clear the cache and then `yarn start` again to see if that fixes it. We also have `yarn start:clean` that combines these two steps.



## Upgrading to latest theme

because we have a custom theme and we have `"@riverscapes/gatsby-theme": "latest",`, we need to manually upgrade the theme.  To do this, run the following command:

```bash
yarn upgrade:theme
```