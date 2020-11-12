---
title: Introduction to layouts and containers
sidebar_label: Intro to Layouts
---

A number of layouts are available to position and size children in Feathers UI containers. There are two types of containers in Feathers UI, and certain layouts may be better suited for one type over the other.

- [_Simple containers_](#simple-containers) use standard [display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html) APIs (like [`addChild()`](https://api.openfl.org/openfl/display/DisplayObjectContainer.html#addChild) and [`removeChild()`](https://api.openfl.org/openfl/display/DisplayObjectContainer.html#removeChild)) to manage children.
- [_Data containers_](#data-containers) render children by interpreting objects that have been added to [data collections](./data-collections.md).

Every layout may be used with both container types, but data containers support special layouts that are better optimized for displaying a large number of children.

## Simple containers

Use the standard [display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html) APIs to add and remove children from simple containers like the ones below.

- [`LayoutGroup`](./layout-group.md)
- [`ScrollContainer`](./scroll-container.md)
- [`Panel`](./panel.md)

The following layouts are best suited for simple containers.

- [`AnchorLayout`](./anchor-layout.md)
- [`HorizontalLayout`](./horizontal-layout.md)
- [`HorizontalLayout`](./responsive-grid-layout.md)
- [`VerticalLayout`](./vertical-layout.md)

## Data containers

Components that render [data collections](./data-collections.md) may take advantage of special layouts that are better optimized for displaying many more children than a typical container.

- [`ListView`](./list-view.md)
- [`GridView`](./grid-view.md)
- [`TreeView`](./tree-view.md)

The following layouts are optimized for data containers by providing _virtualization_ and item renderer _recycling_.

- [`HorizontalListLayout`](./horizontal-list-layout.md)
- [`VerticalListLayout`](./vertical-list-layout.md)
- [`VerticalListFixedRowLayout`](./vertical-list-fixed-row-layout.md)
