---
title: How to use the UPCEBarcode component
layout: "docs.html"
sidebarTitle: UPCEBarcode
---

The [`UPCEBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCEBarcode.html) class displays a [Universal Product Code E (UPC-E)](https://en.wikipedia.org/wiki/Universal_Product_Code) of a smaller variety than UPC-A that represents exactly 6 numeric digits.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

Start by creating a [`UPCEBarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/controls/UPCEBarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new UPCEBarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCEBarcode.html#code) property.

```haxe
barcode.code = "654321";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCEBarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code must have a length of exactly six (6) numeric digits (0-9). Letters or other special characters are not allowed.

## Related Links

- [`com.feathersui.barcodes.controls.UPCEBarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCEBarcode.html)