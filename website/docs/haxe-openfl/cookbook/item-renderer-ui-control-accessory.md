---
title: How to add a UI control to an ItemRenderer component
sidebar_label: UI controls as accessories
---

Using a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), an [`ItemRenderer`](../item-renderer.md) component may be customized to display a UI control as an accessory view.

## Create the `ListView`

To start, create a [`ListView`](../list-view.md) component and pass it a [data collection](../data-collections.md) containing some items.

```haxe
var listView = new ListView();
listView.dataProvider = new ArrayCollection([
    { name: "Volume", accessory: new HSlider() },
    { name: "Enable Music", accessory: new ToggleSwitch() }
]);
listView.itemToText = item -> item.name;
addChild(listView);
```

> The techniques used in this tutorial apply to item renderers in any data containers, not only [`ListView`](../list-view.md). The code is nearly the same for other data containers, such as [`GridView`](../grid-view.md) or [`TreeView`](../tree-view.md).

The [`itemToText`](https://api.feathersui.com/current/feathers/controls/ListView.html#itemToText) function makes it easy to populate the item renderer's text, but how to display the UI controls stored by the `accessory` property?

## Create the `ItemRenderer`

By using a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), we can customize the default [`ItemRenderer`](../item-renderer.md) component to display both text and assets.

Call [`DisplayObjectRecycler.withClass()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#withClass) to create an item renderer.

```haxe
var recycler = DisplayObjectRecycler.withClass(ItemRenderer);
listView.itemRendererRecycler = recycler;
```

We don't add the accessory view yet because the creation function doesn't have access to any items from the list view's data provider. That data becomes available later, in the recycler's [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function.

## Set the `accessoryView` of the `ItemRenderer`

In the recycler's [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, we have access to a [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) object that contains all of the data that we need to populate the item renderer, including the item from the data provider that is storing the UI control.

```haxe
recycler.update = (itemRenderer:ItemRenderer, state:ListViewItemState) -> {
    itemRenderer.text = state.text;

    var accessoryView = cast(state.data.accessory, DisplayObject);
    itemRenderer.accessoryView = accessoryView;
};
```

Use the [`ListViewItemState.data`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#data) property to access the item from the data provider. Then, pass the UI control to the [`accessoryView`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html#accessoryView) property of the item renderer.

> Be sure to set the item renderer's [`text`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#text) property too. When you provide a recycler with a custom [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, the text is no longer populated automatically.

## Related Links

- [How to use the `ItemRenderer` component](../item-renderer.md)
- [Feathers UI Cookbook](./index.md)
