---
title: How to use the Pharmacode component
layout: "docs.html"
sidebarTitle: Pharmacode
---

The [`Pharmacode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Pharmacode.html) class displays a [Pharmacode barcode](https://en.wikipedia.org/wiki/Pharmacode), which encodes an integer between 3 and 131070.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`Pharmacode`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Pharmacode.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var barcode = new Pharmacode();
addChild(barcode);
```

The data displayed by the barcode may be changed programatically by setting the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Pharmacode.html#code) property.

```haxe
barcode.code = 121;
```

> **Warning!** If the integer value passed to the [`code`](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Pharmacode.html#code) property setter is not in the range 3-131070, a [`RangeError`](https://api.openfl.org/openfl/errors/RangeError.html) may be thrown.

## Related Links

- [`com.feathersui.barcodes.controls.Pharmacode` API Documentation](https://api.feathersui.com/premium-components/barcodes-pack/com/feathersui/barcodes/controls/Pharmacode.html)