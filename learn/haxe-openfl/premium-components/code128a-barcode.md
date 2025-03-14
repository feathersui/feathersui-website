---
title: How to use the Code128ABarcode component
layout: "docs.html"
sidebarTitle: Code128ABarcode
---

The [`Code128ABarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128ABarcode.html) class displays a [Code 128 barcode](https://en.wikipedia.org/wiki/Code_128) using _Code Set A_, which supports ASCII range 0-95, which includes A-Z, 0-9, special characters, and control characters.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`Code128ABarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128ABarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new Code128ABarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128ABarcode.html#code) property.

```haxe
barcode.code = "FEATHERS UI";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128ABarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may include any character in ASCII range 0-95. This includes upper-case letters (A-Z), numeric digits (0-9), a variety of special characters, and control characters. Lower-case characters and any ASCII character codes greater than 95 are not allowed.

## Related Links

- [`com.feathersui.barcodes.controls.Code128ABarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128ABarcode.html)