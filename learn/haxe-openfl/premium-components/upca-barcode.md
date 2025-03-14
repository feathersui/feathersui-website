---
title: How to use the UPCABarcode component
layout: "docs.html"
sidebarTitle: UPCABarcode
---

The [`UPCABarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCABarcode.html) class displays a [Universal Product Code A (UPC-A)](https://en.wikipedia.org/wiki/Universal_Product_Code) that represents 12 numeric digits (11 digits, plus one check digit).

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

Start by creating a [`UPCABarcode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCABarcode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new UPCABarcode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCABarcode.html#code) property.

```haxe
barcode.code = "012345678905";
```

> **Warning!** If the string value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCABarcode.html#code) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The code must have a length of exactly eleven (11) or twelve (12) numeric digits (0-9). Letters or other special characters are not allowed. If only eleven (11) digits are provided, the final checksum digit will be calculated automatically.

## Related Links

- [`com.feathersui.barcodes.controls.UPCABarcode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/UPCABarcode.html)