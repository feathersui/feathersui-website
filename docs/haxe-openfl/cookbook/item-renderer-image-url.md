---
title: Cookbook: How to display an image from a URL in an ItemRenderer component
sidebar_label: Image URLs as icons
---

Using a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), an [`ItemRenderer`](../item-renderer.md) component may be customized with an [`AssetLoader`](../asset-loader.md) to display an image loaded from a URL.

## Create the `ListView`

To start, create a [`ListView`](../list-view.md) component and pass it a [data collection](../data-collections.md) containing some items.

```hx
var listView = new ListView();
listView.dataProvider = new ArrayCollection([
    { name: "Pizza", iconURL: "https://example.com/img/pizza.png" },
    { name: "Cheeseburger", iconURL: "https://example.com/img/burger.png" },
    { name: "French Fries", iconURL: "https://example.com/img/fries.png" }
]);
listView.itemToText = item -> item.name;
addChild(listView);
```

> The techniques used in this tutorial apply to item renderers in any data containers, not only [`ListView`](../list-view.md). The code is nearly the same for other data containers, such as [`GridView`](../grid-view.md) or [`TreeView`](../tree-view.md).

The [`itemToText`](https://api.feathersui.com/current/feathers/controls/ListView.html#itemToText) function makes it easy to populate the item renderer's text, but how to display the URLs stored by the `iconURL` property?

## Create the `ItemRenderer` and `AssetLoader`

By using a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), we can customize the default [`ItemRenderer`](../item-renderer.md) component to display both text and images.

Call [`DisplayObjectRecycler.withFunction()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#withFunction) to create an item renderer and pass an [`AssetLoader`](../asset-loader.md) to the item renderer's [`icon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#icon) property.

```hx
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new ItemRenderer();

    itemRenderer.icon = new AssetLoader();

    return itemRenderer;
};
listView.itemRendererRecycler = recycler;
```

We don't populate the [`source`](https://api.feathersui.com/current/feathers/controls/AssetLoader.html#source) property of the [`AssetLoader`](../asset-loader.md) yet because the creation function doesn't have access to any items from the list view's data provider. That data becomes available later, in the recycler's [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function.

## Set the `source` of the `AssetLoader`

In the recycler's [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, we have access to a [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) object that contains all of the data that we need to populate the item renderer, including the item from the data provider that is storing the image's URL.

```hx
recycler.update = (itemRenderer:ItemRenderer, state:ListViewItemState) -> {
    itemRenderer.text = state.text;

    var loader = cast(itemRenderer.icon, AssetLoader);
    loader.source = state.data.iconURL;
};
```

To access the [`AssetLoader`](../asset-loader.md) that we created in [`DisplayObjectRecycler.withFunction()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#withFunction), cast the [`icon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#icon) property. Then, use the [`data`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#data) property of the [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) to get the item from the data provider, which has our `iconURL` property.

> Be sure to set the item renderer's [`text`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html#text) property too. When you provide a recycler with a custom [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, the text is no longer populated automatically.

## Related Links

- [How to use the `ItemRenderer` component](../item-renderer.md)
- [Cookbook: Display an OpenFL asset in an `ItemRenderer` component](./item-renderer-openfl-assets.md)
- [Feathers UI Cookbook](./index.md)
