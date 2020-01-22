---
title: How to use the Feathers UI AssetLoader component
sidebar_label: AssetLoader
---

The [`AssetLoader`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html) class loads and displays visual assets, such as images or [SWF library symbols](https://www.openfl.org/learn/haxelib/tutorials/using-swf-assets/).

## The Basics

Create an [`AssetLoader`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var loader = new AssetLoader();
this.addChild(loader);
```

Two different types of assets may be loaded.

- Assets defined in the OpenFL [_project.xml_ file](https://lime.software/docs/project-files/xml-format/#assets-) of type [`IMAGE`](https://api.openfl.org/openfl/utils/AssetType.html#IMAGE) or [`MOVIE_CLIP`](https://api.openfl.org/openfl/utils/AssetType.html#MOVIE_CLIP).
- A URL loaded from the web in any format supported by [`openfl.display.Loader`](https://api.openfl.org/openfl/display/Loader.html).

To load an asset defined in _project.xml_, set the [`source`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html#source) property to the name of the asset.

```hx
loader.source = "my-asset-id";
```

Alternatively, to load an asset from the web, set the [`source`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html#source) property to the asset's URL.

```hx
loader.source = "https://example.com/img/asset.png";
```

### Events

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.COMPLETE`](https://api.openfl.org/openfl/events/Event.html#COMPLETE) to perform an action when the image finishes loading.

```hx
loader.addEventListener(Event.COMPLETE, loader_completeHandler);
```

Listeners for [`Event.COMPLETE`](https://api.openfl.org/openfl/events/Event.html#COMPLETE) have the following function signature.

```hx
function loader_completeHandler(event:Event):void
{
    var loader = cast(event.currentTarget, AssetLoader);
    trace("asset loaded: " + loader.source);
}
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`IOErrorEvent.IO_ERROR`](https://api.openfl.org/openfl/events/IOErrorEvent.html#IO_ERROR) and [`SecurityErrorEvent.SECURITY_ERROR`](https://api.openfl.org/openfl/events/SecurityErrorEvent.html#SECURITY_ERROR) to perform an action if the asset fails to load.

```hx
loader.addEventListener(IOErrorEvent.IO_ERROR, loader_ioErrorHandler);
loader.addEventListener(SecurityErrorEvent.SECURITY_ERROR, loader_securityErrorHandler);
```

These listeners should have the following function signatures.

```hx
function loader_ioErrorHandler(event:IOErrorEvent):void
{
    var loader = cast(event.currentTarget, AssetLoader);
    trace("asset i/o error: " + loader.source + " => " + event.text);
}

function loader_securityErrorHandler(event:SecurityErrorEvent):void
{
    var loader = cast(event.currentTarget, AssetLoader);
    trace("asset security error: " + loader.source + " => " + event.text);
}
```

## Related Links

- [`feathers.controls.AssetLoader` API Documentation](https://api.feathersui.com/current/feathers/controls/AssetLoader.html)
