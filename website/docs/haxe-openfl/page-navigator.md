---
title: How to use the PageNavigator component
sidebar_label: PageNavigator
---

The [`PageNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/PageNavigator.html) class supports navigation between views using a [`PageIndicator`](./tab-bar.md) component to select the current view.

Navigation can be enhanced with animation, called a _transition_. Feathers UI provides a number of [animated transitions](./navigator-transitions.md) out of the box, and a simple API allows anyone to create [custom transitions](./custom-navigator-transitions.md).

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you.

## The Basics

Start by creating a [`PageNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/PageNavigator.html), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var navigator = new PageNavigator();
addChild(navigator);
```

### Data provider

A page can be a Feathers UI component or any OpenFL display object. The following example creates a simple page view with a [label](./label.md).

```haxe
class Page1 extends LayoutGroup {
    public function new() {
        super();

        var message = new Label();
        message.text = "Hello World";
        addChild(message);
    }
}
```

To add a new view that the navigator can show, create one or more [`PageItem`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html) objects and add them to a [collection](./data-collections.md):

```haxe
navigator.dataProvider = new ArrayCollection([
    PageItem.withClass(Page1),
    PageItem.withClass(Page2),
    PageItem.withClass(Page3)
]);
```

The first argument passed to [`PageItem.withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html#withClass) is the text to be displayed on the page. The second argument is the `Page1` class from earlier. The navigator will automatically create an instance of this class when the view needs to be shown.

> The [`PageItem`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html) class defines three static functions for creating items.
>
> - [`withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html#withClass) accepts any subclass of `DisplayObject`. Each time that the view is shown, a new instance of the class will be instantiated.
> - [`withFunction()`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html#withFunction) accepts a function that returns a display object. Each time that the view is shown, this function will be called. Using a function can be useful for adding children to a view or setting its properties before showing it in the navigator.
> - [`withDisplayObject()`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html#withDisplayObject) accepts an already-instantiated display object. When the view is shown, the same instance will always be reused. _This one can allocate a lot of memory if overused, so be careful!_

## Navigation

To show the view at a specific index in the data provider, set the navigator's [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/navigators/PageNavigator.html#selectedIndex) property

```haxe
navigator.selectedIndex = 2;
```

Alternatively, pass one of the [`PageItem`](https://api.feathersui.com/current/feathers/controls/navigators/PageItem.html) instances from the collection to the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/navigators/PageNavigator.html#selectedItem) property.

```haxe
navigator.selectedItem = navigator.dataProvider.get(2);
```

## Related Links

- [`feathers.controls.navigators.PageNavigator` API Documentation](https://api.feathersui.com/current/feathers/controls/navigators/PageNavigator.html)
- [Animated transitions for view navigators](./navigator-transitions.md)
- [Custom transitions for view navigators](./custom-navigator-transitions.md)
