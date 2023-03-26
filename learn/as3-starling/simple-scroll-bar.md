---
title: How to use the SimpleScrollBar component (Starling version)
layout: "docs.html"
sidebarTitle: SimpleScrollBar
---

The [`SimpleScrollBar`](/api-reference/feathers/controls/SimpleScrollBar.html) component selects a numeric value in a specific range by dragging a thumb along an invisible track. A simple scroll bar may be displayed in either a horizontal or a vertical direction. This component is designed to be used with components that support scrolling, like [`ScrollContainer`](./scroll-container.md) and [`List`](./list.md).

> Additionally, Feathers offers a [`ScrollBar`](./scroll-bar.md) component. `ScrollBar` is a desktop-style scroll bar that offers a thumb, track, and two buttons for adjusting the value by a small step.

- [The Basics](#the-basics)

- [Skinning a `SimpleScrollBar`](#skinning-a-simplescrollbar)

## The Basics

You can use the `SimpleScrollBar` with a class like `ScrollContainer` or `List` by instantiating it in the [`horizontalScrollBarFactory`](/api-reference/feathers/controls/Scroller.html#horizontalScrollBarFactory) or the [`verticalScrollBarFactory`](/api-reference/feathers/controls/Scroller.html#verticalScrollBarFactory).

```actionscript
list.horizontalScrollBarFactory = function():IScrollBar
{
    return new SimpleScrollBar();
}
```

The container will automatically handle setting properties like [`direction`](/api-reference/feathers/controls/SimpleScrollBar.html#direction), [`minimum`](/api-reference/feathers/controls/SimpleScrollBar.html#minimum), [`maximum`](/api-reference/feathers/controls/SimpleScrollBar.html#maximum), and [`step`](/api-reference/feathers/controls/SimpleScrollBar.html#step), and it will automatically listen for [`Event.CHANGE`](/api-reference/feathers/controls/SimpleScrollBar.html#event:change) to know when the [`value`](/api-reference/feathers/controls/SimpleScrollBar.html#value) property changes.

> If, for some reason, you want to use a `SimpleScrollBar` outside of a container, the values like `minimum`, `maximum`, `step` and `value` that are normally handled by the container work similarly to the same properties on a [`Slider`](./slider.md) component.

## Skinning a `SimpleScrollBar`

The `SimpleScrollBar` has one part that may be skinned, its thumb. A SimpleScrollBar's track is invisible. That's where the "simple" part comes from. For full details about what skin and style properties are available, see the [`SimpleScrollBar` API reference](/api-reference/feathers/controls/SimpleScrollBar.html).

### Skinning the Thumb

This section only explains how to access the thumb sub-component. Please read [How to use the `Button` component](./button.md) for full details about the skinning properties that are available on `Button` components.

#### With a Theme

If you're creating a [theme](./themes.md), you can target the [`SimpleScrollBar.DEFAULT_CHILD_STYLE_NAME_THUMB`](/api-reference/feathers/controls/SimpleScrollBar.html#DEFAULT_CHILD_STYLE_NAME_THUMB) style name.

```actionscript
getStyleProviderForClass( Button )
    .setFunctionForStyleName( SimpleScrollBar.DEFAULT_CHILD_STYLE_NAME_THUMB, setScrollBarThumbStyles );
```

The styling function might look like this:

```actionscript
private function setScrollBarThumbStyles( thumb:Button ):void
{
    var skin:ImageSkin = new ImageSkin( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    thumb.defaultSkin = skin;
}
```

You can override the default style name to use a different one in your theme, if you prefer:

```actionscript
scrollBar.customThumbStyleName = "custom-thumb";
```

You can set the function for the [`customThumbStyleName`](/api-reference/feathers/controls/SimpleScrollBar.html#customThumbStyleName) like this:

```actionscript
getStyleProviderForClass( Button )
    .setFunctionForStyleName( "custom-thumb", setScrollBarCustomThumbStyles );
```

#### Without a Theme

If you are not using a theme, you can use [`thumbFactory`](/api-reference/feathers/controls/SimpleScrollBar.html#thumbFactory) to provide skins for the scroll bar's thumb:

```actionscript
scrollBar.thumbFactory = function():Button
{
    var button:Button = new Button();

    //skin the thumb here, if not using a theme
    var skin:ImageSkin = new ImageSkin( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    thumb.defaultSkin = skin;

    return button;
}
```

## Related Links

- [`feathers.controls.SimpleScrollBar` API Documentation](/api-reference/feathers/controls/SimpleScrollBar.html)
