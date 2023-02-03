---
title: How to use the Form and FormItem components
sidebar_label: Form / FormItem
---

The [`Form`](https://api.feathersui.com/current/feathers/controls/Form.html) and [`FormItem`](https://api.feathersui.com/current/feathers/controls/FormItem.html) classes may be used to group a set of user-editable fields together. A form supports the submission of data when the <kbd>Enter</kbd>/<kbd>Return</kbd> key is pressed, or when a specific button is triggered.

<figure>
<iframe src="/learn/haxe-openfl/samples/form.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Form.html"><code>Form</code></a> and <a href="https://api.feathersui.com/current/feathers/controls/FormItem.html"><code>FormItem</code></a> components</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Create a [`Form`](https://api.feathersui.com/current/feathers/controls/Form.html) component, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var form = new Form();
addChild(form);
```

Typically, when you want to add a field to the form, you will wrap a UI control with a [`FormItem`](https://api.feathersui.com/current/feathers/controls/FormItem.html). Below, a [`TextInput`](./text-input.md) is added to the form, with some descriptive text.

```haxe
var nameItem = new FormItem();
nameItem.text = "Name:";
nameItem.content = new TextInput();
form.addChild(nameItem);
```

> Like most Feathers UI containers, any type of display object may be added as a child of a [`Form`](https://api.feathersui.com/current/feathers/controls/Form.html). You are not strictly required to wrap all children with a [`FormItem`](https://api.feathersui.com/current/feathers/controls/FormItem.html).

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`FormEvent.SUBMIT`](https://api.feathersui.com/current/feathers/events/FormEvent.html#SUBMIT) to perform an action when the form is submitted.

```haxe
form.addEventListener(FormEvent.SUBMIT, form_submitHandler);
```

Listeners for [`FormEvent.SUBMIT`](https://api.feathersui.com/current/feathers/events/FormEvent.html#SUBMIT) have the following function signature.

```haxe
function form_submitHandler(event:FormEvent):Void {
    var form = cast(event.currentTarget, Form);
    trace("form submitted");
}
```

### Submit button

Set the [`submitButton`](https://api.feathersui.com/current/feathers/controls/Form.html#submitButton) property to indicate that a specific button should cause the form to dispatch [`FormEvent.SUBMIT`](https://api.feathersui.com/current/feathers/events/FormEvent.html#SUBMIT).

```haxe
var sendButton = new Button();
sendButton.text = "Send";
form.addChild(sendButton);

form.submitButton = sendButton;
```

### Required form items

Sometimes, some items in a form are optional, while others are required. Typically, an asterisk or other symbol is displayed next to required form items. Set a form item's [`required`](https://api.feathersui.com/current/feathers/controls/FormItem.html#required) property to indicate that it is required.

```haxe
var nameItem = new FormItem();
nameItem.required = true;
```

> **Warning!** Marking a form item as required does not automatically prevent the [`Form`](https://api.feathersui.com/current/feathers/controls/Form.html) from being submitted. It is simply a visual indication, and manual form validation is required to cancel submission if data is missing.

## `Form` Styles

A [`Form`](https://api.feathersui.com/current/feathers/controls/Form.html) component may have an optional background skin.

### Background skin

Optionally give the form a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
form.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The form automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the size and position of children), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the form's border or fill may be customized to change when the form is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the form is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the form uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the form's current state. Alternatively, the form's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/LayoutGroup.html#disabledBackgroundSkin) method allows the form to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
form.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
form.disabledBackgroundSkin = disabledSkin;
```

In the example above, the form will have a separate skins when enabled and disabled.

## `FormItem` Styles

A number of styles may be customized on a [`FormItem`](https://api.feathersui.com/current/feathers/controls/FormItem.html) component, including the font styles, an optional background skin, and various layout adjustments.

### Font styles

The font styles of the form item's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/FormItem.html#textFormat) property.

```haxe
formItem.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the label's text should use different font styles when the form item is disabled, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) and state value to the [`disabledTextFormat`](https://api.feathersui.com/current/feathers/controls/FormItem.html#disabledTextFormat) property.

### Background skin

Optionally give the form item a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/FormItem.html#backgroundSkin) property. This property works similarly to the [`Form` background skin](#background-skin), described above.

### Required skin

When a form item is [`required`](https://api.feathersui.com/current/feathers/controls/FormItem.html#required), its [`requiredSkin`](https://api.feathersui.com/current/feathers/controls/FormItem.html#requiredSkin) will be displayed.

The following example loads a required skin using its name registered with OpenFL's [asset manager](https://api.openfl.org/openfl/utils/Assets.html).

```haxe
formItem.requiredSkin = new Bitmap(Assets.getBitmapData("myAssetName"));
```

### Layout

The [`textPosition`](https://api.feathersui.com/current/feathers/controls/FormItem.html#textPosition) property controls how the form item's text is positioned, relative to its content.

```haxe
formItem.textPosition = LEFT;
```

Padding may be added on each side of the form item, including [top](https://api.feathersui.com/current/feathers/controls/FormItem.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/FormItem.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/FormItem.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/FormItem.html#paddingLeft).

```haxe
formItem.paddingTop = 5.0;
formItem.paddingRight = 8.0;
formItem.paddingBottom = 5.0;
formItem.paddingLeft = 8.0;
```

The [`gap`](https://api.feathersui.com/current/feathers/controls/FormItem.html#gap) refers to the space, measured in pixels, between the text and the content.

```haxe
formItem.gap = 10.0;
```

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/controls/FormItem.html#horizontalAlign) and [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/FormItem.html#verticalAlign) properties will adjust the alignment of the content within the form item's available space.

```haxe
formItem.horizontalAlign = JUSTIFY;
formItem.verticalAlign = MIDDLE;
```

## Related Links

- [`feathers.controls.Form` API Reference](https://api.feathersui.com/current/feathers/controls/Form.html)
- [`feathers.controls.FormItem` API Reference](https://api.feathersui.com/current/feathers/controls/FormItem.html)
- [How to use the `FormLayout` layout](./form-layout.md)
