---
title: How to use the PopUpListView component
sidebar_label: PopUpListView
---

The [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) class displays a [button](./button.md), that when triggered, renders the items from a [data collection](./data-collections.md) in a pop-up [list view](./list-view.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/pop-up-list-view.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/PopUpListView.html"><code>PopUpListView</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) control, pass in a [collection](./data-collections.md) that defines the items to render, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var listView = new PopUpListView();
listView.dataProvider = new ArrayCollection([
    { text: "A" },
    { text: "B" },
    { text: "C" }
]);
this.addChild(listView);
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#itemToText) method to get the text from each item to display in an item renderer.

```hx
listView.itemToText = function(item:Dynamic):String {
    return item.text;
};
```

> Items in the collection are not required to be simple object literals, like in the example above. Instances of a class are allowed too (and encouraged as a best practice).

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```hx
listView.addEventListener(Event.CHANGE, listView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#selectedItem) property in the listener.

```hx
function listView_changeHandler(event:Event):Void {
    var listView = cast(event.currentTarget, PopUpListView);
    trace("PopUpListView selectedItem change: " + listView.selectedItem.text);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#selectedIndex) property references the index of the items in the list view's collection, in the order that they were added.

```hx
function listView_changeHandler(event:Event):Void {
    var listView = cast(event.currentTarget, PopUpListView);
    trace("PopUpListView selectedIndex change: " + listView.selectedIndex);
}
```

## Add or remove items

To add a new item at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```hx
var newItem = { text: "New Item" };
listView.dataProvider.add(newItem);
```

To add a new item at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```hx
var newItem = { text: "First Item" };
listView.dataProvider.addAt(newItem, 0);
```

In the example above, a new item is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```hx
listView.dataProvider.removeAt(0);
```

## Styles

A number of styles may be customized on the sub-components of a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) component, including styles on the button and the list view.

### Button

The button in a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) component is of type [`Button`](./button.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html).

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`CHILD_VARIANT_BUTTON`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#CHILD_VARIANT_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) components.

```hx
styleProvider.setStyleFunction(
    Button,
    PopUpListView.CHILD_VARIANT_BUTTON,
    setPopUpListView_Button_Styles);
```

The function should use the following signature.

```hx
function setPopUpListView_Button_Styles(button:Button):Void {
    // ... set styles here
});
```

#### Style the button in a specific `PopUpListView`

The [`buttonFactory`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#buttonFactory) property may be used to customize the creation of an individual button.

```hx
listView.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### ListView

The list view in a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) component is of type [`ListView`](./list-view.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html).

> See [How to use the `ListView` component](./list-view.md#styles) for complete details about which styles are available for the list view.

#### Style list view globally

Use the [`CHILD_VARIANT_LIST_VIEW`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#CHILD_VARIANT_LIST_VIEW) constant in a [theme](./themes.md) to provide a function that globally styles the list views in all [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) components.

```hx
styleProvider.setStyleFunction(
    ListView,
    PopUpListView.CHILD_VARIANT_LIST_VIEW,
    setPopUpListView_ListView_Styles);
```

The function should use the following signature.

```hx
function setPopUpListView_ListView_Styles(button:ListView):Void {
    // ... set styles here
});
```

#### Style the list view in a specific `PopUpListView`

The [`listViewFactory`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#listViewFactory) property may be used to customize the creation of an individual list view.

```hx
listView.listViewFactory = () -> {
    var listView = new ListView();
    // ... set styles here
    return listView;
};
```

## Related Links

- [`feathers.controls.PopUpListView` API Documentation](https://api.feathersui.com/current/feathers/controls/PopUpListView.html)
- [How to use the `ListView` component](./list-view.md)
