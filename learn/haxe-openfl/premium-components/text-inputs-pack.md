---
title: Text Inputs Pack (Premium)
layout: "docs.html"
sidebarTitle: Getting Started
---

The _Text Inputs Pack_ is a set of premium [Feathers UI](/) components that includes advanced varations of the [`TextInput`](../text-input.md) component for specific formats of data, such as network addresses, phone numbers, government ID numbers, and more.

To purchase these components, visit the the Feathers UI Store (**NOTE:** not yet launched).

- [`EINTextInput`](./ein-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`IPv4AddressTextInput`](./ipv4-address-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`MaskedTextInput`](./masked-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`PhoneNumberTextInput`](./phone-number-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`SINTextInput`](./sin-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`SSNTextInput`](./ssn-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`ZipCodeTextINput`](./zip-code-text-input.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>

## Installation

When you purchase the _Text Inputs Pack_ from the Feathers UI Store (**NOTE:** not yet launched), you will download a _.zip_ bundle that contains everything you need to use the UI components in the pack. Start by extracting the _.zip_ file in a directory somewhere on your local file system. The _.zip_ bundle contains several things, including:

- A _README.md_ file
- Full _.hx_ source code files
- An HTML API Reference
- Sample Projects
- Another _.zip_ file, which may be installed as a local library with Haxelib

To install with Haxelib, run the following command (replace the _x.y.z_ string with the actual version that you downloaded):

```sh
haxelib install feathersui-text-inputs-pack-x.y.z.zip
```

Then, add the following to your OpenFL _project.xml_ file.

```xml
<haxelib name="feathersui-text-inputs-pack" />
```