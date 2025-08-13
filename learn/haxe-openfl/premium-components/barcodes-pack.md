---
title: Barcodes Pack (Premium)
layout: "docs.html"
sidebarTitle: Getting Started
---

The _Barcodes Pack_ is a set of premium [Feathers UI](/) components that features the ability to render various types of barcodes and QR codes.

- [`Code39Barcode`](./code39-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`Code128ABarcode`](./code128a-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`Code128BBarcode`](./code128b-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`EAN8Barcode`](./ean8-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`EAN13Barcode`](./ean13-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`Pharmacode`](./pharmacode-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`QRCode`](./qr-code.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`UPCABarcode`](./upca-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`UPCEBarcode`](./upce-barcode.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>

## Installation

When you purchase the _Barcodes Pack_, you will download a _.zip_ bundle that contains everything you need to use the UI components in the pack. Start by extracting the _.zip_ file in a directory somewhere on your local file system. The _.zip_ bundle contains several things, including:

- A _README.md_ file
- Full _.hx_ source code files
- An HTML API Reference
- Sample Projects
- Another _.zip_ file, which may be installed as a local library with Haxelib

To install with Haxelib, run the following command (replace the _x.y.z_ string with the actual version that you downloaded):

```sh
haxelib install feathersui-barcodes-pack-x.y.z.zip
```

Then, add the following to your OpenFL _project.xml_ file.

```xml
<haxelib name="feathersui-barcodes-pack" />
```