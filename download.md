# Download

## Downloading

You can download everything from the [Github repository](https://github.com/IEVEVO/web-utils). Each "tool" has its own corresponding folder.

Demos and installation instructions for each utility can be found on their respective pages.

## Installing on Tumblr

Tumblr allows you to edit the HTML code of your blog. This allows you to add these tools to your blog as well! The steps to do so are a little different, however, as Tumblr does not allow you to upload your own files.

* Navigate to the settings page for your blog, click the "Edit theme" button, then click "Edit HTML".
* Scroll down to the very bottom of the page and, before the end `</body>` tag, make a new `<script>` tag.
* For the tool you want to use, open the `.js` file for it \(eg. `alerts.js`\) in your favourite text editor. Select all \(ctrl+a\), copy the text and paste it straight after the `<script>` tag you just made.
  * Remember to put a closing `</script>` after.
* Scroll to _just before_ the ending `</style>` tag in the `<head>` section \(roughly halfway down the page\), and paste the contents of the corresponding `.css` file \(eg. `alerts.css`\).
* Now, you can follow any other instructions you need to do to set up the tool, eg. adding classes or other attributes to the necessary elements.

This should be all you need to set up a tool on your Tumblr blog.

{% hint style="warning" %}
**Image Lightbox:** Since the lightbox uses the `src` attribute from the image you click, and many Tumblr themes tend to load lower resolution images to improve loading times, the images that appear in the lightbox may be very small!

You can solve this by adding the attribute `data-large-src="{PhotoUrl-HighRes}"` to the `<img>` tag that's being displayed.
{% endhint %}



