---
title: How to use the DatePicker component
sidebar_label: DatePicker
---

> 🚧 **Under construction!** This documentation is still being written.

The [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) class displays a month calendar view, with buttons to change the current month and year, and a specific date may be selected by the user.

<figure>
<iframe src="/learn/haxe-openfl/samples/date-picker.html" width="100%" height="220"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/DatePicker.html"><code>DatePicker</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you.

## The Basics

Start by creating a [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var datePicker = new DatePicker();
addChild(datePicker);
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different tab.

```haxe
datePicker.addEventListener(Event.CHANGE, datePicker_changeHandler);
```

Check for the new value of the [`selectedDate`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#selectedDate) property in the listener.

```haxe
function datePicker_changeHandler(event:Event):Void {
    var datePicker = cast(event.currentTarget, DatePicker);
    trace("DatePicker selectedDate change: " + datePicker.selectedDate);
}
```

## Related Links

- [`feathers.controls.DatePicker` API Reference](https://api.feathersui.com/current/feathers/controls/DatePicker.html)
- [How to use the `PopUpDatePicker` component](./pop-up-date-picker.md)
