---
title: How to use the EAN13Barcode component
layout: "docs.html"
sidebarTitle: EAN13Barcode
---

The [`EAN13Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html) class displays an [International Article Number 13 (EAN-13)](https://en.wikipedia.org/wiki/International_Article_Number) that represents exactly 13 numeric digits.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`EAN13Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new EAN13Barcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html#code) property.

```haxe
barcode.code = "0012345678905";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code must have a length of exactly thirteen (13) numeric digits (0-9).

## Related Links

- [`com.feathersui.barcodes.controls.EAN13Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html)