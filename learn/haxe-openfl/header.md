---
title: How to use the Header component
layout: "docs.html"
sidebarTitle: Header
---

The [`Header`](https://api.feathersui.com/current/feathers/controls/Header.html) component displays title text, with regions on the left and right sides for extra controls (such as buttons for navigation).

<figure>
<iframe src="/learn/haxe-openfl/samples/header.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Header.html"><code>Header</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`Header`](https://api.feathersui.com/current/feathers/controls/Header.html) control, give it some text to display, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var header = new Header();
header.text = "Settings";
addChild(header);
```

Next, we'll create a back button and pass it to the [`leftView`](https://api.feathersui.com/current/feathers/controls/Header.html#leftView) property, which will position it to the left of the title.

```haxe
var backButton = new Button();
backButton.text = "Back";
header.leftView = backButton;
```

The [`rightView`](https://api.feathersui.com/current/feathers/controls/Header.html#rightView) property is also available, and it allows a view to be displayed to the right of the title.

## Styles

A number of styles may be customized on a [`Header`](https://api.feathersui.com/current/feathers/controls/Header.html) component, including the font styles and the background skin. Several more styles may be used to adjust the layout of the header's children.

### Font styles

The font styles of the header's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/Header.html#textFormat) property.

```haxe
header.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the header's text should use different font styles when the header is disabled, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) and state value to the [`disabledTextFormat`](https://api.feathersui.com/current/feathers/controls/Header.html#disabledTextFormat) property.

### Background skin

Optionally give the header a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/Header.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
header.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The header automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the header's border or fill may be customized to change when the header is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the header is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the header uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the header's current state. Alternatively, the header's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/Header.html#disabledBackgroundSkin) method allows the header to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
header.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
header.disabledBackgroundSkin = disabledSkin;
```

In the example above, the header will have a separate skins when enabled and disabled.

### Layout

Padding may be added on each side of the header, including [top](https://api.feathersui.com/current/feathers/controls/Header.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/Header.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/Header.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/Header.html#paddingLeft).

```haxe
header.paddingTop = 5.0;
header.paddingRight = 8.0;
header.paddingBottom = 5.0;
header.paddingLeft = 8.0;
```

The left and right views are positioned as far to the sides of the title text as possible. The [`minGap`](https://api.feathersui.com/current/feathers/controls/Header.html#minGap) makes it possible to require a minimum number of pixels to separate the title from the left and right views.

```haxe
header.minGap = 10.0;
```

The [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/Button.html#verticalAlign) property will adjust the vertical alignment of the title and side views inside the header, allowing you to anchor them at the top, bottom, or middle.

```haxe
header.verticalAlign = BOTTOM;
```

## Related Links

- [`feathers.controls.Header` API Reference](https://api.feathersui.com/current/feathers/controls/Header.html)
