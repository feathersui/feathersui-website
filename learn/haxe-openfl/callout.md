---
title: How to use the Callout component
layout: "docs.html"
sidebarTitle: Callout
---

The [`Callout`](https://api.feathersui.com/current/feathers/controls/Callout.html) class renders content as a pop-up over all other content on the OpenFL stage. Typically, a callout displays a rectangular border with an arrow or tail that points to an origin display object, such as a button. The arrow may appear on any of the callout's four sides. The callout will close automatically when a touch or mouse click is detected outside of the callout's bounds.

> To display a callout that contains only text, see [`TextCallout`](./text-callout.md).

## The Basics

To create a `Callout` component, call the static function [`Callout.show()`](https://api.feathersui.com/current/feathers/controls/Callout.html#show). In the following example, a callout containing an [`AssetLoader`](./asset-loader.md) will be opened after triggering a [button](./button.md).

```haxe
var button = new Button();
button.text = "Click Me";
addChild(button);

button.addEventListener(TriggerEvent.TRIGGER, (event:TriggerEvent) -> {
    var button = cast(event.currentTarget, Button);

    var content = new AssetLoader();
    content.source = "https://example.com/img/asset.png";

    var callout = Callout.show(content, button);
});
```

At least two arguments are required when calling [`Callout.show()`](https://api.feathersui.com/current/feathers/controls/Callout.html#show). The first is the content to display inside the callout. The content may be any OpenFL display object or Feathers UI component. The second argument is the _origin_ of the callout. The callout will be positioned near its origin, and if it has an arrow skin, the arrow will point in the direction of the origin.

### Position

By default, the callout may be positioned on any side of its origin, and the best position will be chosen automatically based on how much space is available on each side. If desired, a specific position or subset of positions may be specified instead.

The [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) enum defines the available positions.

- [`TOP`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#TOP)
- [`BOTTOM`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#BOTTOM)
- [`LEFT`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#LEFT)
- [`RIGHT`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html#RIGHT)

To always position the callout on the same side of its origin, pass that position to [`Callout.show()`](https://api.feathersui.com/current/feathers/controls/Callout.html#show).

```haxe
Callout.show(content, origin, BOTTOM);
```

To allow a callout to be positioned on more than one side of its origin, pass in an array of positions to [`Callout.show()`](https://api.feathersui.com/current/feathers/controls/Callout.html#show).

```haxe
Callout.show(content, origin, [BOTTOM, TOP]);
```

To use the default set of positions, omit the argument or pass in `null`.

```haxe
Callout.show(content, origin, null);
```

### Modality

The fourth argument passed to [`Callout.show()`](https://api.feathersui.com/current/feathers/controls/Callout.html#show) determines whether the callout will be displayed modally or non-modally. In other words, if a callout is modal, a user cannot interact with objects below the callout until it is closed.

Callouts are modal by default. To open a callout that is not modal, pass in a value of `false`.

```haxe
Callout.show(content, origin, null, false);
```

## Styles

A number of styles may be customized on a [`Callout`](https://api.feathersui.com/current/feathers/controls/Callout.html) component, including the background skin, arrow skin, and padding around the edges.

### Background skin

Optionally give the callout a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/Callout.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
callout.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The callout automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the content), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Arrow skins

Callouts may include an arrow that points to the origin. Depending on the [position](#position) of the callout, the arrow may be on any of the callout's four sides.

```haxe
var skin = new TriangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.drawBaseBorder = false;
skin.pointPosition = TOP;
skin.width = 12.0;
skin.height = 12.0;
callout.topArrowSkin = skin;
```

If you know that the callout will always open in one position, you can provide a single arrow skin. Otherwise, it's a good idea to provide all four. Each of the available arrow skin properties are [`topArrowSkin`](https://api.feathersui.com/current/feathers/controls/Callout.html#topArrowSkin), [`rightArrowSkin`](https://api.feathersui.com/current/feathers/controls/Callout.html#rightArrowSkin), [`bottomArrowSkin`](https://api.feathersui.com/current/feathers/controls/Callout.html#bottomArrowSkin), and [`leftArrowSkin`](https://api.feathersui.com/current/feathers/controls/Callout.html#leftArrowSkin).

### Layout

Padding may be added on each side of the callout's content, including [top](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/Callout.html#paddingLeft).

```haxe
callout.paddingTop = 6.0;
callout.paddingRight = 6.0;
callout.paddingBottom = 6.0;
callout.paddingLeft = 6.0;
```

Margins may be added on each side of the callout, which will prevent the callout from being positioned too closely near the edge of the OpenFL stage. Margins are available on all sides, including [top](https://api.feathersui.com/current/feathers/controls/Callout.html#marginTop), [right](https://api.feathersui.com/current/feathers/controls/Callout.html#marginRight), [bottom](https://api.feathersui.com/current/feathers/controls/Callout.html#marginBottom), and [left](https://api.feathersui.com/current/feathers/controls/Callout.html#marginLeft).

```haxe
callout.marginTop = 20.0;
callout.marginRight = 20.0;
callout.marginBottom = 20.0;
callout.marginLeft = 20.0;
```

## Related Links

- [`feathers.controls.Callout` API Documentation](https://api.feathersui.com/current/feathers/controls/Callout.html)
- [How to use the `TextCallout` component](./text-callout.md)
