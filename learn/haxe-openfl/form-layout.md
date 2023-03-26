---
title: How to use FormLayout with Feathers UI containers
layout: "docs.html"
sidebarTitle: FormLayout
---

The [`FormLayout`](https://api.feathersui.com/current/feathers/layout/FormLayout.html) class is designed to be used with the [`Form`](./form.md) component.

## The Basics

Create a [`Form`](./form.md) container, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and then add a few children to the container.

```haxe
var form = new Form();
addChild(container);

var item1 = new FormItem();
item1.text = "One";
form.addChild(item1);

var item2 = new FormItem();
item2.text = "Two";
form.addChild(item2);

var item3 = new FormItem();
item3.text = "Three";
form.addChild(item3);
```

Set the container's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to a new [`FormLayout`](https://api.feathersui.com/current/feathers/layout/FormLayout.html) instance.

```haxe
form.layout = new FormLayout();
```

The following sections will introduce a number of properties that may be used to adjust the positioning and sizing of children in the layout.

### Spacing

The _padding_ is the space around the edges of the container that will contain no children. Padding may be added on each side, including [top](https://api.feathersui.com/current/feathers/layout/FormLayout.html#paddingTop), [right](https://api.feathersui.com/current/feathers/layout/FormLayout.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/layout/FormLayout.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/layout/FormLayout.html#paddingLeft).

```haxe
layout.paddingTop = 10.0;
layout.paddingRight = 15.0;
layout.paddingBottom = 10.0;
layout.paddingLeft = 15.0;
```

If all four padding properties should be set to the same value, call the [`setPadding()`](https://api.feathersui.com/current/feathers/layout/FormLayout.html#setPadding) method instead.

```haxe
// sets top, right, bottom and left to the same value
layout.setPadding(10.0);
```

The [`gap`](https://api.feathersui.com/current/feathers/layout/FormLayout.html#gap) refers to the space, measured in pixels, between each child in the container.

```haxe
layout.gap = 5.0;
```

### Alignment

The children of the container may be _aligned_ vertically within the container's bounds.

To align the children along the y-axis, set the [`verticalAlign`](https://api.feathersui.com/current/feathers/layout/FormLayout.html#verticalAlign) property.

```haxe
layout.verticalAlign = MIDDLE;
```

In the example above, the children are aligned to the [middle](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#MIDDLE) of the y-axis. They may also be aligned to the [top](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#TOP) or to the [bottom](https://api.feathersui.com/current/feathers/layout/VerticalAlign.html#BOTTOM).

> **Note:** Vertical alignment may be used only when the total height of the content (including padding and gap values) is less than or equal to the height of the container. If the content is larger than its parent container, the layout will position the children starting from `0.0` on the y-axis, the same as if they were top-aligned.

## Related Links

- [`feathers.layout.FormLayout` API Documentation](https://api.feathersui.com/current/feathers/layout/FormLayout.html)
- [How to use the `Form` component](./form.md)
