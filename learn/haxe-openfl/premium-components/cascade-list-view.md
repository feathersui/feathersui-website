---
title: How to use the CascadeListView component
layout: "docs.html"
sidebarTitle: CascadeListView
---

The [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) class renders a button that, when triggered, opens a series of cascading [list views](../list-view.md) displayed as [pop-ups](../pop-ups.md). Each [`ListView`](../list-view.md) displays a single branch from a [hierarchical data collection](../data-collections.md#hierarchical-collections), and the user drills down into the data by selecting an item from each list view.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var cascadeListView = new CascadeListView();
addChild(cascadeListView);
```

### Data provider

To render some data in the cascade list view, pass in a [hierarchical collection](../data-collections.md#hierarchical-collections) that contains an object for each row.

```haxe
var collection = new ArrayHierarchicalCollection([
    {
        text: "Canada",
        children: [
            {
                text: "Ontario",
                children: [
                    {text: "Ottawa"},
                    {text: "Toronto"},
                ]
            },
            {
                text: "Quebec",
                children: [
                    {text: "Montreal"},
                    {text: "Quebec City"},
                ]
            }
        ]
    },
    {
        text: "United Kingdom",
        children: [
            {text: "Bristol"},
            {text: "London"},
            {text: "Manchester"},
            {text: "Newcastle"},
        ]
    },
    {
        text: "United States",
        children: [
            {
                text: "California",
                children: [
                    {text: "Los Angeles"},
                    {text: "Sacramento"},
                    {text: "San Diego"},
                    {text: "San Francisco"},
                ]
            },
            {
                text: "New York",
                children: [
                    {text: "Albany"},
                    {text: "Buffalo"},
                    {text: "New York City"},
                    {text: "Rochester"},
                ]
            },
            {
                text: "Texas",
                children: [
                    {text: "Austin"},
                    {text: "Dallas"},
                    {text: "El Paso"},
                    {text: "Houston"},
                ]
            },
        ]
    }
]);
cascadeListView.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/current/feathers/data/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the cascade list view.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Set the [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#itemToText) method to get the text from each item to display from the collection.

```haxe
cascadeListView.itemToText = (item:Dynamic) -> item.text;
```

> Items in the collection are not required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like `{text: "Node 1B"}` in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures). If you use a class, be sure to update the item parameter's type in the `itemToChildren` and `itemToText` functions so that the compiler can catch any errors.

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
cascadeListView.addEventListener(Event.CHANGE, cascadeListView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#selectedItem) property in the listener.

```haxe
function cascadeListView_changeHandler(event:Event):Void {
    var cascadeListView = cast(event.currentTarget, CascadeListView);
    trace("CascadeListView selectedItem change: " + cascadeListView.selectedItem.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#selectedLocation) property references the location of the items in the cascade list view's collection as an `Array` of integers.

```haxe
function cascadeListView_changeHandler(event:Event):Void {
    var cascadeListView = cast(event.currentTarget, CascadeListView);
    trace("CascadeListView selectedLocation change: " + cascadeListView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newItem = { text: "New Item" };
var newLocation = [2, 1];
cascadeListView.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [2, 1];
cascadeListView.dataProvider.removeAt(locationToRemove);
```

## Item renderers

An _item renderer_ is a Feathers UI component that displays a single item from a [data collection](../data-collections.md) inside a component like [`ListView`](https://api.feathersui.com/current/feathers/controls/ListView.html) or [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html). In other words, a [`ListView`](https://api.feathersui.com/current/feathers/controls/ListView.html) displayed by [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) typically contains multiple item renderers — with each one rendering a different item from the collection.

Feathers UI provides a default [`ItemRenderer`](../item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) also support [custom item renderers](../custom-item-renderers.md), which allow developers to render the list view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ name: "Pizza", icon: "https://example.com/img/pizza.png" }
```

While the default [`ItemRenderer`](../item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

A custom item renderer designed to display this data might use a [`Label`](../label.md) to display the text, and an [`AssetLoader`](../asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](../layout-group-item-renderer.md) — a special base class for custom item renderers.

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

> Developers are not required to use the [`LayoutGroupItemRenderer`](../layout-group-item-renderer.md) class. In fact, a custom item renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and [all other Feathers UI components](../ui-components.md).

Pass the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to the [`itemRendererRecycler`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#itemRendererRecycler) property.

```haxe
cascadeListView.itemRendererRecycler = recycler;
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
- [`owner`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#owner) is the [`ListView`](https://api.feathersui.com/current/feathers/controls/ListView.html) that contains the item (_Note:_ not the [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html)).
- [`selected`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) is displayed by the [`Label`](../label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](../asset-loader.md). Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) value from the `name` field.

```haxe
cascadeListView.itemToText = function(item:Dynamic):String {
    return item.name;
};
```

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html).

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

A number of styles may be customized on the sub-components of a [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) component, including styles on the button and the list views.

### Button

The button in a [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) component is of type [`Button`](../button.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html).

> See [How to use the `Button` component](../button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`CascadeListView.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#CHILD_VARIANT_BUTTON) constant in a [theme](../themes.md) to provide a function that globally styles the buttons in all [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    CascadeListView.CHILD_VARIANT_BUTTON,
    setCascadeListView_Button_Styles);
```

The function should use the following signature.

```haxe
function setCascadeListView_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `CascadeListView`

The [`buttonFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
cascadeListView.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### ListView

The list views in a [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) component are of type [`ListView`](../list-view.md). Their appearance may be customized globally in a [theme](../themes.md), or they may be customized outside of a theme on an specific, individual [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html).

> See [How to use the `ListView` component](../list-view.md#styles) for complete details about which styles are available for the list view.

#### Style list view globally

Use the [`CascadeListView.CHILD_VARIANT_LIST_VIEW`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#CHILD_VARIANT_List_VIEW) constant in a [theme](../themes.md) to provide a function that globally styles the list views in all [`CascadeListView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html) components.

```haxe
styleProvider.setStyleFunction(
    ListView,
    CascadeListView.CHILD_VARIANT_LIST_VIEW,
    setCascadeListView_ListView_Styles);
```

The function should use the following signature.

```haxe
function setCascadeListView_ListView_Styles(listView:ListView):Void {
    // ... set styles here
}
```

#### Style the list views in a specific `CascadeListView`

The [`listViewFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html#listViewFactory) property may be used to customize the creation of an individual list view.

```haxe
cascadeListView.listViewFactory = () -> {
    var listView = new ListView();
    // ... set styles here
    return listView;
};
```

## Related Links

- [`com.feathersui.controls.CascadeListView` API Documentation](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/CascadeListView.html)