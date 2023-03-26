---
title: How to use the TreeView component
layout: "docs.html"
sidebarTitle: TreeView
---

The [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) class renders the items from a [data collection](./data-collections.md) similarly to a [`ListView`](./list-view.md), except that the data is _hierarchical_, and branches may be opened and closed to reveal nested data. It includes support for selecting an item, scrolling, and custom layouts.

<figure>
<iframe src="/learn/haxe-openfl/samples/tree-view.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/TreeView.html"><code>TreeView</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var treeView = new TreeView();
addChild(treeView);
```

### Data provider

To render some data in the tree view, pass in a [hierarchical collection](./data-collections.md#hierarchical-collections) that contains an object for each row.

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
treeView.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/current/feathers/controls/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the tree view.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText) method to get the text from each item to display from the collection.

```haxe
treeView.itemToText = (item:Dynamic) -> item.text;
```

> Items in the collection are not required to be simple object literals, like `{text: "Node 1"}` in the example above. Instances of a class are allowed too (and encouraged as a best practice). If you use a class, be sure to update the item parameter's type in the `itemToChildren` and `itemToText` functions so that the compiler can catch any errors.

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
treeView.addEventListener(Event.CHANGE, treeView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TreeView.html#selectedItem) property in the listener.

```haxe
function treeView_changeHandler(event:Event):Void {
    var treeView = cast(event.currentTarget, TreeView);
    trace("TreeView selectedItem change: " + treeView.selectedItem.data.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/current/feathers/controls/TreeView.html#selectedLocation) property references the location of the items in the tree view's collection as an `Array` of integers.

```haxe
function treeView_changeHandler(event:Event):Void {
    var treeView = cast(event.currentTarget, TreeView);
    trace("TreeView selectedLocation change: " + treeView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newItem = { text: "New Item" };
var newLocation = [2, 1];
treeView.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [2, 1];
treeView.dataProvider.removeAt(locationToRemove);
```

## Item renderers

An _item renderer_ is a Feathers UI component that displays a single item from a [data collection](./data-collections.md) inside a component like [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) and [`ListView`](https://api.feathersui.com/current/feathers/controls/ListView.html). In other words, a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) typically contains multiple item renderers — with each one rendering a different item from the collection.

Feathers UI provides a default [`HierarchicalItemRenderer`](./hierarchical-item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) also support [custom item renderers](./custom-item-renderers.md), which allow developers to render the tree view's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ name: "Pizza", icon: "https://example.com/img/pizza.png" }
```

While the default [`HierarchicalItemRenderer`](./hierarchical-item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

A custom item renderer designed to display this data might use a [`Label`](./label.md) to display the text, and an [`AssetLoader`](./asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) — a special base class for custom item renderers.

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

> Developers are not required to use the [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) class. In fact, a custom item renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and all other Feathers UI components.

Pass the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to the [`itemRendererRecycler`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemRendererRecycler) property.

```haxe
treeView.itemRendererRecycler = recycler;
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
- [`owner`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#owner) is the [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) that contains the item.
- [`selected`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/current/feathers/controls/TreeView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md). The values of [`branch`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#branch) and [`opened`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#opened) are used with a [`ToggleButton`](./toggle-button.md) to display whether a branch is opened or not. Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/TreeViewItemState.html#text) value from the `name` field.

```haxe
treeView.itemToText = function(item:Dynamic):String {
    return item.name;
};
```

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html).

```
recycler.reset = (itemRenderer:LayoutGroupItemRenderer, state:TreeViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) component, including an optional background skin and the appearance of the tree view's scroll bars.

### Background skin

Optionally give the tree view a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
treeView.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The tree view automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the tree view's border or fill may be customized to change when the tree view is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the tree view is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the tree view uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the tree view's current state. Alternatively, the tree view's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the tree view to display a completely different display object when it is disabled.

```haxe
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

```haxe
treeView.layout = new HorizontalListLayout();
```

The example above uses [`HorizontalListLayout`](./horizontal-list-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.

### Scroll bars

The scroll bars in a [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual tree view.

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
});

function setVScrollBarStyles(scrollBar:VScrollBar):Void {
    // ... set styles here
});
```

#### Style scroll bars in a specific `TreeView`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual tree view's scroll bars.

```haxe
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
- [Create custom item renderers for data containers](./custom-item-renderers.md)
