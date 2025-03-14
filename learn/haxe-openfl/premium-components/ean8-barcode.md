---
title: How to use the EAN8Barcode component
layout: "docs.html"
sidebarTitle: EAN8Barcode
---

The [`EAN8Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN8Barcode.html) class displays an [International Article Number 8 (EAN-8)](https://en.wikipedia.org/wiki/EAN-8) of a smaller variety than EAN-13 that represents exactly 8 numeric digits.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`EAN8Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN8Barcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new EAN8Barcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html#code) property.

```haxe
barcode.code = "95050003";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN13Barcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code must have a length of exactly eight (8) numeric digits (0-9).

## Related Links

- [`com.feathersui.barcodes.controls.EAN8Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/EAN8Barcode.html)