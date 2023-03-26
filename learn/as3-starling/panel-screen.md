---
title: How to use the PanelScreen component (Starling version)
layout: "docs.html"
sidebarTitle: PanelScreen
---

The [`PanelScreen`](/api-reference/feathers/controls/PanelScreen.html) component is meant to be a base class for custom screens to be displayed by [`StackScreenNavigator`](./stack-screen-navigator.md) and [`ScreenNavigator`](./screen-navigator.md). `PanelScreen` is based on the [`Panel`](./panel.md) component, and it provides an scrolling, a header and optional footer, and optional layout.

- [The Basics](#the-basics)

- [Hardware Key Callbacks](#hardware-key-callbacks)

- [Transition Events](#transition-events)

- [Screen ID](#screen-id)

- [Skinning a `PanelScreen`](#skinning-a-panelscreen)

- [Customize scrolling behavior](#customize-scrolling-behavior)

## The Basics

Just like [`Panel`](./panel.md), you can add children and use layouts. Typically, you would override `initialize()` in a subclass of `PanelScreen` and add children there:

```actionscript
protected function initialize():void
{
	// never forget to call this!
	super.initialize();

	//set the header title
	this.title = "My Quads";

	// use a layout
	var layout:HorizontalLayout = new HorizontalLayout();
	layout.gap = 10;
	this.layout = layout;

	// add children
	for(var i:int = 0; i < 5; i++)
	{
	    var quad:Quad = new Quad( 100, 100, 0xff0000 );
	    this.addChild( quad );
	}
}
```

## Hardware Key Callbacks

Some devices, such as Android phones and tablets, have hardware keys. These may include a back button, a search button, and a menu button. The `PanelScreen` class provides a way to provide callbacks for when each of these keys is pressed. These are shortcuts to avoid needing to listen to the keyboard events manually and prevent the default behavior.

Screen provides [`backButtonHandler`](/api-reference/feathers/controls/PanelScreen.html#backButtonHandler), [`menuButtonHandler`](/api-reference/feathers/controls/PanelScreen.html#menuButtonHandler), and [`searchButtonHandler`](/api-reference/feathers/controls/PanelScreen.html#searchButtonHandler).

```actionscript
this.backButtonHandler = function():void
{
    trace( "the back button has been pressed." );
}
```

## Transition Events

A `PanelScreen` dispatches a number of events when the screen navigator shows and hides it with a [transition](./transitions.md). To avoid long delays and to keep the transition animation smooth, it's often a good idea to postpone certain actions during initialization until after the transition has completed. We can listen for these events to know when to continue initializing the screen.

When the screen is shown by the screen navigator, the screen dispatches [`FeathersEventType.TRANSITION_IN_START`](/api-reference/feathers/controls/Screen.html#event:transitionInStart) at the beginning of a transition, and it dispatches [`FeathersEventType.TRANSITION_IN_COMPLETE`](/api-reference/feathers/controls/Screen.html#event:transitionInComplete) when the transition has finished. Similarly, when the screen navigator shows a different screen and the active screen is hidden, we can listen for [`FeathersEventType.TRANSITION_OUT_START`](/api-reference/feathers/controls/Screen.html#event:transitionOutStart) and [`FeathersEventType.TRANSITION_OUT_COMPLETE`](/api-reference/feathers/controls/Screen.html#event:transitionOutComplete).

Let's listen for `FeathersEventType.TRANSITION_IN_COMPLETE`:

```actionscript
this.addEventListener( FeathersEventType.TRANSITION_IN_COMPLETE, transitionInCompleteHandler );
```

The event listener might look like this:

```actionscript
private function transitionInCompleteHandler( event:Event ):void
{
    // do something after the screen transitions in
}
```

## Screen ID

The [`screenID`](/api-reference/feathers/controls/PanelScreen.html#screenID) property refers to the string that the screen navigator uses to identify the current screen when calling functions like [`pushScreen()`](</api-reference/feathers/controls/StackScreenNavigator.html#pushScreen()>) on a `StackScreenNavigator` or [`showScreen()`](</api-reference/feathers/controls/ScreenNavigator.html#showScreen()>) on a `ScreenNavigator`.

## Accessing the screen navigator

The [`owner`](/api-reference/feathers/controls/PanelScreen.html#owner) property provides access to the `StackScreenNavigator` or `ScreenNavigator` that is currently displaying the screen.

## Skinning a `PanelScreen`

For full details about what skin and style properties are available, see the [`PanelScreen` API reference](/api-reference/feathers/controls/PanelScreen.html).

> As mentioned above, `PanelScreen` is a subclass of `Panel`. For more detailed information about the skinning options available to `PanelScreen`, see [How to use the `Panel` component](./panel.md).

### Skinning the Header

This section only explains how to access the header sub-component. The header may be any type of Feathers control. Please read the appropriate documentation for full details about the skinning properties that are available on the component that is used for the header.

> For the default header, please read [How to use the `Header` component](./header.md) for full details about the skinning properties that are available on `Header` components.

#### With a Theme

If you're creating a [theme](./themes.md), you can target the [`PanelScreen.DEFAULT_CHILD_STYLE_NAME_HEADER`](/api-reference/feathers/controls/PanelScreen.html#DEFAULT_CHILD_STYLE_NAME_HEADER) style name.

```actionscript
getStyleProviderForClass( Header )
    .setFunctionForStyleName( PanelScreen.DEFAULT_CHILD_STYLE_NAME_HEADER, setPanelScreenHeaderStyles );
```

The styling function might look like this:

```actionscript
private function setPanelScreenHeaderStyles( header:Header ):void
{
    header.fontStyles = new TextFormat( "Helvetica", 20, 0xcc0000 );
}
```

You can override the default style name to use a different one in your theme, if you prefer:

```actionscript
screen.customHeaderStyleName = "custom-header";
```

You can set the function for the [`customHeaderStyleName`](/api-reference/feathers/controls/Panel.html#customHeaderStyleName) like this:

```actionscript
getStyleProviderForClass( Header )
    .setFunctionForStyleName( "custom-header", setPanelScreenCustomHeaderStyles );
```

#### Without a Theme

If you are not using a theme, you can use [`headerFactory`](/api-reference/feathers/controls/Panel.html#headerFactory) to provide skins for the panel's header:

```actionscript
screen.headerFactory = function():Header
{
    var header:Header = new Header();

    //skin the header here, if not using a theme
    header.fontStyles = new TextFormat( "Helvetica", 20, 0xcc0000 );

    return header;
}
```

### Skinning the Footer

This section only explains how to access the footer sub-component. The footer may be any type of Feathers control. Please read the appropriate documentation for full details about the skinning properties that are available on the component that is used for the footer.

#### With a Theme

If you're creating a [theme](./themes.md), you can target the [`PanelScreen.DEFAULT_CHILD_STYLE_NAME_FOOTER`](/api-reference/feathers/controls/PanelScreen.html#DEFAULT_CHILD_STYLE_NAME_FOOTER) style name. In the following example, we'll assume that the footer is a `LayoutGroup`, but it could be any type of Feathers component.

```actionscript
getStyleProviderForClass( LayoutGroup )
    .setFunctionForStyleName( PanelScreen.DEFAULT_CHILD_STYLE_NAME_FOOTER, setPanelScreenFooterStyles );
```

The styling function might look like this:

```actionscript
private function setPanelScreenFooterStyles( footer:LayoutGroup ):void
{
    var skin:Image = new Image( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    footer.backgroundSkin = skin;
}
```

You can override the default style name to use a different one in your theme, if you prefer:

```actionscript
this.customFooterStyleName = "custom-footer";
```

You can set the function for the [`customFooterStyleName`](/api-reference/feathers/controls/Panel.html#customFooterStyleName) like this:

```actionscript
getStyleProviderForClass( LayoutGroup )
    .setFunctionForStyleName( "custom-footer", setPanelScreenCustomFooterStyles );
```

#### Without a Theme

If you are not using a theme, you can use [`footerFactory`](/api-reference/feathers/controls/Panel.html#footerFactory) to provide skins for the panel screen's footer:

```actionscript
screen.footerFactory = function():ScrollContainer
{
    var footer:LayoutGroup = new LayoutGroup();

    //skin the footer here, if not using a theme
    var skin:Image = new Image( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    footer.backgroundSkin = skin;

    return footer;
}
```

### Skinning the Scroll Bars

This section only explains how to access the horizontal scroll bar and vertical scroll bar sub-components. Please read [How to use the `ScrollBar` component](./scroll-bar.md) (or [`SimpleScrollBar`](./simple-scroll-bar.md)) for full details about the skinning properties that are available on scroll bar components.

#### With a Theme

If you're creating a [theme](./themes.md), you can target the [`Scroller.DEFAULT_CHILD_STYLE_NAME_HORIZONTAL_SCROLL_BAR`](/api-reference/feathers/controls/Scroller.html#DEFAULT_CHILD_STYLE_NAME_HORIZONTAL_SCROLL_BAR) style name for the horizontal scroll bar and the [`Scroller.DEFAULT_CHILD_STYLE_NAME_VERTICAL_SCROLL_BAR`](/api-reference/feathers/controls/Scroller.html#DEFAULT_CHILD_STYLE_NAME_VERTICAL_SCROLL_BAR) style name for the vertical scroll bar.

```actionscript
getStyleProviderForClass( ScrollBar )
    .setFunctionForStyleName( Scroller.DEFAULT_CHILD_STYLE_NAME_HORIZONTAL_SCROLL_BAR, setHorizontalScrollBarStyles );
getStyleProviderForClass( ScrollBar )
    .setFunctionForStyleName( Scroller.DEFAULT_CHILD_STYLE_NAME_VERTICAL_SCROLL_BAR, setVerticalScrollBarStyles );
```

The styling function for the horizontal scroll bar might look like this:

```actionscript
private function setHorizontalScrollBarStyles(scrollBar:ScrollBar):void
{
    scrollBar.trackLayoutMode = TrackLayoutMode.SINGLE;
}
```

You can override the default style names to use different ones in your theme, if you prefer:

```actionscript
screen.customHorizontalScrollBarStyleName = "custom-horizontal-scroll-bar";
screen.customVerticalScrollBarStyleName = "custom-vertical-scroll-bar";
```

You can set the function for the [`customHorizontalScrollBarStyleName`](/api-reference/feathers/controls/Scroller.html#customHorizontalScrollBarStyleName) and the [`customVerticalScrollBarStyleName`](/api-reference/feathers/controls/Scroller.html#customVerticalScrollBarStyleName) like this:

```actionscript
getStyleProviderForClass( ScrollBar )
    .setFunctionForStyleName( "custom-horizontal-scroll-bar", setCustomHorizontalScrollBarStyles );
getStyleProviderForClass( ScrollBar )
    .setFunctionForStyleName( "custom-vertical-scroll-bar", setCustomVerticalScrollBarStyles,  );
```

#### Without a Theme

If you are not using a theme, you can use [`horizontalScrollBarFactory`](/api-reference/feathers/controls/Scroller.html#horizontalScrollBarFactory) and [`verticalScrollBarFactory`](/api-reference/feathers/controls/Scroller.html#verticalScrollBarFactory) to provide skins for the panel's scroll bars:

```actionscript
screen.horizontalScrollBarFactory = function():ScrollBar
{
    var scrollBar:ScrollBar = new ScrollBar();

    //skin the scroll bar here, if not using a theme
    scrollBar.trackLayoutMode = TrackLayoutMode.SINGLE;

    return scrollBar;
}
```

## Customize scrolling behavior

A number of properties are available to customize scrolling behavior and the scroll bars.

### Interaction Modes

Scrolling containers provide two main interaction modes, which can be changed using the [`interactionMode`](/api-reference/feathers/controls/Scroller.html#interactionMode) property.

By default, you can scroll using touch, just like you would on many mobile devices including smartphones and tablets. This mode allows you to grab the container anywhere within its bounds and drag it around to scroll. This mode is defined by the constant, [`ScrollInteractionMode.TOUCH`](/api-reference/feathers/controls/ScrollInteractionMode.html#TOUCH).

Alternatively, you can set `interactionMode` to [`ScrollInteractionMode.MOUSE`](/api-reference/feathers/controls/ScrollInteractionMode.html#MOUSE). This mode allows you to scroll using the horizontal or vertical scroll bar sub-components. You can also use the mouse wheel to scroll vertically.

Finally, you can set `interactionMode` to [`ScrollInteractionMode.TOUCH_AND_SCROLL_BARS`](/api-reference/feathers/controls/ScrollInteractionMode.html#TOUCH_AND_SCROLL_BARS). This mode allows you to scroll both by dragging the container's content and by using the scroll bars.

### Scroll Bar Display Mode

The [`scrollBarDisplayMode`](/api-reference/feathers/controls/Scroller.html#scrollBarDisplayMode) property controls how and when scroll bars are displayed. This value may be overridden by the scroll policy, as explained below.

The default value is [`ScrollBarDisplayMode.FLOAT`](/api-reference/feathers/controls/ScrollBarDisplayMode.html#FLOAT), which displays the scroll bars as an overlay above the view port's content, rather than affecting the size of the view port. When the scroll bars are floating, they fade out when the container is not actively scrolling. This is a familiar behavior for scroll bars in the touch interaction mode. In the mouse interaction mode, the scroll bars will appear when the mouse hovers over them and then disappear when the hover ends.

To completely hide the scroll bars, but still allow scrolling, you can set `scrollBarDisplayMode` to [`ScrollBarDisplayMode.NONE`](/api-reference/feathers/controls/ScrollBarDisplayMode.html#NONE).

If you want the scroll bars to always be visible outside of the content in a fixed position, you can set `scrollBarDisplayMode` to [`ScrollBarDisplayMode.FIXED`](/api-reference/feathers/controls/ScrollBarDisplayMode.html#FIXED). This is best for traditional desktop scrollable content.

Finally, you can set `scrollBarDisplayMode` to [`ScrollBarDisplayMode.FIXED_FLOAT`](/api-reference/feathers/controls/ScrollBarDisplayMode.html#FIXED_FLOAT) to display the scroll bar as an overlay above the view port's content, but it does not fade away.

### Scroll Policies

The two previous properties control how scrolling works. The [`horizontalScrollPolicy`](/api-reference/feathers/controls/Scroller.html#horizontalScrollPolicy) and [`verticalScrollPolicy`](/api-reference/feathers/controls/Scroller.html#verticalScrollPolicy) properties control whether scrolling is enabled or not.

The default scroll policy for both directions is [`ScrollPolicy.AUTO`](/api-reference/feathers/controls/ScrollPolicy.html#AUTO). If the content's width is greater than the view port's width, the panel may scroll horizontally (same for height and vertical scrolling). If not, then the panel will not scroll in that direction. In addition to the `scrollBarDisplayMode`, this can affect whether the scroll bar is visible or not.

You can completely disable scrolling in either direction, set the scroll policy to [`ScrollPolicy.OFF`](/api-reference/feathers/controls/ScrollPolicy.html#OFF). The scroll bar will not be visible, and the panel won't scroll, even if the content is larger than the view port.

Finally, you can ensure that scrolling is always enabled by setting the scroll policy to [`ScrollPolicy.ON`](/api-reference/feathers/controls/ScrollPolicy.html#ON). If combined with `hasElasticEdges` in the touch interaction mode, it will create a playful edge that always bounces back, even when the content is smaller than the view port. If using the mouse interaction mode, the scroll bar may always be visible under the same circumstances, though it may be disabled if the content is smaller than the view port.

### Paging

Set the [`snapToPages`](/api-reference/feathers/controls/Scroller.html#snapToPages) property to true to make the scroll position snap to the nearest full page. A page is defined as a multiple of the view ports width or height. If the view port is 100 pixels wide, then the first horizontal page starts at 0 pixels, the second at 100, and the third at 200.

The [`pageWidth`](/api-reference/feathers/controls/Scroller.html#pageWidth) and [`pageHeight`](/api-reference/feathers/controls/Scroller.html#pageHeight) properties may be used to customize the size of a page. Rather than using the full view port width or height, any pixel value may be specified for page snapping.

## Related Links

- [`feathers.controls.PanelScreen` API Documentation](/api-reference/feathers/controls/PanelScreen.html)

- [How to use the `Panel` component](./panel.md)
