---
title: How to use the Panel component
sidebar_label: Panel
---

The [`Panel`](https://api.feathersui.com/current/feathers/controls/Panel.html) class is a container that may display a header and a footer, and it can position its children using a [layout](https://api.feathersui.com/current/feathers/layout/). This type of container offers support for scrolling content that is too large to fit within its visible bounds. Scrolling is supported in a variety of ways — including touch and drag, mouse wheel and scroll bars, or by using a keyboard's arrow keys when the container has focus.

## The Basics

Create a [`Panel`](https://api.feathersui.com/current/feathers/controls/Panel.html) component, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and add some children.

```hx
var panel = new Panel();
this.addChild(panel);

var child1 = new Label();
child1.text = "Hello";
panel.addChild(child1);

var child2 = new Sprite();
child2.graphics.beginFill(0xcccccc);
child2.graphics.drawRect(0.0, 0.0, 100.0, 100.0);
child2.graphics.endFill();
panel.addChild(child2);
```

A mix of [OpenFL's core display objects](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html) and other Feathers UI components may be added to the panel.

Set the panel's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ScrollContainer.html#layout) property to automatically position its children.

```hx
panel.layout = new HorizontalLayout();
```

The example above uses [`HorizontalLayout`](./horizontal-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.

### Header

A panel may optionally display a header, which will stretch along panel's the top edge. Like the panel's children, its header may be any of [OpenFL's core display objects](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html) or a Feathers UI component.

In the following example, a [`LayoutGroup`](./layout-group.md) component is used as a panel's header.

```hx
var header = new LayoutGroup();
header.variant = LayoutGroup.VARIANT_TOOL_BAR;
header.layout = new AnchorLayout();

var title = new Label();
title.text = "Header";
title.variant = Label.VARIANT_HEADING;
title.layoutData = AnchorLayoutData.center();
header.addChild(title);

panel.header = header;
```

### Footer

A panel may optionally display a footer, which will stretch along panel's the bottom edge. Like the panel's children, its footer may be any of [OpenFL's core display objects](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html) or a Feathers UI component.

In the following example, a [`LayoutGroup`](./layout-group.md) component is used as a panel's footer.

```hx
var footer = new LayoutGroup();
footer.variant = LayoutGroup.VARIANT_TOOL_BAR;
footer.layout = new AnchorLayout();

var title = new Label();
title.text = "Footer";
title.variant = Label.VARIANT_HEADING;
title.layoutData = AnchorLayoutData.center();
footer.addChild(title);

panel.footer = footer;
```

## Styles

A number of styles may be customized on a [`Panel`](https://api.feathersui.com/current/feathers/controls/Panel.html) component, including an optional background skin and the appearance of the panel's scroll bars.

### Background skin

Optionally give the panel a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
panel.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The panel automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like header and footer, and the size and position of children), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the panel's border or fill may be customized to change when the panel is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the panel is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the panel uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the panel's current state. Alternatively, the panel's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the panel to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
panel.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
panel.disabledBackgroundSkin = disabledSkin;
```

In the example above, the panel will have a separate skins when enabled and disabled.

### Scroll bars

The scroll bars in a [`Panel`](https://api.feathersui.com/current/feathers/controls/Panel.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual panel.

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

#### Style scroll bars in a specific `Panel`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual panel's scroll bars.

```hx
panel.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

panel.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.Panel` API Documentation](https://api.feathersui.com/current/feathers/controls/Panel.html)
