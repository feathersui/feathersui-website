---
title: How to use the LayoutGroup component
sidebar_label: LayoutGroup
---

The [`LayoutGroup`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html) class is a generic container that can position its children using a [layout](https://api.feathersui.com/current/feathers/layout/). This container does not support scrolling.

> If you need scrolling, you should use the [`ScrollContainer`](./scroll-container.md) component instead.

<figure>
<iframe src="/learn/haxe-openfl/samples/layout-group.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/LayoutGroup.html"><code>LayoutGroup</code></a> component</figcaption>
</figure>

## The Basics

Create a [`LayoutGroup`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html) container, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and add some children.

```hx
var container = new LayoutGroup();
this.addChild(container);

var child1 = new Label();
child1.text = "Hello";
container.addChild(child1);

var child2 = new Sprite();
child2.graphics.beginFill(0xcccccc);
child2.graphics.drawRect(0.0, 0.0, 100.0, 100.0);
child2.graphics.endFill();
container.addChild(child2);
```

A mix of [OpenFL's core display objects](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html) and other Feathers UI components may be added to a group.

Set the group's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to automatically position its children.

```hx
container.layout = new HorizontalLayout();
```

The example above uses [`HorizontalLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalLayout.html), but a number of [different layouts](https://api.feathersui.com/current/feathers/layout/) are available in Feathers UI, and it's possible to create custom layouts.

## Styles

[`LayoutGroup`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html) is a light-weight component than offers only minor styling capabilities — mainly, it can display an optional background skin.

### Background skin

Optionally give the group a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
group.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The group automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the size and position of children), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the group's border or fill may be customized to change when the group is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the group is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the group uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the group's current state. Alternatively, the group's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html#disabledBackgroundSkin) method allows the group to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
group.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
group.disabledBackgroundSkin = disabledSkin;
```

In the example above, the group will have a separate skins when enabled and disabled.

## Related Links

- [`feathers.controls.LayoutGroup` API Documentation](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html)
- [How to use the `ScrollContainer` component](./scroll-container.md)
