---
title: How to use the PopUpDatePicker component
sidebar_label: PopUpDatePicker
---

The [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) class displays a [text input](./text-input.md) and a [button](./button.md), that when triggered, renders calendar view in a pop-up [date picker](./date-picker.md).

<figure>
<!-- needs to be a bit taller to accomodate larger touch hit areas on mobile -->
<iframe src="/learn/haxe-openfl/samples/pop-up-date-picker.html" width="100%" height="270"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html"><code>PopUpDatePicker</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Start by creating a [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var popUpDatePicker = new PopUpDatePicker();
addChild(popUpDatePicker);
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different tab.

```haxe
popUpDatePicker.addEventListener(Event.CHANGE, popUpDatePicker_changeHandler);
```

Check for the new value of the [`selectedDate`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html#selectedDate) property in the listener.

```haxe
function popUpDatePicker_changeHandler(event:Event):Void {
    var popUpDatePicker = cast(event.currentTarget, PopUpDatePicker);
    trace("PopUpDatePicker selectedDate change: " + popUpDatePicker.selectedDate);
}
```

## Styles

A number of styles may be customized on the sub-components of a [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) component, including styles on the button and the date picker.

### Button

The button in a [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) component is of type [`Button`](./button.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html).

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`PopUpDatePicker.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html#CHILD_VARIANT_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    PopUpDatePicker.CHILD_VARIANT_BUTTON,
    setPopUpDatePicker_Button_Styles);
```

The function should use the following signature.

```haxe
function setPopUpDatePicker_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `PopUpDatePicker`

The [`buttonFactory`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
popUpDatePicker.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### Date Picker

The date picker in a [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) component is of type [`DatePicker`](./date-picker.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html).

> See [How to use the `DatePicker` component](./date-picker.md#styles) for complete details about which styles are available for the date picker.

#### Style date picker globally

Use the [`PopUpDatePicker.CHILD_VARIANT_DATE_PICKER`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html#CHILD_VARIANT_DATE_PICKER) constant in a [theme](./themes.md) to provide a function that globally styles the date pickers in all [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) components.

```haxe
styleProvider.setStyleFunction(
    DatePicker,
    PopUpDatePicker.CHILD_VARIANT_DATE_PICKER,
    setPopUpDatePicker_DatePicker_Styles);
```

The function should use the following signature.

```haxe
function setPopUpDatePicker_DatePicker_Styles(datePicker:DatePicker):Void {
    // ... set styles here
}
```

#### Style the date picker in a specific `PopUpDatePicker`

The [`datePickerFactory`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html#datePickerFactory) property may be used to customize the creation of an individual [`DatePicker`](./date-picker.md).

```haxe
popUpDatePicker.datePickerFactory = () -> {
    var datePicker = new DatePicker();
    // ... set styles here
    return datePicker;
};
```

## Related Links

- [`feathers.controls.PopUpDatePicker` API Reference](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html)
- [How to use the `DatePicker` component](./date-picker.md)
