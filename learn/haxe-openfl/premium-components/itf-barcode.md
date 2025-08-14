---
title: How to use the ITFBarcode component
layout: "docs.html"
sidebarTitle: ITFBarcode
---

The [`ITFBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITFBarcode.html) class displays a [Interleaved 2 of 5 barcode](https://en.wikipedia.org/wiki/Interleaved_2_of_5), which encodes a string of variable length, supporting numeric digits (0-9) only.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`ITFBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITFBarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new ITFBarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITFBarcode.html#code) property.

```haxe
barcode.code = "1234567895";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITFBarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may contain numeric digits (0-9) only.

## Related Links

- [`com.feathersui.barcodes.controls.ITFBarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/ITFBarcode.html)