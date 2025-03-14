---
title: Sparklines (Premium)
layout: "docs.html"
sidebarTitle: Getting Started
---

[`Sparkline`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html) is a premium [Feathers UI](/) component that renders a tiny chart or graph that displays a trend in a highly condensed way. Sparklines are intended to be rendered without axes or other indicators of numeric range. They are often displayed inline with text or grouped together with multiple other sparklines.

- [`Column` sparkline type](./sparkline-type-column.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`Line` sparkline type](./sparkline-type-line.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>

## Installation

When you purchase _Sparklines_, you will download a _.zip_ bundle that contains everything you need to use the UI components in the pack. Start by extracting the _.zip_ file in a directory somewhere on your local file system. The _.zip_ bundle contains several things, including:

- A _README.md_ file
- Full _.hx_ source code files
- An HTML API Reference
- Sample Projects
- Another _.zip_ file, which may be installed as a local library with Haxelib

To install with Haxelib, run the following command (replace the _x.y.z_ string with the actual version that you downloaded):

```sh
haxelib install feathersui-sparklines-x.y.z.zip
```

Then, add the following to your OpenFL _project.xml_ file.

```xml
<haxelib name="feathersui-sparklines" />
```