---
title: How to use TiledRowsListLayout with Feathers UI containers
sidebar_label: TiledRowsListLayout
---

The [`TiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html) class may be used to position items in a data container from left to right, wrapping to multiple rows. All items are positioned within tiles that have the same width and height. This layout supports a number of useful options for the spacing and alignment.

> If the layout should divide tiles into pages, instead of scrolling continuously, you may use [`PagedTiledRowsListLayout`](./paged-tiled-rows-list-layout.md) instead.

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

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ListView.html#layout) property to a new [`TiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html) instance.

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned to the right of the previous child — creating a horizontal row, until the total width exceeds the width of the parent container. Then, the next child will be positioned below the previous children to start a new row.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#paddingLeft).

```haxe
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The _gap_ is the space between items, either horizontally or vertically. The [`horizontalGap`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#horizontalGap) and [`verticalGap`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#verticalGap) properties are measured in pixels.

```haxe
layout.horizontalGap = 10.0;
layout.verticalGap = 6.0;
```

If both gap properties should be set to the same value, call the [`setGap()`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#setGap) method instead.

```haxe
// sets horizontal and vertical gaps to the same value
layout.setGap(10.0);
```

### Alignment

The children of the container may be _aligned_ within the container's bounds.

To align the children along the x-axis, set the [`horizontalAlign`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#horizontalAlign) property.

```haxe
layout.horizontalAlign = CENTER;
```

In the example above, the children are aligned to the [center](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#CENTER) of the x-axis. They may also be aligned to the [left](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#LEFT) or to the [right](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#RIGHT).

To align the children along the y-axis, set the [`verticalAlign`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#verticalAlign) property.

```haxe
layout.verticalAlign = MIDDLE;
```

In the example above, the children are aligned to the [middle](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#MIDDLE) of the y-axis. They may also be aligned to the [top](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#TOP) or to the [bottom](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#BOTTOM).

> **Note:** Vertical alignment may be used only when the total height of the content (including padding and gap values) is less than or equal to the height of the container. If the content is larger than its parent container, the layout will position the children starting from `0.0` on the y-axis, the same as if they were top-aligned.

### Rows and columns

If the parent container does not have an explicit height value, the layout will calculate its ideal height automatically. To display a specific number of rows, regardless of the height of each row, set the [`requestedRowCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#requestedRowCount) property.

```haxe
layout.requestedRowCount = 4.0;
```

An integer value is not required, so a partial row may be made visible at the bottom of the list, if desired.

```haxe
layout.requestedRowCount = 4.5;
```

> If the container contains more children than the number of visible rows, the container will enable scrolling, if supported.

Additionally, the [`requestedMinRowCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#requestedMinRowCount) and [`requestedMaxRowCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#requestedMaxRowCount) properties may be used to specify a range of rows allowed to be displayed, which depends on the number of children added to the container.

Similarly, it's possible to request a specific number of columns for the layout to display. The layout may not always be able to accomodate this value because the container may be too small, but if there is enough room for the requested number of columns, that's the number it will display. Tell the layout to use three columns by setting the [`requestedColumnCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#requestedColumnCount) property:

```haxe
// unlike rows, columns must be specified as an integer
layout.requestedColumnCount = 3;
```

Now, the layout will always display three columns, even if the container can fit four or more. However, if only one or two columns can be fit into the container, the layout will display the maximum number that will fit.

> If the width of the container is not set, the layout will automatically calculate a width that accomodates the `requestedColumnCount`.

Additionally, the [`requestedMinColumnCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#requestedMinColumnCount) and [`requestedMaxColumnCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html#requestedMaxColumnCount) properties may be used to specify a range of columns allowed to be displayed, which depends on the number of children added to the container.

## Related Links

- [`feathers.layout.TiledRowsListLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html)
- [How to use `PagedTiledRowsListLayout` with Feathers UI containers](./paged-tiled-rows-list-layout.md)
