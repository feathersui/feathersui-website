---
title: How to use VerticalListFixedRowLayout with Feathers UI containers
sidebar_label: VerticalListFixedRowLayout
---

The [`VerticalListFixedRowLayout`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html) class may be used to position the children of a data container from top to bottom, in a single column, where each item has the same fixed height and fills the entire width of the container. This layout is better optimized for performance than the default [`VerticalListLayout`](./vertical-list-layout.md) that supports items with variable heights.

## The Basics

Create a [`ListView`](./list-view.md) container, set its [data provider](./data-collections.md), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var container = new ListView();
container.dataProvider = new ArrayCollection([
    {text: "A"},
    {text: "B"},
    {text: "C"}
]);
addChild(container);
```

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ListView.html#layout) property to a new [`VerticalListFixedRowLayout`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html) instance.

```hx
container.layout = new VerticalListFixedRowLayout();
```

By default, the first child will be positioned in the top-left corner and fill the entire width of the container. Each additional child will be positioned below the previous child — creating a single, vertical column. All children will have the exact same height, derived from the height of the first child.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#paddingLeft).

```hx
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#setPadding) method instead.

```hx
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The [`gap`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#gap) refers to the space, measured in pixels, between each child in the container.

```hx
layout.gap = 5.0;
```

### Number of rows

If the parent container does not have an explicit height value, the layout will calculate its ideal height automatically. To display a specific number of rows, regardless of the height of each row, set the [`requestedRowCount`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#requestedRowCount) property.

```hx
layout.requestedRowCount = 4.0;
```

An integer value is not required, so a partial row may be made visible at the bottom of the list, if desired.

```hx
layout.requestedRowCount = 4.5;
```

> If the container contains more children than the number of visible rows, the container will enable scrolling, if supported.

### Row height

By default, the height of all children in a [`VerticalListFixedRowLayout`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html) is determined by the height of the first child. However, the [`rowHeight`](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html#rowHeight) property may be used to provide a custom height.

```hx
layout.rowHeight = 20.0;
```

In the example above, the height of the children in the container is set to `20.0` pixels.

## Related Links

- [`feathers.layout.VerticalListFixedRowLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/VerticalListFixedRowLayout.html)
