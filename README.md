# Quote-Unquote

What it is:
* A Chrome Extension.
* Easy way to share websites you like.
* Easy way to share paragraphs/snippets you like.
* SUpports most social platforms.
* Fun.

What it is not:
* A fully developed extension.
* Random quote generator.
* Boring.

## Getting Started

To install and run this extension, follow the instructions below:
 * Download the ZIP/ clone the project to your local machine.
 * Open Chrome Browser.
 * Click on the three dots menu at the top right corner of your screen, and goto ``` More Tools ``` and then choose ``` Extensions ```.
 * Check the ``` Developer Mode ``` option.
 * Click ```Load Unpacked Extension``` and choose the location of the downloaded Quote Unquote project.
 * You will see the extrnsion being loaded in your URL bar in a few seconds, a blue icon appears.
 
 How to use:
 * Select any text on a website.
 * Click the blue icon of Quote Unquote.
 * Select the platform you want to share it to.
 * A window will appear allowing you to make changes before sharing.
 
 ## Format of the shared data
 
 The text that is shared will be of the format:
 
``` "{your text here}" {url of the website you are sharing it from} ```

Different websites will adjust to the URL accordingly, giving in a preview of the website.
Some platforms restrict the prefilling of text, so only the URL field gets shown with a preview.

The URL of the website is added so as to attribute to the right owner.

## Explaing the Basics

* [manifest.json] (https://github.com/bye-nary/Quote-Unquote/blob/master/manifest.json)
This is the first file that the browser reads. It contains all the meta data, and specifies the background scrits, content scripts, pop up details, action to be performed on browser/ pages.
Find more details about the manifest file [here] (https://developer.chrome.com/apps/manifest).

* [popup.html] (https://github.com/bye-nary/Quote-Unquote/blob/master/popup.html)
If you see the ```manifest.json```, you will find the default pop-up as ```popup.html```. This is the default html that shows up when you click on the extension icon.

* [style.css] (https://github.com/bye-nary/Quote-Unquote/blob/master/style.css)
It is the CSS that is applied to the ```popup.html```.

* [popup.js] (https://github.com/bye-nary/Quote-Unquote/blob/master/popup.js)
This is the JS script that works on the html. 
