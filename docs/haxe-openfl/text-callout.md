---
title: How to use the TextCallout component
sidebar_label: TextCallout
---

The [`TextCallout`](https://api.feathersui.com/current/feathers/controls/TextCallout.html) class is a special type of [callout](./callout.md) that simply renders text as its content.

## The Basics

To create a `TextCallout` component, call the static function [`TextCallout.show()`](https://api.feathersui.com/current/feathers/controls/TextCallout.html#show). In the following example, a text callout will be opened after triggering a [button](./button.md).

```hx
var button = new Button();
button.text = "Click Me";
this.addChild(button);

button.addEventListener(TriggerEvent.TRIGGER, (event:TriggerEvent) -> {
    var button = cast(event.currentTarget, Button);

    var callout = TextCallout.show("Hello", button);
});
```

At least two arguments are required when calling [`TextCallout.show()`](https://api.feathersui.com/current/feathers/controls/TextCallout.html#show). The first is the text to display inside the callout. The second argument is the _origin_ of the callout. The callout will be positioned near its origin, and if it has an arrow skin, the arrow will point in the direction of the origin.

### Position

By default, the callout may be positioned on any side of its origin, and the best position will be chosen automatically based on how much space is available on each side. If desired, a specific position or subset of positions may be specified instead.

The [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) enum defines the available positions.

- [`TOP`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#TOP)
- [`BOTTOM`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#BOTTOM)
- [`LEFT`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#LEFT)
- [`RIGHT`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#RIGHT)

To always position the callout on the same side of its origin, pass that position to [`TextCallout.show()`](https://api.feathersui.com/current/feathers/controls/TextCallout.html#show).

```hx
TextCallout.show("Hello", origin, BOTTOM);
```

To allow a callout to be positioned on more than one side of its origin, pass in an array of positions to [`TextCallout.show()`](https://api.feathersui.com/current/feathers/controls/TextCallout.html#show).

```hx
TextCallout.show("Hello", origin, [BOTTOM, TOP]);
```

To use the default set of positions, omit the argument or pass in `null`.

```hx
TextCallout.show("Hello", origin, null);
```

### Modality

The fourth argument passed to [`TextCallout.show()`](https://api.feathersui.com/current/feathers/controls/TextCallout.html#show) determines whether the callout will be displayed modally or non-modally. In other words, if a callout is modal, a user cannot interact with objects below the callout until it is closed.

Callouts are modal by default. To open a callout that is not modal, pass in a value of `false`.

```hx
TextCallout.show("Hello", origin, null, false);
```

## Styles

A number of styles may be customized on a [`Callout`](https://api.feathersui.com/current/feathers/controls/Callout.html) component, including the background skin, arrow skin, and padding around the edges.

### Background skin

Optionally give the callout a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/Callout.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
callout.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The callout automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Graphics API skins](./graphics-api-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Arrow skins

> 🚧 The arrow skins have not been implemented yet.

### Layout

Padding may be added on each side of the callout's text, including [top](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingLeft).

```hx
callout.paddingTop = 6.0;
callout.paddingRight = 6.0;
callout.paddingBottom = 6.0;
callout.paddingLeft = 6.0;
```

Margins may be added on each side of the callout, which will prevent the callout from being positioned too closely near the edge of the OpenFL stage. Margins are available on all sides, including [top](https://api.feathersui.com/current/feathers/controls/Callout.html#marginTop), [right](https://api.feathersui.com/current/feathers/controls/Callout.html#marginRight), [bottom](https://api.feathersui.com/current/feathers/controls/Callout.html#marginBottom), and [left](https://api.feathersui.com/current/feathers/controls/Callout.html#marginLeft).

```hx
callout.marginTop = 20.0;
callout.marginRight = 20.0;
callout.marginBottom = 20.0;
callout.marginLeft = 20.0;
```

## Related Links

- [`feathers.controls.TextCallout` API Documentation](https://api.feathersui.com/current/feathers/controls/TextCallout.html)
