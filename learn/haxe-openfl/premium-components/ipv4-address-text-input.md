---
title: How to use the IPv4AddressTextInput component
layout: "docs.html"
sidebarTitle: IPv4AddressTextInput
---

The [`IPv4AddressTextInput`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html) class creates an editable text field for [IPv4 network addresses](https://en.wikipedia.org/wiki/IPv4). An IPv4 address contains 32-bits of information, divided into 4 octets. Each octet is a numeric value between `0` and `255`. Example IPv4 addresses include `192.168.0.1`, `127.0.0.1`, and `255.255.255.255`.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Create a [`IPv4AddressTextInput`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html) control and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var input = new IPv4AddressTextInput();
addChild(input);
```

Text may be changed programatically by setting the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#text) property.

```haxe
input.text = "192.168.0.1";
```

> **Warning!** If the string value passed to the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#text) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. The delimiter between each group of three digits must be a `.` character. Other special characters or letters may not be used as the delimiter. The value of each octet must not be greater than `255`. Partial IPv4 strings are allowed, so both `"127.0"` and `"192.168."` would be considered valid.

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user edits the text.

```haxe
input.addEventListener(Event.CHANGE, textInput_changeHandler);
```

Check for the new value of the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#text) property in the listener function.

```haxe
function textInput_changeHandler(event:Event):Void {
    var input = cast(event.currentTarget, IPv4AddressTextInput);
    trace("text input change: " + input.text);
}
```

## States

When the user interacts with a text input using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the text input's background skin and font styles may be rendered differently in different states.

The [`TextInputState`](https://api.feathersui.com/current/feathers/controls/TextInputState.html) enum defines the states available to all text input components.

- [`ENABLED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#ENABLED) is the text input's default state.
- [`DISABLED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#DISABLED) is the text input's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.
- [`FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED) is the text input's state when it currently has focus.
- [`ERROR`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#ERROR) is the text input's state when an error string has been set.


## Styles

A number of styles may be customized on a [`IPv4AddressTextInput`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html) component, including the font styles and the background skin. Several more styles may be used to adjust the layout of the text input's children.

### Font styles

The font styles of the text input's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#textFormat) property.

```haxe
input.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the text input's text should use different font styles when the text input is in different states, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) and state value to the [`setTextFormatForState()`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#setTextFormatForState) method.

```haxe
input.setTextFormatForState(TextInputState.FOCUSED, new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the text input's text will change when the text input receives focus, and the state changes to [`TextInputState.FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED).

When font styles aren't available for a specific state, the text input will use the default [`textFormat`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#textFormat) as a fallback.

### Background skin

Give the text input a background using the [`backgroundSkin`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 64.0;
skin.height = 32.0;
input.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The text input automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the dimensions of the text), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](../shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the text input's border or fill may be customized to change based on the text input's current state, such as when the text input receives focus, there is an error string, or the text input is disabled. In the next example, a call to the skin's [`setFillForState()`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#setFillForState) method makes it switch to a different fill when the text input's [`FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED) state is active.

```haxe
skin.setFillForState(TextInputState.FOCUSED, SolidColor(0xffcccc));
```

Similarly, use the skin's [`setBorderForState()`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#setBorderForState) method to change the border for a specific state.

```haxe
skin.setBorderForState(TextInputState.FOCUSED, SolidColor(2.0, 0x999999));
```

In the examples above, the text input uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the text input's current state. Alternatively, the text input's [`setSkinForState()`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#setSkinForState) method allows the text input to display a completely different display object when its current state changes.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
input.backgroundSkin = defaultSkin;

var hoverSkin = new RectangleSkin();
// ... set border, fill, width, and height
input.setSkinForState(TextInputState.FOCUSED, hoverSkin);
```

In the example above, the text input will have a custom skin for the [`FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED) state, and all other states will share the default [`backgroundSkin`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html#backgroundSkin).

## Related Links

- [`com.feathersui.controls.IPv4AddressTextInput` API Documentation](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/IPv4AddressTextInput.html)