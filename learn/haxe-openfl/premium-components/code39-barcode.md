---
title: How to use the Code39Barcode component
layout: "docs.html"
sidebarTitle: Code39Barcode
---

The [`Code39Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code39Barcode.html) class displays a [Code 39 barcode](https://en.wikipedia.org/wiki/Code_39), which encodes a string of variable length, with a set of 43 available characters. Code39 barcodes are sometimes know as Alpha39, Code 3 of 9, Code 3/9, Type 39, USS Code 39, and USD-3. This type of barcode is standardized in ISO/IEC 16388:2007.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`Code39Barcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code39Barcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new Code39Barcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code39Barcode.html#code) property.

```haxe
barcode.code = "*WIKIPEDIA*";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code39Barcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code may include a single asterisk (`*`) character at both the start and end of the string, or they may both be omitted. It may contain uppercase letters (A-Z), numeric digits (0-9), spaces, and the special characters `-`, `.`, `$`, `/`, `+`, and `%` only. Lower case characters and other special characters are not allowed.

## Related Links

- [`com.feathersui.barcodes.controls.Code39Barcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Code39Barcode.html)