---
title: How to use the Feathers UI ToggleButton component
sidebar_label: ToggleButton
---

The [`ToggleButton`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html) class is a special type of [button](./button.md) that may be selected and deselected when triggered. Similar to regular buttons, a toggle button can optionally display text, an icon, or both — with a variety of layout options. Toggle buttons have separate states for each of the different pointer phases — with additional variations when selected. The skin and icon can be customized for each state, and the text may be rendered with different font styles for each state too.

## The Basics

Start by creating a [`ToggleButton`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html) control, give it some text to display, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var button = new ToggleButton();
button.text = "Click Me";
this.addChild(button);
```

A toggle button may be selected and deselected when it is triggered, or it can be changed programmatically by setting the [`selected`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selected) property.

```hx
button.selected = true;
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user changes the toggle button's selection.

```hx
button.addEventListener(Event.CHANGE, toggle_changeHandler);
```

Check for the new value of the [`selected`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selected) property in the listener function.

```hx
function toggle_changeHandler(event:Event):Void
{
    var button = cast(event.currentTarget, ToggleButton);
    trace("toggle.selected change: " + toggle.selected);
}
```

## States

When the user interacts with a toggle button using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the toggle button's background skin, font styles, and icon may all be rendered differently in different states.

The [`ToggleButtonState`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html) enum defines the states available to all toggle button components.

- [`UP(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#UP) is the toggle button's default state when the user is not interacting with it, and the toggle button is enabled.
- [`DOWN(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) is the state when the user presses the toggle button with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the toggle button is focused.
- [`HOVER(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#HOVER) is the state when the mouse is hovering over the toggle button. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DISABLED) is the toggle button's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.

Notice that each state also defines a boolean value to indicate if the toggle button is selected or not. `DOWN(true)` and `DOWN(false)` both indicate that the toggle button is currently pressed down, but the value of `true` indicates that it is currently selected, while `false` means that it is not selected.

## Styles

A number of styles may be customized on a [`ToggleButton`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html) component, including the font styles, the background skin, and an optional icon. Several more styles may be used to adjust the layout of the toggle button's children.

### Font styles

The font styles of the toggle button's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) property.

```hx
button.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the toggle button's text should use different font styles when the toggle button is selected, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) to the [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) property.

```hx
button.textFormat = new TextFormat("Helvetica", 20, 0x9a9a9a, true);
```

Finally, the toggle button's text may use different font styles in a more fine-grained matter — by targeting an exact state. Use the [`setTextFormatForState()`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#setTextFormatForState) method to pass in a state value and a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html).

```hx
button.setTextFormatForState(DISABLED(false), new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the toggle button's text will change when the toggle button is disabled and not selected.

When font styles aren't available for a specific state, the toggle button will use the default [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) as a fallback (preferring [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) when selected, of course).

### Background skin

Give the toggle button a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 64.0;
skin.height = 32.0;
button.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The button automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text and icon), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Graphics API skins](./graphics-api-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the toggle button's border or fill may change when the toggle button is selected. In the next example, the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) displays a different fill when selected by setting the [`selectedFill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#selectedFill) property.

```hx
skin.selectedFill = SolidColor(0xcc9999);
```

Similarly, use the [`selectedBorder`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#selectedBorder) property to set the border when selected.

```hx
skin.selectedBorder = SolidColor(2.0, 0x999999);
```

The fill or border may be customized for an exact state too. In the next example, the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) displays a different border when the toggle button is down and not selected.

```hx
skin.setFillForState(DOWN(false), SolidColor(0xaa9999));
skin.setBorderForState(DOWN(false), SolidColor(1.0, 0x9999cc));
```

In the examples above, the toggle button uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the toggle button's current state. Alternatively, the toggle button's [`selectedBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#selectedBackgroundSkin) property and [`setSkinForState()`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#setSkinForState) method allow the toggle button to display a completely different display object when its current state changes.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
button.backgroundSkin = defaultSkin;

var selectedSkin = new RectangleSkin();
// ... set border, fill, width, and height
button.selectedBackgroundSkin = selectedSkin;

var hoverSkin = new RectangleSkin();
// ... set border, fill, width, and height
button.setSkinForState(HOVER(false), hoverSkin);
```

In the example above, the toggle button will display a custom skin when it is not selected and the mouse is hovering over it, the selected states will share the [`selectedBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#selectedBackgroundSkin), and all remaining states will share the default [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicToggleButton.html#backgroundSkin).

### Icon

A toggle button may display an [`icon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#icon) with the text (or only an icon, without any text).

The following example loads an icon using its name registered with OpenFL's [asset manager](https://api.openfl.org/openfl/utils/Assets.html).

```hx
button.icon = new Bitmap(Assets.getBitmapData("myAssetName"));
```

Similar to the background skin, the toggle button's icon may be optionally customized for different states.

```hx
button.selectedIcon = new Bitmap(Assets.getBitmapData("anotherAssetName");
button.setIconForState(DOWN, new Bitmap(Assets.getBitmapData("yetAnotherAssetName")));
```

> This example uses a [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) for the toggle button's icon, but any type of display object may be used. Additionally, while it can be convenient to load icons with the [`Assets`](https://api.openfl.org/openfl/utils/Assets.html) class, icons may come from anywhere — even by drawing them programatically.

### Layout

Padding may be added on each side of the toggle button, including [top](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingLeft).

```hx
button.paddingTop = 5.0;
button.paddingRight = 8.0;
button.paddingBottom = 5.0;
button.paddingLeft = 8.0;
```

The icon may be positioned on any side of the toggle button's text. For instance, the following example moves the icon above the text, so that the icon and text are stacked vertically.

```hx
button.iconPosition = TOP;
```

Set the [`iconPosition`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#iconPosition) property to any of the [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) values.

The [`gap`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#gap) refers to the space, measured in pixels, between the icon and the text.

```hx
button.gap = 10.0;
```

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#horizontalAlign) and [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#verticalAlign) properties will adjust the alignment of the icon and text inside the toggle button, allowing you to anchor them at the edges or in the center.

```actionscript
button.horizontalAlign = CENTER;
button.verticalAlign = MIDDLE;
```

## Related Links

- [`feathers.controls.ToggleButton` API Reference](https://api.feathersui.com/current/feathers/controls/ToggleButton.html)
