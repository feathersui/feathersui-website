---
title: How to use the HierarchicalItemRenderer component
layout: "docs.html"
sidebarTitle: HierarchicalItemRenderer
---

The [`HierarchicalItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html) class is designed to render items in a hierarchical _data container_, such as [`TreeView`](./tree-view.md) or [`TreeGridView`](./tree-grid-view.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/hierarchical-item-renderer.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html"><code>HierarchicalItemRenderer</code></a> component</figcaption>
</figure>

## The Basics

Hierarchical item renderers are managed by data containers, like [`TreeView`](./tree-view.md) and [`TreeGridView`](./tree-grid-view.md). Unlike other components, item renderers generally aren't added to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html) directly. Instead, the data container will use a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to manage its item renderers. For instance, [`TreeView`](./tree-view.md) has a [`itemRendererRecycler`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemRendererRecycler) property.

```haxe
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new HierarchicalItemRenderer();
    // set common properties for all renderers in the same container here
    return itemRenderer;
});
treeView.itemRendererRecycler = recycler;
```

A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can be used to set properties for a specific item from the container's data provider.

```haxe
recycler.update = (itemRenderer:HierarchicalItemRenderer, state:TreeViewItemState) -> {
    // set properties for a specific item here
    itemRenderer.text = state.text;
};
```

The second parameter contains the current state of the item being displayed, including the original data from the data provider, its position within the data provider, the text to display, whether the item is selected, and more. In this case, we pass the text to the item renderer.

### Text

An item renderer may display some text. Generally, it's a good idea to make the data container aware of the text too. For [`TreeView`](./tree-view.md), be sure to set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText) function.

```haxe
treeView.itemToText = item -> {
    return item.name;
}
```

The [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText) function would be appropriate for the following data provider, where each item has a `name` property.

```haxe
treeView.dataProvider = new ArrayHierarchicalCollection([
    { name: "Pizza" },
    { name: "Cheeseburger" },
    { name: "French Fries" },
]);
```

Inside the recycler's [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, set the item renderer's [`text`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#text) property.

```haxe
recycler.update = (itemRenderer:HierarchicalItemRenderer, state:TreeViewItemState) -> {
    itemRenderer.text = state.text;
}
```

### Secondary text

A hierarchical item renderer may display a second line of text below the primary text.

```haxe
recycler.update = (itemRenderer:HierarchicalItemRenderer, state:TreeViewItemState) -> {
    var item = state.data;
    itemRenderer.secondaryText = item.detail;
}
```

Inside the recycler's [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, set the [`secondaryText`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html#secondaryText) property.

### Icon

An item renderer may optionally display an icon or image. See the following tutorials for more details.

> The tutorials below use the [`ItemRenderer`](./item-renderer.md) component, but `HierarchicalItemRenderer` works nearly the same way.

- [Cookbook: Display an image from a URL in an `ItemRenderer` component](cookbook/item-renderer-image-url.md)
- [Cookbook: Display an OpenFL asset in an `ItemRenderer` component](cookbook/item-renderer-openfl-assets.md)

### Accessory

An item renderer may optionally display an accessory to the right of the other content. An accessory may be a UI control, an image, or any OpenFL display object. See the following tutorial for more details.

> The tutorial below uses the [`ItemRenderer`](./item-renderer.md) component, but `HierarchicalItemRenderer` works nearly the same way.

- [Cookbook: Add a UI control to an `ItemRenderer` component](cookbook/item-renderer-ui-control-accessory.md)

## States

When the user interacts with a hierarchical item renderer using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the item renderer's background skin, font styles, and icon may all be rendered differently in different states.

The [`ToggleButtonState`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html) enum defines the states available to all item renderer components because the [`ItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html) class is a subclass of [`ToggleButton`](./toggle-button.md).

- [`UP(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#UP) is the item renderer's default state when the user is not interacting with it, and the item renderer is enabled.
- [`DOWN(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) is the state when the user presses the item renderer with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the item renderer is focused.
- [`HOVER(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#HOVER) is the state when the mouse is hovering over the item renderer. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DISABLED) is the item renderer's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.

Notice that each state also defines a boolean value to indicate if the item renderer is selected or not. `DOWN(true)` and `DOWN(false)` both indicate that the item renderer is currently pressed down, but the value of `true` indicates that it is currently selected, while `false` means that it is not selected.

## Styles

A number of styles may be customized on an [`ItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html) component, including the font styles, the background skin, and an optional icon. Several more styles may be used to adjust the layout of the item renderer's children.

### Font styles

The font styles of the item renderer's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) property.

```haxe
itemRenderer.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the item renderer's text should use different font styles when the item renderer is selected, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) to the [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) property.

```haxe
itemRenderer.selectedTextFormat = new TextFormat("Helvetica", 20, 0x9a9a9a, true);
```

Finally, the item renderer's text may use different font styles in a more fine-grained matter — by targeting an exact state. Use the [`setTextFormatForState()`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#setTextFormatForState) method to pass in a state value and a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html).

```haxe
itemRenderer.setTextFormatForState(ToggleButtonState.DISABLED(false), new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the item renderer's text will change when the item renderer is disabled and not selected.

When font styles aren't available for a specific state, the item renderer will use the default [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) as a fallback (preferring [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) when selected, of course).

### Background skin

Give the item renderer a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

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

In the examples above, the item renderer uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the item renderer's current state. Alternatively, the item renderer's [`selectedBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#selectedBackgroundSkin) property and [`setSkinForState()`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#setSkinForState) method allow the item renderer to display a completely different display object when its current state changes.

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

In the example above, the item renderer will display a custom skin when it is not selected and the mouse is hovering over it, the selected states will share the [`selectedBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#selectedBackgroundSkin), and all remaining states will share the default [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#backgroundSkin).

### Layout

Padding may be added on each side of the item renderer, including [top](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingLeft).

```haxe
itemRenderer.paddingTop = 5.0;
itemRenderer.paddingRight = 8.0;
itemRenderer.paddingBottom = 5.0;
itemRenderer.paddingLeft = 8.0;
```

The icon may be positioned on any side of the item renderer's text. For instance, the following example moves the icon above the text, so that the icon and text are stacked vertically.

```haxe
itemRenderer.iconPosition = TOP;
```

Set the [`iconPosition`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#iconPosition) property to any of the [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) values.

The [`gap`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#gap) refers to the space, measured in pixels, between the icon and the text.

```haxe
itemRenderer.gap = 10.0;
```

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#horizontalAlign) and [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#verticalAlign) properties will adjust the alignment of the icon and text inside the item renderer, allowing you to anchor them at the edges or in the center.

```haxe
itemRenderer.horizontalAlign = CENTER;
itemRenderer.verticalAlign = MIDDLE;
```

The [`indentation`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html#indentation) property refers to the space, measured in pixels, to the left side of the content for children of branches. The indentation may be added multiple times, depending on how many branches deep in the data provider the item is located.

```haxe
itemRenderer.indentation = 10.0;
```

### Disclosure Button

The disclosure button in a [`HierarchicalItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html) component is of type [`ToggleButton`](./toggle-button.md). It is displayed for items that are branches, and it controls whether the branch is opened or closed. Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`HierarchicalItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html).

> See [How to use the `ToggleButton` component](./toggle-button.md#styles) for complete details about which styles are available for the disclosure button.

#### Style disclosure button globally

Use the [`HierarchicalItemRenderer.CHILD_VARIANT_DISCLOSURE_BUTTON`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html#CHILD_VARIANT_DISCLOSURE_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`HierarchicalItemRenderer`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html) components.

```haxe
styleProvider.setStyleFunction(
    ToggleButton,
    HierarchicalItemRenderer.CHILD_VARIANT_DISCLOSURE_BUTTON,
    setHierarchicalItemRenderer_DisclosureButton_Styles);
```

The function should use the following signature.

```haxe
function setHierarchicalItemRenderer_DisclosureButton_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the disclosure button in a specific `HierarchicalItemRenderer`

The [`disclosureButtonFactory`](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html#disclosureButtonFactory) property may be used to customize the creation of an individual toggle button.

```haxe
treeView.disclosureButtonFactory = () -> {
    var button = new ToggleButton();
    // ... set styles here
    return button;
};
```

## Related Links

- [`feathers.controls.dataRenderers.HierarchicalItemRenderer` API Documentation](https://api.feathersui.com/current/feathers/controls/dataRenderers/HierarchicalItemRenderer.html)
- [Create custom item renderers for data containers](./custom-item-renderers.md)
- [How to use the `TreeGridView` component](./tree-grid-view.md)
- [How to use the `TreeView` component](./tree-view.md)
