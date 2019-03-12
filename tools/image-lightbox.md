---
description: Pure JS/CSS image lightbox thing. Plug 'n play.
---

# Image lightbox

## [Demo](https://codepen.io/inet/pen/MLxMwK)

{% page-ref page="../download.md" %}

## Usage

First, you'll need to load the .JS and .CSS files. Place these lines somewhere between the `<head>` and `</head>` tags:

```markup
<script src="enlargeGallery.js" type="text/javascript"></script>
<link href="enlargeGallery.css" rel="stylesheet" />
```

Next, you'll want to format your images as below:

```markup
<div class="gallery">
    <img src="image-1.png" />
    <img src="image-2.png" />
    <img src="image-3.png" />
</div>
```

The important bits are that the outer `<div>` tag has the class `gallery`, and none of the `<img>` tags are nested \(ie. wrapped in another `<div`, or something\).

![Simple lightbox](../.gitbook/assets/chrome_2019-03-07_03-35-15.png)

That's it! Try clicking the images and a full-size version should appear on screen.

{% hint style="info" %}
Feel free to fiddle with the CSS transitions as you please; they're just what I set up for testing.
{% endhint %}

### Multiple-Image Galleries

Sometimes your gallery will have more than one image, and closing and re-opening the dialog to view each one just isn't efficient. Luckily, there's a way around that:

```markup
<div class="gallery">
    <img data-gallery-index="0" src="image-1.png" />
    <img data-gallery-index="1" src="image-2.png" />
    <img data-gallery-index="2" src="image-3.png" />
</div>
```

Simply give each image a `data-gallery-index` parameter and label the sequence!

Be careful: the counting starts from `0` rather than `1`. Also make sure you don't skip numbers or anything, it doesn't like that.

![Multi-image gallery](../.gitbook/assets/chrome_2019-03-07_03-36-19.png)

### Alternate image URLs

If you're loading a particularly large gallery, it may not be practical to load full-size versions of each image. The downside to this is that, when enlarged in a lightbox, these images will continue to be low resolution.

Luckily, you can specify an alternate URL for the enlarged image using the `data-large-src` attribute:

```markup
<img src="image-500.jpg" data-large-src="image-fullres.jpg" />
```



{% hint style="info" %}
If you encounter any problems or bugs, leave a post [here](https://github.com/IEVEVO/web-utils/issues).
{% endhint %}

