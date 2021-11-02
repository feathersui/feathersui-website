---
title: How to use the GridView component
sidebar_label: GridView
---

The [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) class renders a table of data from a [data collection](./data-collections.md). Each item in the data provider is displayed as a row, divided into columns for the item's fields. Grid views support selecting a row, scrolling, and custom cell renderers for each column.

<figure>
<iframe src="/learn/haxe-openfl/samples/grid-view.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/GridView.html"><code>GridView</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var gridView = new GridView();
this.addChild(gridView);
```

To render some data in the grid view, pass in a [collection](./data-collections.md) that contains an object for each row.

```hx
gridView.dataProvider = new ArrayCollection([
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

```hx
{ item: "Broccoli", dept: "Produce", price: "2.99" },
```

The item has three fields, `item`, `dept`, and `price`. Create a [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) for each of the fields in a [collection](./data-collections.md), and pass them to the `columns` property.

```hx
gridView.columns = new ArrayCollection([
    new GridViewColumn("Item", (data) -> data.item),
    new GridViewColumn("Department", (data) -> data.dept),
    new GridViewColumn("Unit Price", (data) -> data.price)
]);
```

The first parameter of the [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) is the text to display in each column header. The second parameter is passed to the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html#itemToText) property, which is a function that returns the text to display in a cell renderer.

> Items in the collection are not required to be simple object literals, like `{ item: "Bacon", dept: "Meat", price: "4.49" }` in the example above. Instances of a class are allowed too (and encouraged as a best practice).

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```hx
gridView.addEventListener(Event.CHANGE, gridView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/GridView.html#selectedItem) property in the listener.

```hx
function gridView_changeHandler(event:Event):Void {
    var gridView = cast(event.currentTarget, GridView);
    trace("GridView selectedItem change: " + gridView.selectedItem.item);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/GridView.html#selectedIndex) property references the index of the rows in the grid view's collection, in the order that they were added.

```hx
function gridView_changeHandler(event:Event):Void {
    var gridView = cast(event.currentTarget, GridView);
    trace("GridView selectedIndex change: " + gridView.selectedIndex);
}
```

## Add or remove rows

To add a new row at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```hx
var newRow = { item: "Gala Apple", dept: "Produce", price: "1.00" };
gridView.dataProvider.add(newRow);
```

To add a new row at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```hx
var newRow = { item: "Banana", dept: "Produce", price: "0.32" };
gridView.dataProvider.addAt(newRow, 0);
```

In the example above, a new row is added to the beginning.

Similarly, to remove a row, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```hx
gridView.dataProvider.removeAt(0);
```

## Cell renderers

A _cell renderer_ is a Feathers UI component that displays one of the fields from a single row displayed in a [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) component. In other words, a [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) typically contains many cell renderers in a two-dimensional grid — with each one rendering a different field from each row in the collection.

Feathers UI provides a default [`ItemRenderer`](./item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) also support [custom cell renderers](./custom-item-renderers.md), which allow developers to render the grid view's data in infinite unique ways.

Consider a collection of items with the following format.

```hx
{ item: "Gala Apple", dept: "Frozen", price: "3.99", icon: "https://example.com/img/pizza.png" }
```

While the default [`ItemRenderer`](./item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

A custom cell renderer designed to display this data might use a [`Label`](./label.md) to display one of the strings, and an [`AssetLoader`](./asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) — a special base class for custom cell renderers.

```hx
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

> Developers are not required to use the [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) class. In fact, a custom cell renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and all other Feathers UI components.

Both [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) and [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html) define `cellRendererRecycler` properties. On [`GridViewColumn`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html), the [`cellRendererRecycler`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html#cellRendererRecycler) property may be used to customize the cell renderers in that specific column. On [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html), the [`cellRendererRecycler`](https://api.feathersui.com/current/feathers/controls/GridView.html#cellRendererRecycler) property may be used to customize the default cell renderers used when a particular column doesn't have a default cell renderer.

```hx
var column = new GridViewColumn("Item", (data) -> data.item);
column.cellRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) creates the cell renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can do that.

```hx
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
- [`owner`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#owner) is the [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) that contains the item.
- [`rowIndex`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#rowIndex) is the position of the row within the collection.
- [`selected`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/current/feathers/controls/GridView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/GridViewColumn.html#itemToText) from the column.

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/GridViewCellState.html#data) (remember the example row from above, with `item` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md).

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom cell renderer when it is no longer used by the [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html).

```
recycler.reset = (cellRenderer:LayoutGroupItemRenderer, state:GridViewCellState) -> {
    var label = cast(cellRenderer.getChildByName("label"), Label);
    var loader = cast(cellRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on a [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) component, including an optional background skin and the appearance of the grid view's scroll bars.

### Background skin

Optionally give the grid view a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
gridView.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The grid view automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the grid view's border or fill may be customized to change when the grid view is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the grid view is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the grid view uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the grid view's current state. Alternatively, the grid view's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the grid view to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
gridView.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
gridView.disabledBackgroundSkin = disabledSkin;
```

In the example above, the grid view will have a separate skins when enabled and disabled.

### Scroll bars

The scroll bars in a [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual grid view.

> See [How to use the `HScrollBar` and `VScrollBar` components](./scroll-bar.md#styles) for complete details about which styles are available for the scroll bars.

#### Style scroll bars globally

Use the [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html) and [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html) classes in a [theme](./themes.md) to provide a function that globally styles all scroll bars in your project.

```hx
styleProvider.setStyleFunction(HScrollBar, null, setHScrollBarStyles);
styleProvider.setStyleFunction(VScrollBar, null, setVScrollBarStyles);
```

The functions should use the following signatures.

```hx
function setHScrollBarStyles(scrollBar:HScrollBar):Void {
    // ... set styles here
});

function setVScrollBarStyles(scrollBar:VScrollBar):Void {
    // ... set styles here
});
```

#### Style scroll bars in a specific `GridView`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual grid view's scroll bars.

```hx
gridView.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

gridView.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.GridView` API Documentation](https://api.feathersui.com/current/feathers/controls/GridView.html)
- [Create custom item renderers for data containers](./custom-item-renderers.md)
