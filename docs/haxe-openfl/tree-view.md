---
title: How to use the TreeView component
sidebar_label: TreeView
---

The [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) class renders the items from a [data collection](./data-collections.md) similarly to a [`ListView`](./list-view.md), except that the data is _hierarchical_ and branches may be opened and closed to reveal nested data. It includes support for selecting an item, scrolling, and custom layouts.

## The Basics

Start by creating a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) control, pass in a [collection](./data-collections.md) that defines the items to render, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var treeView = new TreeView();
treeView.dataProvider = new TreeCollection([
  new TreeNode({text: "Node 1"}, [
    new TreeNode({text: "Node 1A"}, [
      new TreeNode({text: "Node 1A-I"}),
      new TreeNode({text: "Node 1A-II"})
    ]),
    new TreeNode({text: "Node 1B"})
  ]),
  new TreeNode({text: "Node 2"}),
  new TreeNode({text: "Node 3"}, [
    new TreeNode({text: "Node 3A"}),
    new TreeNode({text: "Node 3B"}),
    new TreeNode({text: "Node 3C"})
  ]),
]);
this.addChild(treeView);
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText) method to get the text from each [`TreeNode`](https://api.feathersui.com/current/feathers/data/TreeNode.html) item to display in an item renderer.

```hx
treeView.itemToText = function(item:TreeNode<Dynamic>):String {
    return item.data.text;
};
```

> Items in the collection are not required to be simple object literals, like `{text: "Node 1"}` in the example above. Instances of a class are allowed too (and encouraged as a best practice).

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```hx
treeView.addEventListener(Event.CHANGE, treeView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TreeView.html#selectedItem) property in the listener.

```hx
function treeView_changeHandler(event:Event):Void {
    var treeView = cast(event.currentTarget, TreeView);
    trace("TreeView selectedItem change: " + treeView.selectedItem.data.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/current/feathers/controls/TreeView.html#selectedLocation) property references the location of the items in the tree view's collection as an `Array` of integers.

```hx
function treeView_changeHandler(event:Event):Void {
    var treeView = cast(event.currentTarget, TreeView);
    trace("TreeView selectedLocation change: " + treeView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```hx
var newItem = new TreeNode({ text: "First Item" });
var newLocation = [2, 1];
treeView.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```hx
var locationToRemove = [2, 1];
treeView.dataProvider.removeAt(locationToRemove);
```

## Item renderers

An _item renderer_ is a Feathers UI component that renders a single item from a [data collection](./data-collections.md) inside a component like [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html). In other words, a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) typically contains multiple item renderers — with each one rendering a different item from the data provider.

Feathers UI provides a default item renderer that simply displays text. However, components like [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) may also use custom item renderers, which allows developers to render the list view's data in infinite unique ways.

The [`itemRendererRecycler`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemRendererRecycler) property may be used to customize the item renderers in a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html).

Consider a collection of items with the following format.

```hx
new TreeNode({ name: "Pizza", icon: "https://example.com/img/pizza.png" })
```

The examples above demonstrated how to use an [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText) method to interpret the text. In this case, the `name` field is used.

```hx
treeView.itemToText = function(item:TreeNode<Dynamic>):String {
    return item.data.name;
};
```

However, the default item renderer cannot display the image, so a custom item renderer is required.

> Note: Future updates to Feathers UI will probably contain a more powerful default item renderer that _can_ display an image. For now, the best option is to create a custom item renderer.

The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates a [`LayoutGroup`](./layout-group.md) container. A custom item renderer may be created from any OpenFL display object. It is not strictly required to be a Feathers UI component.

```hx
var recyler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new LayoutGroup();

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
treeView.itemRendererRecycler = recycler;
```

This creates the item renderer, but it doesn't interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method on the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) can do that.

```hx
recycler.update = (itemRenderer:LayoutGroup, state:TreeViewItemState) -> {
    var openedToggle = cast(itemRenderer.getChildByName("openedToggle"), ToggleButton);
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    openedToggle.visible = state.branch;
    openedToggle.selected = state.branch && state.opened;
    label.text = state.text;
    loader.source = state.data.icon;
});
```

When the [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the item renderer and an [`TreeViewItemState`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html) object. [`TreeViewItemState`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html) has a number of useful properties.

- [`data`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#data) is the item from the collection.
- [`branch`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#branch) indicates if the item is a branch or not.
- [`enabled`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#enabled) indicates if the item renderer should be enabled or not.
- [`layoutIndex`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#layoutIndex) is the position of the item within the layout.
- [`location`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#location) is the position of the item within the collection.
- [`opened`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#opened) indicates if a branch is opened or not.
- [`owner`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#owner) is the [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) that contains the item.
- [`selected`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TreeView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md). The values of [`branch`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#branch) and [`opened`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#opened) are used with a [`ToggleButton`](./toggle-button.md) to display whether a branch is opened or not.

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html).

```
recycler.reset = (itemRenderer:LayoutGroup, state:TreeViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
});
```

> A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) component, including an optional background skin and the appearance of the tree view's scroll bars.

### Background skin

Optionally give the tree view a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
treeView.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The tree view automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Graphics API skins](./graphics-api-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the tree view's border or fill may be customized to change when the tree view is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the tree view is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the tree view uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the tree view's current state. Alternatively, the tree view's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the tree view to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
treeView.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
treeView.disabledBackgroundSkin = disabledSkin;
```

In the example above, the tree view will have a separate skins when enabled and disabled.

### Layout

Set the tree view's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/TreeView.html#layout) property to change how its children are positioned and sized. By default, a list view uses [`VerticalListLayout`](./vertical-list-layout.md), but it may be changed to a different layout, if desired.

```hx
treeView.layout = new HorizontalListLayout();
```

The example above uses [`HorizontalListLayout`](./horizontal-list-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.

### Scroll bars

The scroll bars in a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual tree view.

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

#### Style scroll bars in a specific `TreeView`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual tree view's scroll bars.

```hx
treeView.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

treeView.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.TreeView` API Documentation](https://api.feathersui.com/current/feathers/controls/TreeView.html)
