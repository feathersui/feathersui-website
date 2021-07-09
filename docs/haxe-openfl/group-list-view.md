---
title: How to use the GroupListView component
sidebar_label: GroupListView
---

The [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) class renders the items from a [data collection](./data-collections.md) similarly to a [`ListView`](./list-view.md), except that the data is _hierarchical_ and items may be organized into groups. It includes support for selecting an item, scrolling, and custom layouts.

<figure>
<iframe src="/learn/haxe-openfl/samples/group-list-view.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/GroupListView.html"><code>GroupListView</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var groupListView = new GroupListView();
this.addChild(groupListView);
```

Next, pass in a [collection](./data-collections.md) that defines the items to render.

```hx
var collection = new ArrayHierarchicalCollection( [
    {
        text: "Group A",
        children: [
            { text: "Node A1" },
            { text: "Node A2" },
            { text: "Node A3" },
            { text: "Node A4" }
        ]
    },
    {
        text: "Group B",
        children: [
            { text: "Node B1" },
            { text: "Node B2" },
            { text: "Node B3" }
        ]
    },
    {
        text: "Group C",
        children: [
            {text: "Node C1"}
        ]
    }
]);
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/current/feathers/controls/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the tree view.

```hx
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/GroupListView.html#itemToText) method to get the text from each item from the collection.

```hx
groupListView.itemToText = (item:Dynamic) -> item.text;
```

> Items in the collection are not required to be simple object literals, like `{text: "Node A1"}` in the example above. Instances of a class are allowed too (and encouraged as a best practice). If you use a class, be sure to update the item parameter's type in the `itemToChildren` and `itemToText` functions so that the compiler can catch any errors.

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```hx
groupListView.addEventListener(Event.CHANGE, groupListView_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/GroupListView.html#selectedItem) property in the listener.

```hx
function groupListView_changeHandler(event:Event):Void {
    var groupListView = cast(event.currentTarget, GroupListView);
    trace("GroupListView selectedItem change: " + groupListView.selectedItem.data.text);
}
```

Alternatively, the value of the [`selectedLocation`](https://api.feathersui.com/current/feathers/controls/GroupListView.html#selectedLocation) property references the location of the items in the group list view's collection as an `Array` of integers.

```hx
function groupListView_changeHandler(event:Event):Void {
    var groupListView = cast(event.currentTarget, GroupListView);
    trace("GroupListView selectedLocation change: " + groupListView.selectedLocation);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#addAt) method.

```hx
var newItem = { text: "New Item" };
var newLocation = [2, 1];
groupListView.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```hx
var locationToRemove = [2, 1];
groupListView.dataProvider.removeAt(locationToRemove);
```

## Item renderers

An _item renderer_ is a Feathers UI component that displays a single item from a [data collection](./data-collections.md) inside a component like [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) and [`TreeView`](https://api.feathersui.com/current/feathers/controls/TreeView.html). In other words, a [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) typically contains multiple item renderers — with each one rendering a different item from the collection.

Feathers UI provides a default [`ItemRenderer`](./item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) also support [custom item renderers](./custom-item-renderers.md), which allow developers to render the list view's data in infinite unique ways.

Consider a collection of items with the following format.

```hx
{ name: "Pizza", icon: "https://example.com/img/pizza.png" }
```

While the default [`ItemRenderer`](./item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

A custom item renderer designed to display this data might use a [`Label`](./label.md) to display the text, and an [`AssetLoader`](./asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) — a special base class for custom item renderers.

```hx
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new LayoutGroupItemRenderer();

    var layout = new HorizontalLayout();
    layout.gap = 6.0;
    layout.paddingTop = 4.0;
    layout.paddingBottom = 4.0;
    layout.paddingLeft = 6.0;
    layout.paddingRight = 6.0;
    itemRenderer.layout = layout;

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

Pass the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) to the [`itemRendererRecycler`](https://api.feathersui.com/current/feathers/controls/GroupListView.html#itemRendererRecycler) property.

```hx
groupListView.itemRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) creates the item renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method on the recycler can do that.

```hx
recycler.update = (itemRenderer:LayoutGroupItemRenderer, state:GroupListViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = state.text;
    loader.source = state.data.icon;
};
```

When the [`update()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the item renderer and an [`GroupListViewItemState`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html) object. [`GroupListViewItemState`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html) has a number of useful properties.

- [`data`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#data) is the item from the collection.
- [`enabled`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#enabled) indicates if the item renderer should be enabled or not.
- [`layoutIndex`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#layoutIndex) is the position of the item within the layout.
- [`location`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#location) is the position of the item within the collection.
- [`owner`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#owner) is the [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) that contains the item.
- [`selected`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/current/feathers/controls/GroupListView.html#selectedItem).
- [`text`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/current/feathers/controls/GroupListView.html#itemToText)
- [`type`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#type) indicates if the item is a header or a standard item.

In this case, the value of [`text`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/current/feathers/data/GroupListViewItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md). Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/current/feathers/controls/ListView.html#itemToText) function to populate the [`text`](https://api.feathersui.com/current/feathers/data/ListViewItemState.html#text) value from the `name` field.

```hx
groupListView.itemToText = function(item:Dynamic):String {
    return item.name;
};
```

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html).

```hx
recycler.reset = (itemRenderer:LayoutGroupItemRenderer, state:GroupListViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on a [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) component, including an optional background skin and the appearance of the group list view's scroll bars.

### Background skin

Optionally give the group list view a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
groupListView.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The group list view automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the group list view's border or fill may be customized to change when the group list view is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the group list view is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the group list view uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the group list view's current state. Alternatively, the group list view's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the group list view to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
groupListView.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
groupListView.disabledBackgroundSkin = disabledSkin;
```

In the example above, the group list view will have a separate skins when enabled and disabled.

### Layout

Set the group list view's [`layout`](https://api.feathersui.com/current/feathers/layout/feathers/controls/GroupListView.html#layout) property to change how its children are positioned and sized. By default, a list view uses [`VerticalListLayout`](./vertical-list-layout.md), but it may be changed to a different layout, if desired.

```hx
groupListView.layout = new HorizontalListLayout();
```

The example above uses [`HorizontalListLayout`](./horizontal-list-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.

### Scroll bars

The scroll bars in a [`GroupListView`](https://api.feathersui.com/current/feathers/controls/GroupListView.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual group list view.

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

#### Style scroll bars in a specific `GroupListView`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual group list view's scroll bars.

```hx
groupListView.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

groupListView.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.GroupListView` API Documentation](https://api.feathersui.com/current/feathers/controls/GroupListView.html)
- [Create custom item renderers for data containers](./custom-item-renderers.md)
