---
title: How to use PagedTiledRowsListLayout with Feathers UI containers
sidebar_label: PagedTiledRowsListLayout
---

The [`PagedTiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html) class may be used to position items in a data container from left to right, wrapping to multiple rows. When the number of rows exceeds the maximum allowed within the parent container's bounds, a new page is started. All items are positioned within tiles that have the same width and height. This layout supports a number of useful options for the spacing and alignment.

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

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/ListView.html#layout) property to a new [`PagedTiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html) instance.

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned to the right of the previous child — creating a horizontal row, until the total width exceeds the width of the parent container. Then, the next child will be positioned below the previous children to start a new row. When the total combined height of the rows in a page exceeds the height of the parent container, the next child will be positioned at the top-left corner of a new page.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Paging

When the number of rows exceeds the bounds of the parent container, a new page will be created, with rows again starting from the top-left corner of the page. Pages may be displayed either horizontally or vertically. Set the [`pageDirection`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#pageDirection) property to change the direction where new pages are created.

```hx
layout.pageDirection = VERTICAL;
```

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side of a page, including [top](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#paddingLeft).

```hx
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#setPadding) method instead.

```hx
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The _gap_ is the space between items, either horizontally or vertically. The [`horizontalGap`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#horizontalGap) and [`verticalGap`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#verticalGap) properties are measured in pixels.

```hx
layout.horizontalGap = 10.0;
layout.verticalGap = 6.0;
```

If both gap properties should be set to the same value, call the [`setGap()`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#setGap) method instead.

```hx
// sets horizontal and vertical gaps to the same value
layout.setGap(10.0);
```

### Alignment

The children of the container may be _aligned_ within each page's bounds.

To align the children along the x-axis, set the [`horizontalAlign`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#horizontalAlign) property.

```hx
layout.horizontalAlign = CENTER;
```

In the example above, the children are aligned to the [center](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#CENTER) of the x-axis. They may also be aligned to the [left](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#LEFT) or to the [right](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#RIGHT).

To align the children along the y-axis, set the [`verticalAlign`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#verticalAlign) property.

```hx
layout.verticalAlign = MIDDLE;
```

In the example above, the children are aligned to the [middle](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#MIDDLE) of the y-axis. They may also be aligned to the [top](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#TOP) or to the [bottom](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#BOTTOM).

### Rows and columns

If the parent container does not have an explicit height value, the layout will calculate its ideal height automatically. To display a specific number of rows, regardless of the height of each row, set the [`requestedRowCount`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#requestedRowCount) property.

```hx
layout.requestedRowCount = 4;
```

Additionally, the [`requestedMinRowCount`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#requestedMinRowCount) and [`requestedMaxRowCount`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#requestedMaxRowCount) properties may be used to specify a range of rows allowed to be displayed, which depends on the number of children added to the container.

Similarly, it's possible to request a specific number of columns for the layout to display. Tell the layout to use three columns by setting the [`requestedColumnCount`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#requestedColumnCount) property.

```hx
layout.requestedColumnCount = 3;
```

Additionally, the [`requestedMinColumnCount`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#requestedMinColumnCount) and [`requestedMaxColumnCount`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html#requestedMaxColumnCount) properties may be used to specify a range of columns allowed to be displayed, which depends on the number of children added to the container.

## Related Links

- [`feathers.layout.PagedTiledRowsListLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html)
