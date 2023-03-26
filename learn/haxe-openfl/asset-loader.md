---
title: How to use the AssetLoader component
layout: "docs.html"
sidebarTitle: AssetLoader
---

The [`AssetLoader`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html) class loads and displays visual assets, such as images or [SWF library symbols](https://www.openfl.org/learn/haxelib/tutorials/using-swf-assets/).

<figure>
<iframe src="/learn/haxe-openfl/samples/asset-loader.html" width="100%" height="180"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/AssetLoader.html"><code>AssetLoader</code></a> component</figcaption>
</figure>

## The Basics

Create an [`AssetLoader`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var loader = new AssetLoader();
addChild(loader);
```

Two different types of assets may be loaded.

- Assets defined in the OpenFL [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/#assets) of type [`IMAGE`](https://api.openfl.org/openfl/utils/AssetType.html#IMAGE) or [`MOVIE_CLIP`](https://api.openfl.org/openfl/utils/AssetType.html#MOVIE_CLIP).
- A URL loaded from the web in any format supported by [`openfl.display.Loader`](https://api.openfl.org/openfl/display/Loader.html).

To load an asset defined in _project.xml_, set the [`source`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html#source) property to the name of the asset.

```haxe
loader.source = "my-asset-id";
```

Alternatively, to load an asset from the web, set the [`source`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html#source) property to the asset's URL.

```haxe
loader.source = "https://example.com/img/asset.png";
```

### Events

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.COMPLETE`](https://api.openfl.org/openfl/events/Event.html#COMPLETE) to perform an action when the image finishes loading.

```haxe
loader.addEventListener(Event.COMPLETE, loader_completeHandler);
```

Listeners for [`Event.COMPLETE`](https://api.openfl.org/openfl/events/Event.html#COMPLETE) have the following function signature.

```haxe
function loader_completeHandler(event:Event):Void {
    var loader = cast(event.currentTarget, AssetLoader);
    trace("asset loaded: " + loader.source);
}
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`IOErrorEvent.IO_ERROR`](https://api.openfl.org/openfl/events/IOErrorEvent.html#IO_ERROR) and [`SecurityErrorEvent.SECURITY_ERROR`](https://api.openfl.org/openfl/events/SecurityErrorEvent.html#SECURITY_ERROR) to perform an action if the asset fails to load.

```haxe
loader.addEventListener(IOErrorEvent.IO_ERROR, loader_ioErrorHandler);
loader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, loader_securityErrorHandler);
```

These listeners should have the following function signatures.

```haxe
function loader_ioErrorHandler(event:IOErrorEvent):Void {
    var loader = cast(event.currentTarget, AssetLoader);
    trace("asset i/o error: " + loader.source + " => " + event.text);
}

function loader_securityErrorHandler(event:SecurityErrorEvent):Void {
    var loader = cast(event.currentTarget, AssetLoader);
    trace("asset security error: " + loader.source + " => " + event.text);
}
```

## Related Links

- [`feathers.controls.AssetLoader` API Documentation](https://api.feathersui.com/current/feathers/controls/AssetLoader.html)
