---
title: How to use the PopUpGridView component
layout: "docs.html"
sidebarTitle: PopUpGridView
---

The [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) class displays a [button](../button.md), that when triggered, renders the items from a [data collection](../data-collections.md) in a pop-up [grid view](../grid-view.md).

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var popUpGridView = new PopUpGridView();
addChild(popUpGridView);
```

### Data provider and columns

To render some data in the grid view, pass in a [collection](../data-collections.md) that contains an object for each row.

```haxe
popUpGridView.dataProvider = new ArrayCollection([
    { item: "Chicken breast", dept: "Meat", price: "5.90" },
    { item: "Bacon", dept: "Meat", price: "4.49" },
    { item: "2% Milk", dept: "Dairy", price: "2.49" },
    { item: "Butter", dept: "Dairy", price: "4.69" },
    { item: "Lettuce", dept: "Produce", price: "1.29" },
    { item: "Broccoli", dept: "Produce", price: "2.99" },
    { item: "Whole Wheat Bread", dept: "Bakery", price: "2.49" },
    { item: "English Muffins", dept: "Bakery", price: "2.99" }
]);
```

Next, define the columns in the grid view, so that it knows which fields from the data provider's items to display. One of the items from the data provider appears below.

```haxe
{ item: "Broccoli", dept: "Produce", price: "2.99" },
```

The item has three fields, `item`, `dept`, and `price`. Create a separate [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) for each of the fields in the item, and pass them to the [`columns`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#columns) property.

```haxe
popUpGridView.columns = new ArrayCollection([
    new GridViewColumn("Item", (data:Dynamic) -> data.item),
    new GridViewColumn("Department", (data:Dynamic) -> data.dept),
    new GridViewColumn("Unit Price", (data:Dynamic) -> data.price)
]);
```

The first parameter of the [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) is the text to display in each column header. The second parameter is passed to the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html#itemToText) property, which is a function that returns the text to display in a cell renderer.

> Items in the collection are not required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like `{ item: "Bacon", dept: "Meat", price: "4.49" }` in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures).

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
popUpGridView.addEventListener(Event.CHANGE, popUpGridView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#selectedItem) property in the listener.

```haxe
function popUpGridView_changeHandler(event:Event):Void {
    var popUpGridView = cast(event.currentTarget, PopUpGridView);
    trace("PopUpGridView selectedItem change: " + popUpGridView.selectedItem.text);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#selectedIndex) property references the index of the items in the grid view's collection, in the order that they were added.

```haxe
function popUpGridView_changeHandler(event:Event):Void {
    var popUpGridView = cast(event.currentTarget, PopUpGridView);
    trace("PopUpGridView selectedIndex change: " + popUpGridView.selectedIndex);
}
```

## Add or remove rows

To add a new row at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```haxe
var newRow = { item: "Gala Apple", dept: "Produce", price: "1.00" };
popUpGridView.dataProvider.add(newRow);
```

To add a new row at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```haxe
var newRow = { item: "Banana", dept: "Produce", price: "0.32" };
popUpGridView.dataProvider.addAt(newRow, 0);
```

In the example above, a new row is added to the beginning.

Similarly, to remove a row, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```haxe
popUpGridView.dataProvider.removeAt(0);
```

## Cell renderers

A _cell renderer_ is a Feathers UI component that displays one of the fields from a single row displayed in a [`GridView`](../grid-view.md) or [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) component. In other words, the [`GridView`](../grid-view.md) displayed by a [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) typically contains many cell renderers in a two-dimensional grid — with each one rendering a different field from each row in the collection.

Feathers UI provides a default [`ItemRenderer`](../item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) also support [custom cell renderers](../custom-item-renderers.md), which allow developers to render the grid view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ item: "Gala Apple", dept: "Frozen", price: "3.99", icon: "https://example.com/img/pizza.png" }
```

While the default [`ItemRenderer`](../item-renderer.md) class can easily display some text and an image, creating a custom cell renderer for this simple data will be a good learning exercise.

A custom cell renderer designed to display this data might use a [`Label`](../label.md) to display one of the strings, and an [`AssetLoader`](../asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](../layout-group-item-renderer.md) — a special base class for custom cell renderers.

```haxe
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var cellRenderer = new LayoutGroupItemRenderer();

    var layout = new HorizontalLayout();
    layout.gap = 6.0;
    layout.paddingTop = 4.0;
    layout.paddingBottom = 4.0;
    layout.paddingLeft = 6.0;
    layout.paddingRight = 6.0;
    cellRenderer.layout = layout;

    var icon = new AssetLoader();
    icon.name = "loader";
    cellRenderer.addChild(icon);

    var label = new Label();
    label.name = "label";
    cellRenderer.addChild(label);

    return cellRenderer;
});
```

> Developers are not required to use the [`LayoutGroupItemRenderer`](../layout-group-item-renderer.md) class. In fact, a custom cell renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and [all other Feathers UI components](../ui-components.md).

Both [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) and [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) define `cellRendererRecycler` properties. On [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html), the [`cellRendererRecycler`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html#cellRendererRecycler) property may be used to customize the cell renderers in that specific column. On [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html), the [`cellRendererRecycler`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#cellRendererRecycler) property may be used to customize the default cell renderers used when a particular column doesn't have a specific cell renderer.

```haxe
var column = new GridViewColumn("Item", (data:Dynamic) -> data.item);
column.cellRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) creates the cell renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can do that.

```haxe
recycler.update = (cellRenderer:LayoutGroupItemRenderer, state:GridViewCellState) -> {
    var label = cast(cellRenderer.getChildByName("label"), Label);
    var loader = cast(cellRenderer.getChildByName("loader"), AssetLoader);

    label.text = state.text;
    loader.source = state.data.icon;
};
```

When the [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the cell renderer and an [`GridViewCellState`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html) object. [`GridViewCellState`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html) has a number of useful properties.

- [`column`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#column) is the [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) that contains the item.
- [`columnIndex`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#columnIndex) is the position of the column within the row.
- [`data`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#data) is the row from the collection.
- [`enabled`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#enabled) indicates if the cell renderer should be enabled or not.
- [`owner`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#owner) is the [`GridView`](../grid-view.md) that contains the item (_Note:_ not the [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html)).
- [`rowIndex`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#rowIndex) is the position of the row within the collection.
- [`selected`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html#itemToText) from the column.

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#text) is displayed by the [`Label`](../label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#data) (remember the example row from above, with `item` and `icon` fields) is displayed by the [`AssetLoader`](../asset-loader.md).

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom cell renderer when it is no longer used by the [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html).

```haxe
recycler.reset = (cellRenderer:LayoutGroupItemRenderer, state:GridViewCellState) -> {
    var label = cast(cellRenderer.getChildByName("label"), Label);
    var loader = cast(cellRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on the sub-components of a [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) component, including styles on the button and the grid view.

### Button

The button in a [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) component is of type [`Button`](../button.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html).

> See [How to use the `Button` component](../button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`PopUpGridView.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#CHILD_VARIANT_BUTTON) constant in a [theme](../themes.md) to provide a function that globally styles the buttons in all [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    PopUpGridView.CHILD_VARIANT_BUTTON,
    setPopUpGridView_Button_Styles);
```

The function should use the following signature.

```haxe
function setPopUpGridView_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `PopUpGridView`

The [`buttonFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
popUpGridView.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### GridView

The grid view in a [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) component is of type [`GridView`](../grid-view.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html).

> See [How to use the `GridView` component](../grid-view.md#styles) for complete details about which styles are available for the grid view.

#### Style grid view globally

Use the [`PopUpGridView.CHILD_VARIANT_GRID_VIEW`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#CHILD_VARIANT_GRID_VIEW) constant in a [theme](../themes.md) to provide a function that globally styles the grid views in all [`PopUpGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html) components.

```haxe
styleProvider.setStyleFunction(
    GridView,
    PopUpGridView.CHILD_VARIANT_GRID_VIEW,
    setPopUpGridView_GridView_Styles);
```

The function should use the following signature.

```haxe
function setPopUpGridView_GridView_Styles(gridView:GridView):Void {
    // ... set styles here
}
```

#### Style the grid view in a specific `PopUpGridView`

The [`gridViewFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#gridViewFactory) property may be used to customize the creation of an individual grid view.

```haxe
popUpGridView.gridViewFactory = () -> {
    var gridView = new GridView();
    // ... set styles here
    return gridView;
};
```

## Related Links

- [`com.feathersui.controls.PopUpGridView` API Documentation](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html)
- [How to use the `GridView` component](../grid-view.md)