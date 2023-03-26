---
title: How to use HorizontalListLayout with Feathers UI containers
layout: "docs.html"
sidebarTitle: HorizontalListLayout
---

The [`HorizontalListLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html) class may be used to position the children of a data container from left to right, in a single row that fills the entire height. Examples of data containers include [`ListView`](./list-view), [`TreeView`](./tree-view.md), and [`GridView`](./grid-view.md). This layout supports a number of useful options for adjusting the spacing around the container's children.

## The Basics

Create a [`ListView`](./list-view.md) container, set its [data provider](./data-collections.md), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var container = new ListView();
container.dataProvider = new ArrayCollection([
    {text: "A"},
    {text: "B"},
    {text: "C"}
]);
addChild(container);
```

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ListView.html#layout) property to a new [`HorizontalListLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html) instance.

```haxe
container.layout = new HorizontalListLayout();
```

By default, the first child will be positioned in the top-left corner and fill the entire height of the container. Each additional child will be positioned to the right of the previous child — creating a single, horizontal row.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#paddingLeft).

```haxe
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The [`gap`](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#gap) refers to the space, measured in pixels, between each child in the container.

```haxe
layout.gap = 5.0;
```

### Number of columns

If the parent container does not have an explicit width value, the layout will calculate its ideal width automatically. To display a specific number of columns, regardless of the width of each row, set the [`requestedColumnCount`](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html#requestedColumnCount) property.

```haxe
layout.requestedColumnCount = 4.0;
```

An integer value is not required, so a partial row may be made visible at the end of the list, if desired.

```haxe
layout.requestedColumnCount = 4.5;
```

> If the container contains more children than the number of visible columns, the container will enable scrolling, if supported.

## Related Links

- [`feathers.layout.HorizontalListLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/HorizontalListLayout.html)
