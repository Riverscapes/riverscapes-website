---
title: Writing Content
weight: 3
---

This page contains techniques for enhancing web sites stored on GitHub. GitHub uses [Jekyll](https://jekyllrb.com) to take a set of documents written in [markdown](https://en.wikipedia.org/wiki/Markdown) and publish them as a full blown web site. What follows are several tricks, techniques and patterns for enhancing these Jekyll web sites with features that make the web sites more useful. For example, adding a table of contents or injecting a page header.

## Front Matter

Every markdown document in your site should contain a small section at the top that is referred to as *front matter*. This section contains a series of tags and keywords that Jekyll injects into the final web page. The most common and important tag is the `title` tag. Jekyll uses this to set the HTML page title for each document.

Front matter must occur at the very top of every markdown document. It begins and ends with three hyphens, on their own lines in the file. Inside the front matter is a series of keywords, followed by a colon, a space and then the value for the item. Note that the keyword, in this case `title`, **is case sensitive**! So setting the page title would look like: 

```
---
title: This Is My Page Title
---

Page content goes below the front matter....
```

The front matter title (i.e. *This is My Page Title* in the example above) is used in two ways:

1. It is inserted at the top of every page, right under the header banner. i.e. You don't need to start every page with a title because it is done for you.
2. It is used as the link text in the site table of contents (see next section).

## Site Table of Contents

We have written JavaScript that automatically builds and displays a site table of contents (ToC) that is displayed on the left of each page. This ToC is generated by scraping the front matter (see previous section) `title` from each web page in a site. These titles are organized by the names of folders in which the pages are stored and displayed as a hierarchical set of collapsible links. Note that underscores in folder names are replaced with spaces. Also folder names are case sensitive.

You can turn on/off whether a link to the site home page is shown at the top of the ToC. You can also control whether the ToC is first displayed as expanded. The default is for the ToC to initialize collapsed. These two settings are controlled from the `_config.yml` file in the root of the web site:

```
sideMenu:
	homeItem: true
	startExpanded: false
```

## Page Sorting

By default, pages at each level of the table of contents are sorted alphabetically. However, you can sort pages by adding a `weight` front matter tag that specifies the order in which pages are added to the table of contents. It looks like this:

```
---
title: My Page Title
weight: 1
---
```

The weight tag is **case sensitive** and the value should be a positive integer. The code that creates the table of contents attempts a simple sort on all pages at a specific level using this integer. The result is that pages possessing a valid sort weight are presented first, followed by other pages that do not possess a weight. These unweighted pages are sorted alphabetically.

Technically, it doesn't matter what the weight values represent or where they start at; they can start at zero or one or any other positive integer. Best practice is to start the weights at 1. another trick is to weight pages that you want to *sink* to the bottom with a value of 99. This gives you lots of space to grow a directory with new pages without having to change existing weights.

See the next section on how to sort directories.

## Parent/Child Page Relationships

The site ToC nests pages according to the directory structure of the markdown pages that make up the site. Therefore, to group a series of pages together and indent them in the ToC, create a subdirectory and place all the pages in there. By default, the directory name is used as the text of the parent label in the ToC. The directory name is case sensitive and underscorese are replaced with spaces.

If you want the directory to be represented as a link to some page contents then create an `index.md` file in the directory. Remember to include a front matter `title` and this will be used as the link text in the site ToC. Adding a weight to the `index.md` controls the sorting of subdirectories. Similar to pages, all subdirectories that possess an index.md with a weight are sorted first, then unsorted directories are listed alphabetically below.

## Page Contents

A Hierarchical list of headers (H1, H2, H3) is displayed at the top left of each page. Remember that in markdown these are represented using asterix:

```
* My header 1

** My Header 2

*** My Header 3
```

**Useful Trick**: If you want to share a link to a section within a page, then click on the link in the Page Contents and it will set the page to the URL to the corresponding section.

You can turn off this page contents box for all pages or just the home page using settings in the `_config.yml` file in the root of the web site:

```
autoPageContents:
	active: true
	onHome: true
```



## Useful Links

The useful links section comprises an unordered list of bullets with hyperlinks to helpful external web sites. This list is hard coded into the file `src\_includes\sidenav.html`.

## Footer

The footer displayed on every page is stored in the file `src\_includes\footer.html`.

## Framework

We have implemented a *framework* called [Foundation](http://foundation.zurb.com/) on our GitHub Pages web sites that handles making the site *responsive*. This is the technical term for making the site look good on any device. Here's a [cheat sheet](https://sudheerdev.github.io/Foundation5CheatSheet/) of Foundation CSS classes that you use when styling your site. (FYI Foundation is an alternative to the popular [BootStrap](http://getbootstrap.com/))

## CSS

Short answer first... If you want to override the style of elements you can add custom CSS to the file at `assets\css\custom.css`. A typical way to do this is to first display the page in question. Then in Google Chrome, right click on an element and choose `Inspect`. Click on the piece of content that you want to style and Chrome will show the corresponding HTML in the bottom half of the screen. You should be able to gleam the class or ID of the element in question and style it accordingly in the custom.css file.

OK... don't do any of that! Styling individual elements is tedious and error prone. For example, if you want to change the color of links throughout a site you might have to create a dozen custom CSS items. You'll quickly create a rats nest of custom CSS that is hard to maintain.

These sites actually build CSS using a completely separate scripting language called [SASS](http://sass-lang.com/). SASS allows you to write more advanced CSS rules and then, from this code, generate the traditional CSS file. Essentially you write a powerful styling script then a SASS software engine downgrades it to dumb, traditional CSS that web sites use. It does some other tricks too, such as minify the CSS by removing unnecessary whitespace to make it faster on client browser.

In summary, if you want to overhaul the style of one of these web sites, you need to know SASS...

## Banner Image

Store a banner image for your site in the `assets\images` folder of your site. Then refer to it in the `src\_layouts\default.html` file (around line 42). Here's the BRAT example that allows the banner image to link back to the home page for the site:

```
  <header>
    <!-- <div id="topbarnav" class="row"></div> -->
    <div class="text-center callout large">
      <a href="{{ site.url }}"><img src="/assets/Images/BRAT_Banner_Web.png" alt="BRAT"></a>
    </div>
  </header>
```

## YouTube Videos

The easiest way to embed YouTube videos in Jekyll markdown web sites is to use the `IFRAME` tag:

1. Navigate to the YouTube video in question
2. Click on the `Share` button underneath the video.
3. Click on the `Embed Button`.
4. Copy the text provide and paste it into your markdown page. Typically you can delete the wrapping `div` tag and just keep the `iframe` tag.

