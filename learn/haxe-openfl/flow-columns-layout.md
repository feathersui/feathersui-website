---
title: How to use FlowColumnsLayout with Feathers UI containers
layout: "docs.html"
sidebarTitle: FlowColumnsLayout
---

The [`FlowColumnsLayout`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html) class may be used to position items from top to bottom, wrapping to multiple columns when the total height of a row exceeds the height of the container. This layout supports a number of useful options for the spacing and alignment.

> This layout is designed to be used with basic containers like [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), which are intended purely for visual layout and do not offer built-in capabilities for rendering data from a collection. If using a container that renders a [collection of data](./data-collections.md) — such as [`ListView`](./list-view.md), [`TreeView`](./tree-view.md), or [`GridView`](./grid-view.md) — consider using other layouts that are optimized for data containers by offering performance improvements like layout virtualization.

<!-- <figure>
<iframe src="/learn/haxe-openfl/samples/flow-columns-layout.html" width="100%" height="200"></iframe>
<figcaption>Live preview of <a href="https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html"><code>FlowColumnsLayout</code></a></figcaption>
</figure> -->

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

Set the container's [`layout`](https://api.feathersui.com/unstable/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`FlowColumnsLayout`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html) instance.

```haxe
container.layout = new FlowColumnsLayout();
```

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned bwlo of the previous child — creating a vertical column, until the total height exceeds the height of the parent container. Then, the next child will be positioned to the right of the previous children to start a new column.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#paddingTop), [right](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#paddingRight), [bottom](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#paddingBottom), and [left](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#paddingLeft).

```haxe
layout.paddingTop = 15.0;
layout.paddingRight = 10.0;
layout.paddingBottom = 15.0;
layout.paddingLeft = 10.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The _gap_ is the space between items, either horizontally or vertically. The [`horizontalGap`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#horizontalGap) and [`verticalGap`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#verticalGap) properties are measured in pixels.

```haxe
layout.horizontalGap = 6.0;
layout.verticalGap = 10.0;
```

If both gap properties should be set to the same value, call the [`setGap()`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#setGap) method instead.

```haxe
// sets horizontal and vertical gaps to the same value
layout.setGap(10.0);
```

### Alignment

The children of the container may be _aligned_ within the container's bounds.

To align the children along the y-axis, set the [`verticalAlign`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#verticalAlign) property.

```haxe
layout.verticalAlign = MIDDLE;
```

In the example above, the children are aligned to the [middle](https://api.feathersui.com/unstable/feathers/layout/VerticalAlign.html#MIDDLE) of the x-axis. They may also be aligned to the [top](https://api.feathersui.com/unstable/feathers/layout/VerticalAlign.html#TOP) or to the [bottom](https://api.feathersui.com/unstable/feathers/layout/VerticalAlign.html#BOTTOM).

To align the children along the x-axis, set the [`horizontalAlign`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#horizontalAlign) property.

```haxe
layout.horizontalAlign = CENTER;
```

In the example above, the children are aligned to the [center](https://api.feathersui.com/unstable/feathers/layout/HorizontalAlign.html#CENTER) of the x-axis. They may also be aligned to the [left](https://api.feathersui.com/unstable/feathers/layout/HorizontalAlign.html#LEFT) or to the [right](https://api.feathersui.com/unstable/feathers/layout/HorizontalAlign.html#RIGHT).

> **Note:** Horizontal alignment may be used only when the total width of the content (including padding and gap values) is less than or equal to the width of the container. If the content is larger than its parent container, the layout will position the children starting from `0.0` on the x-axis, the same as if they were left-aligned.

Since children may be smaller than the width of a column, it is possible to align them within their columns, separately from the alignment of all content within the container. To align the children within their columns, set the [`columnHorizontalAlign`](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html#columnHorizontalAlign) property.

```haxe
layout.columnHorizontalAlign = CENTER;
```

In the example above, the children of rows are aligned to the [center](https://api.feathersui.com/unstable/feathers/layout/HorizontalAlign.html#CENTER) of the x-axis. They may also be aligned to the [left](https://api.feathersui.com/unstable/feathers/layout/HorizontalAlign.html#LEFT) or to the [right](https://api.feathersui.com/unstable/feathers/layout/HorizontalAlign.html#RIGHT).

## Related Links

- [`feathers.layout.FlowColumnsLayout` API Documentation](https://api.feathersui.com/unstable/feathers/layout/FlowColumnsLayout.html)
