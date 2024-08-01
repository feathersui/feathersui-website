---
title: How to use the Collapsible component
layout: "docs.html"
sidebarTitle: Collapsible
---

The [`Collapsible`](https://api.feathersui.com/current/feathers/controls/Collapsible.html) class is a container that displays a single display object that may be collapsed and expanded by clicking or tapping a header that appears above it.

<figure>
<iframe src="/learn/haxe-openfl/samples/collapsible.html" width="100%" height="130"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/Collapsible.html"><code>Collapsible</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Start by creating a [`Collapsible`](https://api.feathersui.com/current/feathers/controls/Collapsible.html) control, giving it some text to display in the header, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var collapsible = new Collapsible();
collapsible.text = "Collapsible";
addChild(collapsible);
```

The collapsible's [`content`](https://api.feathersui.com/current/feathers/controls/Collapsible.html#content) property is used to add a child to the container:

```haxe
var content = new LayoutGroup();
var contentLayout = new VerticalLayout();
contentLayout.setPadding(50.0);
contentLayout.horizontalAlign = CENTER;
contentLayout.verticalAlign = MIDDLE;
content.layout = contentLayout;
content.addChild(new Label("The Content"));
collapsible.content = content;
```

## Open or close the content

The content may be opened and closed by the user by clicking the header.

If you want to programmatically open or close the content, set the [`opened`](https://api.feathersui.com/current/feathers/controls/Collapsible.html#opened) property.

```haxe
collapsible.opened = true;
```

## Styles

A number of styles may be customized on the header sub-component of a [`Collapsible`](https://api.feathersui.com/current/feathers/controls/Collapsible.html) component.

### Header

The default header sub-component in a [`Collapsible`](https://api.feathersui.com/current/feathers/controls/Collapsible.html) component is of type [`ToggleButton`](./toggle-button.md). However, the header is allowed to be any OpenFL dispaly object.

The header's appearance may be customized globally in a [theme](./themes.md), or it may be customized outside of a theme on an specific, individual [`Collapsible`](https://api.feathersui.com/current/feathers/controls/Collapsible.html).

> See [How to use the `ToggleButton` component](./toggle-button.md#styles) for complete details about which styles are available for a toggle button header. If you use a different UI component as the header, refer the the appropriate styling documentation for that UI component instead.

#### Style the header globally

Use the [`Collapsible.CHILD_VARIANT_HEADER`](https://api.feathersui.com/current/feathers/controls/Collapsible.html#CHILD_VARIANT_HEADER) constant in a [theme](./themes.md) to provide a function that globally styles the header in all [`Collapsible`](https://api.feathersui.com/current/feathers/controls/Collapsible.html) components.

```haxe
styleProvider.setStyleFunction(
    ToggleButton,
    Collapsible.CHILD_VARIANT_HEADER,
    setCollapsible_Header_Styles);
```

The function should use the following signature.

```haxe
function setCollapsible_Header_Styles(button:ToggleButton):Void {
    // ... set styles here
}
```

#### Style the header in a specific `Collapsible`

The [`headerFactory`](https://api.feathersui.com/current/feathers/controls/Collapsible.html#headerFactory) property may be used to customize the creation of an individual button.

```haxe
collapsible.headerFactory = () -> {
    var button = new ToggleButton();
    // ... set styles here
    return button;
};
```

## Related Links

- [`feathers.controls.Collapsible` API Documentation](https://api.feathersui.com/current/feathers/controls/Collapsible.html)
