---
title: How to use HorizontalDistributedLayout with Feathers UI containers
sidebar_label: HorizontalDistributedLayout
---

The [`HorizontalDistributedLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html) class may be used to position the children of a container from left to right, in a single row — where the total width of the container is distributed equally to the widths of each child. In other words, each child will have the same width, and their sum is equal to the total width of the container.

> This layout is designed to be used with basic containers like [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), which are intended purely for visual layout and do not offer built-in capabilities for rendering data from a collection. If using a container that renders a [collection of data](./data-collections.md) — such as [`ListView`](./list-view.md), [`TreeView`](./tree-view.md), or [`GridView`](./grid-view.md) — consider using other layouts that are optimized for data containers by offering performance improvements like layout virtualization.

<figure>
<iframe src="/learn/haxe-openfl/samples/horizontal-distributed-layout.html" width="100%" height="100"></iframe>
<figcaption>Live preview of <a href="https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html"><code>HorizontalDistributedLayout</code></a></figcaption>
</figure>

## The Basics

Create a [`LayoutGroup`](./layout-group.md) container, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and then add a few children to the container.

```haxe
var container = new LayoutGroup();
addChild(container);

var child1 = new Button();
child1.text = "One";
container.addChild(child1);

var child2 = new Button();
child2.text = "Two";
container.addChild(child2);

var child3 = new Button();
child3.text = "Three";
container.addChild(child3);
```

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`HorizontalDistributedLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html) instance.

```haxe
container.layout = new HorizontalDistributedLayout();
```

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned to the right of the previous child — creating a single, horizontal row.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html#paddingLeft).

```haxe
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The [`gap`](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html#gap) refers to the space, measured in pixels, between each child in the container.

```haxe
layout.gap = 5.0;
```

## Related Links

- [`feathers.layout.HorizontalDistributedLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/HorizontalDistributedLayout.html)
