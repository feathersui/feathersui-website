---
title: How to use the QRCode component
layout: "docs.html"
sidebarTitle: QRCode
---

The [`QRCode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html) class displays a [QR code](https://en.wikipedia.org/wiki/QR_code) (sometimes called a Quick Response Code), a type of two-dimensional matrix barcode.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

Start by creating a [`QRCode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/controls/QRCode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var qrCode = new QRCode();
addChild(qrCode);
```

The data displayed by the QR code may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#code) property.

```haxe
qrCode.code = "https://feathersui.com/";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#code) property setter is too long, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown.

## Styles

A number of styles may be customized on a [`QRCode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html) component, including the an optional background skin and padding around the edges.

### Background skin

Optionally give the QR code a background using the [`backgroundSkin`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
qrCode.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The QR code automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the QR code's border or fill may be customized to change when the QR code is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the QR code is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the QR code uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the QR code's current state. Alternatively, the QR code's [`disabledBackgroundSkin`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/supportClasses/QRCode.html#disabledBackgroundSkin) method allows the QR code to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
qrCode.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
qrCode.disabledBackgroundSkin = disabledSkin;
```

In the example above, the QR code will have a separate skins when enabled and disabled.

### Layout

Padding may be added on each side of the QR code, including [top](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#paddingTop), [right](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#paddingRight), [bottom](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#paddingBottom), and [left](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#paddingLeft).

```haxe
qrCode.paddingTop = 5.0;
qrCode.paddingRight = 8.0;
qrCode.paddingBottom = 5.0;
qrCode.paddingLeft = 8.0;
```

## Related Links

- [`com.feathersui.barcodes.controls.QRCode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html)