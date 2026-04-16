---
title: How to use the MenuBar component
layout: "docs.html"
sidebarTitle: MenuBar
---

The [`MenuBar`](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html) class displays a row of top-level menu items that, when triggered, display pop-up menus.

<!-- <figure>
<iframe src="/learn/haxe-openfl/samples/menu-bar.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/unstable/feathers/controls/MenuBar.html"><code>MenuBar</code></a> component</figcaption>
</figure> -->

## The Basics

Start by creating a [`MenuBar`](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var menuBar = new MenuBar();
addChild(menuBar);
```

### Data provider

To render some data in the menu bar, pass in a [hierarchical collection](./data-collections.md#hierarchical-collections) that contains an object for each menu.

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
menuBar.dataProvider = collection;
```

Set the collection's [`itemToChildren()`](https://api.feathersui.com/unstable/feathers/data/ArrayHierarchicalCollection.html#itemToChildren) method to get the children from each branch that need to be rendered by the menu bar.

```haxe
collection.itemToChildren = (item:Dynamic) -> item.children;
```

Set the [`itemToText()`](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html#itemToText) method to get the text from each item to display from the collection.

```haxe
menuBar.itemToText = (item:Dynamic) -> item.text;
```

Set the [`itemToSeparator()`](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html#itemToSeparator) method to determine if any of the items in the collection represent a separator.

```haxe
menuBar.itemToSeparator = (item:Dynamic) -> item.separator == true;
```

> Items in the collection are _not_ required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like `{text: "Open"}` in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures). If not using class instances, consider creating a [typedef](https://haxe.org/manual/type-system-typedef.html) for improved type checking at compile-time. If you use a class, be sure to update the item parameter's type in the `itemToChildren`, `itemToText`, and `itemToSeparator` functions so that the compiler can catch any errors.

### Listen for events

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`MenuEvent.ITEM_TRIGGER`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#ITEM_TRIGGER) to perform an action when the user clicks or taps a menu item.

```haxe
menuBar.addEventListener(MenuEvent.ITEM_TRIGGER, menuBar_itemTriggerHandler);
```

Check the event's [`state`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#state) property in the listener to determine which menu item was triggered.

```haxe
function menuBar_itemTriggerHandler(event:MenuEvent):Void {
    trace("Menu item trigger: " + event.state.text);
}
```

The [`state`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#state) is an instance of the[`MenuItemState`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html) class, which includes various properties, such as the button's [`text`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#text), the full item [`data`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#data) from the collection, and the [`index`](https://api.feathersui.com/unstable/feathers/data/MenuItemState.html#index) position of the item in the collection.

To perform actions when a top-level menu opens or closes, [add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`MenuEvent.MENU_OPEN`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#MENU_OPEN) or [`MenuEvent.MENU_CLOSE`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#MENU_CLOSE).

```haxe
menuBar.addEventListener(MenuEvent.MENU_OPEN, menuBar_menuOpenHandler);
menuBar.addEventListener(MenuEvent.MENU_CLOSE, menuBar_menuOpenHandler);
```

The following example shows a sample listener for [`MenuEvent.MENU_OPEN`](https://api.feathersui.com/unstable/feathers/events/MenuEvent.html#MENU_OPEN).

```haxe
private function menuBar_menuOpenHandler(event:MenuEvent):Void {
    trace("Menu item open: " + event.state.text);
}
```

## Add or remove items

To add a new item at a specific location, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/unstable/feathers/data/IHierarchicalCollection.html#addAt) method.

```haxe
var newItem = { text: "New Item" };
var newLocation = [2, 1];
menuBar.dataProvider.addAt(newItem, newLocation);
```

In the example above, a new tab is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/unstable/feathers/data/IHierarchicalCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/unstable/feathers/data/IHierarchicalCollection.html#removeAt) on the collection.

```haxe
var locationToRemove = [2, 1];
menuBar.dataProvider.removeAt(locationToRemove);
```
## Styles

A number of styles may be customized on a [`MenuBar`](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html) component, including an optional background skin and the layout.

### Background skin

Optionally give the menu bar a background using the [`backgroundSkin`](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) instance.

```haxe
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
menuBar.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/unstable/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/unstable/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The menu bar automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like the layout and scroll bars), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/unstable/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/unstable/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the menu bar's border or fill may be customized to change when the menu bar is [disabled](https://api.feathersui.com/unstable/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the menu bar is disabled.

```haxe
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```haxe
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the menu bar uses the same [`RectangleSkin`](https://api.feathersui.com/unstable/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the menu bar's current state. Alternatively, the menu bar's [`disabledBackgroundSkin`](https://api.feathersui.com/unstable/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the menu bar to display a completely different display object when it is disabled.

```haxe
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
menuBar.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
menuBar.disabledBackgroundSkin = disabledSkin;
```

In the example above, the menu bar will have a separate skins when enabled and disabled.

### Layout

Set the menu bar's [`layout`](https://api.feathersui.com/unstable/feathers/layout/feathers/controls/MenuBar.html#layout) property to change how its children are positioned and sized. By default, a menu bar uses [`HorizontalLayout`](./horizontal-layout.md), but it may be changed to a different layout, if desired.

```haxe
menuBar.layout = new VerticalLayout();
```

The example above uses [`VerticalLayout`](./vertical-layout.md), but a number of [different layouts](./layouts-and-containers.md) are available in Feathers UI, and it's also possible to create custom layouts.


## Related Links

- [`feathers.controls.MenuBar` API Reference](https://api.feathersui.com/unstable/feathers/controls/MenuBar.html)
- [How to use the `Menu` component](./menu.md)
