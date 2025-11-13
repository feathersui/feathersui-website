---
title: How to use the PopUpTreeView component
layout: "docs.html"
sidebarTitle: PopUpTreeView
---

The [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) class displays a [button](../button.md), that when triggered, renders the items from a [hierarchical data collection](../data-collections.md#hierarchical-collections) in a pop-up [tree view](../tree-view.md).

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var popUpTreeView = new PopUpTreeView();
addChild(popUpTreeView);
```

### Data provider

To render some data in the tree view, pass in a [hierarchical collection](../data-collections.md#hierarchical-collections) that contains an object for each row.

```haxe
var collection = new ArrayHierarchicalCollection([
    {
        text: "Node 1",
        children: [
            {
                text: "Node 1A",
                children: [
                    { text: "Node 1A-I" },
                    { text: "Node 1A-II" }
                ]
            },
            { text: "Node 1B" },
        ]
    },
    { text: "Node 2" },
    {
        text: "Node 3",
        children: [
            { text: "Node 3A" },
            { text: "Node 3B" },
            { text: "Node 3C" }
        ]
    }
]);
popUpTreeView.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/current/feathers/data/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the tree view.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Set the [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#itemToText) method to get the text from each item to display from the collection.

```haxe
popUpTreeView.itemToText = (item:Dynamic) -> item.text;
```

> Items in the collection are not required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like `{text: "Node 1B"}` in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures). If not using class instances, consider creating a [typedef](https://haxe.org/manual/type-system-typedef.html) for improved type checking at compile-time. If you use a class, be sure to update the item parameter's type in the `itemToChildren` and `itemToText` functions so that the compiler can catch any errors.

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
popUpTreeView.addEventListener(Event.CHANGE, popUpTreeView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#selectedItem) property in the listener.

```haxe
function popUpTreeView_changeHandler(event:Event):Void {
    var popUpTreeView = cast(event.currentTarget, PopUpTreeView);
    trace("PopUpTreeView selectedItem change: " + popUpTreeView.selectedItem.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#selectedLocation) property references the location of the items in the tree view's collection as an `Array` of integers.

```haxe
function popUpTreeView_changeHandler(event:Event):Void {
    var popUpTreeView = cast(event.currentTarget, PopUpTreeView);
    trace("PopUpTreeView selectedLocation change: " + popUpTreeView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newItem = { text: "New Item" };
var newLocation = [2, 1];
popUpTreeView.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [2, 1];
popUpTreeView.dataProvider.removeAt(locationToRemove);
```

## Item renderers

An _item renderer_ is a Feathers UI component that displays a single item from a [data collection](../data-collections.md) inside a component like [`TreeView`](../tree-view.md) and [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html). In other words, the [`TreeView`](../tree-view.md) displayed by a [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) typically contains multiple item renderers — with each one rendering a different item from the collection.

Feathers UI provides a default [`HierarchicalItemRenderer`](../hierarchical-item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) also support [custom item renderers](../custom-item-renderers.md), which allow developers to render the tree view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ name: "Pizza", icon: "https://example.com/img/pizza.png" }
```

While the default [`HierarchicalItemRenderer`](../hierarchical-item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

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

    var openedToggle = new ToggleButton();
    openedToggle.name = "openedToggle";
    itemRenderer.addChild(openedToggle);

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

Pass the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to the [`itemRendererRecycler`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#itemRendererRecycler) property.

```haxe
popUpTreeView.itemRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) creates the item renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can do that.

```haxe
recycler.update = (itemRenderer:LayoutGroupItemRenderer, state:TreeViewItemState) -> {
    var openedToggle = cast(itemRenderer.getChildByName("openedToggle"), ToggleButton);
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    openedToggle.visible = state.branch;
    openedToggle.selected = state.branch && state.opened;
    label.text = state.text;
    loader.source = state.data.icon;
};
```

When the [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the item renderer and an [`TreeViewItemState`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html) object. [`TreeViewItemState`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html) has a number of useful properties.

- [`data`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#data) is the item from the collection.
- [`branch`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#branch) indicates if the item is a branch or not.
- [`enabled`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#enabled) indicates if the item renderer should be enabled or not.
- [`layoutIndex`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#layoutIndex) is the position of the item within the layout.
- [`location`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#location) is the position of the item within the collection.
- [`opened`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#opened) indicates if a branch is opened or not.
- [`owner`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#owner) is the [`TreeView`](../tree-view.md) that contains the item (_Note:_ not the [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html)).
- [`selected`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) is displayed by the [`Label`](../label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](../asset-loader.md). The values of [`branch`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#branch) and [`opened`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#opened) are used with a [`ToggleButton`](../toggle-button.md) to display whether a branch is opened or not. Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) value from the `name` field.

```haxe
popUpTreeView.itemToText = function(item:Dynamic):String {
    return item.name;
};
```

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html).

```haxe
recycler.reset = (itemRenderer:LayoutGroupItemRenderer, state:TreeViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on the sub-components of a [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) component, including styles on the button and the tree view.

### Button

The button in a [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) component is of type [`Button`](../button.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html).

> See [How to use the `Button` component](../button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`PopUpTreeView.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#CHILD_VARIANT_BUTTON) constant in a [theme](../themes.md) to provide a function that globally styles the buttons in all [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    PopUpTreeView.CHILD_VARIANT_BUTTON,
    setPopUpTreeView_Button_Styles);
```

The function should use the following signature.

```haxe
function setPopUpTreeView_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `PopUpTreeView`

The [`buttonFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
popUpTreeView.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### TreeView

The tree view in a [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) component is of type [`TreeView`](../tree-view.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html).

> See [How to use the `TreeView` component](../tree-view.md#styles) for complete details about which styles are available for the tree view.

#### Style tree view globally

Use the [`PopUpTreeView.CHILD_VARIANT_TREE_VIEW`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#CHILD_VARIANT_TREE_VIEW) constant in a [theme](../themes.md) to provide a function that globally styles the tree views in all [`PopUpTreeView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html) components.

```haxe
styleProvider.setStyleFunction(
    TreeView,
    PopUpTreeView.CHILD_VARIANT_TREE_VIEW,
    setPopUpTreeView_TreeView_Styles);
```

The function should use the following signature.

```haxe
function setPopUpTreeView_TreeView_Styles(treeView:TreeView):Void {
    // ... set styles here
}
```

#### Style the tree view in a specific `PopUpTreeView`

The [`treeViewFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html#treeViewFactory) property may be used to customize the creation of an individual tree view.

```haxe
popUpTreeView.treeViewFactory = () -> {
    var treeView = new TreeView();
    // ... set styles here
    return treeView;
};
```

## Related Links

- [`com.feathersui.controls.PopUpTreeView` API Documentation](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeView.html)
- [How to use the `TreeView` component](../tree-view.md)