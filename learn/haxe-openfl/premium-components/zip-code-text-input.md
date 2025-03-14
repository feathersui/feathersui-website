---
title: How to use the ZipCodeTextInput component
layout: "docs.html"
sidebarTitle: ZipCodeTextInput
---

The [`ZipCodeTextInput`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html) class creates an editable text field for [U.S. ZIP Codes](https://en.wikipedia.org/wiki/ZIP_Code), which are postal codes that designate different regions within the country. A ZIP Code is divided into two parts; the first part consists of five digits that are always required, while an optional second part adds four more digits to designate a more specific location. A ZIP Code with both parts is known as ZIP+4. Example ZIP Codes include `55082`, `90210`, and `20500-0005`.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Create a [`ZipCodeTextInput`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html) control and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var input = new ZipCodeTextInput();
addChild(input);
```

Text may be changed programatically by setting the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#text) property.

```haxe
input.text = "55082";
```

> **Warning!** If the string value passed to the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#text) property setter is not formatted correctly, an [`ArgumentError`](https://api.openfl.org/openfl/errors/ArgumentError.html) may be thrown. If the ZIP code includes the optional +4, the delimiter between the two parts must be a `-` character. Other special characters or letters may not be used as the delimiter. The delimiters may be omitted entirely, so a 9 digit string of numbers like `"205000005"` is allowed. Partial SSN strings are allowed as well, so both `"123"` and `"12345-67"` would be considered valid.

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user edits the text.

```haxe
input.addEventListener(Event.CHANGE, textInput_changeHandler);
```

Check for the new value of the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#text) property in the listener function.

```haxe
function textInput_changeHandler(event:Event):Void {
    var input = cast(event.currentTarget, ZipCodeTextInput);
    trace("text input change: " + input.text);
}
```

### Plus 4 Mode

By default, the inclusion of the +4 part of the ZIP code is optional. The input will not render the `-` character unless one of the +4 digits exists. However, the [`plus4Mode`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#plus4Mode) property may be used to require or completely disable rendering of the `-` character.

When the [`plus4Mode`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#plus4Mode) property is set to [`ZIPCodePlus4Mode.REQUIRED`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZIPCodePlus4Mode.html#REQUIRED), the `-` character is always rendered inside the text input to indicate to users that they are required to type the full nine digits in their ZIP code.

```haxe
input.plus4Mode = REQUIRED;
```

When the [`plus4Mode`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#plus4Mode) property is set to [`ZIPCodePlus4Mode.DISABLED`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZIPCodePlus4Mode.html#DISABLED), the `-` character is never rendered inside the text input, and the [`text`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#text) property is not allowed to be longer than 5 digits.

```haxe
input.plus4Mode = DISABLED;
```

## States

When the user interacts with a text input using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the text input's background skin and font styles may be rendered differently in different states.

The [`TextInputState`](https://api.feathersui.com/current/feathers/controls/TextInputState.html) enum defines the states available to all text input components.

- [`ENABLED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#ENABLED) is the text input's default state.
- [`DISABLED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#DISABLED) is the text input's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.
- [`FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED) is the text input's state when it currently has focus.
- [`ERROR`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#ERROR) is the text input's state when an error string has been set.


## Styles

A number of styles may be customized on a [`ZipCodeTextInput`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html) component, including the font styles and the background skin. Several more styles may be used to adjust the layout of the text input's children.

### Font styles

The font styles of the text input's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#textFormat) property.

```haxe
input.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the text input's text should use different font styles when the text input is in different states, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) and state value to the [`setTextFormatForState()`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#setTextFormatForState) method.

```haxe
input.setTextFormatForState(TextInputState.FOCUSED, new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the text input's text will change when the text input receives focus, and the state changes to [`TextInputState.FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED).

When font styles aren't available for a specific state, the text input will use the default [`textFormat`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#textFormat) as a fallback.

### Background skin

Give the text input a background using the [`backgroundSkin`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

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

In the examples above, the text input uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the text input's current state. Alternatively, the text input's [`setSkinForState()`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#setSkinForState) method allows the text input to display a completely different display object when its current state changes.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
input.backgroundSkin = defaultSkin;

var hoverSkin = new RectangleSkin();
// ... set border, fill, width, and height
input.setSkinForState(TextInputState.FOCUSED, hoverSkin);
```

In the example above, the text input will have a custom skin for the [`FOCUSED`](https://api.feathersui.com/current/feathers/controls/TextInputState.html#FOCUSED) state, and all other states will share the default [`backgroundSkin`](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html#backgroundSkin).

## Related Links

- [`com.feathersui.controls.ZipCodeTextInput` API Documentation](https://api.feathersui.com/premium-components/text-inputs-pack/com/feathersui/controls/ZipCodeTextInput.html)