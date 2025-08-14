---
title: How to use the Code93Barcode component
layout: "docs.html"
sidebarTitle: Code93Barcode
---

The [`Code93Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code93Barcode.html) class displays a [Code 93 barcode](https://en.wikipedia.org/wiki/Code_93), which encodes a string of variable length, supporting the full range of 128 ASCII characters.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`Code93Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code93Barcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new Code93Barcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code93Barcode.html#code) property.

```haxe
barcode.code = "Feathers UI";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code93Barcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may include any of the 128 characters in the ASCII range.

## Related Links

- [`com.feathersui.barcodes.controls.Code93Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code93Barcode.html)