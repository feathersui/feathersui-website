---
title: How to use the ScrollContainer component
sidebar_label: ScrollContainer
---

The [`ScrollContainer`](https://api.feathersui.com/current/feathers/controls/ScrollContainer.html) class is a generic container that can position its children using a [layout](https://api.feathersui.com/current/feathers/layout/). This type of container offers support for scrolling content that is too large to fit within its visible bounds. Scrolling is supported in a variety of ways — including touch and drag, mouse wheel and scroll bars, or by using a keyboard's arrow keys when the container has focus.

> If you don't need scrolling, consider using the [`LayoutGroup`](./layout-group.md) component instead.

<figure>
<iframe src="/learn/haxe-openfl/samples/scroll-container.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/ScrollContainer.html"><code>ScrollContainer</code></a> component</figcaption>
</figure>

## The Basics

Create a [`ScrollContainer`](https://api.feathersui.com/current/feathers/controls/ScrollContainer.html) component, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and add some children.

```hx
var container = new ScrollContainer();
this.addChild(container);

var child1 = new Label();
child1.text = "Hello";
container.addChild(child1);

var child2 = new Sprite();
child2.graphics.beginFill(0xcccccc);
child2.graphics.drawRect(0.0, 0.0, 100.0, 100.0);
child2.graphics.endFill();
container.addChild(child2);
```

A mix of [OpenFL's core display objects](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html) and other Feathers UI components may be added to the container.

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ScrollContainer.html#layout) property to automatically position its children.

```hx
container.layout = new HorizontalLayout();
```

The example above uses [`HorizontalLayout`](./horizontal-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.

## Styles

A number of styles may be customized on a [`ScrollContainer`](https://api.feathersui.com/current/feathers/controls/ScrollContainer.html) component, including an optional background skin the appearance of the container's scroll bars.

### Background skin

Optionally give the container a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
container.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The container automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the size and position of children), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the container's border or fill may be customized to change when the container is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the container is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the container uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the container's current state. Alternatively, the container's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the container to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
container.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
container.disabledBackgroundSkin = disabledSkin;
```

In the example above, the container will have a separate skins when enabled and disabled.

### Scroll bars

The scroll bars in a [`ScrollContainer`](https://api.feathersui.com/current/feathers/controls/ScrollContainer.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual scroll container.

> See [How to use the `HScrollBar` and `VScrollBar` components](./scroll-bar.md#styles) for complete details about which styles are available for the scroll bars.

#### Style scroll bars globally

Use the [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html) and [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html) classes in a [theme](./themes.md) to provide a function that globally styles all scroll bars in your project.

```hx
styleProvider.setStyleFunction(HScrollBar, null, setHScrollBarStyles);
styleProvider.setStyleFunction(VScrollBar, null, setVScrollBarStyles);
```

The functions should use the following signatures.

```hx
function setHScrollBarStyles(scrollBar:HScrollBar):Void {
    // ... set styles here
});

function setVScrollBarStyles(scrollBar:VScrollBar):Void {
    // ... set styles here
});
```

#### Style scroll bars in a specific `ScrollContainer`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual container's scroll bars.

```hx
container.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

container.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.ScrollContainer` API Documentation](https://api.feathersui.com/current/feathers/controls/ScrollContainer.html)
- [How to use the `LayoutGroup` component](./layout-group.md)
