---
title: How to use data collections with Feathers UI
sidebar_label: Collections
---

A number of collection types are available to display data in Feathers UI components. These collections usually wrap more primitive Haxe data types and provide convenient new capabilities, such as filtering, sorting, and [dispatching events](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) when modified.

## Flat collections

A number of UI components may render a simple "flat" list of items.

- [`ComboBox`](./combo-box.md)
- [`ListView`](./list-view.md)
- [`PopUpListView`](./pop-up-list-view.md)
- [`TabBar`](./tab-bar.md)

Feathers UI provides the following implementations of a flat collection type.

- [`ArrayCollection`](https://api.feathersui.com/current/feathers/data/ArrayCollection.html) is based on the primitive [Haxe `Array` type](https://haxe.org/manual/std-Array.html).

## Hierarchical collections

The [`TreeView`](./tree-view.md) component may render a _hierarchical_ collection where items can be nested.

Feathers UI provides the following implementations of a hierarchical collection type.

- [`TreeCollection`](https://api.feathersui.com/current/feathers/data/TreeCollection.html)
