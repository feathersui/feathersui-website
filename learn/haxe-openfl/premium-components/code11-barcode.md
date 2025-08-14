---
title: How to use the Code11Barcode component
layout: "docs.html"
sidebarTitle: Code11Barcode
---

The [`Code11Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code11Barcode.html) class displays a [Code 11 barcode](https://en.wikipedia.org/wiki/Code_11), which encodes a string of variable length, supporting numeric digits (0-9) and a dash (-) symbol only.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`Code11Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code11Barcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new Code11Barcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code11Barcode.html#code) property.

```haxe
barcode.code = "0123452";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code11Barcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may contain numeric digits (0-9), spaces and the dash (-) special character only.

## Related Links

- [`com.feathersui.barcodes.controls.Code11Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code11Barcode.html)