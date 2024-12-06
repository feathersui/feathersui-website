---
title: How to use the ComboBox component
layout: "docs.html"
sidebarTitle: ComboBox
---

The [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) class displays an editable [text input](./text-input.md) and a [button](./button.md), that when triggered, renders the items from a [data collection](./data-collections.md) in a pop-up [list view](./list-view.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/combo-box.html" width="100%" height="200"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/ComboBox.html"><code>ComboBox</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Start by creating a [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) control, and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var comboBox = new ComboBox();
addChild(comboBox);
```

### Data provider

To render some data in the combo box, pass in a [collection](./data-collections.md) that contains an object for each row.

```haxe
comboBox.dataProvider = new ArrayCollection([
    { text: "A" },
    { text: "B" },
    { text: "C" }
]);
```

Set the [`itemToText()`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#itemToText) method to get the text from each item to display in an item renderer.

```haxe
comboBox.itemToText = function(item:Dynamic):String {
    return item.text;
};
```

> Items in the collection are _not_ required to be [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html), like in the example above. [Class instances](https://haxe.org/manual/types-class-instance.html) are allowed too (and encouraged as a best practice; you should prefer classes over anonymous structures).

### Selection

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the user selects a different item.

```haxe
comboBox.addEventListener(Event.CHANGE, comboBox_changeHandler);
```

Check for the new value of the [`selectedItem`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#selectedItem) property in the listener.

```haxe
function comboBox_changeHandler(event:Event):Void {
    var comboBox = cast(event.currentTarget, ComboBox);
    trace("ComboBox selectedItem change: " + comboBox.selectedItem.text);
}
```

Alternatively, the value of the [`selectedIndex`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#selectedIndex) property references the index of the items in the combo box's collection, in the order that they were added.

```haxe
function comboBox_changeHandler(event:Event):Void {
    var comboBox = cast(event.currentTarget, ComboBox);
    trace("ComboBox selectedIndex change: " + comboBox.selectedIndex);
}
```

## Add or remove items

To add a new item at the end, pass an object to the data provider's [`add()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#add) method.

```haxe
var newItem = { text: "New Item" };
comboBox.dataProvider.add(newItem);
```

To add a new item at a specific position, pass an object to the data provider's [`addAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#addAt) method.

```haxe
var newItem = { text: "First Item" };
comboBox.dataProvider.addAt(newItem, 0);
```

In the example above, a new item is added to the beginning.

Similarly, to remove an item, call [`remove()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#remove) or [`removeAt()`](https://api.feathersui.com/current/feathers/data/IFlatCollection.html#removeAt) on the collection.

```haxe
comboBox.dataProvider.removeAt(0);
```

## Styles

A number of styles may be customized on the sub-components of a [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) component, including styles on the button, the text input, and the list view.

### Button

The button in a [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) component is of type [`Button`](./button.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html).

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the button.

#### Style button globally

Use the [`ComboBox.CHILD_VARIANT_BUTTON`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#CHILD_VARIANT_BUTTON) constant in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    ComboBox.CHILD_VARIANT_BUTTON,
    setComboBox_Button_Styles);
```

The function should use the following signature.

```haxe
function setComboBox_Button_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the button in a specific `ComboBox`

The [`buttonFactory`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#buttonFactory) property may be used to customize the creation of an individual button.

```haxe
comboBox.buttonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### TextInput

The text input in a [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) component is of type [`TextInput`](./text-input.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html).

> See [How to use the `TextInput` component](./text-input.md#styles) for complete details about which styles are available for the text input.

#### Style text input globally

Use the [`ComboBox.CHILD_VARIANT_TEXT_INPUT`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#CHILD_VARIANT_TEXT_INPUT) constant in a [theme](./themes.md) to provide a function that globally styles the text inputs in all [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) components.

```haxe
styleProvider.setStyleFunction(
    TextInput,
    ComboBox.CHILD_VARIANT_TEXT_INPUT,
    setComboBox_TextInput_Styles);
```

The function should use the following signature.

```haxe
function setComboBox_TextInput_Styles(button:TextInput):Void {
    // ... set styles here
}
```

#### Style the text input in a specific `ComboBox`

The [`textInputFactory`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#textInputFactory) property may be used to customize the creation of an individual text input.

```haxe
comboBox.textInputFactory = () -> {
    var input = new TextInput();
    // ... set styles here
    return input;
};
```

### ListView

The list view in a [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) component is of type [`ListView`](./list-view.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html).

> See [How to use the `ListView` component](./list-view.md#styles) for complete details about which styles are available for the list view.

#### Style list view globally

Use the [`ComboBox.CHILD_VARIANT_LIST_VIEW`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#CHILD_VARIANT_LIST_VIEW) constant in a [theme](./themes.md) to provide a function that globally styles the list views in all [`ComboBox`](https://api.feathersui.com/current/feathers/controls/ComboBox.html) components.

```haxe
styleProvider.setStyleFunction(
    ListView,
    ComboBox.CHILD_VARIANT_LIST_VIEW,
    setComboBox_ListView_Styles);
```

The function should use the following signature.

```haxe
function setComboBox_ListView_Styles(button:ListView):Void {
    // ... set styles here
}
```

#### Style the list view in a specific `ComboBox`

The [`listViewFactory`](https://api.feathersui.com/current/feathers/controls/ComboBox.html#listViewFactory) property may be used to customize the creation of an individual list view.

```haxe
comboBox.listViewFactory = () -> {
    var listView = new ListView();
    // ... set styles here
    return listView;
};
```

## Related Links

- [`feathers.controls.ComboBox` API Documentation](https://api.feathersui.com/current/feathers/controls/ComboBox.html)
