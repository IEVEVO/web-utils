---
description: Generates breadcrumbs using the page URL / path with pure Javascript.
---

# Breadcrumbs

## [Demo](https://codepen.io/inet/pen/vPgxGJ) 

\(Due to the nature of Codepen, the text on the links won't be ideal, but you get the picture\).

![This is what it looks by default. You can style it how you want.](../.gitbook/assets/chrome_2019-03-07_03-24-20.png)

{% page-ref page="../download.md" %}

## Usage

First, you'll have to load up the JS and CSS files by placing these inside the `<head>` and `</head>` tags:

```markup
<script type="text/javascript" src="breadcrumbs.js"></script>
<link rel="stylesheet" href="breadcrumbs.css" />
```

Then, you'll need to place a `<div>` as below wherever you want the breadcrumbs to appear:

```markup
<div id="breadcrumbs"></div>
```

It doesn't matter what you write inside it; the contents will be replaced by the breadcrumbs when the page loads.

This is all you need for the basic breadcrumbs; however, there are a few more things you can change.

### Global Variables

Inside the `breadcrumbs.js` file are a few variables that you can change. These will apply to every page's breadcrumbs, so be careful.

* `home_url`: The very first breadcrumb will always be a home button. This, by default, links to an `index.html` page, however if your home page has a different name you can change it here.
* `split_character`: This is the character that appears between each breadcrumb. This is a `>` by default, however you can make it whatever funky thing you can think of.

### Per-Page Variables

There are a few settings you can change on each page, if you wish. These are mostly for if your file names or folder structure doesn't quite work right with this.

To use them, simply create some `<script>` tags somewhere in the `<head>` section, and create the following variable inside:

```javascript
var breadcrumbs_options = {
  path: "/folder_1/folder_2/file.html",
  pageName: "Custom name"
};
```

Your options go inside this variable. The supported values are:

* `path`: This describes the series of breadcrumbs that lead to the current page. By default, this is retrieved from the `window.location.pathname` property, but if your folder structure doesn't match what you want the breadcrumbs to show, you can override it here. 

  NOTE: This **must** begin with a slash \(`/`\), and then should follow the typical naming scheme for a file path \(see example above\).

* `pageName`: This changes the text that gets displayed on the breadcrumb for the current page. By default, this text is just the file name, sans any extension \(eg. `.html`, `.php`\).

{% hint style="info" %}
If you encounter any problems or bugs, leave a post [here](https://github.com/IEVEVO/web-utils/issues).
{% endhint %}

