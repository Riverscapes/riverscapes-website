# Riverscapes Main Website

## Getting started for writing content

1. Open up the `RiverscapesWebsite.code-workspace` file in VSCode. This should open up the workspace and put you in the right place to run the site.
2. Make sure you are running node > v18 and have access to yarn at the command line:
3. You may need to install yarn on windows: `npm install --global yarn`

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


## Typical problems and content migration gotchas:

- Look for liquid tags that are left over from jekyll: `{{ some.liquid.tag }}` these need to be removed.
- Any changes to `gatsby-config.ts` will require a restart of the dev server.
- Unclosed img tags: `<img src="some-image.jpg">` is not allowed. You need to close the tag like this `<img src="some-image.jpg" />`
- HTML Comments: `<!-- This is a comment -->` are not allowed and will break the site. You need to use MDX comments like this `{/* This is a comment */}`
- Frontmatter Fields:
    - All frontmatter is optional. You can have no frontmatter at all and the page will still work.
    - `title` is optional. It is used in conjunction with `banner`
    - `description` is optional. It is used in conjunction with `banner`
    - If you have `isHome` set to true (you can ommit this completely if it's false) Then you need to wrap all your content in a container tag.
    - If you want the banner at the top of the page set `banner:true`
    - `banner` and `isHome` do not work well together
    - `image`: This is the image that will be used for this page as a thumbnail in the lower image cards below the content.
    - `imageAlt`: Related to the `image` field. This is the alt text for the image.

```mdx
import { Container } from '@mui/material'

<Container maxWidth="xl">

## This is a title

here is some content

</Container>
```


- Menu links: 
    - **Broken menu links** (i.e. links that lead to a non-existent page) will not crash the site. They will just lead to a 404. On the 404 page you should be able to search for the correct url using the search form.
- Images: 
    - If you import images like `import WhatIsRiverscape from './what-is-riverscape.jpg'` then the image not being there WILL break the site. It will look like a red error in the console

```
  ModuleNotFoundError: Module not found: Error: Can't resolve './what-is-riverscape.jpg' in '/some/path/content/page'
```
