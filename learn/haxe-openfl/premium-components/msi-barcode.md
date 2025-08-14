---
title: How to use the MSIBarcode component
layout: "docs.html"
sidebarTitle: MSIBarcode
---

The [`MSIBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/MSIBarcode.html) class displays a [MSI barcode](https://en.wikipedia.org/wiki/MSI_Barcode), which encodes a string of variable length, supporting numeric digits (0-9) only.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`MSIBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/MSIBarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new MSIBarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/MSIBarcode.html#code) property.

```haxe
barcode.code = "1234567";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/MSIBarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may contain numeric digits (0-9) only.

## Related Links

- [`com.feathersui.barcodes.controls.MSIBarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/MSIBarcode.html)