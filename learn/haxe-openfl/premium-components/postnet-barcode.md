---
title: How to use the PostnetBarcode component
layout: "docs.html"
sidebarTitle: PostnetBarcode
---

The [`PostnetBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/PostnetBarcode.html) class displays a [Interleaved 2 of 5 barcode](https://en.wikipedia.org/wiki/Interleaved_2_of_5), which encodes a string of numeric digits representing one of the following formats:

- ZIP code
- ZIP+4
- ZIP+4 plus a delivery point

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`PostnetBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/PostnetBarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new PostnetBarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/PostnetBarcode.html#code) property.

```haxe
barcode.code = "5555512372";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/PostnetBarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may include numeric digits (0-9) only, and its base length must be 5, 9, or 11 digits long, with an optional check digit.

## Related Links

- [`com.feathersui.barcodes.controls.PostnetBarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/PostnetBarcode.html)