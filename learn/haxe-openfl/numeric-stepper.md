---
title: How to use the NumericStepper component
layout: "docs.html"
sidebarTitle: NumericStepper
---

The [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) component allow a user to select a numeric value in a specific range. The value may be changed by pressing the increment or decrement [buttons](./button.md), or by typing a value into a [text input](./text-input.md).

<figure>
<iframe src="/learn/haxe-openfl/samples/numeric-stepper.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/NumericStepper.html"><code>NumericStepper</code></a> component</figcaption>
</figure>

## The Basics

First, let's create a [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) control, set up its range of values, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var stepper = new NumericStepper();
stepper.minimum = 0.0;
stepper.maximum = 100.0;
stepper.value = 50.0;
addChild(stepper);
```

The [`value`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#value) property indicates the current value of the stepper, while the [`minimum`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#minimum) and [`maximum`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#maximum) properties establish a range of possible values. We can further control the stepper's behavior with the [`step`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#step) property:

```haxe
stepper.step = 1;
```

The [`step`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#step) property controls how the numeric stepper's value is rounded as the user interacts with it. If we set the stepper's [`step`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#step) to `1.0`, as we do above, the stepper will increment on whole numbers only, and it cannot have a value like `4.5`, for instance.

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the [`value`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#value) property changes:

```haxe
stepper.addEventListener(Event.CHANGE, stepper_changeHandler);
```

The listener might look something like this:

```haxe
function stepper_changeHandler(event:Event):Void {
    var stepper = cast(event.currentTarget, NumericStepper);
    trace("stepper.value change: " + stepper.value);
}
```

## Styles

A number of styles may be customized on the sub-components of a [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) component, including styles on the decrement and increment buttons and the text input.

### Layout

A couple of styles are available for customizing the position of the decrement and increment buttons, relative to the text input.

> To see a live demonstration of button layouts with [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html), open the [_numeric-stepper-button-layouts_ sample](https://feathersui.com/samples/haxe-openfl/numeric-stepper-button-layouts/) in your web browser. ([Source Code](https://github.com/feathersui/feathersui-openfl/tree/v1.2.0/samples/numeric-stepper-button-layouts/))


Set the [`buttonDirection`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#buttonDirection) property to specify if the buttons should be positioned vertically or horizontally.

```haxe
stepper.buttonDirection = VERTICAL;
```


Set the [`textInputPosition`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#textInputPosition) property to specify how the text input should be placed, relative to the buttons.

```haxe
stepper.textInputPosition = LEFT;
```

### Decrement and increment buttons

The decrement and increment buttons in a [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) component are of type [`Button`](./button.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html).

> See [How to use the `Button` component](./button.md#styles) for complete details about which styles are available for the button.

#### Style the decement and increment buttons globally

Use the [`NumericStepper.CHILD_VARIANT_DECREMENT_BUTTON`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#CHILD_VARIANT_DECREMENT_BUTTON) and [`NumericStepper.CHILD_VARIANT_INCREMENT_BUTTON`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#CHILD_VARIANT_INCREMENT_BUTTON) constants in a [theme](./themes.md) to provide a function that globally styles the buttons in all [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) components.

```haxe
styleProvider.setStyleFunction(
    Button,
    NumericStepper.CHILD_VARIANT_DECREMENT_BUTTON,
    setNumericStepper_DecrementButton_Styles);

styleProvider.setStyleFunction(
    Button,
    NumericStepper.CHILD_VARIANT_INCREMENT_BUTTON,
    setNumericStepper_IncrementButton_Styles);
```

The functions should use the following signature.

```haxe
function setNumericStepper_DecrementButton_Styles(button:Button):Void {
    // ... set styles here
}

function setNumericStepper_IncrementButton_Styles(button:Button):Void {
    // ... set styles here
}
```

#### Style the decrement and increment buttons in a specific `NumericStepper`

The [`decrementButtonFactory`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#decrementButtonFactory) and [`incrementButtonFactory`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#incrementButtonFactory) properties may be used to customize the creation of an individual button.

```haxe
stepper.decrementButtonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};

stepper.incrementButtonFactory = () -> {
    var button = new Button();
    // ... set styles here
    return button;
};
```

### TextInput

The text input in a [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) component is of type [`TextInput`](./text-input.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html).

> See [How to use the `TextInput` component](./text-input.md#styles) for complete details about which styles are available for the text input.

#### Style text input globally

Use the [`NumericStepper.CHILD_VARIANT_TEXT_INPUT`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#CHILD_VARIANT_TEXT_INPUT) constant in a [theme](./themes.md) to provide a function that globally styles the text inputs in all [`NumericStepper`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html) components.

```haxe
styleProvider.setStyleFunction(
    TextInput,
    NumericStepper.CHILD_VARIANT_TEXT_INPUT,
    setNumericStepper_TextInput_Styles);
```

The function should use the following signature.

```haxe
function setNumericStepper_TextInput_Styles(textInput:TextInput):Void {
    // ... set styles here
}
```

#### Style the text input in a specific `NumericStepper`

The [`textInputFactory`](https://api.feathersui.com/current/feathers/controls/NumericStepper.html#textInputFactory) property may be used to customize the creation of an individual text input.

```haxe
stepper.textInputFactory = () -> {
    var textInput = new TextInput();
    // ... set styles here
    return textInput;
};
```

## Related Links

- [`feathers.controls.NumericStepper` API Documentation](https://api.feathersui.com/current/feathers/controls/NumericStepper.html)
- [Sample: NumericStepper Button Layouts](https://github.com/feathersui/feathersui-openfl/tree/v1.2.0/samples/numeric-stepper-button-layouts/)