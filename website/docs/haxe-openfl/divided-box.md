---
title: How to use the HDividedBox and VDividedBox components
sidebar_label: HDividedBox / VDividedBox
---

The [`HDividedBox`](https://api.feathersui.com/current/feathers/controls/HDividedBox.html) and [`VDividedBox`](https://api.feathersui.com/current/feathers/controls/VDividedBox.html) containers display dividers between each of their children, and the dividers may be dragged to resize the children.

<figure>
<iframe src="/learn/haxe-openfl/samples/divided-box.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/HDividedBox.html"><code>HDividedBox</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Create a [`HDividedBox`](https://api.feathersui.com/current/feathers/controls/HDividedBox.html) container, add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html), and add some children.

```haxe
var container = new HDividedBox();
addChild(container);

var leftContainer = new LayoutGroup();
leftContainer.backgroundSkin = new RectangleSkin(SolidColor(0x993333));
container.addChild(leftContainer);

var rightContainer = new LayoutGroup();
rightContainer.backgroundSkin = new RectangleSkin(SolidColor(0x333399));
container.addChild(rightContainer);
```

Any Feathers UI component may be added as a child of a divided box.

## Styles

[`HDividedBox`](https://api.feathersui.com/current/feathers/controls/HDividedBox.html) and [`VDividedBox`](https://api.feathersui.com/current/feathers/controls/VDividedBox.html) can display an optional background skin, and the divider resize handles may be customized.

### Background skin

Optionally give the container a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseDividedBox.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
dividedBox.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The group automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the size and position of children), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the group's border or fill may be customized to change when the group is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the group is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the group uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the group's current state. Alternatively, the group's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseDividedBox.html#disabledBackgroundSkin) method allows the group to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
dividedBox.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
dividedBox.disabledBackgroundSkin = disabledSkin;
```

In the example above, the group will have a separate skins when enabled and disabled.

### Dividers

The dividers the [`HDividedBox`](https://api.feathersui.com/current/feathers/controls/HDividedBox.html) and [`VDividedBox`](https://api.feathersui.com/current/feathers/controls/VDividedBox.html) components are of type [`InteractiveObject`](https://api.openfl.org/openfl/display/InteractiveObject.html).

The [`dividerFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseDividedBox.html#dividerFactory) property may be used to customize the creation of the divider resize handles.

```haxe
dividedBox.dividerFactory = DisplayObjectRecycler.withFunction(() -> {
    var button = new Button();
    // ... set styles here
    return cast(button,InteractiveObject);
});
```

## Related Links

- [`feathers.controls.HDividedBox` API Documentation](https://api.feathersui.com/current/feathers/controls/HDividedBox.html)
- [`feathers.controls.VDividedBox` API Documentation](https://api.feathersui.com/current/feathers/controls/VDividedBox.html)
