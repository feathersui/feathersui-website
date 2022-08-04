---
title: How to use the ButtonBar component
sidebar_label: ButtonBar
---

The [`ButtonBar`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html) class displays a set of buttons populated from a [data collection](./data-collections.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/button-bar.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/ButtonBar.html"><code>ButtonBar</code></a> component</figcaption>
</figure>

## The Basics

Start by creating a [`ButtonBar`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var buttons = new ButtonBar();
addChild(buttons);
```

### Data provider

To render some data in the button bar, pass in a [collection](./data-collections.md) that contains an object for each button.

```haxe
buttons.dataProvider = new ArrayCollection([
    { text: "A" },
    { text: "B" },
    { text: "C" }
]);
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/Button.html#itemToText) method to get the text from each item to display in a button.

```haxe
buttons.itemToText = function(item:Dynamic):String {
    return item.text;
};
```

> Items in the collection are not required to be simple object literals, like in the example above. Instances of a class are allowed too (and encouraged as a best practice).

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`ButtonBarEvent.ITEM_TRIGGER`](https://api.feathersui.com/current/feathers/events/ButtonBarEvent.html#ITEM_TRIGGER) to perform an action when the user clicks or taps a button.

```haxe
buttons.addEventListener(ButtonBarEvent.ITEM_TRIGGER, buttonBar_itemTriggerHandler);
```

Check the event's [`state`](https://api.feathersui.com/current/feathers/events/ButtonBarEvent.html#state) property in the listener to determine which button was triggered.

```haxe
function buttonBar_itemTriggerHandler(event:ButtonBarEvent):Void {
    trace("ButtonBar item trigger: " + event.state.text);
}
```

The [`state`](https://api.feathersui.com/current/feathers/events/ButtonBarEvent.html#state) is an instance of the[`ButtonBarItemState`](https://api.feathersui.com/current/feathers/data/ButtonBarItemState.html) class, which includes various properties, such as the button's [`text`](https://api.feathersui.com/current/feathers/data/ButtonBarItemState.html#text), the full item [`data`](https://api.feathersui.com/current/feathers/data/ButtonBarItemState.html#data) from the collection, and the [`index`](https://api.feathersui.com/current/feathers/data/ButtonBarItemState.html#index) position of the item in the collection.

## Add or remove buttons

To add a new button at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```haxe
var newItem = { text: "New Button" };
buttons.dataProvider.add(newItem);
```

To add a new button at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```haxe
var newItem = { text: "First Button" };
buttons.dataProvider.addAt(newItem, 0);
```

In the example above, a new button is added to the beginning.

Similarly, to remove a button, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```haxe
buttons.dataProvider.removeAt(0);
```

## Styles

The buttons in a [`ButtonBar`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html) component may be styled to change its appearance.

### Buttons

The buttons in a [`ButtonBar`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html) component are of type [`Button`](./button.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual button bar.

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the buttons.

#### Style buttons globally

Use the [`ButtonBar.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html#CHILD_VARIANT_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`ButtonBar`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    ButtonBar.CHILD_VARIANT_BUTTON,
    setButtonBar_Button_Styles
);
```

The function should use the following signature.

```haxe
function setButtonBar_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style buttons in a specific `ButtonBar`

Customize the [`buttonRecycler`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html#buttonRecycler) property to customize the styles of the buttons in a specific [`ButtonBar`](https://api.feathersui.com/current/feathers/controls/ButtonBar.html) component.

```haxe
buttons.buttonRecycler = DisplayObjectRecycler.withFunction(() -> {
    var button = new Button();
    // ... set styles here
    return button;
});
```

## Related Links

- [`feathers.controls.ButtonBar` API Reference](https://api.feathersui.com/current/feathers/controls/ButtonBar.html)
