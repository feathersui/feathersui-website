---
title: How to use the Label component
sidebar_label: Label
---

The [`Label`](https://api.feathersui.com/current/feathers/controls/Label.html) class is for displaying text.

## The Basics

First, let's create a [`Label`](https://api.feathersui.com/current/feathers/controls/Label.html) control, give it some text to display, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var label = new Label();
label.text = "Hello from Feathers UI";
this.addChild(label);
```

The text may be wrapped if it is too long to fit on one line using the [`wordWrap`](https://api.feathersui.com/current/feathers/controls/Label.html#wordWrap) property.

```hx
label.width = 100.0;
label.wordWrap = true;
```

## Styles

A number of styles may be customized on a [`Label`](https://api.feathersui.com/current/feathers/controls/Label.html) component, including the font styles, an optional background skin, and padding around the edges.

### Font styles

The font styles of the label's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/Label.html#textFormat) property.

```hx
label.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the label's text should use different font styles when the label is disabled, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) and state value to the [`disabledTextFormat`](https://api.feathersui.com/current/feathers/controls/Label.html#disabledTextFormat) property.

### Background skin

Optionally give the label a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/Label.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
label.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The label automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Graphics API skins](./graphics-api-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the label's border or fill may be customized to change when the label is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the label is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the label uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the label's current state. Alternatively, the label's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/Label.html#disabledBackgroundSkin) method allows the label to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
label.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
label.disabledBackgroundSkin = disabledSkin;
```

In the example above, the label will have a separate skins when enabled and disabled.

### Layout

Padding may be added on each side of the label, including [top](https://api.feathersui.com/current/feathers/controls/Label.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/Label.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/Label.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/Label.html#paddingLeft).

```hx
label.paddingTop = 5.0;
label.paddingRight = 8.0;
label.paddingBottom = 5.0;
label.paddingLeft = 8.0;
```

## Related Links

- [`feathers.controls.Label` API Documentation](https://api.feathersui.com/current/feathers/controls/Label.html)
