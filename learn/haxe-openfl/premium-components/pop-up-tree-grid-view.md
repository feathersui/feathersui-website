---
title: How to use the PopUpTreeGridView component
layout: "docs.html"
sidebarTitle: PopUpTreeGridView
---

The [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) class displays a [button](../button.md), that when triggered, renders the items from a hierarchical [data collection](../data-collections.md) in a pop-up [tree grid view](../tree-grid-view.md).

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Start by creating a [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var popUpTreeGridView = new PopUpTreeGridView();
addChild(popUpTreeGridView);
```

### Data provider and columns

To render some data in the tree grid view, pass in a [hierarchical collection](../data-collections.md#hierarchical-collections) that contains an object for each row.

```haxe
var collection = new ArrayHierarchicalCollection([
{
  dept: "Bakery",
  children: [
    {item: "Whole Wheat Bread", dept: "Bakery", price: "2.49"},
    {item: "English Muffins", dept: "Bakery", price: "2.99"},
  ]
},
{
  dept: "Dairy",
  children: [
    {item: "2% Milk", dept: "Dairy", price: "2.49"},
    {item: "Butter", dept: "Dairy", price: "4.69"},
  ]
},
{
  dept: "Meat",
  children: [
    {item: "Chicken breast", dept: "Meat", price: "5.90"},
    {item: "Bacon", dept: "Meat", price: "4.49"},
  ]
},
{
  dept: "Produce",
  children: [
    {item: "Lettuce", dept: "Produce", price: "1.29"},
    {item: "Broccoli", dept: "Produce", price: "2.99"},
  ]
},
]);
popUpTreeGridView.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/current/feathers/data/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the tree grid view.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Next, define the columns in the tree grid view, so that it knows which fields from the data provider's items to display. One of the items from the data provider appears below.

```haxe
{ item: "Broccoli", dept: "Produce", price: "2.99" }
```

The item has three fields, `item`, `dept`, and `price`. Create a separate [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) for each of the fields in the item, and pass them to the [`columns`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#columns) property.

```haxe
popUpTreeGridView.columns = new ArrayCollection([
    new TreeGridViewColumn("Item", (data:Dynamic) -> data.item),
    new TreeGridViewColumn("Department", (data:Dynamic) -> data.dept),
    new TreeGridViewColumn("Unit Price", (data:Dynamic) -> data.price)
]);
```

The first parameter of the [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) is the text to display in each column header. The second parameter is passed to the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html#itemToText) property, which is a function that returns the text to display in a cell renderer.

> Items in the collection are not required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like `{ item: "Bacon", dept: "Meat", price: "4.49" }` in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures).

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
popUpTreeGridView.addEventListener(Event.CHANGE, popUpTreeGridView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#selectedItem) property in the listener.

```haxe
function popUpTreeGridView_changeHandler(event:Event):Void {
    var popUpTreeGridView = cast(event.currentTarget, PopUpTreeGridView);
    trace("PopUpTreeGridView selectedItem change: " + popUpTreeGridView.selectedItem.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#selectedLocation) property references the location of the items in the tree grid view's collection as an `Array` of integers.

```haxe
function popUpTreeGridView_changeHandler(event:Event):Void {
    var popUpTreeGridView = cast(event.currentTarget, PopUpTreeGridView);
    trace("PopUpTreeGridView selectedLocation change: " + popUpTreeGridView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newRow = { item: "Gala Apple", dept: "Produce", price: "1.00" };
var newLocation = [3, 1];
popUpTreeGridView.dataProvider.addAt(newRow, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [3, 1];
popUpTreeGridView.dataProvider.removeAt(locationToRemove);
```

## Cell renderers

An _cell renderer_ is a Feathers UI component that one of the fields from a single row displayed in a [`TreeGridView`](../tree-grid-view.md) or [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) component. In other words, the [`TreeGridView`](../tree-grid-view.md) displayed by a [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) typically contains many cell renderers in a two-dimensional grid — with each one rendering a different field from each row in the collection.

Feathers UI provides a default [`HierarchicalItemRenderer`](../hierarchical-item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) also support [custom cell renderers](../custom-item-renderers.md), which allow developers to render the tree grid view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ item: "Gala Apple", dept: "Frozen", price: "3.99", icon: "https://example.com/img/pizza.png" }
```

While the default [`HierarchicalItemRenderer`](../hierarchical-item-renderer.md) class can easily display some text and an image, creating a custom cell renderer for this simple data will be a good learning exercise.

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

    var openedToggle = new ToggleButton();
    openedToggle.name = "openedToggle";
    cellRenderer.addChild(openedToggle);

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

Both [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) and [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) define `cellRendererRecycler` properties. On [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html), the [`cellRendererRecycler`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html#cellRendererRecycler) property may be used to customize the cell renderers in that specific column. On [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html), the [`cellRendererRecycler`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#cellRendererRecycler) property may be used to customize the default cell renderers used when a particular column doesn't have a specific cell renderer.

```haxe
var column = new TreeGridViewColumn("Item", (data:Dynamic) -> data.item);
column.cellRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) creates the cell renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can do that.

```haxe
recycler.update = (cellRenderer:LayoutGroupItemRenderer, state:TreeGridViewCellState) -> {
    var openedToggle = cast(cellRenderer.getChildByName("openedToggle"), ToggleButton);
    var label = cast(cellRenderer.getChildByName("label"), Label);
    var loader = cast(cellRenderer.getChildByName("loader"), AssetLoader);

    openedToggle.visible = state.branch && state.columnIndex == 0;
    openedToggle.selected = state.branch && state.opened;
    label.text = state.text;
    loader.source = state.data.icon;
};
```

When the [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the cell renderer and an [`TreeGridViewCellState`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html) object. [`TreeGridViewCellState`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html) has a number of useful properties.

- [`column`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#column) is the [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) that contains the item.
- [`columnIndex`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#columnIndex) is the position of the column within the row.
- [`data`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#data) is the row from the collection.
- [`branch`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#branch) indicates if the row is a branch or not.
- [`enabled`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#enabled) indicates if the cell renderer should be enabled or not.
- [`location`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#location) is the position of the item within the collection.
- [`opened`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#opened) indicates if a branch is opened or not.
- [`owner`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#owner) is the [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) that contains the row (_Note:_ not the [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html)).
- [`rowIndex`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#rowIndex) is the position of the row within the collection.
- [`selected`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#text) is displayed by the [`Label`](../label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](../asset-loader.md). The values of [`branch`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#branch), [`columnIndex`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#columnIndex), and [`opened`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#opened) are used with a [`ToggleButton`](../toggle-button.md) to display whether a branch is opened or not. Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#text) value from the `name` field.

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom cell renderer when it is no longer used by the [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html).

```haxe
recycler.reset = (cellRenderer:LayoutGroupItemRenderer, state:TreeGridViewCellState) -> {
    var openedToggle = cast(cellRenderer.getChildByName("openedToggle"), ToggleButton);
    var label = cast(cellRenderer.getChildByName("label"), Label);
    var loader = cast(cellRenderer.getChildByName("loader"), AssetLoader);

    openedToggle.visible = false;
    openedToggle.selected = false;
    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on the sub-components of a [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) component, including styles on the button and the tree grid view.

### Button

The button in a [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) component is of type [`Button`](../button.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html).

> See [How to use the `Button` component](../button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`PopUpTreeGridView.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#CHILD_VARIANT_BUTTON) constant in a [theme](../themes.md) to provide a function that globally styles the buttons in all [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    PopUpTreeGridView.CHILD_VARIANT_BUTTON,
    setPopUpTreeGridView_Button_Styles);
```

The function should use the following signature.

```haxe
function setPopUpTreeGridView_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `PopUpTreeGridView`

The [`buttonFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
popUpTreeGridView.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### TreeGridView

The tree grid view in a [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) component is of type [`TreeGridView`](../tree-grid-view.md). Its appearance may be customized globally in a [theme](../themes.md), or it may be customized outside of a theme on an specific, individual [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html).

> See [How to use the `TreeGridView` component](../tree-grid-view.md#styles) for complete details about which styles are available for the tree grid view.

#### Style tree grid view globally

Use the [`PopUpTreeGridView.CHILD_VARIANT_TREE_GRID_VIEW`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html#CHILD_VARIANT_GRID_VIEW) constant in a [theme](../themes.md) to provide a function that globally styles the tree grid views in all [`PopUpTreeGridView`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html) components.

```haxe
styleProvider.setStyleFunction(
    TreeGridView,
    PopUpTreeGridView.CHILD_VARIANT_TREE_GRID_VIEW,
    setPopUpTreeGridView_TreeGridView_Styles);
```

The function should use the following signature.

```haxe
function setPopUpTreeGridView_TreeGridView_Styles(treeGridView:TreeGridView):Void {
    // ... set styles here
}
```

#### Style the tree grid view in a specific `PopUpTreeGridView`

The [`treeGridViewFactory`](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpGridView.html#treeGridViewFactory) property may be used to customize the creation of an individual tree grid view.

```haxe
PopUpTreeGridView.treeGridViewFactory = () -> {
    var treeGridView = new TreeGridView();
    // ... set styles here
    return treeGridView;
};
```

## Related Links

- [`com.feathersui.controls.PopUpTreeGridView` API Documentation](https://api.feathersui.com/premium-components/data-containers-pack/com/feathersui/controls/PopUpTreeGridView.html)
- [How to use the `TreeGridView` component](../tree-grid-view.md)