---
title: How to use AnchorLayout with Feathers UI containers
sidebar_label: AnchorLayout
---

The [`AnchorLayout`](https://api.feathersui.com/current/feathers/layout/AnchorLayout.html) class may be used to _anchor_ the a container's children relative to the edges of the parent container. `AnchorLayout` is often used for _fluid_ layouts that can automatically adjust themselves when the parent container's width or height is resized.

> This layout is designed to be used with basic containers like [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), which are intended purely for visual layout and do not offer built-in capabilities for rendering data from a collection. If using a container that renders a [collection of data](./data-collections.md) — such as [`ListView`](./list-view.md), [`TreeView`](./tree-view.md), or [`GridView`](./grid-view.md) — consider using other layouts that are optimized for data containers by offering performance improvements like layout virtualization.

<figure>
<iframe src="/learn/haxe-openfl/samples/anchor-layout.html" width="100%" height="200"></iframe>
<figcaption>Live preview of <a href="https://api.feathersui.com/current/feathers/layout/FlowRowsLayout.html"><code>AnchorLayout</code></a></figcaption>
</figure>

## The Basics

Create a [`LayoutGroup`](./layout-group.md) container, and add one or more children.

```hx
var container = new LayoutGroup();
container.width = 300.0;
container.height = 300.0;
addChild(container);

var child = new Button();
child.text = "Anchored Button";
container.addChild(child);
```

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`AnchorLayout`](https://api.feathersui.com/current/feathers/layout/AnchorLayout.html) instance.

```hx
container.layout = new AnchorLayout();
```

Then, set the button's [`layoutData`](https://api.feathersui.com/current/feathers/core/ILayoutDisplayObject.html#layoutData) property to an [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html) instance.

```hx
child.layoutData = new AnchorLayoutData();
```

### Anchors

To position a child in a container using [`AnchorLayout`](https://api.feathersui.com/current/feathers/layout/AnchorLayout.html), a number of _anchor_ properties are available on the [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html) class.

- [`top`](https://api.feathersui.com/current/feathers/layout/feathers/layout/AnchorLayoutData.html#top) positions the child's top edge relative to the parent container or another child.
- [`right`](https://api.feathersui.com/current/feathers/layout/feathers/layout/AnchorLayoutData.html#right) positions the child's right edge relative to the parent container or another child.
- [`bottom`](https://api.feathersui.com/current/feathers/layout/feathers/layout/AnchorLayoutData.html#bottom) positions the child's bottom edge relative to the parent container or another child.
- [`left`](https://api.feathersui.com/current/feathers/layout/feathers/layout/AnchorLayoutData.html#left) positions the child's left edge relative to the parent container or another child.
- [`horizontalCenter`](https://api.feathersui.com/current/feathers/layout/feathers/layout/AnchorLayoutData.html#horizontalCenter) positions the child relative to the center of the parent container's x-axis.
- [`verticalCenter`](https://api.feathersui.com/current/feathers/layout/feathers/layout/AnchorLayoutData.html#verticalCenter) positions the child relative to the center of the parent container's y-axis.

The following example positions a child `10.0` pixels from the top edge and `15.0` pixels from the left edge of the parent container.

```hx
var anchors = new AnchorLayoutData();
anchors.top = 10.0;
anchors.left = 15.0;
child.layoutData = anchors;
```

The example above is essentially no different than setting the child's `x` and `y` properties, but things get more interesting when other anchors come into play.

The next example positions the child from the bottom-right corner of the parent container instead.

```hx
var anchors = new AnchorLayoutData();
anchors.bottom = 20.0;
anchors.right = 10.0;
child.layoutData = anchors;
```

If the parent container resizes, the child will be repositioned so that it always remains `20.0` pixels from the bottom and `10.0` pixels from the right.

The next example anchors the child to both the left and right edges of the parent container.

```hx
var anchors = new AnchorLayoutData();
anchors.left = 15.0;
anchors.right = 15.0;
child.layoutData = anchors;
```

This sets both the `x` position and the `width` of the child. If the parent container's `width` changes, the `width` of the child will be automatically updated too.

The next example positions the child in the center the parent container, with equal space on both the left and right sides.

```hx
var anchors = new AnchorLayoutData();
anchors.horizontalCenter = 0.0;
child.layoutData = anchors;
```

## Center an object

Call [`AnchorLayoutData.center()`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#center) to quickly center a child inside its parent container, both horizontally and vertically.

```hx
child.layoutData = AnchorLayoutData.center();
```

This is equivalent to creating an [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html) instance and setting the both [`horizontalCenter`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#horizontalCenter) and [`verticalCenter`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#verticalCenter) properties to `0.0`.

```hx
var layoutData = new AnchorLayoutData();
layoutData.horizontalCenter = 0.0;
layoutData.verticalCenter = 0.0;
child.layoutData = layoutData;
```

## Fill the container

Call [`AnchorLayoutData.fill()`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#fill) to resize a child to fill the entire width and height of the parent container.

```hx
child.layoutData = AnchorLayoutData.fill();
```

This is equivalent to creating an [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html) instance and setting the [`top`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#top), [`right`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#right), [`bottom`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#bottom), and [`left`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#left) properties all to `0.0`.

```hx
var layoutData = new AnchorLayoutData();
layoutData.top = 0.0;
layoutData.right = 0.0;
layoutData.bottom = 0.0;
layoutData.left = 0.0;
child.layoutData = layoutData;
```

To add some padding around the edges of the child, call [`AnchorLayoutData.fill()`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#fill) with a numeric value, representing the number of pixels between the parent container and its child.

```hx
child.layoutData = AnchorLayoutData.fill(10.0);
```

In the example above, the child fills the parent container, but leaves `10.0` pixels of space around the edges.

## Related Links

- [`feathers.layout.AnchorLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/AnchorLayout.html)
