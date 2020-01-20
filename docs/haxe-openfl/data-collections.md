---
title: How to use data collections with Feathers UI
sidebar_label: Collections
---

A number of collection types are available to display data in Feathers UI components. These collections usually wrap more primitive Haxe data types and provide convenient new capabilities, such as filtering, sorting, and [dispatching events](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) when modified.

## Flat collections

A number of UI components may render a simple "flat" list of items.

- [`ComboBox`](./combo-box.md)
- [`ListView`](./list-view.md)
- [`PopUpList`](./pop-up-list.md)
- [`TabBar`](./tab-bar.md)

Feathers UI provides the following implementations of a flat collection type.

- [`ArrayCollection`](https://api.feathersui.com/current/feathers/data/ArrayCollection.html) is based on the primitive [Haxe `Array` type](https://haxe.org/manual/std-Array.html).

## Hierarchical collections

Feathers UI for Haxe/OpenFL does not currently provide any UI components that display hierarchical data (in other words, a tree of data). Stay tuned for a future update that adds these capabilities.
