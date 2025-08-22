---
title: How to use the ITF14Barcode component
layout: "docs.html"
sidebarTitle: ITF14Barcode
---

The [`ITF14Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html) class displays a [Interleaved 2 of 5 barcode](https://en.wikipedia.org/wiki/Interleaved_2_of_5), which encodes a string of length 14, with the final character being a check digit, supporting numeric digits (0-9) only.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`ITF14Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new ITF14Barcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html#code) property.

```haxe
barcode.code = "00123456000018";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may contain numeric digits (0-9) only.

## Styles

A number of styles may be customized on a [`ITF14Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html) component, including the an optional background skin and padding around the edges.

### Background skin

Optionally give the barcode a background using the [`backgroundSkin`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/BaseBarcode.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
barcode.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The barcode automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the barcode's border or fill may be customized to change when the barcode is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the barcode is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the barcode uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the barcode's current state. Alternatively, the barcode's [`disabledBackgroundSkin`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/BaseBarcode.html#disabledBackgroundSkin) method allows the barcode to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
barcode.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
barcode.disabledBackgroundSkin = disabledSkin;
```

In the example above, the barcode will have a separate skins when enabled and disabled.

### Layout

Padding may be added on each side of the barcode, including [top](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/BaseBarcode.html#paddingTop), [right](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/BaseBarcode.html#paddingRight), [bottom](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/BaseBarcode.html#paddingBottom), and [left](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/BaseBarcode.html#paddingLeft).

```haxe
barcode.paddingTop = 5.0;
barcode.paddingRight = 8.0;
barcode.paddingBottom = 5.0;
barcode.paddingLeft = 8.0;
```

## Related Links

- [`com.feathersui.barcodes.controls.ITF14Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html)