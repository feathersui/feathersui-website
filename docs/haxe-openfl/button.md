---
title: How to use the Feathers UI Button component
sidebar_label: Button
---

The [`Button`](https://api.feathersui.com/current/feathers/controls/Button.html) class displays a button that may be triggered by a mouse click or a tap on a touchscreen. It can optionally display text, an icon, or both — with a variety of layout options. Buttons have separate states for each of the different pointer phases. The skin and icon can be customized for each state, and the text may be rendered with different font styles for each state too.

## The Basics

Start by creating a [`Button`](https://api.feathersui.com/current/feathers/controls/Button.html) control, give it some text to display, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var button = new Button();
button.text = "Click Me";
this.addChild(button);
```

To know when the button is tapped or clicked, listen for `FeathersEvent.TRIGGERED`.

```hx
button.addEventListener(Event.TRIGGERED, button_triggeredHandler);
```

A listener for this event uses the following function signature.

```hx
function button_triggeredHandler(event:Event):Void
{
    trace("button triggered");
}
```

## States

When the user interacts with a button using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the button's background skin, font styles, and icon may all be rendered differently in different states.

The [`ButtonState`](https://api.feathersui.com/current/feathers/controls/ButtonState.html) enum defines the states available to all button components.

- [`UP`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#UP) is the button's default state when the user is not interacting with it, and the button is enabled.
- [`DOWN`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DOWN) is the state when the user presses the button with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the button is focused.
- [`HOVER`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#HOVER) is the state when the mouse is hovering over the button. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DISABLED) is the button's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#enabled) property has been set to `false`.

## Styles

A number of styles may be customized on a [`Button`](https://api.feathersui.com/current/feathers/controls/Button.html) component, including the font styles, the background skin, and an optional icon. Several more styles may be used to adjust the layout of the button's children.

### Font styles

The font styles of the button's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/Button.html#textFormat) property.

```hx
button.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the button's text should use different font styles when the button is in different states, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) and state value to the [`setTextFormatForState()`](https://api.feathersui.com/current/feathers/controls/Button.html#setTextFormatForState) method.

```hx
button.setTextFormatForState(DOWN, new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the button's text will change when the button is pressed, and the state changes to [`ButtonState.DOWN`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DOWN).

When font styles aren't available for a specific state, the button will use the default [`textFormat`](https://api.feathersui.com/current/feathers/controls/Button.html#textFormat) as a fallback.

### Background skin

Give the button a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicButton.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

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

The appearance of the button's border or fill may be customized to change based on the button's current state, such as when the button is pressed down, the mouse is hovering over it, or the button is disabled. In the next example, a call to the skin's [`setFillForState()`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#setFillForState) method makes it switch to a different fill when the button's [`DOWN`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DOWN) state is active.

```hx
skin.setFillForState(DOWN, SolidColor(0xffcccc));
```

Similarly, use the skin's [`setBorderForState()`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#setBorderForState) method to change the border for a specific state.

```hx
skin.setBorderForState(DOWN, SolidColor(2.0, 0x999999));
```

In the examples above, the button uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the button's current state. Alternatively, the button's [`setSkinForState()`](https://api.feathersui.com/current/feathers/controls/BasicButton.html#setSkinForState) method allows the button to display a completely different display object when its current state changes.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
button.backgroundSkin = defaultSkin;

var hoverSkin = new RectangleSkin();
// ... set border, fill, width, and height
button.setSkinForState(HOVER, hoverSkin);
```

In the example above, the button will have a custom skin for the [`HOVER`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#HOVER) state, and all other states will share the default [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/BasicButton.html#backgroundSkin).

### Icon

A button may optionally display an [`icon`](https://api.feathersui.com/current/feathers/controls/Button.html#icon) next to its the text (or it may display an icon without any text).

The following example loads an icon using its name registered with OpenFL's [asset manager](https://api.openfl.org/openfl/utils/Assets.html).

```hx
button.icon = new Bitmap(Assets.getBitmapData("myAssetName"));
```

Similar to the background skin, the button's icon may be optionally customized for different states.

```hx
button.setIconForState(DOWN, new Bitmap(Assets.getBitmapData("anotherAssetName")));
```

> In this example, we use a [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) for the button's icon, but any type of display object may be used. Additionally, while it can be convenient to load icons with the [`Assets`](https://api.openfl.org/openfl/utils/Assets.html) class, icons may come from anywhere — even by drawing them programatically.

### Layout

Padding may be added on each side of the button, including [top](https://api.feathersui.com/current/feathers/controls/Button.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/Button.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/Button.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/Button.html#paddingLeft).

```hx
button.paddingTop = 5.0;
button.paddingRight = 8.0;
button.paddingBottom = 5.0;
button.paddingLeft = 8.0;
```

The icon may be positioned on any side of the button's text. For instance, the following example moves the icon above the text, so that the icon and text are stacked vertically.

```hx
button.iconPosition = TOP;
```

Set the [`iconPosition`](https://api.feathersui.com/current/feathers/controls/Button.html#iconPosition) property to any of the [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) values.

The [`gap`](https://api.feathersui.com/current/feathers/controls/Button.html#gap) refers to the space, measured in pixels, between the icon and the text.

```hx
button.gap = 10.0;
```

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/controls/Button.html#horizontalAlign) and [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/Button.html#verticalAlign) properties will adjust the alignment of the icon and text inside the button, allowing you to anchor them at the edges or in the center.

```actionscript
button.horizontalAlign = CENTER;
button.verticalAlign = MIDDLE;
```

## Related Links

- [`feathers.controls.Button` API Reference](https://api.feathersui.com/current/feathers/controls/Button.html)
- [How to use the `ToggleButton` component](./ToggleButton.html)
