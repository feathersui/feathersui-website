---
title: How to use the PageIndicator component
sidebar_label: PageIndicator
---

The [`PageIndicator`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html) class displays a series of buttons, with one being selected, to show the user which index among a limited set is selected. Typically, it is paired with a component like [`ListView`](./list-view.md) or [`PageNavigator`](./page-navigator.md) that supports scrolling or paging.

## The Basics

Start by creating a [`PageIndicator`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html) control, give it the maximum number of pages, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var pages = new PageIndicator();
pages.maxSelectedIndex = 5;
this.addChild(pages);
```

The number of buttons that a page indicator displays is controlled by the [`maxSelectedIndex`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html#maxSelectedIndex) property. You'll see that the first symbol is automatically selected. If you tap the page indicator on the right side, it will advance to the next index.

The currently selected page may be changed programmatically by setting the [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html#selectedIndex) property.

```hx
pages.selectedIndex = 2;
```

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the selected index changes.

```hx
pages.addEventListener(Event.CHANGE, pageIndicator_changeHandler);
```

Listeners for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) have the following function signature.

```hx
function pageIndicator_changeHandler(event:Event):Void {
    var pages = cast(event.currentTarget, PageIndicator);
    trace("pages.selectedIndex change: " + pages.selectedIndex);
}
```

## Styles

A number of styles may be customized on the toggle buttons displayed in a [`PageIndicator`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html) component.

### Toggle Buttons

The toggle buttons in a [`PageIndicator`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html) component is of type [`ToggleButton`](./toggle-button.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PageIndicator`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html).

> See [How to use the `ToggleButton` component](./toggle-button.md#styles) for complete details about which styles are available for the toggle button.

#### Style toggle buttons globally

Use the [`CHILD_VARIANT_TOGGLE_BUTTON`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html#CHILD_VARIANT_TOGGLE_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the toggle buttons in all [`PageIndicator`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html) components.

```hx
styleProvider.setStyleFunction(
    ToggleButton,
    PageIndicator.CHILD_VARIANT_TOGGLE_BUTTON,
    setPageIndicator_ToggleButton_Styles);
```

The function should use the following signature.

```hx
function setPageIndicator_ToggleButton_Styles(button:ToggleButton):Void {
    // ... set styles here
});
```

#### Style the toggle buttons in a specific `PageIndicator`

The [`toggleButtonRecycler`](https://api.feathersui.com/current/feathers/controls/PageIndicator.html#toggleButtonRecycler) property may be used to customize the creation of the toggle buttons.

```hx
pages.toggleButtonRecycler = DisplayObjectRecycler.withFunction(() -> {
    var button = new ToggleButton();
    // ... set styles here
    return button;
});
```

## Related Links

- [`feathers.controls.PageIndicator` API Documentation](https://api.feathersui.com/current/feathers/controls/PageIndicator.html)
- [How to use the `PageNavigator` component](./page-navigator.md)
