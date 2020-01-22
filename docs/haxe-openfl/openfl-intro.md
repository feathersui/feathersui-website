---
title: A quick introduction to OpenFL for Feathers UI
sidebar_label: Intro to OpenFL
---

[Feathers UI](/) is powered by the [OpenFL](https://openfl.org/) library and the [Haxe](https://haxe.org/) programming language. OpenFL provides APIs for rendering, networking, user input, and more. At the core of OpenFL is [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), its graphics system that can be used to draw vectors and bitmaps with the ability to intuitively group objects together in a parent-child hierarchy.

These primitives in OpenFL are combined in Feathers UI to create a set of flexible user interface components for creative projects — whether you are building rich applications, menu screens for games, interactive data visualizations, or immersive multimedia experiences.

> This document is meant to provide a basic overview only. For more detailed OpenFL documentation, see the official [OpenFL Developer's Guide](https://books.openfl.org/openfl-developers-guide/) and the [OpenFL API Reference](https://api.openfl.org/).

## The display list

[The OpenFL display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html) provides a number of [primitive _display objects_](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html) for rendering graphics.

One of these core primitives is the [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) class, which provides vector drawing capabilities — plus the ability to behave as a container where you may add other display objects as children.

```hx
var sprite = new Sprite();
sprite.graphics.beginFill(0xff0000);
sprite.graphics.drawRoundRect(0.0, 0.0, 100.0, 25.0, 6.0);
sprite.graphics.endFill();
sprite.x = 20.0;
sprite.y = 50.0;
root.addChild(sprite);
```

The code above [draws a red rectangle](https://books.openfl.org/openfl-developers-guide/using-the-drawing-api/drawing-shapes-using-built-in-methods.html), [changes its position](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/changing-position.html), and [adds it as a child](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/working-with-display-object-containers.html) of OpenFL's _root_ container.

Another primitive offered by OpenFL is the [`openfl.text.TextField`](https://api.openfl.org/openfl/text/TextField.html) class, which is used for rendering text.

```hx
var textField = new TextField();
textField.defaultTextFormat = new TextFormat("_sans", 20.0, 0xffffff);
textField.text = "Hello OpenFL";
textField.autoSize = TextFieldAutoSize.LEFT;
textField.x = (sprite.width - textField.width) / 2.0;
textField.y = (sprite.height - textField.height) / 2.0;
sprite.addChild(textField);
```

The example above adds the text "Hello OpenFL" as a child of the [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html). The text's font styles are customized with [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html), and it is positioned in the center of the rectangle.

## User input

OpenFL dispatches events for user input from a variety of sources, including keyboard, mouse, touchscreen, and game pads.

### Keyboard

To listen for keyboard events globally, [add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`openfl.events.KeyboardEvent.KEY_DOWN`](https://api.openfl.org/openfl/events/KeyboardEvent.html#KEY_DOWN) to the OpenFL [`Stage`](https://api.openfl.org/openfl/display/Stage.html) object.

```hx
stage.addEventListener(KeyboardEvent.KEY_DOWN, (event:KeyboardEvent) -> {
    switch(event.keyCode) {
        case Keyboard.UP:
            trace("key down: up arrow");
        case Keyboard.DOWN:
            trace("key down: down arrow");
        case Keyboard.LEFT:
            trace("key down: left arrow");
        case Keyboard.RIGHT:
            trace("key down: right arrow");
    }
});
```

The event listener above determines if the up, down, left, or right arrow keys have been pressed.

> The [`trace()`](https://haxe.org/manual/debugging-trace-log.html) function is built into [Haxe](https://haxe.org) programming language, and it prints some text to the debug console.

In many cases, a listener is also added for [`openfl.events.KeyboardEvent.KEY_UP`](https://api.openfl.org/openfl/events/KeyboardEvent.html#KEY_UP) to determine when a key press ends.

### Mouse

To react when the user clicks a display object with the mouse, [add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`openfl.events.MouseEvent.CLICK`](https://api.openfl.org/openfl/events/MouseEvent.html#CLICK).

```hx
sprite.addEventListener(MouseEvent.CLICK, (event:MouseEvent) -> {
    trace("clicked!");
});
```

Several more commonly-used mouse events offer real-time access to the mouse position and the button state.

- [`MouseEvent.MOUSE_DOWN`](https://api.openfl.org/openfl/events/MouseEvent.html#MOUSE_DOWN)
- [`MouseEvent.MOUSE_MOVE`](https://api.openfl.org/openfl/events/MouseEvent.html#MOUSE_MOVE)
- [`MouseEvent.MOUSE_UP`](https://api.openfl.org/openfl/events/MouseEvent.html#MOUSE_UP)
- [`MouseEvent.ROLL_OVER`](https://api.openfl.org/openfl/events/MouseEvent.html#ROLL_OVER)
- [`MouseEvent.ROLL_OUT`](https://api.openfl.org/openfl/events/MouseEvent.html#ROLL_OUT)
- [`MouseEvent.MOUSE_WHEEL`](https://api.openfl.org/openfl/events/MouseEvent.html#MOUSE_WHEEL)

### Touch

To run some code when the user taps a display object on a mobile device's touchscreen, [add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`openfl.events.TouchEvent.TOUCH_TAP`](https://api.openfl.org/openfl/events/TouchEvent.html#TOUCH_TAP).

```hx
sprite.addEventListener(TouchEvent.TOUCH_TAP, (event:TouchEvent) -> {
    trace("tapped! " + event.touchPointID);
});
```

Similar to the low-level mouse events, a number of commonly-used low-level touch events are available too.

- [`TouchEvent.TOUCH_BEGIN`](https://api.openfl.org/openfl/events/TouchEvent.html#TOUCH_BEGIN)
- [`TouchEvent.TOUCH_BEGIN`](https://api.openfl.org/openfl/events/TouchEvent.html#TOUCH_MOVE)
- [`TouchEvent.TOUCH_END`](https://api.openfl.org/openfl/events/TouchEvent.html#TOUCH_END)

These events might be used to drag objects around or to create multitouch gestures.

## Networking

One way that OpenFL provides to load data over the network is the [`openfl.net.URLLoader`](https://api.openfl.org/openfl/net/URLLoader.html) class, which can parse the returned data in multiple formats — including plaintext or binary.

```hx
var loader = new URLLoader();
loader.load(new URLRequest("http://api.example.com/list"));
```

The example above loads text from an API server by passing a [`openfl.net.URLRequest`](https://api.openfl.org/openfl/net/URLRequest.html) object to the loader's [`load()`](https://api.openfl.org/openfl/net/URLLoader.html#load) method.

> The [`openfl.net.URLRequest`](https://api.openfl.org/openfl/net/URLRequest.html) class creates a GET request by default, but it also supports POST requests, and it can pass additional variables to the backend too.

To determine when the data has completed loading successfully, [add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`openfl.events.Event.COMPLETE`](https://api.openfl.org/openfl/events/Event.html#COMPLETE) to the [`URLLoader`](https://api.openfl.org/openfl/net/URLLoader.html).

```hx
loader.addEventListener(Event.COMPLETE, (event:Event) -> {
    var loader = cast(event.currentTarget, URLLoader);
    var data = Std.string(loader.data);
    trace("data loaded: " + data);
});
```

Listen for [`openfl.events.ProgressEvent.PROGRESS`](https://api.openfl.org/openfl/events/ProgressEvent.html#PROGRESS) to track how much data has loaded, and how much is still not available.

```hx
loader.addEventListener(ProgressEvent.PROGRESS, (event:ProgressEvent) -> {
    var loader = cast(event.currentTarget, URLLoader);
    var percent = 100.0 * loader.bytesLoaded / loader.bytesTotal;
    trace("Loaded: " + Math.floor(percent) + "%");
});
```

## Related Links

- [OpenFL Website](https://openfl.org/)
- [OpenFL Developer's Guide](https://books.openfl.org/openfl-developers-guide/)
