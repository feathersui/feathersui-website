---
title: Data Containers Pack (Premium)
layout: "docs.html"
sidebarTitle: Getting Started
---

The _Data Containers Pack_ is a set of premium [Feathers UI](/) components that includes advanced containers for displaying [collections](../data-collections.md).

To purchase these components, visit the the Feathers UI Store (**NOTE:** not yet launched).

- [`CascadeListView`](./cascade-list-view.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`GridComboBox`](./grid-combo-box.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`PopUpGridView`](./pop-up-grid-view.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`PopUpTreeGridView`](./pop-up-tree-grid-view.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>
- [`PopUpTreeView`](./pop-up-tree-view.md) <a href="../semver.md#beta-apis"><img class="beta" src="/img/beta.png" alt="(Beta)"/></a>

## Installation

When you purchase the _Data Containers Pack_ from the Feathers UI Store (**NOTE:** not yet launched), you will download a _.zip_ bundle that contains everything you need to use the UI components in the pack. Start by extracting the _.zip_ file in a directory somewhere on your local file system. The _.zip_ bundle contains several things, including:

- A _README.md_ file
- Full _.hx_ source code files
- An HTML API Reference
- Sample Projects
- Another _.zip_ file, which may be installed as a local library with Haxelib

To install with Haxelib, run the following command (replace the _x.y.z_ string with the actual version that you downloaded):

```sh
haxelib install feathersui-data-containers-pack-x.y.z.zip
```

Then, add the following to your OpenFL _project.xml_ file.

```xml
<haxelib name="feathersui-data-containers-pack" />
```