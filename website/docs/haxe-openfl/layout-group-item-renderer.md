---
title: How to use the LayoutGroupItemRenderer component
sidebar_label: LayoutGroupItemRenderer
---

The [`LayoutGroupItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/LayoutGroupItemRenderer.html) class is a base class for creating custom item renderers to display in data containers, such as [`ListView`](./list-view.md) or [`GridView`](./grid-view.md).

## The Basics

Item renderers are managed by data containers, like [`ListView`](./list-view.md), [`GridView`](./grid-view.md), and [`GroupListView`](./group-list-view.md). Unlike other components, item renderers generally aren't added to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html) directly. Instead, the data container will use a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to manage its item renderers. For instance, [`ListView`](./list-view.md) has a [`itemRendererRecycler`](https://api.feathersui.com/current/feathers/controls/ListView.html#itemRendererRecycler) property.

```haxe
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new LayoutGroupItemRenderer();
    // set common properties, or create sub-components, for all renderers
    // in the same container here
    var label = new Label();
    label.name = "label";
    itemRenderer.addChild(label);
    return itemRenderer;
});
listView.itemRendererRecycler = recycler;
```

A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can be used to set properties for a specific item from the container's data provider.

```haxe
// handle properties for a specific item in update()
recycler.update = (itemRenderer:LayoutGroupItemRenderer, state:ListViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    label.text = state.text;
};
```

The second parameter contains the current state of the item being displayed, including the original data from the data provider, its position within the data provider, the text to display, whether the item is selected, and more. In this case, we pass the text to the item renderer's label sub-component.

## States

When the user interacts with a layout group item renderer using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the item renderer's background skin may be rendered differently in different states.

The [`ToggleButtonState`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html) enum defines the available states, similar to the [`ItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html) class.

- [`UP(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#UP) is the item renderer's default state when the user is not interacting with it, and the item renderer is enabled.
- [`DOWN(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) is the state when the user presses the item renderer with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the item renderer is focused.
- [`HOVER(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#HOVER) is the state when the mouse is hovering over the item renderer. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DISABLED) is the item renderer's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.

Notice that each state also defines a boolean value to indicate if the item renderer is selected or not. `DOWN(true)` and `DOWN(false)` both indicate that the item renderer is currently pressed down, but the value of `true` indicates that it is currently selected, while `false` means that it is not selected.

## Styles

A number of styles may be customized on a [`LayoutGroupItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/LayoutGroupItemRenderer.html) component, including the background skin and the layout.

### Background skin

Give the item renderer a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 64.0;
skin.height = 32.0;
itemRenderer.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The button automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text and icon), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the item renderer's border or fill may change when the item renderer is selected. In the next example, the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) displays a different fill when selected by setting the [`selectedFill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#selectedFill) property.

```haxe
skin.selectedFill = SolidColor(0xcc9999);
```

Similarly, use the [`selectedBorder`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#selectedBorder) property to set the border when selected.

```haxe
skin.selectedBorder = SolidColor(2.0, 0x999999);
```

The fill or border may be customized for an exact state too. In the next example, the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) displays a different border when the item renderer is down and not selected.

```haxe
skin.setFillForState(ToggleButtonState.DOWN(false), SolidColor(0xaa9999));
skin.setBorderForState(ToggleButtonState.DOWN(false), SolidColor(1.0, 0x9999cc));
```

In the examples above, the item renderer uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the item renderer's current state. Alternatively, the item renderer's [`selectedBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/dataRenderers/LayoutGroup.html#selectedBackgroundSkin) property and [`setSkinForState()`](https://api.feathersui.com/current/feathers/controls/dataRenderers/LayoutGroupItemRenderer.html#setSkinForState) method allow the item renderer to display a completely different display object when its current state changes.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
itemRenderer.backgroundSkin = defaultSkin;

var selectedSkin = new RectangleSkin();
// ... set border, fill, width, and height
itemRenderer.selectedBackgroundSkin = selectedSkin;

var hoverSkin = new RectangleSkin();
// ... set border, fill, width, and height
itemRenderer.setSkinForState(ToggleButtonState.HOVER(false), hoverSkin);
```

In the example above, the item renderer will display a custom skin when it is not selected and the mouse is hovering over it, the selected states will share the [`selectedBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/dataRenderers/LayoutGroupItemRenderer.html#selectedBackgroundSkin), and all remaining states will share the default [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html#backgroundSkin).

## Layout

Set the item renderer's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/LayoutGroup.html#layout) property to automatically position its children.

```haxe
var itemLayout = new HorizontalLayout();
itemLayout.paddingTop = 4.0;
itemLayout.paddingRight = 10.0;
itemLayout.paddingBottom = 4.0;
itemLayout.paddingLeft = 10.0;
itemLayout.gap = 2.0;
itemRenderer.layout = itemLayout;
```

The example above uses [`HorizontalLayout`](https://api.feathersui.com/current/feathers/layout/HorizontalLayout.html), but a number of [different layouts](https://api.feathersui.com/current/feathers/layout/) are available in Feathers UI, and it's possible to create custom layouts.

## Related Links

- [`feathers.controls.dataRenderers.LayoutGroupItemRenderer` API Documentation](https://api.feathersui.com/current/feathers/controls/dataRenderers/LayoutGroupItemRenderer.html)
- [How to use the `ItemRenderer` component](./item-renderer.md)
- [Create custom item renderers for data containers](./custom-item-renderers.md)
