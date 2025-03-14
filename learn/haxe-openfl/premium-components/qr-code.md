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

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#code) property.

```haxe
qrCode.code = "https://feathersui.com/";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html#code) property setter is too long, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown.

## Related Links

- [`com.feathersui.barcodes.controls.QRCode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/QRCode.html)