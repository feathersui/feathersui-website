---
title: How to display OpenFL assets in an ItemRenderer component
sidebar_label: OpenFL assets as icons
---

Using a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), an [`ItemRenderer`](../item-renderer.md) component may be customized with an [`AssetLoader`](../asset-loader.md) to display assets loaded by OpenFL.

## OpenFL assets

Assets may be defined in your OpenFL [_project.xml_ file](https://lime.software/docs/project-files/xml-format/#assets). In the example below, three image assets are defined with IDs.

```xml
<assets id="pizza" path="assets/img/pizza.png"/>
<assets id="burger" path="assets/img/burger.png"/>
<assets id="fries" path="assets/img/fries.png"/>
```

The [`openfl.utils.Assets`](https://api.openfl.org/openfl/utils/Assets.html) class exposes APIs to access these assets at runtime, and the Feathers UI [`AssetLoader`](../asset-loader.md) component makes it easy add an asset to the display list.

## Create the `ListView`

To start, create a [`ListView`](../list-view.md) component and pass it a [data collection](../data-collections.md) that references the asset IDs from the OpenFL [_project.xml_ file](https://lime.software/docs/project-files/xml-format/#assets).

```hx
var listView = new ListView();
listView.dataProvider = new ArrayCollection([
    { name: "Pizza", asset: "pizza" },
    { name: "Cheeseburger", asset: "burger" },
    { name: "French Fries", asset: "fries" }
]);
listView.itemToText = item -> item.name;
addChild(listView);
```

> The techniques used in this tutorial apply to item renderers in any data containers, not only [`ListView`](../list-view.md). The code is nearly the same for other data containers, such as [`GridView`](../grid-view.md) or [`TreeView`](../tree-view.md).

The [`itemToText`](https://api.feathersui.com/current/feathers/controls/ListView.html#itemToText) function makes it easy to populate the item renderer's text, but how to display the asset IDs stored by the `asset` property?

## Create the `ItemRenderer` and `AssetLoader`

By using a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), we can customize the default [`ItemRenderer`](../item-renderer.md) component to display both text and assets.

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

In the recycler's [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, we have access to a [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) object that contains all of the data that we need to populate the item renderer, including the item from the data provider that is storing the asset ID.

```hx
recycler.update = (itemRenderer:ItemRenderer, state:ListViewItemState) -> {
    itemRenderer.text = state.text;

    var loader = cast(itemRenderer.icon, AssetLoader);
    loader.source = state.data.asset;
};
```

To access the [`AssetLoader`](../asset-loader.md) that we created in [`DisplayObjectRecycler.withFunction()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#withFunction), cast the [`icon`](https://api.feathersui.com/current/feathers/controls/ToggleButton.html#icon) property. Then, use the [`data`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#data) property of the [`ListViewItemState`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html) to get the item from the data provider, which has our `asset` property.

> Be sure to set the item renderer's [`text`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html#text) property too. When you provide a recycler with a custom [`update`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) function, the text is no longer populated automatically.

## Related Links

- [How to use the `ItemRenderer` component](../item-renderer.md)
- [Cookbook: Display an image from a URL in an `ItemRenderer` component](./item-renderer-image-url.md)
- [Feathers UI Cookbook](./index.md)
