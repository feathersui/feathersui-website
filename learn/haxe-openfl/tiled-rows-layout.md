---
title: How to use TiledRowsLayout with Feathers UI containers
layout: "docs.html"
sidebarTitle: TiledRowsLayout
---

The [`TiledRowsLayout`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html) class may be used to position items from left to right, wrapping to multiple rows. All items are positioned within tiles that have the same width and height. This layout supports a number of useful options for the spacing and alignment.

> This layout is designed to be used with basic containers like [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), which are intended purely for visual layout and do not offer built-in capabilities for rendering data from a collection. If using a container that renders a [collection of data](./data-collections.md) — such as [`ListView`](./list-view.md), [`TreeView`](./tree-view.md), or [`GridView`](./grid-view.md) — consider using [`TiledRowsListLayout`](./tiled-rows-list-layout.md) instead because it is better optimized for data containers by offering performance improvements like layout virtualization.

<figure>
<iframe src="/learn/haxe-openfl/samples/tiled-rows-layout.html" width="100%" height="200"></iframe>
<figcaption>Live preview of <a href="https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html"><code>TiledRowsLayout</code></a></figcaption>
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

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`TiledRowsLayout`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html) instance.

```haxe
container.layout = new TiledRowsLayout();
```

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned to the right of the previous child — creating a horizontal row, until the total width exceeds the width of the parent container. Then, the next child will be positioned below the previous children to start a new row.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#paddingLeft).

```haxe
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The _gap_ is the space between items, either horizontally or vertically. The [`horizontalGap`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#horizontalGap) and [`verticalGap`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#verticalGap) properties are measured in pixels.

```haxe
layout.horizontalGap = 10.0;
layout.verticalGap = 6.0;
```

If both gap properties should be set to the same value, call the [`setGap()`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#setGap) method instead.

```haxe
// sets horizontal and vertical gaps to the same value
layout.setGap(10.0);
```

### Alignment

The children of the container may be _aligned_ within the container's bounds.

To align the children along the x-axis, set the [`horizontalAlign`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#horizontalAlign) property.

```haxe
layout.horizontalAlign = CENTER;
```

In the example above, the children are aligned to the [center](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#CENTER) of the x-axis. They may also be aligned to the [left](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#LEFT) or to the [right](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#RIGHT).

To align the children along the y-axis, set the [`verticalAlign`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#verticalAlign) property.

```haxe
layout.verticalAlign = MIDDLE;
```

In the example above, the children are aligned to the [middle](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#MIDDLE) of the y-axis. They may also be aligned to the [top](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#TOP) or to the [bottom](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#BOTTOM).

> **Note:** Vertical alignment may be used only when the total height of the content (including padding and gap values) is less than or equal to the height of the container. If the content is larger than its parent container, the layout will position the children starting from `0.0` on the y-axis, the same as if they were top-aligned.

### Rows and columns

It's possible to request a specific number of columns for the layout to display. The layout may not always be able to accomodate this value because the container may be too small, but if there is enough room for the requested number of columns, that's the number it will display. Tell the layout to use three columns by setting the [`requestedColumnCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#requestedColumnCount) property:

```haxe
layout.requestedColumnCount = 3;
```

Now, the layout will always display three columns, even if the container can fit four or more. However, if only one or two columns can be fit into the container, the layout will display the maximum number that will fit.

> If the width of the container is not set, the layout will automatically calculate a width that accomodates the `requestedColumnCount`.

Additionally, the [`requestedMinColumnCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#requestedMinColumnCount) and [`requestedMaxColumnCount`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html#requestedMaxColumnCount) properties may be used to specify a range of columns allowed to be displayed, which depends on the number of children added to the container.

## Related Links

- [`feathers.layout.TiledRowsLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html)
