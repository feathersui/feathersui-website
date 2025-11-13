---
title: How to use the PopUpListView component
layout: "docs.html"
sidebarTitle: PopUpListView
---

The [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) class displays a [button](./button.md), that when triggered, renders the items from a [data collection](./data-collections.md) in a pop-up [list view](./list-view.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/pop-up-list-view.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/PopUpListView.html"><code>PopUpListView</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var popUpListView = new PopUpListView();
addChild(popUpListView);
```

### Data provider

To render some data in the list view, pass in a [collection](./data-collections.md) that contains an object for each row.

```haxe
popUpListView.dataProvider = new ArrayCollection([
    { text: "A" },
    { text: "B" },
    { text: "C" }
]);
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#itemToText) method to get the text from each item to display in an item renderer.

```haxe
popUpListView.itemToText = function(item:Dynamic):String {
    return item.text;
};
```

> Items in the collection are _not_ required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures). If not using class instances, consider creating a [typedef](https://haxe.org/manual/type-system-typedef.html) for improved type checking at compile-time.

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
popUpListView.addEventListener(Event.CHANGE, popUpListView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#selectedItem) property in the listener.

```haxe
function popUpListView_changeHandler(event:Event):Void {
    var popUpListView = cast(event.currentTarget, PopUpListView);
    trace("PopUpListView selectedItem change: " + popUpListView.selectedItem.text);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#selectedIndex) property references the index of the items in the list view's collection, in the order that they were added.

```haxe
function popUpListView_changeHandler(event:Event):Void {
    var popUpListView = cast(event.currentTarget, PopUpListView);
    trace("PopUpListView selectedIndex change: " + popUpListView.selectedIndex);
}
```

## Add or remove items

To add a new item at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```haxe
var newItem = { text: "New Item" };
popUpListView.dataProvider.add(newItem);
```

To add a new item at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```haxe
var newItem = { text: "First Item" };
popUpListView.dataProvider.addAt(newItem, 0);
```

In the example above, a new item is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```haxe
popUpListView.dataProvider.removeAt(0);
```

## Item renderers

An _item renderer_ is a Feathers UI component that displays a single item from a [data collection](./data-collections.md) inside a component like [`ListView`](../list-view.md) or [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html). In other words, the [`ListView`](../list-view.md) displayed by a  [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) typically contains multiple item renderers — with each one rendering a different item from the collection.

Feathers UI provides a default [`ItemRenderer`](./item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) also support [custom item renderers](./custom-item-renderers.md), which allow developers to render the list view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ name: "Pizza", icon: "https://example.com/img/pizza.png" }
```

While the default [`ItemRenderer`](./item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

A custom item renderer designed to display this data might use a [`Label`](./label.md) to display the text, and an [`AssetLoader`](./asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) — a special base class for custom item renderers.

```haxe
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new LayoutGroupItemRenderer();

    var layout = new HorizontalLayout();
    layout.gap = 6.0;
    layout.paddingTop = 4.0;
    layout.paddingBottom = 4.0;
    layout.paddingLeft = 6.0;
    layout.paddingRight = 6.0;
    itemRenderer.layout = layout;

    var icon = new AssetLoader();
    icon.name = "loader";
    itemRenderer.addChild(icon);

    var label = new Label();
    label.name = "label";
    itemRenderer.addChild(label);

    return itemRenderer;
});
```

> Developers are not required to use the [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) class. In fact, a custom item renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and [all other Feathers UI components](./ui-components.md).

Pass the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to the [`itemRendererRecycler`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#itemRendererRecycler) property.

```haxe
popUpListView.itemRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) creates the item renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can do that.

```haxe
recycler.update = (itemRenderer:LayoutGroupItemRenderer, state:ListViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = state.text;
    loader.source = state.data.icon;
};
```

When the [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the item renderer and an [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) object. [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) has a number of useful properties.

- [`data`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#data) is the item from the collection.
- [`enabled`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#enabled) indicates if the item renderer should be enabled or not.
- [`index`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#index) is the position of the item within the collection.
- [`owner`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#owner) is the [`ListView`](./list-view.md) that contains the item (_Note:_ not the [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html)).
- [`selected`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md). Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) value from the `name` field.

```haxe
popUpListView.itemToText = function(item:Dynamic):String {
    return item.name;
};
```

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html).

```haxe
recycler.reset = (itemRenderer:LayoutGroupItemRenderer, state:ListViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);
    label.text = "";
    loader.source = null;
};

```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on the sub-components of a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) component, including styles on the button and the list view.

### Button

The button in a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) component is of type [`Button`](./button.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html).

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`PopUpListView.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#CHILD_VARIANT_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    PopUpListView.CHILD_VARIANT_BUTTON,
    setPopUpListView_Button_Styles);
```

The function should use the following signature.

```haxe
function setPopUpListView_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `PopUpListView`

The [`buttonFactory`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
popUpListView.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### ListView

The list view in a [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) component is of type [`ListView`](./list-view.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html).

> See [How to use the `ListView` component](./list-view.md#styles) for complete details about which styles are available for the list view.

#### Style list view globally

Use the [`PopUpListView.CHILD_VARIANT_LIST_VIEW`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#CHILD_VARIANT_LIST_VIEW) constant in a [theme](./themes.md) to provide a function that globally styles the list views in all [`PopUpListView`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html) components.

```haxe
styleProvider.setStyleFunction(
    ListView,
    PopUpListView.CHILD_VARIANT_LIST_VIEW,
    setPopUpListView_ListView_Styles);
```

The function should use the following signature.

```haxe
function setPopUpListView_ListView_Styles(listView:ListView):Void {
    // ... set styles here
}
```

#### Style the list view in a specific `PopUpListView`

The [`listViewFactory`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#listViewFactory) property may be used to customize the creation of an individual list view.

```haxe
popUpListView.listViewFactory = () -> {
    var listView = new ListView();
    // ... set styles here
    return listView;
};
```

## Related Links

- [`feathers.controls.PopUpListView` API Documentation](https://api.feathersui.com/current/feathers/controls/PopUpListView.html)
- [How to use the `ListView` component](./list-view.md)
