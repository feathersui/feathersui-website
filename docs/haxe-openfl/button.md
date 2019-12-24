---
title: How to use the Feathers UI Button component
sidebar_label: Button
---

The [`Button`](https://api.feathersui.com/current/feathers/controls/Button.html) class displays a button that may be triggered by a mouse click or a tap on a touchscreen. It can optionally display text, an icon, or both — with a variety of layout options. Buttons have separate states for each of the different pointer phases. The skin and icon can be customized for each state, and the text may be rendered with different font styles for each state too.

## The Basics

Start by creating a [`Button`](https://api.feathersui.com/current/feathers/controls/Button.html) control, give it some text to display, and add it to the display list.

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

## Button states

When the user interacts with a button using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the button's background skin, font styles, and icon may all be rendered differently in different states.

The [`ButtonState`](https://api.feathersui.com/current/feathers/controls/ButtonState.html) enum defines the states available to all button components.

- [`UP`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#UP) is the button's default state when the user is not interacting with it, and the button is enabled.
- [`DOWN`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DOWN) is the state when the user presses the button with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the button is focused.
- [`HOVER`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#HOVER) is the state when the mouse is hovering over the button. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DISABLED) is the button's state when the its [`enabled`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#enabled) property has been set to `false`.

## Styling a `Button` component

A number of styles may be customized on a button, including the font styles, the background skin, and an optional icon. For full details about which properties are available, see the [`Button` API reference](https://api.feathersui.com/current/feathers/controls/Button.html). We'll look at a few of the most common ways of styling a button below.

### Font styles

The font styles of the button's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/Button.html#textFormat) property.

```hx
button.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the button's text should use different font styles when the button is in different states, pass a `TextFormat` and state value to the [`setTextFormatForState()`](https://api.feathersui.com/current/feathers/controls/Button.html#setTextFormatForState) method.

```hx
button.setTextFormatForState(DOWN, new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the button's text will change when the button is pressed, and the state changes to [`ButtonState.DOWN`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DOWN).

When font styles aren't available for a specific state, the button will use the default [`textFormat`](https://api.feathersui.com/current/feathers/controls/Button.html#textFormat) as a fallback.

### Background skins

Give the button a background skin using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/Button.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(0x999999);
skin.fill = SolidColor(0xcccccc);
button.backgroundSkin = skin;
```

> The background skin of a [`Button`](https://api.feathersui.com/current/feathers/controls/Button.html) component may be any OpenFL display object, and it is not limited to [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html). More primitive display classes like [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) or [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html) are allowed too.

The appearance of the button's border or fill may change when the button's state changes. In the next example, the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) displays a different fill for the button's [`DOWN`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DOWN) state.

```hx
skin.setFillForState(DOWN, SolidColor(0xffcccc));
```

The `RectangleSkin` automatically listens for changes to the button's state and updates its appearance to match. When the user presses the button down, the `RectangleSkin` will display this fill instead of the default one.

Similarly, a button may change its background skin to a different display object when the state changes. In the next example, the button uses another skin specifically for the [`DISABLED`](https://api.feathersui.com/current/feathers/controls/ButtonState.html#DISABLED) state.

```hx
var disabledSkin = new RectangleSkin();
disabledSkin.alpha = 0.8;
disabledSkin.border = SolidColor(0x999999);
disabledSkin.fill = SolidColor(0xcccccc);
button.setSkinForState(DISABLED, disabledSkin);
```

Pass in skins for any state using the [`setSkinForState()`](https://api.feathersui.com/current/feathers/controls/BasicButton.html#setSkinForState) function.

If a skin is not provided for a specific state, the button will display its default `backgroundSkin`. Similarly, when using a `RectangleSkin`, and a fill or border isn't provided for a specific state, it will display its default fill or border.

### Icons

A `Button` may display an [`icon`](https://api.feathersui.com/current/feathers/controls/Button.html#icon) with the text (or only an icon, without any text).

The following example loads an icon using its name registered with OpenFL's [asset manager](https://api.openfl.org/openfl/utils/Assets.html).

```hx
button.icon = new Bitmap(Assets.getBitmapData("myAssetName"));
```

Similar to the background skin, the button's icon may be optionally customized for different states.

```hx
button.setIconForState(DOWN, new Bitmap(Assets.getBitmapData("anotherAssetName")));
```

> In this example, we use a [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) for the button's icon, but any type of display object may be used. Additionally, while it can be convenient to load icons with the [`Assets`](https://api.openfl.org/openfl/utils/Assets.html) class, icons may come from anywhere — even by drawing them programatically.

## Layout

Padding may be added on each side of the button, including [top](https://api.feathersui.com/current/feathers/controls/Button.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/Button.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/Button.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/Button.html#paddingLeft).

```hx
button.paddingTop = 5.0;
button.paddingRight = 8.0;
button.paddingBottom = 5.0;
button.paddingLeft = 8.0;
```

The icon may be positioned on any side of the button's text. For instance, the following example moves the icon above the text so that they are stacked vertically.

```hx
button.iconPosition = TOP;
```

Set the [`iconPosition`](https://api.feathersui.com/current/feathers/controls/Button.html#iconPosition) property to any of the [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) values.

The [`gap`](https://api.feathersui.com/current/feathers/controls/Button.html#gap) refers to the space, measured in pixels, between the icon and the text.

```hx
button.gap = 10.0;
```

## Related Links

- [`feathers.controls.Button` API Reference](https://api.feathersui.com/current/feathers/controls/Button.html)
- [How to use the `ToggleButton` component](./ToggleButton.html)
