---
title: How to use the Code128BBarcode component
layout: "docs.html"
sidebarTitle: Code128BBarcode
---

The [`Code128BBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128BBarcode.html) class  displays a [Code 128 barcode](https://en.wikipedia.org/wiki/Code_128) using _Code Set B_, which supports ASCII range 32-127. Includes A-Z, a-z, 0-9, and special characters.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`Code128BBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128BBarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new Code128BBarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128BBarcode.html#code) property.

```haxe
barcode.code = "Feathers UI";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128BBarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may include any character in ASCII range 32-127. This includes upper-case letters (A-Z), lower-case letters (a-z), numeric digits (0-9), and a variety of special characters. Any ASCII character codes less than 32 or greater than 127 are not allowed.

## Related Links

- [`com.feathersui.barcodes.controls.Code128BBarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code128BBarcode.html)