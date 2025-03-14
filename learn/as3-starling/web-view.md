---
title: How to use the WebView component (AS3/Starling version)
layout: "docs.html"
sidebarTitle: WebView
---

The [`WebView`](/api-reference/feathers/controls/WebView.html) class displays a native web browser control. The web browser is displayed in an overlay above Starling using [`flash.media.StageWebView`](https://airsdk.dev/reference/actionscript/3.0/flash/media/StageWebView.html), but Feathers wraps `StageWebView` in a way that allows this component to be positioned using local coordinates on any parent.

> The `WebView` component cannot be used in the Adobe Flash Player plugin in a web browser. It is only available in Adobe AIR applications on mobile or desktop.

- [The Basics](#the-basics)

## The Basics

First, let's create a `WebView` control, resize it, and add it to the display list:

```actionscript
var browser:WebView = new WebView();
browser.width = 400;
browser.height = 300;;
this.addChild( browser );
```

To load a URL, simply call the [`loadURL()`](</api-reference/feathers/controls/WebView.html#loadURL()>) function:

```actionscript
browser.loadURL( "https://feathersui.com/" );
```

If you prefer to display locally-generated HTML, call the [`loadString()`](</api-reference/feathers/controls/WebView.html#loadString()>) function instead:

```actionscript
browser.loadString( "<!doctype html><html><body><h1>Hello World</h1></body></html>" );
```

## Related Links

- [`feathers.controls.WebView` API Documentation](/api-reference/feathers/controls/WebView.html)
