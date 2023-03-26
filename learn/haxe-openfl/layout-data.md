---
title: Layout Data
layout: "docs.html"
---

Some layouts have a related class that implements the [`ILayoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutData.html) interface. If such a class exists, it may be used to associate additional information with a specific child of a container that will affect the way that the layout positions, sizes, or otherwise transforms the child. An instance of this class should be passed to the [`layoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html#layoutData) property, which is available on all Feathers UI components.

## `VerticalLayoutData` example

As an example, [`VerticalLayout`](./vertical-layout.md) has the [`VerticalLayoutData`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html) class, which provides special [`percentWidth`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentWidth) and [`percentHeight`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentHeight) properties. These properties make it possible to specify a child's width or height based on a percentage of the parent container's width or height, instead of using the standard `width` and `height` properties that require specific pixel values.

In the following example, a [`LayoutGroup`](./layout-group.md) container is using [`VerticalLayout`](./vertical-layout.md). Two children are added, and they each specify [`VerticalLayoutData`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html) with the [`percentHeight`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#percentHeight) property.

```haxe
var container = new LayoutGroup();
container.layout = new VerticalLayout();
addChild(container);

var child1 = new Button();
child1.text = "One";
var layoutData1 = new VerticalLayoutData();
layoutData1.percentHeight = 25.0;
child1.layoutData = layoutData1;
container.addChild(child1);

var child2 = new Button();
child2.text = "Two";
var layoutData2 = new VerticalLayoutData();
layoutData2.percentHeight = 75.0;
child2.layoutData = layoutData2;
container.addChild(child2);
```

> See [`VerticalLayout`](./vertical-layout.md) for more detailed information about this layout.

## `AnchorLayoutData` example

Other layouts may have different [`ILayoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutData.html) implementations. For instance, [`AnchorLayout`](./anchor-layout.md) has the [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html) class, which has its own special properties, like [`top`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#top), [`right`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#right), [`bottom`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#bottom), and [`left`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html#left) — to position children near the edges of the parent container.

In the following example, a [`LayoutGroup`](./layout-group.md) container is using [`AnchorLayout`](./anchor-layout.md). A button is added as a child, and the button is positioned 10 pixels from the right edge of the container, and 20 pixels from the bottom edge.

```haxe
var container = new LayoutGroup();
container.layout = new AnchorLayout();
container.width = 300.0;
container.height = 200.0;
addChild(container);

var button = new Button();
button.text = "I'm a Button!";
var anchors = new AnchorLayoutData();
anchors.bottom = 20.0;
anchors.right = 10.0;
button.layoutData = anchors;
container.addChild(button);
```

> See [`AnchorLayout`](./anchor-layout.md) for more detailed information about this layout.

## Don't mix and match

A layout cannot use an [`ILayoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutData.html) implementation from a different layout. For instance, if a container is using [`VerticalLayout`](./vertical-layout.md), its children cannot use [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html). [`VerticalLayout`](./vertical-layout.md) doesn't know anything about the properties available on [`AnchorLayoutData`](https://api.feathersui.com/current/feathers/layout/AnchorLayoutData.html).

The built-in layouts will generally ignore [`ILayoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutData.html) that they don't recognize. However, that's not guaranteed for custom layouts. It's a good idea to assume that an exception could be thrown if a container has children that use the wrong [`ILayoutData`](https://api.feathersui.com/current/feathers/layout/ILayoutData.html) type.

## Related Links

- [Introduction to layouts and containers](./layouts-and-containers.md)
