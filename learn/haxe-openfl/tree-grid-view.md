---
title: How to use the TreeGridView component
layout: "docs.html"
sidebarTitle: TreeGridView
---

The [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) class renders a table of data from a [data collection](./data-collections.md) similarly to a [`GridView`](./grid-view.md), except that the data is _hierarchical_, and branches may be opened and closed to reveal nested data. It includes support for selecting an item, scrolling, and custom layouts. Each item in the data provider is displayed as a row, divided into columns for the item's fields. Tree grid views support selecting a row, scrolling, and custom cell renderers for each column.

<figure>
<iframe src="/learn/haxe-openfl/samples/tree-grid-view.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/TreeGridView.html"><code>TreeGridView</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Start by creating a [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var treeGridView = new TreeGridView();
addChild(treeGridView);
```

### Data provider and columns

To render some data in the tree view, pass in a [hierarchical collection](./data-collections.md#hierarchical-collections) that contains an object for each row.

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
treeGridView.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/current/feathers/controls/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the tree grid view.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Next, define the columns in the tree grid view, so that it knows which fields from the data provider's items to display. One of the items from the data provider appears below.

```haxe
{ item: "Broccoli", dept: "Produce", price: "2.99" }
```

The item has three fields, `item`, `dept`, and `price`. Create a separate [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) for each of the fields in the item, and pass them to the [`columns`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#columns) property.

```haxe
treeGridView.columns = new ArrayCollection([
    new TreeGridViewColumn("Item", (data) -> data.item),
    new TreeGridViewColumn("Department", (data) -> data.dept),
    new TreeGridViewColumn("Unit Price", (data) -> data.price)
]);
```

The first parameter of the [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) is the text to display in each column header. The second parameter is passed to the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html#itemToText) property, which is a function that returns the text to display in a cell renderer.

> Items in the collection are not required to be simple object literals, like `{ item: "Bacon", dept: "Meat", price: "4.49" }` in the example above. Instances of a class are allowed too (and encouraged as a best practice).

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
treeGridView.addEventListener(Event.CHANGE, treeGridView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#selectedItem) property in the listener.

```haxe
function treeGridView_changeHandler(event:Event):Void {
    var treeGridView = cast(event.currentTarget, TreeGridView);
    trace("TreeGridView selectedItem change: " + treeGridView.selectedItem.data.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#selectedLocation) property references the location of the items in the tree view's collection as an `Array` of integers.

```haxe
function treeGridView_changeHandler(event:Event):Void {
    var treeGridView = cast(event.currentTarget, TreeGridView);
    trace("TreeGridView selectedLocation change: " + treeGridView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newRow = { item: "Gala Apple", dept: "Produce", price: "1.00" };
var newLocation = [3, 1];
treeGridView.dataProvider.addAt(newRow, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [3, 1];
treeGridView.dataProvider.removeAt(locationToRemove);
```

## Cell renderers

An _cell renderer_ is a Feathers UI component that one of the fields from a single row displayed in a [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) or [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) component.In other words, a [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) typically contains many cell renderers in a two-dimensional grid — with each one rendering a different field from each row in the collection.

Feathers UI provides a default [`HierarchicalItemRenderer`](./hierarchical-item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) also support [custom cell renderers](./custom-item-renderers.md), which allow developers to render the tree grid view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ item: "Gala Apple", dept: "Frozen", price: "3.99", icon: "https://example.com/img/pizza.png" }
```

While the default [`HierarchicalItemRenderer`](./hierarchical-item-renderer.md) class can easily display some text and an image, creating a custom cell renderer for this simple data will be a good learning exercise.

A custom cell renderer designed to display this data might use a [`Label`](./label.md) to display one of the strings, and an [`AssetLoader`](./asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) — a special base class for custom cell renderers.

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

> Developers are not required to use the [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) class. In fact, a custom cell renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and all other Feathers UI components.

Both [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) and [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html) define `cellRendererRecycler` properties. On [`TreeGridViewColumn`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html), the [`cellRendererRecycler`](https://api.feathersui.com/current/feathers/controls/TreeGridViewColumn.html#cellRendererRecycler) property may be used to customize the cell renderers in that specific column. On [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html), the [`cellRendererRecycler`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#cellRendererRecycler) property may be used to customize the default cell renderers used when a particular column doesn't have a specific cell renderer.

```haxe
var column = new TreeGridViewColumn("Item", (data) -> data.item);
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
- [`owner`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#owner) is the [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) that contains the row.
- [`rowIndex`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#rowIndex) is the position of the row within the collection.
- [`selected`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md). The values of [`branch`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#branch), [`columnIndex`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#columnIndex), and [`opened`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#opened) are used with a [`ToggleButton`](./toggle-button.md) to display whether a branch is opened or not. Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/TreeGridViewCellState.html#text) value from the `name` field.

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom cell renderer when it is no longer used by the [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html).

```
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

A number of styles may be customized on a [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) component, including an optional background skin and the appearance of the grid view's scroll bars.

### Background skin

Optionally give the tree grid view a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
treeGridView.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The grid view automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the grid view's border or fill may be customized to change when the tree grid view is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the tree grid view is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the tree grid view uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the grid view's current state. Alternatively, the tree grid view's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the tree grid view to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
treeGridView.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
treeGridView.disabledBackgroundSkin = disabledSkin;
```

In the example above, the tree grid view will have a separate skins when enabled and disabled.

### Scroll bars

The scroll bars in a [`TreeGridView`](https://api.feathersui.com/current/feathers/controls/TreeGridView.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual tree grid view.

> See [How to use the `HScrollBar` and `VScrollBar` components](./scroll-bar.md#styles) for complete details about which styles are available for the scroll bars.

#### Style scroll bars globally

Use the [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html) and [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html) classes in a [theme](./themes.md) to provide a function that globally styles all scroll bars in your project.

```haxe
styleProvider.setStyleFunction(HScrollBar, null, setHScrollBarStyles);
styleProvider.setStyleFunction(VScrollBar, null, setVScrollBarStyles);
```

The functions should use the following signatures.

```haxe
function setHScrollBarStyles(scrollBar:HScrollBar):Void {
    // ... set styles here
}

function setVScrollBarStyles(scrollBar:VScrollBar):Void {
    // ... set styles here
}
```

#### Style scroll bars in a specific `TreeGridView`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual tree grid view's scroll bars.

```haxe
treeGridView.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

treeGridView.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.TreeGridView` API Documentation](https://api.feathersui.com/current/feathers/controls/TreeGridView.html)
- [Create custom item renderers for data containers](./custom-item-renderers.md)
