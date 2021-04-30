---
title: How to use the TabBar component
sidebar_label: TabBar
---

The [`TabBar`](https://api.feathersui.com/current/feathers/controls/TabBar.html) class displays a set of togglable buttons in a row, where only one button at a time may be selected.

<!--
<figure>
<iframe src="/learn/haxe-openfl/samples/tab-bar.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/TabBar.html"><code>TabBar</code></a> component</figcaption>
</figure>
-->

## The Basics

Start by creating a [`TabBar`](https://api.feathersui.com/current/feathers/controls/TabBar.html) control, pass in a [collection](./data-collections.md) that defines the tabs to display, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var tabs = new TabBar();
tabs.dataProvider = new ArrayCollection([
    { text: "A" },
    { text: "B" },
    { text: "C" }
]);
this.addChild(tabs);
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TabBar.html#itemToText) method to get the text from each item to display in a tab.

```hx
tabs.itemToText = function(item:Dynamic):String {
    return item.text;
};
```

> Items in the collection are not required to be simple object literals, like in the example above. Instances of a class are allowed too (and encouraged as a best practice).

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different tab.

```hx
tabs.addEventListener(Event.CHANGE, tabBar_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TabBar.html#selectedItem) property in the listener.

```hx
function tabBar_changeHandler(event:Event):Void {
    var tabs = cast(event.currentTarget, TabBar);
    trace("TabBar selectedItem change: " + tabs.selectedItem.text);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/TabBar.html#selectedIndex) property references the index of the items in the tab bar, in the order that they were added.

```hx
function tabBar_changeHandler(event:Event):Void {
    var tabs = cast(event.currentTarget, TabBar);
    trace("TabBar selectedIndex change: " + tabs.selectedIndex);
}
```

## Add or remove tabs

To add a new tab at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```hx
var newItem = { text: "New Tab" };
tabs.dataProvider.add(newItem);
```

To add a new tab at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```hx
var newItem = { text: "First Tab" };
tabs.dataProvider.addAt(newItem, 0);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove a tab, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```hx
tabs.dataProvider.removeAt(0);
```

## Styles

The tabs in a [`TabBar`](https://api.feathersui.com/current/feathers/controls/TabBar.html) component may be styled to change its appearance.

### Tabs

The tabs in a [`TabBar`](https://api.feathersui.com/current/feathers/controls/TabBar.html) component are of type [`ToggleButton`](./toggle-button.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual tab bar.

> See [How to use the `ToggleButton` component](./toggle-button.md#styles) for complete details about which styles are available for the tabs.

#### Style tabs globally

Use the [`CHILD_VARIANT_TAB`](https://api.feathersui.com/current/feathers/controls/TabBar.html#CHILD_VARIANT_TAB) constant in a [theme](./themes.md) to provide a function that globally styles the tabs in all [`TabBar`](https://api.feathersui.com/current/feathers/controls/TabBar.html) components.

```hx
styleProvider.setStyleFunction(
    ToggleButton,
    TabBar.CHILD_VARIANT_TAB,
    setTabBar_Tab_Styles);
```

The function should use the following signature.

```hx
function setTabBar_Tab_Styles(tab:ToggleButton):Void {
    // ... set styles here
});
```

#### Style tabs in a specific `TabBar`

Customize the [`tabRecycler`](https://api.feathersui.com/current/feathers/controls/TabBar.html#tabRecycler) property to customize the styles of the tabs in a specific [`TabBar`](https://api.feathersui.com/current/feathers/controls/TabBar.html) component.

```hx
tabs.tabRecycler = DisplayObjectRecycler.withFunction(() -> {
    var tab = new ToggleButton();
    // ... set styles here
    return tab;
})
```

## Related Links

- [`feathers.controls.TabBar` API Documentation](https://api.feathersui.com/current/feathers/controls/TabBar.html)
