---
title: How to use the DatePicker component
sidebar_label: DatePicker
---

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

## Styles

A number of styles may be customized on the sub-components of a [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) component, including styles on the title view, buttons, weekday labels, and date renderers.

### Month title view

The month title view in a [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) component is of type [`Label`](./label.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html).

> See [How to use the `Label` component](./label.md#styles) for complete details about which styles are available for the title.

#### Style month title view globally

Use the [`DatePicker.CHILD_VARIANT_MONTH_TITLE_VIEW`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#CHILD_VARIANT_MONTH_TITLE_VIEW) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) components.

```haxe
styleProvider.setStyleFunction(
    Label,
    DatePicker.CHILD_VARIANT_MONTH_TITLE_VIEW,
    setDatePicker_MonthTitleView_Styles);
```

The function should use the following signature.

```haxe
function setDatePicker_MonthTitleView_Styles(view:Label):Void {
    // ... set styles here
});
```

#### Style the month title view in a specific `DatePicker`

The [`monthTitleViewFactory`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#monthTitleViewFactory) property may be used to customize the creation of an individual button.

```haxe
datePicker.monthTitleViewFactory = () -> {
    var titleView = new Label();
    // ... set styles here
    return titleView;
};
```

### Buttons

The buttons in a [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) component are of type [`Button`](./button.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html).

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the buttons.

#### Style buttons globally

Each button has a variant constant that may be used in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) components.

- [`DatePicker.CHILD_VARIANT_DECREMENT_MONTH_BUTTON`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#CHILD_VARIANT_DECREMENT_MONTH_BUTTON)
- [`DatePicker.CHILD_VARIANT_INCREMENT_MONTH_BUTTON`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#CHILD_VARIANT_INCREMENT_MONTH_BUTTON)
- [`DatePicker.CHILD_VARIANT_DECREMENT_YEAR_BUTTON`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#CHILD_VARIANT_DECREMENT_YEAR_BUTTON)
- [`DatePicker.CHILD_VARIANT_INCREMENT_YEAR_BUTTON`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#CHILD_VARIANT_INCREMENT_YEAR_BUTTON)

```haxe
styleProvider.setStyleFunction(
    Button,
    DatePicker.CHILD_VARIANT_DECREMENT_MONTH_BUTTON,
    setDatePicker_DecrementMonthButton_Styles);
```

The function should use the following signature.

```haxe
function setDatePicker_DecrementMonthButton_Styles(button:Button):Void {
    // ... set styles here
});
```

#### Style the buttons in a specific `DatePicker`

Each button has a factory property may be used to customize the creation of an individual button.

- [`decrementMonthButtonFactory`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#decrementMonthButtonFactory)
- [`incrementMonthButtonFactory`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#incrementMonthButtonFactory)
- [`decrementYearButtonFactory`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#decrementYearButtonFactory)
- [`incrementYearButtonFactory`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#incrementYearButtonFactory)

```haxe
datePicker.decrementMonthButtonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### Date renderers

By default, the date renderers in a [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) component is of type [`ItemRenderer`](./item-renderer.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html).

> See [How to use the `ItemRenderer` component](./item-renderer.md#styles) for complete details about which styles are available for the item renderer.

> Through the [`dateRendererRecycler`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#dateRendererRecycler) property, it's possible to create date renderers from a different component. The code will need some minor modifications to style a different component.

#### Style month title view globally

Use the [`DatePicker.CHILD_VARIANT_DATE_RENDERER`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#CHILD_VARIANT_DATE_RENDERER) constant in a [theme](./themes.md) to provide a function that globally styles the date renderers in all [`DatePicker`](https://api.feathersui.com/current/feathers/controls/DatePicker.html) components.

```haxe
styleProvider.setStyleFunction(
    ItemRenderer,
    DatePicker.CHILD_VARIANT_DATE_RENDERER,
    setDatePicker_DateRenderer_Styles);
```

The function should use the following signature.

```haxe
function setDatePicker_DateRenderer_Styles(view:ItemRenderer):Void {
    // ... set styles here
});
```

#### Style the date renderers in a specific `DatePicker`

The [`dateRendererRecycler`](https://api.feathersui.com/current/feathers/controls/DatePicker.html#dateRendererRecycler) property may be used to customize the creation of an individual date renderer.

```haxe
datePicker.dateRendererRecycler = DisplayObjectRecycler.withFunction(() -> {
    var dateRenderer = new ItemRenderer();
    // ... set styles here
    return dateRenderer;
});
```

## Related Links

- [`feathers.controls.DatePicker` API Reference](https://api.feathersui.com/current/feathers/controls/DatePicker.html)
- [How to use the `PopUpDatePicker` component](./pop-up-date-picker.md)
