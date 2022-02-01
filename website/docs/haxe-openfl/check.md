---
title: How to use the Check component
sidebar_label: Check
---

The [`Check`](https://api.feathersui.com/current/feathers/controls/Check.html) class may be selected and deselected when clicked or tapped — similar to a [toggle button](toggle-button.md). A check displays text and an icon that indicates the current selection — along with a variety of layout options. Checks have separate states for each of the different pointer phases — with additional variations when selected. The icon and font styles may be customized for each state.

<figure>
<iframe src="/learn/haxe-openfl/samples/check.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Check.html"><code>Check</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`Check`](https://api.feathersui.com/current/feathers/controls/Check.html) control, give it some text to display, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var check = new Check();
check.text = "Click Me";
addChild(check);
```

A check may be selected and deselected when it is triggered, or it can be changed programmatically by setting the [`selected`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selected) property.

```haxe
check.selected = true;
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user changes the check's selection.

```haxe
check.addEventListener(Event.CHANGE, check_changeHandler);
```

Check for the new value of the [`selected`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selected) property in the listener function.

```haxe
function check_changeHandler(event:Event):Void {
    var check = cast(event.currentTarget, Check);
    trace("check.selected change: " + check.selected);
}
```

## States

When the user interacts with a check using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the check's icon and font styles may all be rendered differently in different states.

Similar to [`ToggleButton`](./toggle-button.md), the [`Check`](https://api.feathersui.com/current/feathers/controls/Check.html) component uses the [`ToggleButtonState`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html) enum, which provides the following values.

- [`UP(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#UP) is the check's default state when the user is not interacting with it, and the check is enabled.
- [`DOWN(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) is the state when the user presses the check with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the check is focused.
- [`HOVER(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#HOVER) is the state when the mouse is hovering over the check. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DISABLED) is the check's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.

Notice that each state also defines a boolean value to indicate if the check is selected or not. `DOWN(true)` and `DOWN(false)` both indicate that the check is currently pressed down, but the value of `true` indicates that it is currently selected, while `false` means that it is not selected.

## Styles

A number of styles may be customized on a [`Check`](https://api.feathersui.com/current/feathers/controls/Check.html) component, including the icon and font styles. Several more styles may be used to adjust the layout of the check's children.

### Font styles

The font styles of the check's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) property.

```haxe
check.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the check's text should use different font styles when the check is selected, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) to the [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) property.

```haxe
check.selectedTextFormat = new TextFormat("Helvetica", 20, 0x9a9a9a, true);
```

Finally, the check's text may use different font styles in a more fine-grained matter — by targeting an exact state. Use the [`setTextFormatForState()`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#setTextFormatForState) method to pass in a state value and a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html).

```haxe
check.setTextFormatForState(ToggleButtonState.DISABLED(false), new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the check's text will change when the check is disabled and not selected.

When font styles aren't available for a specific state, the check will use the default [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) as a fallback (preferring [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) when selected, of course).

### Icon skin

Give the check an icon using the [`icon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#icon) property. The following example sets it to an OpenFL [`Shape`](https://api.openfl.org/openfl/display/Shape.html) instance.

```haxe
var icon = new Shape();
icon.lineStyle(1.0, 0x999999);
icon.beginFill(0xcccccc);
icon.graphics.drawRect(0.0, 0.0, 32.0, 32.0);
icon.graphics.endFill();
check.icon = icon;
```

The appearance of the check's icon may change when the check is selected. In the next example, the another OpenFL [`Shape`](https://api.openfl.org/openfl/display/Shape.html) is passed to the check's [`selectedIcon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedIcon) property.

```haxe
var selectedIcon = new Shape();
selectedIcon.lineStyle(1.0, 0x999999);
selectedIcon.beginFill(0xcccccc);
selectedIcon.graphics.drawRect(0.0, 0.0, 32.0, 32.0);
selectedIcon.graphics.endFill();
selectedIcon.lineStyle(0.0);
selectedIcon.beginFill(0xccccff);
selectedIcon.graphics.drawRect(4.0, 4.0, 24.0, 24.0);
selectedIcon.graphics.endFill();
check.selectedIcon = selectedIcon;
```

The icon may be customized for an exact state too. In the next example, the [`setIconForState()`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#setIconForState) method is called to pass in a custom icon for the [`DOWN(false)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) state.

```haxe
var downIcon = new Shape();
downIcon.lineStyle(1.0, 0x999999);
downIcon.beginFill(0xccccdd);
downIcon.graphics.drawRect(0.0, 0.0, 32.0, 32.0);
downIcon.graphics.endFill();
check.setIconForState(ToggleButtonState.DOWN(false), downIcon);
```

### Layout

Padding may be added on each side of the check, including [top](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingLeft).

```haxe
check.paddingTop = 5.0;
check.paddingRight = 8.0;
check.paddingBottom = 5.0;
check.paddingLeft = 8.0;
```

The icon may be positioned on any side of the check's text. For instance, the following example moves the icon above the text, so that the icon and text are stacked vertically.

```haxe
check.iconPosition = TOP;
```

Set the [`iconPosition`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#iconPosition) property to any of the [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) values.

The [`gap`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#gap) refers to the space, measured in pixels, between the icon and the text.

```haxe
check.gap = 10.0;
```

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#horizontalAlign) and [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#verticalAlign) properties will adjust the alignment of the icon and text inside the check, allowing you to anchor them at the edges or in the center.

```haxe
check.horizontalAlign = CENTER;
check.verticalAlign = MIDDLE;
```

## Related Links

- [`feathers.controls.Check` API Reference](https://api.feathersui.com/current/feathers/controls/Check.html)
- [How to use the `ToggleSwitch` component](./toggle-switch.md)
