---
title: How to use the Alert component
sidebar_label: Alert
---

The [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) class renders a window as a pop-up above all other content. Typically, an alert displays a header with a title, followed by some multiline text and an optional icon. A set of buttons to select different actions appears at the bottom of the alert.

<figure>
<iframe src="/learn/haxe-openfl/samples/alert.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Alert.html"><code>Alert</code></a> component</figcaption>
</figure>

## The Basics

Creating an [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) works a bit differently than other components. Start by creating a [button](./button.md) and listen for when it is triggered.

```hx
var button = new Button();
button.text = "Click Me";
button.addEventListener(TriggerEvent.TRIGGER, button_triggerHandler);
this.addChild(button);
```

The alert will be shown when the button is clicked or tapped. In the listener, rather than calling the [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) constructor, call the static function [`Alert.show()`](https://api.feathersui.com/current/feathers/controls/Alert.html#show) instead.

```hx
function button_triggerHandler(event:TriggerEvent):Void
{
    Alert.show("I have something important to say",
        "Warning",
        ["OK", "Cancel"],
        (state:ButtonBarItemState) -> {
          trace("Alert item trigger: " + event.state.text);
        }
    );
}
```

Three arguments are required, but the four are usually included. The first argument is the alert's primary message. The second argument is the title displayed in the alert's header. Third, the alert needs an array of strings to display as button text. Internally, the alert uses a [`ButtonBar`](./button-bar.md) to display its buttons. The fourth and final argument is a function that is called when one of the buttons is triggered. It receives a [`ButtonBarItemState`](https://api.feathersui.com/current/feathers/data/ButtonBarItemState.html) object that may be used to determine which button was triggered.

## Styles

A number of styles may be customized on the sub-components of an [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) component, including an optional background skin, and styles on the message label, the header, the button bar, and the scroll bars.

### Background skin

Optionally give the alert a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
alert.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The alert automatically calculates its preferred size based on the initial dimensions of its background skin (accounting for some other factors too, like header and footer, and the size and position of children), so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

The appearance of the alert's border or fill may be customized to change when the alert is [disabled](https://api.feathersui.com/current/feathers/core/IUIControl.html#enabled). In the next example, setting the skin's [`disabledFill`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledFill) method makes it switch to a different fill when the alert is disabled.

```hx
skin.disabledFill = SolidColor(0xffcccc);
```

Similarly, use the skin's [`disabledBorder`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html#disabledBorder) property to change the border when disabled.

```hx
skin.disabledBorder = SolidColor(2.0, 0x999999);
```

In the examples above, the alert uses the same [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) for all states, and that skin listens for changes to the alert's current state. Alternatively, the alert's [`disabledBackgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#disabledBackgroundSkin) method allows the alert to display a completely different display object when it is disabled.

```hx
var defaultSkin = new RectangleSkin();
// ... set border, fill, width, and height
alert.backgroundSkin = defaultSkin;

var disabledSkin = new RectangleSkin();
// ... set border, fill, width, and height
alert.disabledBackgroundSkin = disabledSkin;
```

In the example above, the alert will have a separate skins when enabled and disabled.

### Message Label

The message label in an [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) component is of type [`Label`](./label.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html).

> See [How to use the `Label` component](./label.md#styles) for complete details about which styles are available for the message label.

#### Style message label globally

Use the [`CHILD_VARIANT_MESSAGE_LABEL`](https://api.feathersui.com/current/feathers/controls/Alert.html#CHILD_VARIANT_MESSAGE_LABEL) constant in a [theme](./themes.md) to provide a function that globally styles the message labels in all [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) components.

```hx
styleProvider.setStyleFunction(
    Label,
    Alert.CHILD_VARIANT_MESSAGE_LABEL,
    setAlert_MessageLabel_Styles);
```

The function should use the following signature.

```hx
function setAlert_MessageLabel_Styles(label:Label):Void {
    // ... set styles here
});
```

#### Style the message label in a specific `Alert`

The [`messageLabelFactory`](https://api.feathersui.com/current/feathers/controls/Alert.html#messageLabelFactory) property may be used to customize the creation of an individual message label.

```hx
alert.messageLabelFactory = () -> {
    var message = new Label();
    // ... set styles here
    return message;
};
```

### Header

The header in an [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) component is of type [`Header`](./button-bar.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html).

> See [How to use the `Header` component](./header.md#styles) for complete details about which styles are available for the header.

#### Style header globally

Use the [`CHILD_VARIANT_HEADER`](https://api.feathersui.com/current/feathers/controls/Alert.html#CHILD_VARIANT_HEADER) constant in a [theme](./themes.md) to provide a function that globally styles the headers in all [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) components.

```hx
styleProvider.setStyleFunction(
    Header,
    Alert.CHILD_VARIANT_HEADER,
    setAlert_Header_Styles);
```

The function should use the following signature.

```hx
function setAlert_Header_Styles(header:Header):Void {
    // ... set styles here
});
```

#### Style the header in a specific `Alert`

The [`headerFactory`](https://api.feathersui.com/current/feathers/controls/Alert.html#headerFactory) property may be used to customize the creation of an individual header.

```hx
alert.headerFactory = () -> {
    var header = new Header();
    // ... set styles here
    return header;
};
```

### ButtonBar

The button bar in an [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) component is of type [`ButtonBar`](./button-bar.md). Its appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html).

> See [How to use the `ButtonBar` component](./button-bar.md#styles) for complete details about which styles are available for the button bar.

#### Style button bar globally

Use the [`CHILD_VARIANT_BUTTON_BAR`](https://api.feathersui.com/current/feathers/controls/Alert.html#CHILD_VARIANT_BUTTON_BAR) constant in a [theme](./themes.md) to provide a function that globally styles the buton bars in all [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) components.

```hx
styleProvider.setStyleFunction(
    ButtonBar,
    Alert.CHILD_VARIANT_BUTTON_BAR,
    setAlert_ButtonBar_Styles);
```

The function should use the following signature.

```hx
function setAlert_ButtonBar_Styles(buttonBar:ButtonBar):Void {
    // ... set styles here
});
```

#### Style the button bar in a specific `Alert`

The [`buttonBarFactory`](https://api.feathersui.com/current/feathers/controls/Alert.html#buttonBarFactory) property may be used to customize the creation of an individual button bar.

```hx
alert.buttonBarFactory = () -> {
    var buttonBar = new ButtonBar();
    // ... set styles here
    return buttonBar;
};
```

### Scroll bars

The scroll bars in an [`Alert`](https://api.feathersui.com/current/feathers/controls/Alert.html) component are of type [`HScrollBar` and `VScrollBar`](./scroll-bar.md). Their appearance may be customized globally in a [theme](./themes.md), or they may be customized outside of a theme on an specific, individual alert.

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

#### Style scroll bars in a specific `Alert`

The [`scrollBarXFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarXFactory) and [`scrollBarYFactory`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollBarYFactory) properties may be used to customize the creation of an individual alert's scroll bars.

```hx
alert.scrollBarXFactory = () -> {
    var scrollBar = new HScrollBar();
    // ... set styles here
    return scrollBar;
};

alert.scrollBarYFactory = () -> {
    var scrollBar = new VScrollBar();
    // ... set styles here
    return scrollBar;
};
```

## Related Links

- [`feathers.controls.Alert` API Reference](https://api.feathersui.com/current/feathers/controls/Alert.html)
