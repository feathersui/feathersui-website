---
title: How to use the PopUpDatePicker component
sidebar_label: PopUpDatePicker
---

> 🚧 **Under construction!** This documentation is still being written.

The [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) class displays a [text input](./text-input.md) and a [button](./button.md), that when triggered, renders calendar view in a pop-up [date picker](./date-picker.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/pop-up-date-picker.html" width="100%" height="250"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html"><code>PopUpDatePicker</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`PopUpDatePicker`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var datePicker = new PopUpDatePicker();
this.addChild(datePicker);
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different tab.

```hx
datePicker.addEventListener(Event.CHANGE, datePicker_changeHandler);
```

Check for the new value of the [`selectedDate`](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html#selectedDate) property in the listener.

```hx
function datePicker_changeHandler(event:Event):Void {
    var datePicker = cast(event.currentTarget, PopUpDatePicker);
    trace("PopUpDatePicker selectedDate change: " + datePicker.selectedDate);
}
```

## Related Links

- [`feathers.controls.PopUpDatePicker` API Reference](https://api.feathersui.com/current/feathers/controls/PopUpDatePicker.html)
- [How to use the `DatePicker` component](./date-picker.md)
