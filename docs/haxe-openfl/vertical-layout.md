---
title: How to use VerticalLayout with Feathers UI containers
sidebar_label: VerticalLayout
---

The [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html) class may be used to position the children of a container from top to bottom, in a single column. It supports a number of useful options for adjusting the spacing around the container's children and their alignment within the bounds of the container.

> This layout is designed to be used with basic containers like [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), which are intended purely for visual layout and do not offer built-in capabilities for rendering data from a collection. If using [`ListView`](./list-view.md), or another container that renders data, consider using other layouts that are optimized for data containers by offering optimizations like layout virtualization.

## The Basics

Create a [`LayoutGroup`](./layout-group.md) container, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and then add a few children to the container.

```hx
var container = new LayoutGroup();
this.addChild(container);

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

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html) instance.

```hx
container.layout = new VerticalLayout();
```

By default, the first child will be positioned in the top-left corner. Each additional child will be positioned below the previous child — creating a single, vertical column.

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/controls/VerticalLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/VerticalLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/VerticalLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/VerticalLayout.html#paddingLeft).

```hx
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

The [`gap`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html#gap) refers to the space, measured in pixels, between each child in the container.

```hx
layout.gap = 5.0;
```

### Alignment

The children of the container may be _aligned_ within the container's bounds.

To align the children along the x-axis, set the [`horizontalAlign`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html#horizontalAlign) property.

```hx
layout.horizontalAlign = CENTER;
```

In the example above, the children are aligned to the [center](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#CENTER) of the x-axis. They may also be aligned to the [left](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#LEFT) or to the [right](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#RIGHT).

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html#horizontalAlign) property also supports a special value, named [`JUSTIFY`](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#JUSTIFY). When horizontal justification is specified, the width of all items in the layout is adjusted to fill the full width of the container.

```hx
layout.horizontalAlign = JUSTIFY;
```

To align the children along the y-axis, set the [`verticalAlign`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html#verticalAlign) property.

```hx
layout.verticalAlign = MIDDLE;
```

In the example above, the children are aligned to the [middle](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#MIDDLE) of the y-axis. They may also be aligned to the [top](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#TOP) or to the [bottom](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#BOTTOM).

> **Note:** Vertical alignment may be used only when the total height of the content (including padding and gap values) is less than or equal to the height of the container. If the content is larger than its parent container, the layout will position the children starting from `0.0` on the y-axis, the same as if they were top-aligned.

## Percentage Sizing

The dimensions of each child in a container using [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html) may optionally be set to some percentage of the container's total width or height.

> To see a live demonstration percentage sizing with [`HorizontalLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalLayout.html) (which works similarly to [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html)), open the [_horizontal-layout-percentage-sizing_ sample](https://feathersui.com/samples/haxe-openfl/horizontal-layout-percentage-sizing/) in your web browser.

### percentWidth

When the parent container is using [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html), set the [`percentWidth`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentWidth) property on a [`VerticalLayoutData`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html) instance, and pass it to a child's [`layoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html#layoutData) property.

In the following example, two children are added to a container. The first child fills 100% of the container's total width, and the second child fills 50% of the container's total width.

```hx
var container = new LayoutGroup();
container.layout = new VerticalLayout();
this.addChild(container);

var child1 = new Button();
child1.label = "One";
child1.height = 150.0;
var layoutData1 = new VerticalLayoutData();
layoutData1.percentWidth = 100.0;
child1.layoutData = layoutData1;
container.addChild(child1);
 
var child2 = new Button();
child2.label = "Two";
var layoutData2 = new VerticalLayoutData();
layoutData2.percentWidth = 50.0;
child2.layoutData = layoutData2;
container.addChild(child2);
```

Notice that we can mix and match fixed pixel values with percentage values on the same child. The height of the first child is `150.0` pixels, but the width is 100% of the container's total width.

> **Tip:** If the width of every child in a [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html) should be 100%, set [`horizontalAlign`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html#horizontalAlign) to [`JUSTIFY`](https://api.feathersui.com/current/feathers/layout/HorizontalAlign.html#JUSTIFY). You'll write less code, and performance will be better optimized.

### percentHeight

When the parent container is using [`VerticalLayout`](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html), set the [`percentHeight`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentHeight) property on a [`VerticalLayoutData`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html) instance, and pass it to a child's [`layoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html#layoutData) property.

In the following example, two children are added to a container. The first child fills 25% of the container's total height, and the second child fills 75% of the container's total height.

```hx
var container = new LayoutGroup();
container.layout = new VerticalLayout();
this.addChild(container);

var child1 = new Button();
child1.label = "One";
var layoutData1 = new VerticalLayoutData();
layoutData1.percentHeight = 25.0;
child1.layoutData = layoutData1;
container.addChild(child1);
 
var child2 = new Button();
child2.label = "Two";
var layoutData2 = new VerticalLayoutData();
layoutData2.percentHeight = 75.0;
child2.layoutData = layoutData2;
container.addChild(child2);
```

Children with percentage sizing may be combined with children using fixed pixel heights. In that case, [`percentHeight`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentHeight) will be based on the remaining space in the parent container after the fixed pixel height is subtracted from the container's height.

In the following example, we have two children again, but this time, the first child is a fixed `150.0` pixels tall, and the second child uses [`percentHeight`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentHeight). In this situation, the percentage will be based on the height of the container _minus 150.0 pixels_.

```hx
var container = new LayoutGroup();
container.layout = new VerticalLayout();
this.addChild(container);

var child1 = new Button();
child1.label = "One";
child1.height = 150.0; // pixels
container.addChild(child1);
 
var child2 = new Button();
child2.label = "Two";
var layoutData2 = new VerticalLayoutData();
layoutData2.percentHeight = 100.0;
child2.layoutData = layoutData2;
container.addChild(child2);
```

Because the first child's height is `150.0` pixels, and not a percentage, the second child's height won't be equal to the height of the container, even though [`percentHeight`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentHeight) is equal to `100.0`. Percentages are always calculated _after_ fixed values in pixels have been subtracted from the container's total size.

## Related Links

- [`feathers.layout.VerticalLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/VerticalLayout.html)
