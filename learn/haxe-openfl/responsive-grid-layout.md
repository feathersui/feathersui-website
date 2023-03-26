---
title: How to use ResponsiveGridLayout with Feathers UI containers
layout: "docs.html"
sidebarTitle: ResponsiveGridLayout
---

The [`ResponsiveGridLayout`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html) class positions items in a grid, with a specific number of columns (defaulting to twelve columns). Items may span multiple columns and may be positioned with offsets in between. When a row is "full", meaning that all twelve columns have been filled, items are laid out starting on the next row automatically.

<figure>
<iframe src="/learn/haxe-openfl/samples/responsive-grid-layout.html" width="100%" height="200"></iframe>
<figcaption>Live preview of <a href="https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html"><code>ResponsiveGridLayout</code></a></figcaption>
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

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`ResponsiveGridLayout`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html) instance.

```haxe
container.layout = new ResponsiveGridLayout();
```

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned to the right of the previous child — creating a horizontal row, until the total number of columns exceeds the maximum columns of the layout (defaults to 12 columns). Then, the next child will be positioned below the previous children to start a new row.

> If [`ResponsiveGridLayoutData`](#responsivegridlayoutdata) is not passed to a child, the layout will automatically assign the child to 1 column with no offset.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#paddingLeft).

```haxe
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The _gap_ is the space between items, either horizontally or vertically. The [`columnGap`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#columnGap) and [`rowGap`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#rowGap) properties are measured in pixels.

```haxe
layout.columnGap = 10.0;
layout.rowGap = 6.0;
```

If both gap properties should be set to the same value, call the [`setGap()`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html#setGap) method instead.

```haxe
// sets column and row gaps to the same value
layout.setGap(10.0);
```

## `ResponsiveGridLayoutData`

To adjust how many columns a child should fill, or to provide an offset, create an instance of [`ResponsiveGridLayoutData`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayoutData.html) and pass it to a child's [`layoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html#layoutData) property.

The following example sets [`span`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayoutData.html#span) property to `12`, meaning that the child will fill an entire row of 12 columns.

```haxe
var childLayoutData = new ResponsiveGridLayoutData();
childLayoutData.span = 12;
child.layoutData = childLayoutData;
```

The next example sets [`offset`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayoutData.html#offset) property to `3`, meaning that the child will be positioned after three empty columns.

```haxe
var childLayoutData = new ResponsiveGridLayoutData();
childLayoutData.span = 6;
childLayoutData.offset = 3;
child.layoutData = childLayoutData;
```

[`ResponsiveGridLayoutData`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayoutData.html) has a number of additional properties, but it's necessary to understand the concept of _breakpoints_ to use them.

## Breakpoints

[`ResponsiveGridLayout`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html) supports _breakpoints_, which are customizable width thresholds that determine how the layout behaves depending on the size of the container. This is what makes the layout _responsive_.

The following breakpoints are defined by default.

| Breakpoint | Width   |
| ---------- | ------- |
| xs         | < 576   |
| sm         | >= 576  |
| md         | >= 768  |
| lg         | >= 992  |
| xl         | >= 1200 |
| xxl        | >= 1400 |

The following example sets different span values over a variety of breakpoints for a single child.

```haxe
var childLayoutData = new ResponsiveGridLayoutData();
childLayoutData.span = 12;
childLayoutData.smSpan = 8;
childLayoutData.mdSpan = 6;
childLayoutData.lgSpan = 4;
childLayoutData.xlSpan = 2;
childLayoutData.xxlSpan = 1;
child.layoutData = childLayoutData;
```

Similarly, a child may have different offset values over a variety of breakpoints too.

```haxe
var childLayoutData = new ResponsiveGridLayoutData();
childLayoutData.span = 12;
childLayoutData.mdSpan = 6;
childLayoutData.lgSpan = 4;
childLayoutData.offset = 0;
childLayoutData.mdOffset = 3;
childLayoutData.lgOffset = 4;
child.layoutData = childLayoutData;
```

If a span or an offset isn't defined for a particular breakpoint, the layout will fall back to using the smaller breakpoint. In the code above, spans/offsets are defined for the the `xs`, `md`, and `lg` breakpoints. If the container width is large enough that the `xl` or `xxl` breakpoint would be necessary, the layout will use the values for the `lg` breakpoint instead. Similarly, since a span and offset is not specified for the `sm` breakpoint, the layout will fall back to the `xs` breakpoint values when the container width is smaller than the `md` breakpoint.

The next example demonstrates how to exclude a child from the layout using the [`display`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayoutData.html#display) property of the [`ResponsiveGridLayoutData`](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayoutData.html) class.

```haxe
var childLayoutData = new ResponsiveGridLayoutData();
childLayoutData.display = false;
childLayoutData.lgDisplay = true;
child.layoutData = childLayoutData;
```

In the code abovee, the child will be excluded from the layout and hidden in breakpoints below `lg`. The child will be included in the layout when the breakpoint is `lg` or greater (including `xl` and `xxl`).

## Related Links

- [`feathers.layout.ResponsiveGridLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/ResponsiveGridLayout.html)
