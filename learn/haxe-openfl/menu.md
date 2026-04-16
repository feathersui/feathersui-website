---
title: How to use the Menu component
layout: "docs.html"
sidebarTitle: Menu
---

The [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) class displays a pop-up menu.

<!-- <figure>
<iframe src="/learn/haxe-openfl/samples/menu.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/unstable/feathers/controls/Menu.html"><code>Menu</code></a> component</figcaption>
</figure> -->

## The Basics

Start by creating a [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) control.

```haxe
var menuBar = new MenuBar();
addChild(menuBar);
```

Typically, we'd add a component to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html) immediately, but let's populate the menu's data first.

### Data provider

To render some data in the menu, pass in a [hierarchical collection](./data-collections.md#hierarchical-collections) that contains an object for each menu.

```haxe
var collection = new ArrayHierarchicalCollection([
    {
        text: "File",
        children: [
            { text: "New" },
            { text: "Open" },
            { separator: true },
            { text: "Print" },
            { separator: true },
            { text: "Exit" },
        ]
    },
    {
      text: "Edit",
      children: [
          { text: "Undo" },
          { text: "Redo" },
          { separator: true },
          { text: "Cut" },
          { text: "Copy" },
          { text: "Paste" }
      ]
    },
    {
      text: "View",
      children: [
          { text: "Full Screen" },
      ]
    }
]);
menu.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/unstable/feathers/data/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the menu.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Set the [`itemToText()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#itemToText) method to get the text from each item to display from the collection.

```haxe
menu.itemToText = (item:Dynamic) -> item.text;
```

Set the [`itemToSeparator()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#itemToSeparator) method to determine if any of the items in the collection represent a separator.

```haxe
menu.itemToSeparator = (item:Dynamic) -> item.separator == true;
```

> Items in the collection are _not_ required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like `{text: "Open"}` in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures). If not using class instances, consider creating a [typedef](https://haxe.org/manual/type-system-typedef.html) for improved type checking at compile-time. If you use a class, be sure to update the item parameter's type in the `itemToChildren`, `itemToText`, and `itemToSeparator` functions so that the compiler can catch any errors.

### Opening the menu

After populating the menu's data provider, we'll add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html). The `Menu` class provides a couple of different ways to do that.

Use the [`showAtOrigin()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#showAtOrigin) method to display the menu and position it automatically based on the position of another display object. The example below positions a menu relative to a button when the same button is clicked.

```haxe
var button = new Button();
button.text = "Click Me";
button.addEventListener(TriggerEvent.TRIGGER, event -> {
    var button = cast(event.currentTarget, Button);

    var menu = new Menu();
    // be sure to populate the menu's data provider too!

    menu.showAtOrigin(button);
});
```

Alternatively, to display the menu at an arbitrary position (in global coordinates), call the [`showAtPosition()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#showAtPosition) method.

```haxe
menu.showAtPosition(20.0, 15.0);
```

### Closing the menu

The menu will close automatically when one of its items is triggered. However, to close it manually, call the [`close()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#close) method.

```haxe
menu.close();
```

### Listen for events

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`MenuEvent.ITEM_TRIGGER`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#ITEM_TRIGGER) to perform an action when the user clicks or taps a button.

```haxe
menu.addEventListener(MenuEvent.ITEM_TRIGGER, menu_itemTriggerHandler);
```

Check the event's [`state`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#state) property in the listener to determine which button was triggered.

```haxe
function menu_itemTriggerHandler(event:MenuEvent):Void {
    trace("Menu item trigger: " + event.state.text);
}
```

The [`state`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#state) is an instance of the[`MenuItemState`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html) class, which includes various properties, such as the button's [`text`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#text), the full item [`data`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#data) from the collection, and the [`index`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#index) position of the item in the collection.

To perform actions when the menu opens or closes, [add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`MenuEvent.MENU_OPEN`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#MENU_OPEN) or [`MenuEvent.MENU_CLOSE`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#MENU_CLOSE).

```haxe
menu.addEventListener(MenuEvent.MENU_OPEN, menu_menuOpenHandler);
menu.addEventListener(MenuEvent.MENU_CLOSE, menu_menuCloseHandler);
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/unstable/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newItem = { text: "New Item" };
var newLocation = [2, 1];
menu.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/unstable/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/unstable/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [2, 1];
menu.dataProvider.removeAt(locationToRemove);
```

## Item renderers

An _item renderer_ is a Feathers UI component that displays a single item from a [data collection](./data-collections.md) inside a component like [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) and [`ListView`](https://api.feathersui.com/unstable/feathers/controls/ListView.html). In other words, a [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) typically contains multiple item renderers — with each one rendering a different item from the collection.

Feathers UI provides a default [`DrillDownItemRenderer`](./drill-down-item-renderer.md) class, which can display data in many different ways that cover a variety of common use-cases. However, components like [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) also support [custom item renderers](./custom-item-renderers.md), which allow developers to render the menu's data in infinite unique ways.

Consider a collection of items with the following format.

```haxe
{ name: "Pizza", icon: "https://example.com/img/pizza.png" }
```

While the default [`HierarchicalItemRenderer`](./hierarchical-item-renderer.md) class can easily display some text and an image, creating a custom item renderer for this simple data will be a good learning exercise.

A custom item renderer designed to display this data might use a [`Label`](./label.md) to display the text, and an [`AssetLoader`](./asset-loader.md) to display the image. The following example creates a [`DisplayObjectRecycler`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) which instantiates these components and adds them to a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) — a special base class for custom item renderers.

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

    var icon = new AssetLoader();
    icon.name = "loader";
    itemRenderer.addChild(icon);

    var label = new Label();
    label.name = "label";
    itemRenderer.addChild(label);

    return itemRenderer;
});
```

> Developers are not required to use the [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) class. In fact, a custom item renderer may be created from any OpenFL display object, including primitives like [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) and [all other Feathers UI components](./ui-components.md).

Pass the [`DisplayObjectRecycler`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) to the [`itemRendererRecycler`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#itemRendererRecycler) property.

```haxe
menu.itemRendererRecycler = recycler;
```

So far, the [`DisplayObjectRecycler`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) creates the item renderer, but it doesn't understand how to interpret the data yet. A custom [`update()`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html#update) method on the recycler can do that.

```haxe
recycler.update = (itemRenderer:LayoutGroupItemRenderer, state:MenuItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = state.text;
    loader.source = state.data.icon;
};
```

When the [`update()`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) method is called, it receives the item renderer and an [`MenuItemState`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html) object. [`MenuItemState`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html) has a number of useful properties.

- [`data`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#data) is the item from the collection.
- [`branch`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#branch) indicates if the item is a branch or not.
- [`enabled`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#enabled) indicates if the item renderer should be enabled or not.
- [`index`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#layoutIndex) is the position of the item within the layout of the current menu.
- [`location`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#location) is the position of the item within the collection.
- [`separator`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#separator) indicates if the item is a separator or not.
- [`menuOwner`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#menuOwner) is the [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) that contains the item.
- [`menuOwner`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#menuBarOwner) is the [`Menu`](./menu-bar) that contains the item. It may be `null` if the `Menu` did not originate from a `MenuBar`.
- [`selected`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#selected) is populated by comparing to [`selectedItem`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#selectedItem).
- [`text`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#text) is populated using [`itemToText()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#itemToText)

In this case, the value of [`text`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#text) is displayed by the [`Label`](./label.md), and the `icon` field from [`data`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#data) (remember the example item from above, with `name` and `icon` fields) is displayed by the [`AssetLoader`](./asset-loader.md). Obviously, we'll need an [`itemToText()`](https://api.feathersui.com/unstable/feathers/controls/Menu.html#itemToText) function to populate the [`text`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#text) value from the `name` field.

```haxe
menu.itemToText = function(item:Dynamic):String {
    return item.name;
};
```

It's always a good practice to provide a [`reset()`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) method to the [`DisplayObjectRecycler`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html), which will clean up a custom item renderer when it is no longer used by the [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html).

```haxe
recycler.reset = (itemRenderer:LayoutGroupItemRenderer, state:MenuItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    var loader = cast(itemRenderer.getChildByName("loader"), AssetLoader);

    label.text = "";
    loader.source = null;
};
```

> **Warning:** A [`DisplayObjectRecycler`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) without a [`reset()`](https://api.feathersui.com/unstable/feathers/utils/DisplayObjectRecycler.html) method could potentially cause memory leaks or other unexpected behavior, if the same data needs to be used again later.

## Styles

A number of styles may be customized on a [`Menu`](https://api.feathersui.com/unstable/feathers/controls/Menu.html) component, including an optional background skin and the layout.

### Background skin

Optionally give the menu a background using the [`backgroundSkin`](https://api.feathersui.com/unstable/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
menu.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/unstable/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/unstable/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The menu automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/unstable/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/unstable/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Layout

Set the menu's [`layout`](https://api.feathersui.com/unstable/feathers/layout/feathers/controls/Menu.html#layout) property to change how its children are positioned and sized. By default, a menu uses [`VerticalListLayout`](./vertical-list-layout.md), but it may be changed to a different layout, if desired.

```haxe
menu.layout = new HorizontalListLayout();
```

The example above uses [`HorizontalListLayout`](./horizontal-list-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.

## Related Links

- [`feathers.controls.Menu` API Reference](https://api.feathersui.com/unstable/feathers/controls/Menu.html)
- [How to use the `MenuBar` component](./menu-bar.md)
- [How to use the `DrillDownItemRenderer` component](./drill-down-item-renderer.md)
- [Create custom item renderers for data containers](./custom-item-renderers.md)
