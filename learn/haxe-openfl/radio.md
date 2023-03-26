---
title: How to use the Radio component
layout: "docs.html"
sidebarTitle: Radio
---

The [`Radio`](https://api.feathersui.com/current/feathers/controls/Radio.html) class may be selected when clicked or tapped — similar to a [toggle button](toggle-button.md) — but it is included in a group containing multiple radios, and only one radio may be selected at a time.

<figure>
<iframe src="/learn/haxe-openfl/samples/radio.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Radio.html"><code>Radio</code></a> component</figcaption>
</figure>

## The Basics

Start by creating some [`Radio`](https://api.feathersui.com/current/feathers/controls/Radio.html) controls, give them some text to display, add them to a [`ToggleGroup`](https://api.feathersui.com/current/feathers/core/ToggleGroup.html), and add them to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var group = new ToggleGroup();

var radio1 = new Radio();
radio1.text = "One";
radio1.toggleGroup = group;
addChild(radio1);

var radio2 = new Radio();
radio2.text = "Two";
radio2.toggleGroup = group;
addChild(radio2);

var radio3 = new Radio();
radio3.text = "Three";
radio3.toggleGroup = group;
addChild(radio3);
```

Simply pass the [`ToggleGroup`](https://api.feathersui.com/current/feathers/core/ToggleGroup.html) instance to the [`toggleGroup`](https://api.feathersui.com/current/feathers/controls/Radio.html#toggleGroup) property of each [`Radio`](https://api.feathersui.com/current/feathers/controls/Radio.html) instance.

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different radio.

```haxe
group.addEventListener(Event.CHANGE, toggleGroup_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/core/ToggleGroup.html#selectedItem) property in the listener.

```haxe
function toggleGroup_changeHandler(event:Event):Void {
    var group = cast(event.currentTarget, ToggleGroup);
    var radio = cast(group.selectedItem, Radio);
    trace("group.selectedItem change: " + radio.text);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/current/feathers/core/ToggleGroup.html#selectedIndex) property references the index of the items in the group, in the order that they were added.

```haxe
function toggleGroup_changeHandler(event:Event):Void {
    var group = cast(event.currentTarget, ToggleGroup);
    trace("group.selectedIndex change: " + group.selectedIndex);
}
```

## States

When the user interacts with a radio using the mouse, keyboard, or touchscreen, its state will change, which may affect its appearance. For instance, the radio's icon and font styles may all be rendered differently in different states.

Similar to [`ToggleButton`](./toggle-button.md), the [`Radio`](https://api.feathersui.com/current/feathers/controls/Radio.html) component uses the [`ToggleButtonState`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html) enum, which provides the following values.

- [`UP(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#UP) is the radio's default state when the user is not interacting with it, and the radio is enabled.
- [`DOWN(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) is the state when the user presses the radio with a mouse, touchscreen, or by pressing [`Keyboard.SPACE`](https://api.openfl.org/openfl/ui/Keyboard.html#SPACE) when the radio is focused.
- [`HOVER(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#HOVER) is the state when the mouse is hovering over the radio. This state is not used for touchscreens or keyboard interaction.
- [`DISABLED(selected:Bool)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DISABLED) is the radio's state when its [`enabled`](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled) property has been set to `false`.

Notice that each state also defines a boolean value to indicate if the radio is selected or not. `DOWN(true)` and `DOWN(false)` both indicate that the radio is currently pressed down, but the value of `true` indicates that it is currently selected, while `false` means that it is not selected.

## Styles

A number of styles may be customized on a [`Radio`](https://api.feathersui.com/current/feathers/controls/Radio.html) component, including the icon and font styles. Several more styles may be used to adjust the layout of the radio's children.

### Font styles

The font styles of the radio's text may be customized by passing an [`openfl.text.TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) object to the [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) property.

```haxe
radio.textFormat = new TextFormat("Helvetica", 20, 0x3c3c3c);
```

If the radio's text should use different font styles when the radio is selected, pass a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html) to the [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) property.

```haxe
radio.selectedTextFormat = new TextFormat("Helvetica", 20, 0x9a9a9a, true);
```

Finally, the radio's text may use different font styles in a more fine-grained matter — by targeting an exact state. Use the [`setTextFormatForState()`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#setTextFormatForState) method to pass in a state value and a [`TextFormat`](https://api.openfl.org/openfl/text/TextFormat.html).

```haxe
radio.setTextFormatForState(ToggleButtonState.DISABLED(false), new TextFormat("Helvetica", 20, 0xcc0000));
```

Using the code above, the color of the radio's text will change when the radio is disabled and not selected.

When font styles aren't available for a specific state, the radio will use the default [`textFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#textFormat) as a fallback (preferring [`selectedTextFormat`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedTextFormat) when selected, of course).

### Icon skin

Give the radio an icon using the [`icon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#icon) property. The following example sets it to an OpenFL [`Shape`](https://api.openfl.org/openfl/display/Shape.html) instance.

```haxe
var icon = new Shape();
icon.lineStyle(1.0, 0x999999);
icon.beginFill(0xcccccc);
icon.graphics.drawCircle(16.0, 16.0, 16.0);
icon.graphics.endFill();
radio.icon = icon;
```

The appearance of the radio's icon may change when the radio is selected. In the next example, another OpenFL [`Shape`](https://api.openfl.org/openfl/display/Shape.html) is passed to the radio's [`selectedIcon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#selectedIcon) property.

```haxe
var selectedIcon = new Shape();
selectedIcon.lineStyle(1.0, 0x999999);
selectedIcon.beginFill(0xcccccc);
selectedIcon.graphics.drawCircle(16.0, 16.0, 16.0);
selectedIcon.graphics.endFill();
selectedIcon.lineStyle(0.0);
selectedIcon.beginFill(0xccccff);
selectedIcon.graphics.drawCircle(16.0, 16.0, 10.0);
selectedIcon.graphics.endFill();
radio.selectedIcon = selectedIcon;
```

The icon may be customized for an exact state too. In the next example, the [`setIconForState()`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#setIconForState) method is called to pass in a custom icon for the [`DOWN(false)`](https://api.feathersui.com/current/feathers/controls/ToggleButtonState.html#DOWN) state.

```haxe
var downIcon = new Shape();
downIcon.lineStyle(1.0, 0x999999);
downIcon.beginFill(0xccccdd);
downIcon.graphics.drawCircle(16.0, 16.0, 16.0);
downIcon.graphics.endFill();
radio.setIconForState(ToggleButtonState.DOWN(false), downIcon);
```

### Layout

Padding may be added on each side of the radio, including [top](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingTop), [right](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingRight), [bottom](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingBottom), and [left](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#paddingLeft).

```haxe
radio.paddingTop = 5.0;
radio.paddingRight = 8.0;
radio.paddingBottom = 5.0;
radio.paddingLeft = 8.0;
```

The icon may be positioned on any side of the radio's text. For instance, the following example moves the icon above the text, so that the icon and text are stacked vertically.

```haxe
radio.iconPosition = TOP;
```

Set the [`iconPosition`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#iconPosition) property to any of the [`RelativePosition`](https://api.feathersui.com/current/feathers/layout/RelativePosition.html) values.

The [`gap`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#gap) refers to the space, measured in pixels, between the icon and the text.

```haxe
radio.gap = 10.0;
```

The [`horizontalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#horizontalAlign) and [`verticalAlign`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#verticalAlign) properties will adjust the alignment of the icon and text inside the radio, allowing you to anchor them at the edges or in the center.

```haxe
radio.horizontalAlign = CENTER;
radio.verticalAlign = MIDDLE;
```

## Related Links

- [`feathers.controls.Radio` API Reference](https://api.feathersui.com/current/feathers/controls/Radio.html)
