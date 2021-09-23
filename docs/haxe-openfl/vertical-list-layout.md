---
title: How to use VerticalListLayout with Feathers UI containers
sidebar_label: VerticalListLayout
---

The [`VerticalListLayout`](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html) class may be used to position the children of a data container from top to bottom, in a single column that fills the entire width. Examples of data containers include [`ListView`](./list-view), [`TreeView`](./tree-view.md), and [`GridView`](./grid-view.md). This layout supports a number of useful options for adjusting the spacing around the container's children.

> If all items in the layout should render with the exact same height, consider using [`VerticalListFixedRowLayout`](./vertical-list-fixed-row-layout.md) for improved performance.

## The Basics

Create a [`ListView`](./list-view.md) container, set its [data provider](./data-collections.md), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var container = new ListView();
container.dataProvider = new ArrayCollection([
    {text: "A"},
    {text: "B"},
    {text: "C"}
]);
this.addChild(container);
```

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ListView.html#layout) property to a new [`VerticalListLayout`](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html) instance.

```hx
container.layout = new VerticalListLayout();
```

By default, the first child will be positioned in the top-left corner and fill the entire width of the container. Each additional child will be positioned below the previous child — creating a single, vertical column.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#paddingLeft).

```hx
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#setPadding) method instead.

```hx
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The [`gap`](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#gap) refers to the space, measured in pixels, between each child in the container.

```hx
layout.gap = 5.0;
```

### Number of rows

If the parent container does not have an explicit height value, the layout will calculate its ideal height automatically. To display a specific number of rows, regardless of the height of each row, set the [`requestedRowCount`](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html#requestedRowCount) property.

```hx
layout.requestedRowCount = 4.0;
```

An integer value is not required, so a partial row may be made visible at the bottom of the list, if desired.

```hx
layout.requestedRowCount = 4.5;
```

> If the container contains more children than the number of visible rows, the container will enable scrolling, if supported.

## Related Links

- [`feathers.layout.VerticalListLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/VerticalListLayout.html)
