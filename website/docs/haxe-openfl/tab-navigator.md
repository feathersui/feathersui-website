---
title: How to use the TabNavigator component
sidebar_label: TabNavigator
---

The [`TabNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/TabNavigator.html) class supports navigation between views using a [`TabBar`](./tab-bar.md) component to select the current view.

Navigation can be enhanced with animation, called a _transition_. Feathers UI provides a number of [animated transitions](./navigator-transitions.md) out of the box, and a simple API allows anyone to create [custom transitions](./custom-navigator-transitions.md).

## The Basics

Start by creating a [`TabNavigator`](https://api.feathersui.com/current/feathers/controls/navigators/TabNavigator.html), and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var navigator = new TabNavigator();
addChild(navigator);
```

### Data provider

A view can be a Feathers UI component or any OpenFL display object. The following example creates a simple view with a [label](./label.md).

```haxe
class HomeView extends LayoutGroup {
    public function new() {
        super();

        var message = new Label();
        message.text = "Hello World";
        addChild(message);
    }
}
```

To add a new view that the navigator can show, create one or more [`TabItem`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html) objects and add them to a [collection](./data-collections.md):

```haxe
navigator.dataProvider = new ArrayCollection([
    TabItem.withClass("Home", HomeView),
    TabItem.withClass("Profile", ProfileView),
    TabItem.withClass("Settings", SettingsView)
]);
```

The first argument passed to [`TabItem.withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html#withClass) is the text to be displayed on the tab. The second argument is the `HomeView` class from earlier. The navigator will automatically create an instance of this class when the view needs to be shown.

> The [`TabItem`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html) class defines three static functions for creating items.
>
> - [`withClass()`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html#withClass) accepts any subclass of `DisplayObject`. Each time that the view is shown, a new instance of the class will be instantiated.
> - [`withFunction()`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html#withFunction) accepts a function that returns a display object. Each time that the view is shown, this function will be called. Using a function can be useful for adding children to a view or setting its properties before showing it in the navigator.
> - [`withDisplayObject()`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html#withDisplayObject) accepts an already-instantiated display object. When the view is shown, the same instance will always be reused. _This one can allocate a lot of memory if overused, so be careful!_

## Navigation

To show the view at a specific index in the data provider, set the navigator's [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/navigators/TabNavigator.html#selectedIndex) property

```haxe
navigator.selectedIndex = 2;
```

Alternatively, pass one of the [`TabItem`](https://api.feathersui.com/current/feathers/controls/navigators/TabItem.html) instances from the collection to the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/navigators/TabNavigator.html#selectedItem) property.

```haxe
navigator.selectedItem = navigator.dataProvider.get(2);
```

## Related Links

- [`feathers.controls.navigators.TabNavigator` API Documentation](https://api.feathersui.com/current/feathers/controls/navigators/TabNavigator.html)
- [Animated transitions for view navigators](./navigator-transitions.md)
- [Custom transitions for view navigators](./custom-navigator-transitions.md)
