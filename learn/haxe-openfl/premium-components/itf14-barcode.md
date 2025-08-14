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

## Related Links

- [`com.feathersui.barcodes.controls.ITF14Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITF14Barcode.html)